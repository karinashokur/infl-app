import { Component, OnInit } from '@angular/core';
import {Apollo} from 'apollo-angular';
import {GETDATAFORINFLUENCERCARD, GETNONPROFITTYPEOFNONPROFIT, SEARCHQUERY} from '../../Apollo/queries';
import {HttpHeaders} from '@angular/common/http';
import {LocalstorageService} from '../../localstorage.service';
import {ActivatedRoute} from '@angular/router';
import {ApolloQueryResult} from 'apollo-client';
export class InfluencerCardQuery {
  data: {
    influencers: [{
      user: {
        id;
        influencer: {
          firstName,
          lastName,
          type_of_non_profit_organisations: [{
            name: string
          }],
          googleAuthToken,
          googlePhotoUrl,
          };
        };
      }];
  };
}
export class InfluencerCard {
  user: {
    id;
    influencer: {
      firstName,
      lastName,
      type_of_non_profit_organisations: [{
        name: string
      }],
      googleAuthToken,
      googlePhotoUrl,
    };
  };
}
class GetTypesOfNonProfitOrganisation {
  user: {
    non_profit: {
      type_of_non_profit_organisations: [{
        id
      }]
    }
  };
}
@Component({
  selector: 'app-non-profit',
  templateUrl: './non-profit.component.html',
  styleUrls: ['./non-profit.component.scss']
})
export class NonProfitComponent implements OnInit {
  constructor(private apollo: Apollo,
              private localstorageService: LocalstorageService,
              private route: ActivatedRoute) { }
  influencers: InfluencerCard[];
  searchQuery = '';
  nonProfitTypesOfNonProfitOrganisation: GetTypesOfNonProfitOrganisation;
  ngOnInit(): void {
    this.influencers = [];
    this.apollo.query({
      query: GETNONPROFITTYPEOFNONPROFIT,
      variables: {
        userId: this.localstorageService.getId()
      },
      context: {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.localstorageService.getJwtToken()),
      }
    }).toPromise().then((gt: ApolloQueryResult<GetTypesOfNonProfitOrganisation>) => {
      const nonProfitTypes: string[] = [];
      gt.data.user.non_profit.type_of_non_profit_organisations.forEach((np: {id: string}) => {
        nonProfitTypes.push(np.id);
      });
      console.log(nonProfitTypes);
      this.route.queryParams.subscribe(params => {
          console.log(params); 
          if (params.q) {
            this.searchQuery = params.q;
            console.log(this.searchQuery); 
          } else {
            this.searchQuery = '';
          }
          this.influencers = [];
          this.apollo.mutate({
            mutation: SEARCHQUERY,
            variables: {
              text: this.searchQuery,
              types: nonProfitTypes
            },
            context: {
              headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.localstorageService.getJwtToken()),
            }
          }).toPromise().then((data: InfluencerCardQuery) => {
            console.log(data);
            this.influencers = [...data.data.influencers];
          });
        });
    });
  }
}

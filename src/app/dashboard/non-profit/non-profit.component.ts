import { Component, OnInit } from '@angular/core';
import {Apollo} from 'apollo-angular';
import {GETDATAFORINFLUENCERCARD, SEARCHQUERY} from '../../Apollo/queries';
import {HttpHeaders} from '@angular/common/http';
import {LocalstorageService} from '../../localstorage.service';
import {ActivatedRoute} from '@angular/router';
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
    id;
    firstName;
    lastName;
    typeOfNonProfits: [{
      name: string
    }];
    googleAuthToken;
    googlePhotoUrl;
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
  ngOnInit(): void {
    this.influencers = [];
    this.route.queryParams
      .subscribe(params => {
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
            text: this.searchQuery
          },
          context: {
            headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.localstorageService.getJwtToken()),
          }
        }).toPromise().then((data: InfluencerCardQuery) => {
          this.influencers = [];
          data.data.influencers.forEach((val) => {
            console.log(val);
            this.influencers.push({
              id: val.user.id,
              firstName: val.user.influencer.firstName,
              lastName: val.user.influencer.lastName,
              typeOfNonProfits: Object.assign([], val.user.influencer.type_of_non_profit_organisations),
              googleAuthToken: val.user.influencer.googleAuthToken,
              googlePhotoUrl: val.user.influencer.googlePhotoUrl
            });
          });
        });
      });
  }
}

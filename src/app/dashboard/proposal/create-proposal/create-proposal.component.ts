import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, Validators} from '@angular/forms';
import {nonProfitCategories} from '../../../constants';
import {ActivatedRoute, Router} from '@angular/router';
import {CreateProposalService} from './create-proposal.service';
import {ToastrService} from 'ngx-toastr';
import {Apollo} from 'apollo-angular';
import {CREATEPROPOSALINFLUENCERDETAILS} from '../../../Apollo/queries';
import {HttpHeaders} from '@angular/common/http';
import {LocalstorageService} from '../../../localstorage.service';
import {ApolloQueryResult} from 'apollo-client';
class InfluencerDetails {
  user: {
    influencer: {
      firstName
      lastName
      googlePhotoUrl
    }
  };
}
@Component({
  selector: 'app-create-proposal',
  templateUrl: './create-proposal.component.html',
  styleUrls: ['./create-proposal.component.scss']
})
export class CreateProposalComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private createProposalService: CreateProposalService,
              private route: ActivatedRoute,
              private tostr: ToastrService,
              private apollo: Apollo,
              private localstorageService: LocalstorageService) { }
  proposalForm = this.formBuilder.group({
    campaignName: ['', Validators.required],
    campaignCategory: ['', Validators.required],
    campaignDescription: ['', Validators.required],
    campaignStartDate: [new Date()],
    campaignEndDate: [new Date()],
    proposalApprovalDate: [new Date()],
    targetPlatform: this.formBuilder.array([]),
    howShouldItLook: ['', Validators.required],
    callToAction: ['', Validators.required],
    interestInForProfit: ['', Validators.required],
    promotingCampaign: ['', Validators.required],
    sendOnlyToInfluencer: ['', Validators.required],
    offerTaxReceipt: ['', Validators.required],
    anyThingElse: ['', Validators.required]
  });
  campaignCategory = nonProfitCategories;
  influencerId;
  influencerDetails: InfluencerDetails;
  onCheckChange(e) {
    const checkArray: FormArray = this.proposalForm.get('targetPlatform') as FormArray;
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value === e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.influencerId = params.influencerId;
    });
    this.apollo.query({
      query: CREATEPROPOSALINFLUENCERDETAILS,
      variables: {
        id: this.influencerId
      },
      context: {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.localstorageService.getJwtToken()),
      }
    }).toPromise().then((data: ApolloQueryResult<InfluencerDetails>) => {
      this.influencerDetails = {...data.data};
    });
    console.log(this.influencerId);
  }
  onSubmit() {
    if (this.proposalForm.valid) {
      console.log(this.influencerId);
      this.createProposalService.createProposal(this.proposalForm.value, this.influencerId);
    } else {
      this.tostr.warning('Please be careful', 'All the fields are required');
    }
  }
}

import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-create-proposal',
  templateUrl: './create-proposal.component.html',
  styleUrls: ['./create-proposal.component.scss']
})
export class CreateProposalComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) { }
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
  campaignCategory = ['Auto & Vehicles', 'Comedy', 'Education', 'Entertainment', 'Fashion',
    'Film & Animation', 'Food & Beverage', 'Gaming', 'Health & Fitness', 'How To',
    'Music', 'News & Politics', 'Nonprofit & Activism', 'People & Blogs', 'Pets & Animals',
    'Science & Technology', 'Self Care & Beauty', 'Sports', 'Travel & Events'];
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
  }
  onSubmit() {
    console.log(this.proposalForm.value);
    console.log(this.proposalForm);
  }
}

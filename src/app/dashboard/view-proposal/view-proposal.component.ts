import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-view-proposal',
  templateUrl: './view-proposal.component.html',
  styleUrls: ['./view-proposal.component.scss']
})
export class ViewProposalComponent implements OnInit {
  constructor() { }
  proposal = {
    campaignName: 'Stop Climate Change',
    campaignCategory: 'Animals',
    campaignDescription: 'Our food choices can make a positive difference to people' +
      ' and nature – improving our own health, the health of others, ' +
      'and the health of the planet. Since Jamie is a former chef, we’re hoping' +
      ' to collaborate with ExJ to drive awareness to the Stop Climate Change ' +
      'campaign. Our goal is to work with ExJ on an “in the kitchen” video where she ' +
      'could make a vegan-friendly meal to promote this message about food choices and the' +
      ' impact it has on nature.',
    campaignStartDate: '08/01/20',
    campaignEndDate: '08/01/20',
    proposalApprovalDate: '08/01/20',
    campaignVisibility: [2],
    howShouldItLook: 'Ideally we would like to see a 3-4 minute video mentioning the campaign ' +
      'name and World Wildlife Fund 2x each. The video should be filmed in Jamie or Elijah’s ' +
      'personal kitchen to appear as organic and natural as possible.',
    callToAction: 'Almost every country in the world faces a serious challenge due to our' +
      ' eating habits. Whether the challenge is undernutrition or obesity, global development ' +
      'efforts in areas such as poverty and disease are under threat. But what we eat also threaten ' +
      'the climate, life on land and life below water. To make a difference, donate now to the Cloutvocate ' +
      'link featured in the description below.',
    sponsorshipIntegration: true,
    nonprofitOrganizationPromotion: true,
  };
  ngOnInit(): void {
  }
  isCheckBox(num: number) {
    return this.proposal.campaignVisibility.indexOf(num) !== -1;
  }
  onSubmit() {
  }
}

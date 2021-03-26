export class ViewProposal {
  proposal: {
    non_profit: {
      non_profit: {
        organisation
        firstName
        lastName
      }
    }
    influencer: {
      influencer: {
        firstName
        lastName
        googlePhotoUrl
      }
    }
    campaignName
    campaignDescription
    campaignStartDate
    campaignEndDate
    proposalApprovalDate
    proposal_visibilities: [{
      id
    }]
    howShouldItLookNonProfit
    callToActionNonProfit
    sponsorshipIntegration
    nonprofitOrganizationPromotion
    sendOnlyToInfluencers
    taxReceipt
    anyThingElseNonProfit
    statusSponsor: {
      id
    }
    statusInfluencer: {
      id
    }
    percentRevenueInfluencer
    anythingElseInfluencer
    budgetSponsor
    howShouldItLookSponsor
    callToActionSponsor
    anyThingElseSponsor
    statusInfluencerWithSponsor
    statusNonProfitWithSponsor
    isACampaign
    promotingCampaignSponsor
  };
}

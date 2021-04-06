export class ViewProposal {
  proposal: {
    non_profit: {
      id
      non_profit: {
        organisation
        firstName
        lastName
      }
    }
    influencer: {
      id
      influencer: {
        firstName
        lastName
        googlePhotoUrl
      }
    }
    sponsor: {
      id
      sponsor: {
        firstName
        lastName
        organisation
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
    statusInfluencerWithSponsor: {
      id
    }
    statusNonProfitWithSponsor: {
      id
    }
    isACampaign
    promotingCampaignSponsor
  };
}

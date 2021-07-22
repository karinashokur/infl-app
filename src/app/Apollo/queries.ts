import gql from 'graphql-tag';
export const REGISTER_QUERY = gql`
    mutation register($email: String!, $password: String!) {
      register(input: {
        email: $email
        password: $password
        username: $email
      }) {
        user {
          id
        }
        jwt
      }
    }`;
export const CHECKQUESTIONNAIREANDGETUSERTYPE = gql`
    query($id: ID!) {
      user(id: $id) {
        hasSubmitQuestionnaire
        user_type {
          id
        }
      }
    }`;
export const LOGIN_QUERY = gql`
    mutation login($email: String!, $password: String!) {
      login(input: {
        identifier : $email,
        password : $password
      }) {
        user {
          id
        }
        jwt
      }
    }`;
export const CREATESPONSOR = gql`
      mutation($firstName: String!, $lastName: String!, $organisation: String!,
      $type_of_influencers: [ID], $type_of_non_profit_organisations: [ID], $user: ID!) {
        createSponsor(input: {
          data: {
            firstName :$firstName,
            lastName: $lastName,
            organisation: $organisation,
            type_of_influencers: $type_of_influencers,
            type_of_non_profit_organisations: $type_of_non_profit_organisations,
            user: $user
          }
        }) {
          sponsor{
            id
          }
        }
        updateUser(input: {
          where: {
            id: $user
          }
          data : {
            hasSubmitQuestionnaire: true
            user_type: "3"
          }
        }) {
          user {
            hasSubmitQuestionnaire
          }
        }
      }
    `;
export const CREATENONPROFIT = gql`
  mutation createQuestionnaireNonProfit($firstName: String!, $lastName: String!, $organisation: String!,
   $type_of_influencers: [ID], $type_of_non_profit_organisations: [ID], $user: ID!) {
        createNonProfit(input: {
          data: {
            firstName: $firstName
            lastName: $lastName
            organisation: $organisation
            type_of_influencers: $type_of_influencers
            type_of_non_profit_organisations: $type_of_non_profit_organisations
            user: $user
          }
        }) {
    nonProfit {
      id
      }
    }
    updateUser(input: {
      where: {
        id: $user
      }
      data : {
        hasSubmitQuestionnaire: true
        user_type: "2"
      }
    }) {
      user {
        hasSubmitQuestionnaire
      }
    }
  }`;
export const CREATEPROPOSALINFLUENCERDETAILS = gql`
query($id: ID!) {
  user(id: $id) {
    influencer {
      firstName
      lastName
      googlePhotoUrl
    }
  }
}
`;
export const CREATEINFLUENCER = gql`
mutation createQuestionnaireInfluencer($firstName: String!, $lastName: String!, $interestedInDonating: Boolean!,
 $type_of_influencers: [ID], $type_of_non_profit_organisations: [ID], $user: ID!, $rangeOfCompensation: ID!,
$googleAuthToken: String!, $googlePhotoUrl: String!) {
        createInfluencer(input: {
          data: {
            firstName: $firstName
            lastName: $lastName
            interestedInDonating: $interestedInDonating
            type_of_influencers: $type_of_influencers
            type_of_non_profit_organisations: $type_of_non_profit_organisations
            range_of_compensation: $rangeOfCompensation
            googleAuthToken: $googleAuthToken
            googlePhotoUrl: $googlePhotoUrl
            user: $user
          }
        }) {
          influencer {
            id
          }
        }
        updateUser(input: {
          where: {
            id: $user
          }
          data : {
            hasSubmitQuestionnaire: true
            user_type: "1"
          }
        }) {
          user {
            hasSubmitQuestionnaire
          }
        }
}`;
export const GETUSERTYPE = gql`
  query getUserType($id: ID!) {
  user(id: $id) {
    user_type {
      id
    }
  }
}`;
export const GETUSERDETAILSSIDEBAR = gql`
query($id: ID!) {
  user(id: $id) {
    id
    non_profit {
      firstName
      lastName
      organisation
    }
    influencer {
      firstName
      lastName
      googlePhotoUrl
    }
    sponsor {
      firstName
      lastName
      organisation
    }
  }
}
`;
export const GETDATAFORINFLUENCERCARD = gql`
query {
  users(
    where: {user_type: "1"},
    limit: 10
  ) {
    id
    influencer {
      firstName
      lastName
      type_of_non_profit_organisations{
        name
      }
      googleAuthToken
      googlePhotoUrl
    }
  }
}`;
export const SEARCHQUERY = gql`
query ($text: String!, $types: [ID]) {
  influencers(
    where: {
      firstName_contains: $text
      type_of_non_profit_organisations: $types
    }
    limit: 10
  ) {
    user {
        id
        influencer {
          firstName
          lastName
          type_of_non_profit_organisations{
            name
          }
          googleAuthToken
          googlePhotoUrl
        }
      }
    }
  }
`;
export const USERPROFILEQUERY = gql`
query($id: ID!) {
  user(id: $id) {
    id
    influencer {
      firstName
      lastName
      googleAuthToken
      type_of_influencers {
        id
      }
      type_of_non_profit_organisations {
        id
      }
    }
  }
}`;
export const CREATEPROPOSAL = gql`
mutation($campaignName: String!, $campaignCategory: ID!, $campaignDescription: String!,
$campaignStartDate: Date!, $campaignEndDate: Date!, $proposalApprovalDate: Date!,
$targetPlatform: [ID], $howShouldItLook: String!, $callToAction: String,
$interestInForProfit: Boolean!, $promotingCampaign: Boolean!, $sendOnlyToInfluencer: Boolean!,
$offerTaxReceipt: Boolean!, $anyThingElse: String!, $id: ID!, $influencerId: ID!, $statusSponsor: ID!,
$statusInfluencerWithSponsor: ID!, $statusNonProfitWithSponsor: ID!) {
  createProposal(input: {
    data: {
      campaignName: $campaignName
      type_of_non_profit_organisation: $campaignCategory
      campaignDescription: $campaignDescription
      campaignStartDate: $campaignStartDate
      campaignEndDate: $campaignEndDate
      proposalApprovalDate: $proposalApprovalDate
      proposal_visibilities: $targetPlatform
      howShouldItLookNonProfit: $howShouldItLook
      callToActionNonProfit: $callToAction
      sponsorshipIntegration: $interestInForProfit
      nonprofitOrganizationPromotion: $promotingCampaign
      sendOnlyToInfluencers: $sendOnlyToInfluencer
      taxReceipt: $offerTaxReceipt
      anyThingElseNonProfit: $anyThingElse
      # set the status of influencer to unread
      statusInfluencer: "5"
      non_profit: $id
      influencer: $influencerId
      statusSponsor: $statusSponsor
      statusInfluencerWithSponsor: $statusInfluencerWithSponsor
      statusNonProfitWithSponsor: $statusNonProfitWithSponsor
      hasCampaignStarted : false
      hasCampaignEnded: false
    }
  }) {
    proposal{
      id
      campaignName
      campaignEndDate
    }
  }
}`;
export const GETPROPOSALSTATUSNONPROFIT = gql`
  query($id: String!) {
    proposals(sort: "proposalApprovalDate:asc", where: {
      non_profit: $id
      hasCampaignStarted : false
      }) {
      id
      proposalApprovalDate
      campaignName
      influencer {
        influencer {
          firstName
          lastName
        }
      }
      statusInfluencer {
        id
      }
      statusSponsor {
        id
      }
      sponsor {
        sponsor {
          firstName
          lastName
          organisation
        }
      }
      non_profit {
      non_profit {
        organisation
        firstName
        lastName
      }
    }
    }
  }
`;
export const GETPROPOSALSTATUSINFLUENCER = gql`
  query($id: String!) {
    proposals(sort: "proposalApprovalDate:asc", where: {
      influencer: $id
      statusInfluencer_ne : "4"
      # isACampaign: false
      hasCampaignStarted : false
      }) {
      id
      proposalApprovalDate
      campaignName
      influencer {
        influencer {
          firstName
          lastName
        }
      }
      statusInfluencer {
        id
      }
      statusSponsor {
        id
      }
      sponsor {
      sponsor {
        firstName
        lastName
        organisation
        }
      }
      non_profit {
      non_profit {
        organisation
        firstName
        lastName
      }
    }
    }
  }
`;
export const GETPROPOSALSTATUSSPONSOR = gql`
 query {
    proposals(sort: "proposalApprovalDate:asc", where: {
      sponsorshipIntegration: true
      statusSponsor_ne: "1"
      statusInfluencer: "1"
      hasCampaignStarted : false
      }) {
      id
      proposalApprovalDate
      campaignName
      influencer {
        influencer {
          firstName
          lastName
        }
      }
      statusInfluencer {
        id
      }
      statusSponsor {
        id
      }
      sponsor {
        sponsor {
          firstName
          lastName
          organisation
        }
      }
      non_profit {
      non_profit {
        organisation
        firstName
        lastName
      }
    }
    }
  }
`;
export const GETVIEWPROPOSAL = gql`
query($id: ID!) {
  proposal(id: $id) {
    non_profit {
    id
      non_profit {
        organisation
        firstName
        lastName
      }
    }
    influencer {
    id
      influencer {
        firstName
        lastName
        googlePhotoUrl
      }
    }
    sponsor {
      id
      sponsor {
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
    proposal_visibilities {
      id
    }
    howShouldItLookNonProfit
    callToActionNonProfit
    sponsorshipIntegration
    nonprofitOrganizationPromotion
    sendOnlyToInfluencers
    taxReceipt
    anyThingElseNonProfit
    statusSponsor {
      id
    }
    statusInfluencer {
      id
    }
    percentRevenueInfluencer
    anythingElseInfluencer
    budgetSponsor
    howShouldItLookSponsor
    callToActionSponsor
    anyThingElseSponsor
    statusInfluencerWithSponsor {
      id
    }
    statusNonProfitWithSponsor {
      id
    }
    isACampaign
    promotingCampaignSponsor
  }
}`;
export const DECLINEPROPOSALNONPROFITWITHSPONSOR = gql`
mutation($id: ID!) {
  updateProposal(input: {
    where: {
      id: $id
    }
    data: {
      statusNonProfitWithSponsor: "4"
    }
  }) {
    proposal {
      id
    }
  }
}`;
export const ACCEPTPROPOSALNONPROFITWITHSPONSOR = gql`
mutation($id: ID!) {
  updateProposal(input: {
    where: {
      id: $id
    }
    data: {
      statusNonProfitWithSponsor: "1"
    }
  }) {
    proposal {
      id
    }
  }
}`;
export const ACCEPTPROPOSALINFLUENCER = gql`
mutation($id: ID!, $revenueDonated: Int!, $anythingElseInfluencer: String!){
  updateProposal(
    input: {
      where: {
        id: $id
      }
      data: {
        percentRevenueInfluencer: $revenueDonated
        anythingElseInfluencer: $anythingElseInfluencer
        # make the status to be accepted
        statusInfluencer: "1"
      }
    }) {
    proposal {
      id
    }
  }
}`;
export const INFLUENCERREJECTPROPOSAL = gql`
mutation($id: ID!){
  updateProposal(
    input: {
      where: {
        id: $id
      }
      data: {
        # make the status to be declined
        statusInfluencer: "4"
      }
    }) {
    proposal {
      id
      statusInfluencer {
        id
      }
    }
  }
}
`;
export const INFLUENCERREADPROPOSAL = gql`
mutation($id: ID!) {
  updateProposal(input: {
    where: {
      id: $id
    }
    data: {
      statusInfluencer: "2"
    }
  }) {
    proposal {
      id
    }
  }
}`;
export const INFLUENCEACCEPTPROPOSALWITHSPONSOR = gql`
mutation($id: ID!) {
  updateProposal(input: {
    where: {
      id: $id
    }
    data: {
      statusInfluencerWithSponsor: "1"
    }
  }) {
    proposal {
      id
    }
  }
}`;
export const INFLUENCEREJECTPROPOSALWITHSPONSOR = gql`
mutation($id: ID!) {
  updateProposal(input: {
    where: {
      id: $id
    }
    data: {
      statusInfluencerWithSponsor: "4"
    }
  }) {
    proposal {
      id
    }
  }
}`;
export const SPONSORACCEPTPROPOSAL = gql`
mutation($id: ID!, $promotingCampaign: Boolean!, $budgetSponsor: Int!,
$howShouldItLook: String!, $callToAction: String!, $anyThingElse: String!, $user: ID!) {
     updateProposal(
    input: {
      where: {
        id: $id
      }
      data: {
        statusSponsor: "1"
        budgetSponsor: $budgetSponsor
        howShouldItLookSponsor: $howShouldItLook
        callToActionSponsor: $callToAction
        anyThingElseSponsor: $anyThingElse
        promotingCampaignSponsor: $promotingCampaign
        sponsor: $user
      }
    }) {
    proposal {
      id
    }
  }
  }
`;
export const GETCAMPAIGNUNIQUEIDANDSTARTCAMPAIGN = gql`
  mutation($proposalId: ID!, $youtubeLink: String!) {
  createCampaign(input: {
    data: {
      youtubeVideoLink: $youtubeLink
      proposal: $proposalId
    }
  }) {
    campaign {
      id
      youtubeVideoLink
    }
  }
  updateProposal(input: {
    where: {
      id: $proposalId
    }
    data: {
      hasCampaignStarted: true
    }
  }) {
    proposal {
      hasCampaignStarted
    }
  }
}`;
export const STARTACAMPAIGN = gql`
mutation($proposalId: ID!) {
  updateProposal(input: {
    where: {
      id: $proposalId
    }
    data: {
      isACampaign: true
      hasCampaignStarted: false
      hasCampaignEnded: false
    }
  }) {
    proposal {
      id
      isACampaign
    }
  }
}
`;
export const CREATEPAYMENTSPONSORTOID = gql`
mutation($id: ID!, $sponsorId: ID!, $proposalId: ID!, $amount: Float!) {
    createPayment(input: {
    data: {
      from: $sponsorId
      to: $id
      payment_status: "2"
      proposal: $proposalId
      amount: $amount
    }
  }) {
    payment {
      id
    }
  }
  }
`;
export const GETCAMPAIGNTOSTARTINFLUENCER = gql`
query($influencer: ID!) {
  proposals(where: {
    isACampaign: true
    hasCampaignStarted: false
    influencer: $influencer
  }) {
    campaignName
    non_profit {
      non_profit {
        organisation
      }
    }
    sponsor {
      sponsor {
        firstName
        lastName
      }
    }
    id
    budgetSponsor
  }
}
`;
export const GETSTARTEDCAMPAIGNINFLUENCER = gql`
query($influencer: ID!) {
  proposals(where: {
    isACampaign: true
    hasCampaignStarted: true
    influencer: {
      id: $influencer
    }
  }) {
    campaignName
    non_profit {
      non_profit {
        organisation
      }
    }
    sponsor {
      sponsor {
        firstName
        lastName
      }
    }
    id
    percentRevenueInfluencer
    campaign {
      youtubeVideoLink
      id
    }
  }
}`;
export const CAMPAIGNDETAILS = gql`
query($campaignId: ID!) {
  campaign(id: $campaignId) {
    youtubeVideoLink
    proposal {
      non_profit {
      id
        non_profit {
          organisation
        }
      }
      influencer {
      id
        influencer {
          firstName
          lastName
        }
      }
      sponsor {
        sponsor {
          organisation
        }
      }
      campaignStartDate
      campaignEndDate
      campaignName
      percentRevenueInfluencer
      id
    }
  }
}`;
export const SETCAMPAIGNENDED = gql`
  mutation($proposalId: ID!, $influencerId: ID!,
$nonProfitID: ID!, $amount: Float!) {
  updateProposal(input: {
    where: {
      id: $proposalId
    }
    data: {
      hasCampaignEnded: true
    }
  }) {
    proposal {
      id
    }
  }
  createPayment(input: {
    data: {
      from: $influencerId
      to: $nonProfitID
      amount: $amount
      payment_status: "2"
      proposal: $proposalId
    }
  }) {
    payment {
      id
    }
  }
}
`;
export const SETPAYMENTINFLUENCER = gql`
mutation($proposalId: ID!, $paymentId: ID!) {
  updateProposal(input: {
    where: {
      id: $proposalId
    },
    data: {
      paymentInfluencer: $paymentId
    }
  }) {
    proposal {
      paymentInfluencer {
        id
        from {
          id
        }
        to {
          id
        }
        amount
      }
    }
  }
}`;
export const GETACTIVECAMPAIGNSINFLUENCER = gql`
query($id: ID!) {
  proposals(
    where: {
    hasCampaignStarted: true
    hasCampaignEnded: false
      influencer: $id
  },
  ) {
    campaign {
      youtubeVideoLink
      id
    }
    non_profit {
      non_profit {
        organisation
      }
    }
    campaignName
    sponsor {
      sponsor {
        organisation
      }
    }
  }
}`;
export const GETACTIVECAMPAIGNSNONPROFIT = gql`
query($id: ID!) {
  proposals(
    where: {
    hasCampaignStarted: true
    hasCampaignEnded: false
      non_profit: $id
  },
  ) {
    campaign {
      youtubeVideoLink
      id
    }
    non_profit {
      non_profit {
        organisation
      }
    }
    campaignName
    sponsor {
      sponsor {
        organisation
      }
    }
  }
}`;
export const GETACTIVECAMPAIGNSSPONSOR = gql`
query($id: ID!) {
  proposals(
    where: {
    hasCampaignStarted: true
    hasCampaignEnded: false
      sponsor: $id
  },
  ) {
    campaign {
      youtubeVideoLink
      id
    }
    non_profit {
      non_profit {
        organisation
      }
    }
    campaignName
    sponsor {
      sponsor {
        organisation
      }
    }
  }
}`;
export const GETFROMPAYMENT = gql`
query($id: ID!) {
  payments(where: {
    from: $id
  }) {
    id
    payment_status {
      id
    }
    amount
    proposal {
      campaignEndDate
      campaignName
      non_profit {
        id
        non_profit {
          firstName
          lastName
          organisation
        }
      }
      influencer {
        id
        influencer {
          firstName
          lastName
        }
      }
      sponsor {
        id
        sponsor {
          firstName
          lastName
          organisation
        }
      }
    }
    to {
      id
    }
    from {
    id
    }
  }
}
`;
export const GETTOPAYMENT = gql`
query($id: ID!) {
  payments(where: {
    to: $id
  }) {
    payment_status {
      id
    }
    amount
   proposal {
      campaignEndDate
      campaignName
      non_profit {
        id
        non_profit {
          firstName
          lastName
          organisation
        }
      }
      influencer {
        id
        influencer {
          firstName
          lastName
        }
      }
      sponsor {
        id
        sponsor {
          firstName
          lastName
          organisation
        }
      }
    }
    to {
      id
    }
    from {
    id
    }
  }
}
`;
export const SETPAYMENTSPONSORTOINFLUENCER = gql`
mutation($proposalId: ID!, $paymentId: ID!) {
  updateProposal(input: {
    where: {
      id: $proposalId
    },
    data: {
      paymentStoI: $paymentId
    }
  }) {
    proposal {
      paymentInfluencer {
        id
        from {
          id
        }
        to {
          id
        }
        amount
      }
    }
  }
}`;
export const SETPAYMENTSPONSORTONONPROFIT = gql`
mutation($proposalId: ID!, $paymentId: ID!) {
  updateProposal(input: {
    where: {
      id: $proposalId
    },
    data: {
      paymentStoNP: $paymentId
    }
  }) {
    proposal {
      paymentInfluencer {
        id
        from {
          id
        }
        to {
          id
        }
        amount
      }
    }
  }
}`;
export const PUBLICCAMPAIGNDETAILS = gql`
query($id: ID!) {
  campaign(id: $id) {
    youtubeVideoLink
    proposal {
    campaignName
    campaignDescription
    sendOnlyToInfluencers
      non_profit {
        non_profit {
          firstName
          lastName
          organisation
        }
      }
      sponsor {
        sponsor {
          firstName
          lastName
          organisation
        }
      }
      influencer {
        influencer {
          firstName
          lastName
          googlePhotoUrl
          googleAuthToken
        }
      }
    }
  }
}`;
export const COMPLETEPAYMENT = gql`
mutation($id: ID!) {
   updatePayment(input: {
      where: {
        id: $id
      }
    data: {
      payment_status: "1"
    }
  }
  ) {
    payment {
      id
    }
  }
}`;
export const GETNONPROFITTYPEOFNONPROFIT = gql`
query($userId: ID!) {
  user(id: $userId) {
    non_profit {
      type_of_non_profit_organisations {
        id
      }
    }
  }
}
`;

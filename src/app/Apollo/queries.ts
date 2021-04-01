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
export const CREATEINFLUENCER = gql`
mutation createQuestionnaireInfluencer($firstName: String!, $lastName: String!, $interestedInDonating: Boolean!,
 $type_of_influencers: [ID], $type_of_non_profit_organisations: [ID], $user: ID!, $rangeOfCompensation: ID!,
$googleAuthToken: String!, $amazonAuthToken: String!, $googlePhotoUrl: String!) {
        createInfluencer(input: {
          data: {
            firstName: $firstName
            lastName: $lastName
            interestedInDonating: $interestedInDonating
            type_of_influencers: $type_of_influencers
            type_of_non_profit_organisations: $type_of_non_profit_organisations
            range_of_compensation: $rangeOfCompensation
            googleAuthToken: $googleAuthToken
            amazonAuthToken: $amazonAuthToken
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
query ($text: String!) {
  influencers(
    where: {
      firstName_contains: $text
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
    }
  }) {
    proposal{
      id
      campaignName
      campaignEndDate
      campaignStartDate
      non_profit {
        id
        non_profit {
          firstName
          lastName
        }
      }
    }
  }
}`;
export const GETPROPOSALSTATUSNONPROFIT = gql`
  query($id: String!) {
    proposals(sort: "proposalApprovalDate:asc", where: {
      non_profit: $id
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
      sendOnlyToInfluencers: false
      statusSponsor_ne: "1"
      statusInfluencer: "1"
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
      non_profit {
        organisation
        firstName
        lastName
      }
    }
    influencer {
      influencer {
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

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
$offerTaxReceipt: Boolean!, $anyThingElse: String!, $id: ID!, $influencerId: ID!, $statusSponsor: ID!) {
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
export const GETPROPOSALWITHNONPROFIT = gql`
query($id: String!) {
  proposals(sort: "proposalApprovalDate:asc", where: {
    non_profit: $id
  }) {
    id
    campaignName
    campaignDescription
  }
}
`

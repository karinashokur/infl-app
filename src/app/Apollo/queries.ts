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
export const CHECK_QUESTIONNAIRE_SUBMISSION = gql`
    query($id: ID!) {
      user(id: $id) {
        hasSubmitQuestionnaire
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

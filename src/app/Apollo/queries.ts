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
export const CREATEQUESTIONNAIRECORPORATE = gql`
      mutation($firstName: String!, $lastName: String!, $name: String!,
      $type_of_contents: [ID], $type_of_non_profit_organisations: [ID], $user: ID) {
        createQuestionnaireCorporate(input: {
          data: {
            firstName: $firstName
            lastName: $lastName
            name: $name
            type_of_contents: $type_of_contents
            type_of_non_profit_organisations: $type_of_non_profit_organisations
            user: $user
          }
        }) {
          questionnaireCorporate {
            id
          }
        }
      }
    `;
export const CREATEQUESTIONNAIRENONPROFIT = gql`
  mutation createQuestionnaireNonProfit($firstName: String!, $lastName: String!, $name: String!,
   $type_of_contents: [ID], $type_of_non_profit_organisations: [ID], $user: ID) {
        createQuestionnaireNonProfit(input: {
          data: {
            firstName: $firstName
            lastName: $lastName
            nameOfOrganization: $name
            type_of_contents: $type_of_contents
            type_of_non_profit_organisations: $type_of_non_profit_organisations
            user: $user
          }
        }) {
    questionnaireNonProfit {
      id
    }
  }
}`;
export const CREATEQUESTIONNAIREINFLUENCER = gql`
mutation createQuestionnaireInfluencer($firstName: String!, $lastName: String!, $interestInDonating: Boolean!,
 $type_of_contents: [ID], $type_of_non_profit_organisations: [ID], $user: ID, $rangeOfCompensation: ID) {
        createQuestionnaireInfluencer(input: {
          data: {
            firstName: $firstName
            lastName: $lastName
            interestedInDonating: $interestInDonating
            type_of_contents: $type_of_contents
            type_of_non_profit_organisations: $type_of_non_profit_organisations
            range_of_compensation: $rangeOfCompensation
            user: $user
          }
        }) {
    questionnaireInfluencer {
      id
    }
  }
  createSocialAuthToken(input: {
        data: {
          questionnaire_influencer: $user
        }
    }) {
    socialAuthToken{
      id
    }
}
}`;
export const UPDATE_HAS_SUBMITTED_AND_USER_TYPE = gql`
mutation updateUser($id: ID!, $option: ID!) {
  updateUser(input: {
    where: {
      id: $id
    }
    data : {
      hasSubmitQuestionnaire: true
      user_type: $option
    }
  }) {
    user {
      hasSubmitQuestionnaire
    }
  }
}
`;
export const ADDGOOGLEAUTH = gql`
  mutation addSocialAuth ($google: String!, $id: ID!) {
  createSocialAuthToken(input: {
    data: {
      google: $google
      questionnaire_influencer: $id
    }
  }) {
    socialAuthToken {
      id
    }
  }
}
`;
export const ADDAMAZONAUTH = gql`
   mutation addSocialAuth ($amazon: String!, $id: ID!) {
  createSocialAuthToken(input: {
    data: {
      amazon: $amazon
      questionnaire_influencer: $id
    }
  }) {
    socialAuthToken {
      id
    }
  }
}
`;
export const CHECKSOCIALAUTH = gql`
      query socialAuthCheck($id: ID!) {
        socialAuthTokensConnection (
          where : {
            questionnaire_influencer: $id
          }
        ) {
          values {
            google
            amazon
          }
        }
      }
    `;

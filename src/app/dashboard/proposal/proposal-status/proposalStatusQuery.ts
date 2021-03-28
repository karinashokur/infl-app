export class ProposalStatusQuery {
  data: {
    proposals: [{
      id
      proposalApprovalDate
      campaignName
      influencer: {
        influencer: {
          firstName
          lastName
        }
      }
      status
      statusInfluencer: {
        id
      }
      statusSponsor: {
        id
      }
      sponsor: {
          sponsor: {
            firstName
            lastName
            organisation
        }
      }
      non_profit: {
        non_profit: {
          organisation
          firstName
          lastName
        }
      }
    }]
  };
}
export class ProposalStatus {
    id;
    proposalApprovalDate;
    campaignName;
    influencer: {
      influencer: {
        firstName
        lastName
      }
    };
    status;
    statusInfluencer: {
      id
    };
    statusSponsor: {
      id
    };
    sponsor: {
      sponsor: {
        firstName
        lastName
        organisation
      }
    };
  non_profit: {
    non_profit: {
      organisation
      firstName
      lastName
    }
  };
}

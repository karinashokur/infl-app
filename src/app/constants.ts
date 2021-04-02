import {HttpHeaders} from '@angular/common/http';
export const nonProfitCategories = ['Auto & Vehicles', 'Comedy', 'Education', 'Entertainment', 'Fashion',
  'Film & Animation', 'Food & Beverage', 'Gaming', 'Health & Fitness', 'How To',
  'Music', 'News & Politics', 'Nonprofit & Activism', 'People & Blogs', 'Pets & Animals',
  'Science & Technology', 'Self Care & Beauty', 'Sports', 'Travel & Events'];
export const influencerCategories = ['Animals', 'Arts, Culture, Humanities', 'Community Development', 'Education',
  'Environment', 'Health', 'Human & Civil Rights', 'Human Services', 'International',
  'Religion', 'Research & Public Policy'];
export const onBoardingScreenB = {
  influencer: {
    heading: 'Now we’ll focus on your work as a content creator!',
    subheading: 'For us to align you with the best nonprofit organizations' +
      ' and sponsors for your brand, please tell us about the type of content you create',
    question: 'Please select from the list below the general style of content you enjoy creating'
  },
  nonProfit: {
    heading: 'Now we’ll focus on the type of influencer content to align your organization with',
    subheading: 'This will help us understand which influencers to match' +
      ' you with based on the type of content they normally post and the interests of their audience',
    question: 'Please select from the list below the general style of content you’re interested in aligning with'
  },
  corporateSponsor: {
    heading: 'Now we’ll focus on the type of influencer content to align your brand with',
    subheading: 'This will help us understand which influencers to match your brand' +
      ' with based on the type of content they normally post and the interests of their audience',
    question: 'Please select from the list below the general style of content you’re interested in aligning with'
  }
};
export const onBoardingCProfiles = {
  influencer: {
    heading: 'Help us understand the types of nonprofit organizations you hope to partner with',
    subheading: 'To make sure we match you with the perfect partners we need to understand which categories are of interest to you',
  },
  nonProfit: {
    heading: 'Tell us more about the type of organization you represent',
    subheading: 'To make sure we match you with the perfect partners we need to understand which categories you represent',
  },
  corporateSponsor: {
    heading: 'Tell us about the type of corporation you represent',
    subheading: 'To make sure we match you with the right ' +
      'partners and content we need to understand which categories you would like to align with',
  }
};
export const onBoardingScreenDRange = ['$0 - $1,000', '$1,001 - $5,000', '$5,001 - $10,000', '$10,001 - $50,000',
  '$50,001 - $100,000', '$100,001 - $500,000', '$500,001 - $1,000,000', '$1,000,000+'];
export const proposalStatusInfluencer = {
  1: {
    name: 'Accepted',
    color: '#58c5af'
  },
  2: {
    name: 'read',
    color: '#0099d9'
  },
  3: {
    name: 'Awaiting',
    color: '#0099d9'
  },
  4: {
    name: 'declined',
    color: '#3a3a3a'
  },
};
export const proposalStatus = {
  1: {
    name: 'Accepted',
    color: '#58c5af'
  },
  2: {
    name: 'read',
    color: '#0099d9'
  },
  3: {
    name: 'Awaiting',
    color: '#0099d9'
  },
  4: {
    name: 'declined',
    color: '#3a3a3a'
  },
  5: {
    name: 'Unread',
    color: '#ff9900'
  },
  6: {
    name: 'closed',
    color: '#3a3a3a'
  },
  7: {
    name: 'open',
    color: '#3a3a3a'
  },
};
export const proposalStatusSponsor = {
  1: {
    name: 'Unread',
    color: '#ff9900'
  },
  2: {
    name: 'closed',
    color: '#3a3a3a'
  },
  3: {
    name: 'Awaiting',
    color: '#0099d9'
  },
};
export let user = {
  firstName: 'Rohit',
  lastName: 'Jain',
  photoUrl: null,
  position: 'Manager',
  companyName: 'my Home Villa',
  socialAuthToken: null,
  selectedCategories: [1, 2, 3, 4],
  selectedNonProfit: [3, 5, 6]
};
export let proposal = {
  id: 1,
  nonProfitUser: user,
  campaignName: 'Stop Climate Change',
  campaignCategory: 'Animals',
  campaignDescription: 'Our food choices can make a positive difference to people' +
    ' and nature – improving our own health, the health of others, ' +
    'and the health of the planet. Since Jamie is a former chef, we’re hoping' +
    ' to collaborate with ExJ to drive awareness to the Stop Climate Change ' +
    'campaign. Our goal is to work with ExJ on an “in the kitchen” video where she ' +
    'could make a vegan-friendly meal to promote this message about food choices and the' +
    ' impact it has on nature.',
  campaignStartDate: new Date(2020, 7, 22),
  campaignEndDate: new Date(2020, 7, 22),
  proposalApprovalDate: new Date(2020, 7, 22),
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
  sendOnlyToInfluencers: true,
  taxReceipt: true,
  anythingElseNonProfit: 'Nothing now for non profit',
  influencerStatus: 1,
  influencerTotalRevenue: null,
  anythingElseInfluencer: null,
  influencer: user,
  statusSponsor: 3,
  sponsor: null
};
export const amazonPayUrl = 'https:

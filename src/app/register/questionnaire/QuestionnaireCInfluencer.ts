export class QuestionnaireCInfluencer {
  typeOfInterestedNonProfit: string[];
  interestedInDonating: boolean;
  constructor(  typeOfInterestedNonProfit, interestedInDonating) {
    this.interestedInDonating = interestedInDonating;
    this.typeOfInterestedNonProfit = typeOfInterestedNonProfit;
  }
}

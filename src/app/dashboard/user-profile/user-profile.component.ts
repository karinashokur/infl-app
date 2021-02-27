import { Component, OnInit } from '@angular/core';
import {influencerCategories, nonProfitCategories} from '../../constants';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  constructor() { }
  currentTab;
  audience;
  nonProfitOrganisation: string[];
  sponsorCategories: string[];
  selectedNonProfit: number[];
  selectedCategories: number[];
  ngOnInit(): void {
    this.currentTab = 1;
    this.audience = [{
      image: 'assets/images/BlackBackground.png',
      title: 'Youtube',
      stats: {
        followers: 10000,
        topCountry: 10,
        pageLikes: 1800,
        audience: 10000
      }
    }];
    this.nonProfitOrganisation = influencerCategories;
    this.sponsorCategories = nonProfitCategories;
    this.selectedCategories = [1, 2, 3, 4];
    this.selectedNonProfit = [3, 5, 6];
  }
  isCategorySelected(num): boolean {
    console.log('C' + num);
    return this.selectedCategories.indexOf(num) !== -1;
  }
  isNonProfitSelected(num): boolean {
    console.log('NP' + num);
    console.log(typeof(num));
    return this.selectedNonProfit.indexOf(num) !== -1;
  }
  setTab(tab) {
    this.currentTab = tab;
  }
}

import { Component, OnInit } from '@angular/core';
export class InfluencerCard {
  imgSrc: string;
  interestedIn: string[];
  name: string;
  content: string;
  social: {
    youtube: number
  };
  id: string;
}
@Component({
  selector: 'app-non-profit',
  templateUrl: './non-profit.component.html',
  styleUrls: ['./non-profit.component.scss']
})
export class NonProfitComponent implements OnInit {
  constructor() { }
  influencers: InfluencerCard[];
  ngOnInit(): void {
    this.influencers = [{
      imgSrc: 'assets/images/BlackBackground.png',
      interestedIn: ['Music', 'Fashion'],
      name: 'Rohit Jain',
      content: 'With over 60+ million collective streams and one million Shazam’s of their songs worldwide,' +
        ' ExJ is comprised of composer / instrumentalist Elijah Woods and lyricist / vocalist Jamie Fine.',
      social: {
        youtube: 10000
      },
      id: '10'
    }];
  }
}

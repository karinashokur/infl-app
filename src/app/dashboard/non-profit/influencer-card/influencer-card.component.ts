import {Component, Input, OnInit} from '@angular/core';
import {InfluencerCard} from '../non-profit.component';
import {Router} from '@angular/router';
@Component({
  selector: 'app-influencer-card',
  templateUrl: './influencer-card.component.html',
  styleUrls: ['./influencer-card.component.scss']
})
export class InfluencerCardComponent implements OnInit {
  constructor(private router: Router) { }
  @Input()
  influencer: InfluencerCard;
  ngOnInit(): void {
  }
  goToProfile() {
    this.router.navigate(['profile', this.influencer.id]);
  }
}

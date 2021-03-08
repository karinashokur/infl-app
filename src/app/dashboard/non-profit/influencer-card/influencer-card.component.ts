import {Component, Input, OnInit} from '@angular/core';
import {InfluencerCard} from '../non-profit.component';
import {Router} from '@angular/router';
import {YoutubeData, YoutubeService} from "../../youtube.service";
@Component({
  selector: 'app-influencer-card',
  templateUrl: './influencer-card.component.html',
  styleUrls: ['./influencer-card.component.scss']
})
export class InfluencerCardComponent implements OnInit {
  constructor(private router: Router,
              private youtubeService: YoutubeService) { }
  @Input()
  influencer: InfluencerCard;
  youtubeCount: number;
  ngOnInit(): void {
    this.youtubeService.getYoutubeData(this.influencer.googleAuthToken).then((data: YoutubeData) => {
      this.youtubeCount = data.items[0].statistics.subscriberCount;
    });
  }
  goToProfile() {
    this.router.navigate(['dashboard/user/' + this.influencer.id]);
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {InfluencerCard} from '../non-profit.component';
import {Router} from '@angular/router';
import {YoutubeData, YoutubeService} from '../../youtube.service';
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
    if (this.influencer.user !== null) {
      this.youtubeService.getYoutubeData(this.influencer.user.influencer.googleAuthToken).then((data: YoutubeData) => {
        console.log(data);
        this.youtubeCount = data.items[0].statistics.subscriberCount;
      });
    }
  }
  goToProfile() {
    this.router.navigate(['dashboard/user/' + this.influencer.user.id]);
  }
}

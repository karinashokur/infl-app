import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {get} from 'scriptjs';
@Component({
  selector: 'app-public-donation-campaign',
  templateUrl: './public-donation-campaign.component.html',
  styleUrls: ['./public-donation-campaign.component.scss']
})
export class PublicDonationCampaignComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) { }
  campaignId;
  url;
  ngOnInit(): void {
    this.campaignId = this.activatedRoute.snapshot.paramMap.get('id');
    this.url = this.router.url;
    console.log(this.campaignId);
    console.log(this.activatedRoute.snapshot.paramMap);
  }
}

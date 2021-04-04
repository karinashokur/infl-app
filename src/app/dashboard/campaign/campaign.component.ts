import { Component, OnInit } from '@angular/core';
import {StartCampaignModalEventEmitterService} from './start-campaign-modal/start-campaign-modal-event-emitter.service';
@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent implements OnInit {
  constructor(private startCampaignModalEventEmitterService: StartCampaignModalEventEmitterService) { }
  ngOnInit(): void {
  }
  showStartCampaignModal(campaignId: number) {
    this.startCampaignModalEventEmitterService.onFirstComponentButtonClick(campaignId);
  }
}

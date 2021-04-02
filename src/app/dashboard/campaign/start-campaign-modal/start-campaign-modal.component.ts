import { Component, OnInit } from '@angular/core';
import {LogoutEventEmitterService} from "../../dashboard-sidebar/logout-modal/logout-event-emitter.service";
import {Router} from "@angular/router";
import {LocalstorageService} from "../../../localstorage.service";
import {SessionStorageService} from "../../../sessionstorage.service";
import {StartCampaignModalEventEmitterService} from "./start-campaign-modal-event-emitter.service";
import {Apollo} from "apollo-angular";
import {STARTCAMPAIGN} from "../../../Apollo/queries";
import {FormBuilder, Validators} from "@angular/forms";
import {HttpHeaders} from "@angular/common/http";
class CampaignQuery {
  data: {
    createCampaign: {
      campaign: {
        id
        youtubeVideoLink
      }
    }
  };
}
@Component({
  selector: 'app-start-campaign-modal',
  templateUrl: './start-campaign-modal.component.html',
  styleUrls: ['./start-campaign-modal.component.scss']
})
export class StartCampaignModalComponent implements OnInit {
  constructor(private startCampaignModalEventEmitterService: StartCampaignModalEventEmitterService,
              private router: Router,
              private localstorageService: LocalstorageService,
              private sessionStorageService: SessionStorageService,
              private apollo: Apollo,
              private formBuilder: FormBuilder) { }
  show: boolean;
  campaignId: number;
  page1: boolean;
  uniqueURL: string;
  form = this.formBuilder.group({
    youtubeLink: ['', Validators.required]
  });
  ngOnInit(): void {
    if (this.startCampaignModalEventEmitterService.subsVar === undefined) {
      this.startCampaignModalEventEmitterService.subsVar
        = this.startCampaignModalEventEmitterService.invokeFirstComponentFunction.subscribe(((data) => {
        this.show = true;
        console.log('campaign Id on modal' + data);
        this.campaignId = data;
        this.page1 = true;
      }));
    }
  }
  close() {
    this.show = false;
  }
  submitId() {
    this.apollo.mutate({
      mutation: STARTCAMPAIGN,
      variables: {
        proposalId: this.campaignId,
        youtubeLink: this.form.value.youtubeLink
      },
      context: {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.localstorageService.getJwtToken()),
      }
    }).toPromise().then((data: CampaignQuery) => {
      this.page1 = false;
      this.uniqueURL = 'https:
    });
  }
}

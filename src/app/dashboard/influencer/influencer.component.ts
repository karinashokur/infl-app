import { Component, OnInit } from '@angular/core';
import {proposalStatus} from '../../constants';
@Component({
  selector: 'app-influencer',
  templateUrl: './influencer.component.html',
  styleUrls: ['./influencer.component.scss']
})
export class InfluencerComponent implements OnInit {
  constructor() { }
  proposals = [
    {
      date: '01/02/2020',
      campaignName: 'Stop Climate Change',
      influencer: 'Elijah Woods x Jamie Fine',
      status1: 1,
      sponsor: 'Open',
      status2: 1,
    },
    {
      date: '01/02/2020',
      campaignName: 'Stop Climate Change',
      influencer: 'Elijah Woods x Jamie Fine',
      status1: 1,
      sponsor: 'Open',
      status2: 1,
    },
    {
      date: '01/02/2020',
      campaignName: 'Stop Climate Change',
      influencer: 'Elijah Woods x Jamie Fine',
      status1: 1,
      sponsor: 'Open',
      status2: 1,
    },
    {
      date: '01/02/2020',
      campaignName: 'Stop Climate Change',
      influencer: 'Elijah Woods x Jamie Fine',
      status1: 2,
      sponsor: 'Open',
      status2: 1,
    },
    {
      date: '01/02/2020',
      campaignName: 'Stop Climate Change',
      influencer: 'Elijah Woods x Jamie Fine',
      status1: 1,
      sponsor: 'Open',
      status2: 3,
    }
  ];
  status = proposalStatus;
  ngOnInit(): void {
  }
}

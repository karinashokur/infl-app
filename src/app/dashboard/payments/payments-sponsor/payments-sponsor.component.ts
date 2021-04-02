import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ExternalScriptService} from '../external-script.service';
import { get } from 'scriptjs';
import {amazonPayUrl} from '../../../constants';
@Component({
  selector: 'app-payments-sponsor',
  templateUrl: './payments-sponsor.component.html',
  styleUrls: ['./payments-sponsor.component.scss']
})
export class PaymentsSponsorComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute,
              private externalScriptService: ExternalScriptService) {
  }
  ngOnInit(): void {
  }
}

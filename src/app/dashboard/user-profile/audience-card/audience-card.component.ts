import {Component, Input, OnInit} from '@angular/core';
@Component({
  selector: 'app-audience-card',
  templateUrl: './audience-card.component.html',
  styleUrls: ['./audience-card.component.scss']
})
export class AudienceCardComponent implements OnInit {
  constructor() { }
  @Input()
  a;
  ngOnInit(): void {
  }
}

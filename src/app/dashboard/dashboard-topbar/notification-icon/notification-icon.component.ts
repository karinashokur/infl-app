import {Component, Input, OnInit} from '@angular/core';
@Component({
  selector: 'app-notification-icon',
  templateUrl: './notification-icon.component.html',
  styleUrls: ['./notification-icon.component.scss']
})
export class NotificationIconComponent implements OnInit {
  constructor() { }
  @Input()
  className: string;
  ngOnInit(): void {
  }
}

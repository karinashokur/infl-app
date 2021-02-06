import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.scss']
})
export class MessagingComponent implements OnInit {
  constructor() {
    for (let i = 0; i < 100; i++) {
      this.options.push('Hello, World!');
    }
  }
  options: string[] = [];
  ngOnInit(): void {
  }
}

import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home-selector',
  templateUrl: './home-selector.component.html',
  styleUrls: ['./home-selector.component.scss']
})
export class HomeSelectorComponent implements OnInit {
  simpleItems1 = [];
  selectedSimpleItem1 = 'Two';
  simpleItems2 = [];
  selectedSimpleItem2 = 'Two';
  constructor() { }
  ngOnInit(): void {
    this.simpleItems1 = [true, 'Two', 3];
    this.simpleItems2 = [true, 'Two', 3];
  }
}

import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.scss']
})
export class DashboardSidebarComponent implements OnInit {
  constructor() { }
  imgSrc: string;
  ngOnInit(): void {
    this.imgSrc = 'assets/images/BlackBackground.png';
  }
}

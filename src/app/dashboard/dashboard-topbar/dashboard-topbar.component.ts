import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-dashboard-topbar',
  templateUrl: './dashboard-topbar.component.html',
  styleUrls: ['./dashboard-topbar.component.scss']
})
export class DashboardTopbarComponent implements OnInit {
  constructor() { }
  overlay: boolean;
  ngOnInit(): void {
    this.overlay = false;
  }
  onToggleOverlay() {
    this.overlay = !this.overlay;
  }
}

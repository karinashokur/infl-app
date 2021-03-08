import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-dashboard-topbar',
  templateUrl: './dashboard-topbar.component.html',
  styleUrls: ['./dashboard-topbar.component.scss']
})
export class DashboardTopbarComponent implements OnInit {
  constructor(private router: Router) { }
  overlay: boolean;
  ngOnInit(): void {
    this.overlay = false;
  }
  onToggleOverlay() {
    this.overlay = !this.overlay;
  }
  onEnter(value: string) {
    this.router.navigate(['dashboard/non-profit'], { queryParams: { q: value }});
  }
}

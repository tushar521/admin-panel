import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/core/utils.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  defaultPage = ''

  constructor(public utilService: UtilsService,
    public router: Router) { }

  ngOnInit() {
    this.defaultPage = sessionStorage.getItem('defaultPage') || 'allUsers';
    this.utilService.loggedIn = true;
  }

  opened = false;

  goToScreen(defaultPage) {
    sessionStorage.setItem('defaultPage', defaultPage)
    this.defaultPage = defaultPage
    this.utilService.sideNavOpen = false;
  }
}

import { Component } from '@angular/core';
import { ToasterConfig } from 'angular2-toaster'
import { UtilsService } from 'src/core/utils.service';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'admin-panel';
  loggedIn = 'false'
  screenSize = window.innerWidth
  constructor(public utilService: UtilsService,
    private crf: ChangeDetectorRef,
    private router: Router) { }

  ngOnInit() {
    this.crf.detectChanges();
    this.loggedIn = sessionStorage.getItem('isLoggedIn')
  }

  public config: ToasterConfig =
    new ToasterConfig({
      showCloseButton: false,
      tapToDismiss: false,
      timeout: 5000,
      limit: 1,
      positionClass: 'toast-bottom-full-width'
    });

  openNav() {
    this.utilService.sideNavOpen = !this.utilService.sideNavOpen;
  }

  logout() {
    this.utilService.loggedIn = false
    sessionStorage.removeItem('isLoggedIn')
    this.router.navigate(['/login'])
  }
}

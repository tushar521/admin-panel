import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { GeneralService } from 'src/core/general.service';
import { ToasterService } from 'angular2-toaster'
import { UtilsService } from 'src/core/utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public hide = true;

  constructor(private router: Router,
    private generalService: GeneralService,
    private toasterService: ToasterService,
    private utilService: UtilsService) {
    this.toasterService = toasterService
  }

  ngOnInit() {
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);


  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  getPasswordError() {
    if (this.password.hasError('required')) {
      return 'You must enter a value';
    }
  }

  goToForgotPassword() {
    this.router.navigate(['/forgot-password'])
  }

  login() {
    this.utilService.enableLoading = true;
    const email = this.email.value;
    const password = this.password.value;
    if (!email || !password) {
      this.utilService.enableLoading = false;
      this.toasterService.pop('error', 'Error', 'Email and Password is required to login')
      return true;
    }
    this.generalService.loginAPICall({ username: email, password }).subscribe((response: any) => {
      this.utilService.enableLoading = false;
      if (response && response.data) {
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('token', response.data.token)
        this.utilService.loggedIn = true;
        this.router.navigate(['/dashboard'])
      } else {
        this.toasterService.pop('error', 'Error', 'Something went wrong')
      }
      
    }, (error: any) => {
      this.utilService.enableLoading = false;
      let msg = 'Something went wrong'
      if (error && error.error && error.error.message) msg = error.error.message
      this.toasterService.pop('error', 'Error', msg)
    })
  }
}

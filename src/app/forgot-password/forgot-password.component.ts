import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { UtilsService } from 'src/core/utils.service';
import { ToasterService } from 'angular2-toaster';
import { GeneralService } from 'src/core/general.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(
    private router: Router,
    private generalService: GeneralService,
    private toasterService: ToasterService,
    private utilService: UtilsService
  ) { }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  ngOnInit() {
  }

  goToLogin() {
    this.router.navigate(['/login'])
  }

  forgotPassword() {
    this.utilService.enableLoading = true;
    const email = this.email.value;
    if (!email) {
      this.utilService.enableLoading = false;
      this.toasterService.pop('error', 'Error', 'Please enter email address')
    }
    this.generalService.forgotPassword({ email }).subscribe((response: any) => {
      this.utilService.enableLoading = false;
      this.toasterService.pop('success', 'Success', 'We have sent email with link to set new password.')
    }, (error: any) => {
      this.utilService.enableLoading = false;
      let msg = 'Something went wrong'
      if (error && error.error && error.error.message) msg = error.error.message
      this.toasterService.pop('error', 'Error', msg)
    })
  }
}

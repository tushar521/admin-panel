import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AllUsersComponent } from './all-users/all-users.component';
import { GeneralService } from 'src/core/general.service';
import { HttpClientModule } from '@angular/common/http';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { NgxLoadingModule } from 'ngx-loading'
import { UtilsService } from 'src/core/utils.service';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ChartsModule } from 'ng2-charts';
import { QuillModule } from 'ngx-quill';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    AllUsersComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatSidenavModule,
    HttpClientModule,
    ToasterModule.forRoot(),
    NgxLoadingModule,
    MatTableModule,
    MatSelectModule,
    MatDialogModule,
    MatRadioModule,
    MatSlideToggleModule,
    ChartsModule,
    QuillModule.forRoot()
  ],
  entryComponents: [],
  providers: [GeneralService, ToasterService, UtilsService],
  bootstrap: [AppComponent]
})
export class AppModule {

}

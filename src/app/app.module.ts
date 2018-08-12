import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { fakeBackendProvider } from './shared/fake-backend';
import { JwtInterceptor } from './shared/jwt.interceptor';
import { ErrorInterceptor } from './shared/error.interceptor';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { AuthService } from './auth/auth.service';
import { AlertService } from './auth/alert.service';
import { UserService } from './auth/user.service';
import { AuthGuard } from './auth/auth.guard';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ChangingPasswordComponent } from './user-profile/changing-password/changing-password.component';
import { UpdateAddressComponent } from './user-profile/update-address/update-address.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { UsersListComponent } from './admin-profile/users-list/users-list.component';
import { AdminsListComponent } from './admin-profile/admins-list/admins-list.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent,
    UserProfileComponent,
    ChangingPasswordComponent,
    UpdateAddressComponent,
    AdminProfileComponent,
    UsersListComponent,
    AdminsListComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    AlertService,
    UserService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

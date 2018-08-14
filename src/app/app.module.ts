import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { AuthService } from './auth/auth.service';
import { DataService } from './services/data.service';
import { AuthInterceptor } from './auth/auth.interceptor';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ChangingPasswordComponent } from './user-profile/changing-password/changing-password.component';
import { UpdateAddressComponent } from './user-profile/update-address/update-address.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { HttpService } from './shared/http.service';
import { AccountInfoComponent } from './account-info/account-info.component';
import { AdminsListComponent } from './admin-profile/admins-list/admins-list.component';
import { UsersListComponent } from './admin-profile/users-list/users-list.component';
import { CreateNewAdminComponent } from './admin-profile/create-new-admin/create-new-admin.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import {AddDialogComponent} from './dialogs/add/add.dialog.component';
import {EditDialogComponent} from './dialogs/edit/edit.dialog.component';
import {DeleteDialogComponent} from './dialogs/delete/delete.dialog.component';

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
    AccountInfoComponent,
    AdminsListComponent,
    UsersListComponent,
    CreateNewAdminComponent,
    ForgotPasswordComponent,
    AddDialogComponent,
    EditDialogComponent,
    DeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
    timeOut: 10000,
    positionClass: 'toast-top-center',
    preventDuplicates: true,
  }),
  ],
  entryComponents: [
    AddDialogComponent,
    EditDialogComponent,
    DeleteDialogComponent
  ],
  providers: [
    AuthService,
    HttpService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

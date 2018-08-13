 import { Component, OnInit } from '@angular/core';
 import { FormGroup, FormControl, Validators } from '@angular/forms';
 import { HttpErrorResponse } from '@angular/common/http';
 import { Router } from '@angular/router';

 import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLogginError: boolean = false;

  constructor(private authService: AuthService,private router : Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', {validators: [Validators.required, Validators.email]}),
      password: new FormControl('', {validators:[Validators.required]})
    });
  }

  onSubmit(email, password) {
    const val = this.loginForm.value;
        if (val.email && val.password) {
            this.authService.login(val.email, val.password);
        }
    }


}

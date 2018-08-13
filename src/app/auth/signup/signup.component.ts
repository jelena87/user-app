import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private authService: AuthService, private router : Router) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      email: new FormControl('', {validators: [Validators.required, Validators.email]}),
      password: new FormControl('', {validators:[Validators.required, Validators.minLength(8)]}),
      check: new FormControl('', {validators:[Validators.required]})
    });
  }


  onSubmit(email, password) {
    this.authService.registerUser({
      email: this.signupForm.value.email,
      password: this.signupForm.value.password,
      roles: {
        admin: true
      }
    });
  }

}

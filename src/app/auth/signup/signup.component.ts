import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { UserService } from '../user.service';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private alertService: AlertService,
              private router: Router,
              private userService: UserService) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      email: new FormControl('', {validators: [Validators.required, Validators.email]}),
      password: new FormControl('', {validators:[Validators.required, Validators.minLength(8)]})
    });
  }

  get f() {
    return this.signupForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if(this.signupForm.invalid) {
      return;
    }
    this.loading = true;
    this.userService.register(this.signupForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        }
      );
  }

}

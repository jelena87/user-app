 import { Component, OnInit } from '@angular/core';
 import { FormGroup, FormControl, Validators } from '@angular/forms';
 import { Router, ActivatedRoute } from '@angular/router';
 import { first } from 'rxjs/operators';

 import { AuthService } from '../auth.service';
 import { AlertService } from '../alert.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute,
              private alertService: AlertService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', {validators: [Validators.required, Validators.email]}),
      password: new FormControl('', {validators:[Validators.required]})
    });
    //reset login status
    this.authService.logout;

    //get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  //getter for easy access to form fields
  get f() {
  return this.loginForm.controls;
}

  onSubmit() {
    this.submitted = true;

    //stop here is form is invalid
    if(this.loginForm.invalid) {
    return;
  }
  this.loading = true;
  this.authService.login(this.f.email.value, this.f.password.value)
    .pipe(first())
    .subscribe(
      data => {
        this.router.navigate([this.returnUrl]);
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      }
    );
  }

}

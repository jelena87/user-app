import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  resetPass: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.resetPass = new FormGroup({
      email: new FormControl('', {validators: [Validators.required, Validators.email]})
    });
  }

  onSubmit(email) {
    
  }

}

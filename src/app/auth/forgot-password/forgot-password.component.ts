import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  resetPass: FormGroup;

  constructor(private authService: AuthService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetPass = new FormGroup({
      email: new FormControl('', {validators: [Validators.required, Validators.email]})
    });
  }

  onSubmit(email) {
    const val = this.resetPass.value;
    if (val.email) {
        this.authService.resetPass(val.email);
        this.resetPass.reset();
    }
    this.toastr.success('New Password is send to email you entered!', 'Check your email', { timeOut: 5000});
  }

}

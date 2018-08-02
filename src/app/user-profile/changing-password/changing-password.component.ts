import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { PasswordValidator } from '../../shared/password.validator';

@Component({
  selector: 'app-changing-password',
  templateUrl: './changing-password.component.html',
  styleUrls: ['./changing-password.component.css']
})
export class ChangingPasswordComponent implements OnInit {
  passwordChange: FormGroup;
  passwordFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.passwordChange = this.formBuilder.group({
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validator: PasswordValidator.validate.bind(this)
    });

    this.passwordFormGroup = this.formBuilder.group({
      oldPassword: ['', Validators.required],
      passwordChange: this.passwordChange
    });
   }

  ngOnInit() {

  }

  onSubmit() {
    console.log(this.passwordFormGroup);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { EmailValidator } from '../../shared/email.validator';

@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.css']
})
export class UpdateAddressComponent implements OnInit {
  addressChange: FormGroup;
  updateAddress: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.addressChange = this.formBuilder.group({
      newEmail: ['', {validators: [Validators.required, Validators.email]}],
      confirmEmail: ['', {validators: [Validators.required, Validators.email]}]
    }, {
      validator: EmailValidator.validate.bind(this)
    });

    this.updateAddress = this.formBuilder.group({
      oldEmail: ['', {validators: [Validators.required, Validators.email]}],
      addressChange: this.addressChange
    });
   }


  ngOnInit() {
  }

  onSubmit() {
    console.log(this.updateAddress);
  }

}

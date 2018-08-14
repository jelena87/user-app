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
    this.updateAddress = this.formBuilder.group({
      oldEmail: ['', {validators: [Validators.required, Validators.pattern('[a-zA-Z0-9-]+')]}],
    });
   }


  ngOnInit() {
  }

  onSubmit() {
    console.log(this.updateAddress);
  }

}

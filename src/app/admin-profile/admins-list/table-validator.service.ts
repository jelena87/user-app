import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidatorService } from 'angular4-material-table';

@Injectable()
export class TableValidatorService implements ValidatorService {
  getRowValidator(): FormGroup {
    return new FormGroup({
      'userId': new FormControl(),
      'email': new FormControl(Validators.email),
      'password': new FormControl(),
      'status': new FormControl()
      });
  }
}

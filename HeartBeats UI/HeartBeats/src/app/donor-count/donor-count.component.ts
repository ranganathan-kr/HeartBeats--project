import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DonorsService } from '../Services/donors-service';

@Component({
  selector: 'app-donor-count',
  templateUrl: './donor-count.component.html',
  styleUrls: ['./donor-count.component.css'],
})
export class DonorCountComponent implements OnInit {
  ngOnInit(): void {}

  

  State: string = '';
  City: string = '';

  
  isSubmitted = false;
  donors: Array<any> = []; // Array to store donor details
  donorCount: number = 0;
  
  donorForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(30),
    ]),
    blood: new FormControl('', [Validators.required]),
    number: new FormControl('', [
      Validators.required,
      Validators.maxLength(10),
      Validators.pattern('^[0-9]+$'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    state: new FormControl('', [
      Validators.required,
      Validators.maxLength(25),
      Validators.pattern('^[a-z A-z]+$'),
    ]),
    city: new FormControl('', [
      Validators.required,
      Validators.maxLength(25),
      Validators.pattern('^[a-z A-z]+$'),
    ]),
    alcoholic: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    dob: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
  });

  get name() {
    return this.donorForm.get('name')!;
  }

  get bloodType() {
    return this.donorForm.get('blood')!;
  }

  get number() {
    return this.donorForm.get('number')!;
  }

  get email() {
    return this.donorForm.get('email');
  }

  get state() {
    return this.donorForm.get('state');
  }

  get city() {
    return this.donorForm.get('city');
  }

  get alcoholic() {
    return this.donorForm.get('alcoholic');
  }

  get password() {
    return this.donorForm.get('password');
  }

  get dob() {
    return this.donorForm.get('dob');
  }

  get gender() {
    return this.donorForm.get('gender');
  }

  onstateChange() {
    this.State = this.State.toLowerCase();
  }
  oncityChange() {
    this.City = this.City.toLowerCase();
  }
  submitForm() {
    // if (this.donorForm.valid) {
    //   this.donorService.registerDonor(this.donorForm.value).subscribe(
    //     () => {
    //       this.isSubmitted = true;
    //       // Clear the form or reset it as needed
    //     },
    //     (error) => {
    //       console.error('Error registering donor:', error);
    //     }
    //   );
    // }
  }

  resetForm() {
    this.donorForm.reset();
  }
}

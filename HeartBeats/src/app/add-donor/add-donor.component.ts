import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-donor',
  templateUrl: './add-donor.component.html',
  styleUrls: ['./add-donor.component.css']
})
export class AddDonorComponent {
  donorForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.donorForm = this.formBuilder.group({
      name: ['', Validators.required],
      bloodType: ['', Validators.required],
      contactNumber: ['', Validators.required],
      state: ['', Validators.required],
      district: ['', Validators.required],
      country: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.donorForm.valid) {
      // Submit the form data to your backend or perform desired actions
      console.log(this.donorForm.value);
    } else {
      alert('Please fill in all the required fields.');
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DonorService } from '../Services/DonorsService';
import { Router } from '@angular/router';
import { DonorSharedService } from '../Services/donor-shared.service';
@Component({
  selector: 'app-donor-count',
  templateUrl: './donor-count.component.html',
  styleUrls: ['./donor-count.component.css']
})
export class DonorCountComponent implements OnInit{
  
  donorForm!: FormGroup;


    
    donors: Array<any> = []; // Array to store donor details
    donorCount: number = 0;
    isSubmitted: boolean = false;
    
    constructor(
      private fb: FormBuilder,
      private donorService: DonorService,
      private router: Router,
      private donorSharedService: DonorSharedService,
    ) {}
  
    ngOnInit(): void {
      this.donorForm = this.fb.group({
        name: ['', Validators.required],
        bloodType: ['', Validators.required],
        number: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]], // Validating for exactly 10 digits
        email: ['', [Validators.required, Validators.email]],
        state: [''],
        city: [''],
        country: [''],
        password: ['', [Validators.required, Validators.minLength(8)]], // Minimum length of 8 characters
  
      });
    }
    get name() { return this.donorForm.get('name'); }
    get bloodType() { return this.donorForm.get('bloodType'); }
    get number() { return this.donorForm.get('number'); }
    get email() { return this.donorForm.get('email'); }
    get password() { return this.donorForm.get('password'); }
    get state() { return this.donorForm.get('state'); }
get city() { return this.donorForm.get('city'); }

  
    submitForm() {
      const newDonor = this.donorForm.value;
      this.donorService.registerDonor(newDonor).subscribe(
        (        response: any) => {
          console.log('Donor registered:', response);
          this.donorSharedService.addDonor(response);
          this.router.navigate(['/donor-profile', response.id]);
          
          // Optionally, you can handle success actions here
        },
        (        error: any) => {
          console.error('Error registering donor:', error);
          // Optionally, you can handle error actions here
        }
      );
  
      this.donorForm.reset();
    }
  }
  
  
  




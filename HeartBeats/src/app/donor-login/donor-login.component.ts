import { Component } from '@angular/core';
import {  DonorService } from '../Services/DonorsService';
import { Donor } from '../Models/Donor';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { DonorSharedService } from '../Services/donor-shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './donor-login.component.html',
  styleUrls: ['./donor-login.component.css']
})
export class DonorLoginComponent {
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
     
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
      
    });
  }
  get email() { return this.donorForm.get('email'); }
  get password() { return this.donorForm.get('password'); }
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

  // constructor(private donorService: DonorService) {}

  // submitForm(email: string, password: string): void {
   
  //   this.donorService.login(email, password).subscribe({
      
  //     next:response => {
  //       console.log('Login successful:', response);
  //       console.log(email,password);
  //       // Handle success actions here
  //     },
  //     error:error => {
  //       console.error('Login failed:', error);
       
  //       // Handle error actions here
  //     }
    
  // });
  // }
}


import { Component, OnInit } from '@angular/core';
import { DonorService } from '../Services/DonorsService';
import { Donor } from '../Services/DonorsService';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-donor-search',
  templateUrl: './donors-search.component.html'
})
export class SearchComponent implements OnInit {
  city: string = '';
  state: string = '';
  bloodType: string = '';
  donors: Donor[] = [];
  cities: string[] = [];
  states: string[] = [];
  bloodTypes: string[] = [];
  requestedDonorId: number | null = null;

  constructor(private router :Router,private donorService: DonorService) {}

  ngOnInit(): void {
    this.donorService.getCities().subscribe(cities => (this.cities = cities));
    this.donorService.getStates().subscribe(states => (this.states = states));
    this.donorService.getBloodTypes().subscribe(bloodTypes => (this.bloodTypes = bloodTypes));
  }

  requestBlood(donor: Donor) {
    this.donorService.requestBlood(donor.id).subscribe(
      response => {
        console.log('Requested blood from:', donor);
        
                console.log('Blood donation requested successfully');
                this.router.navigate(['/donor-profile', donor.id]);
            
          
        },
        // Handle success, show a message, etc.
      
      error => {
        console.error('Error requesting blood:', error);
        // Handle error, show an error message, etc.
      }
    );
  }

  reportDonor(donor: Donor) {
    const reason = prompt('Please provide a reason for reporting this donor:');
    if (reason) {
      this.donorService.reportDonor(donor.id, reason).subscribe(
        response => {
          console.log('Reported donor:', donor);
          // Handle success, show a message, etc.
        },
        error => {
          console.error('Error reporting donor:', error);
          // Handle error, show an error message, etc.
        }
      );
    }
  }

  searchDonors() {
    if (!this.city && !this.state && !this.bloodType) {
      // At least one filter must be provided
      return;
    }

    const searchParams: {
      city?: string;
      state?: string;
      bloodType?: string;
    } = {};

    if (this.city) {
      searchParams.city = this.city;
    }

    if (this.state) {
      searchParams.state = this.state;
    }

    if (this.bloodType) {
      searchParams.bloodType = this.bloodType;
    }

    this.donorService
    .searchDonors(searchParams.city || '', searchParams.state || '', searchParams.bloodType || '')
    .pipe(
      tap(donors => {
        this.donors = donors;
      }),
      catchError(error => {
        console.error('Error fetching donors:', error);
        return throwError(error); // Re-throw the error
      })
    )
    .subscribe();
  
  }
}

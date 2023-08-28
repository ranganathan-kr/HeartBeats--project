import { Component, OnInit } from '@angular/core';
import  {  DonorsService } from '../Services/donors-service'
import { Donor } from 'src/Models/Donor';

import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-donor-search',
  templateUrl: './donor-search.component.html',
  styleUrls: ['./donor-search.component.css'],
  providers :[DonorsService]
})
export class DonorSearchComponent implements OnInit {
  ngOnInit(): void {

  }
  city: string = '';
  state: string = '';
  bloodType: string = '';

  donors: Donor[] = [];
  cities: string[] = [];
  states: string[] = [];
  blood: string[] = [];

  constructor(  private donorService : DonorsService) {
  }


  searchDonors() {
    let searchParams: {
      city?: string;
      state?: string;
      bloodType?: string;
    } = {};
  
    
    if (this.city !== undefined) {
      searchParams.city = this.city;
    }
  
    if (this.state !== undefined) {
      searchParams.state = this.state;
    }
  
    if (this.bloodType !== undefined) {
      searchParams.bloodType = this.bloodType;
    }
    
    this.donorService.searchDonors(
      searchParams.city || '',
      searchParams.state|| '',
      searchParams.bloodType ||''
    )
    
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

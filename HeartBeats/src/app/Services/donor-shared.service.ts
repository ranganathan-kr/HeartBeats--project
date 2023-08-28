import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DonorSharedService {
  private donors: Array<any> = [];

  addDonor(donor: any) {
    this.donors.push(donor);
  }

  getDonorById(id: number): any {
    return this.donors.find(donor => donor.id === id);
  }
}

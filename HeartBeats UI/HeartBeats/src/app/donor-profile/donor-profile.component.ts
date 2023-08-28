import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DonorsService } from '../Services/donors-service';

@Component({
  selector: 'app-donor-profile',
  templateUrl: './donor-profile.component.html',
  styleUrls: ['./donor-profile.component.css']
})
export class DonorProfileComponent {
  showUpdateForm = false;
  donor: any;
  updatedDonor: any = {}; 
  showDeleteConfirmation = false;

  constructor(private donorService: DonorsService) {}

  ngOnInit() {
    this.donorService.getDonorProfile().subscribe((data: any) => {
      this.donor = data;
    });
  }

  
  

  cancelUpdate() {
    this.showUpdateForm = false;
  }

  confirmDelete() {
    this.showDeleteConfirmation = true;
  }

  updateProfile(id: number) {
    this.donorService.updateDonor(id, this.updatedDonor).subscribe(
      (updatedDonor: any) => {
        this.donor = updatedDonor;
        this.updatedDonor = {}; 
        alert("hii");// Reset the updatedDonor object
        // Handle success, show a success message, etc.
      },
      (error) => {
        // Handle error, show an error message, etc.
      }
    );
  }

  deleteProfile(id: number) {
    this.donorService.deleteDonor(id).subscribe(
      () => {
        // Handle success, navigate to a different page, show a message, etc.
      },
      (error) => {
        // Handle error, show an error message, etc.
      }
    )
  }
  cancelDelete() {
    this.showDeleteConfirmation = false;
  }
}

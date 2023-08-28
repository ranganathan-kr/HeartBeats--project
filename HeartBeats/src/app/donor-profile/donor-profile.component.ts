import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DonorService } from '../Services/DonorsService';
import { DonorSharedService } from '../Services/donor-shared.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-donor-profile',
  templateUrl: './donor-profile.component.html',
  styleUrls: ['./donor-profile.component.css']
})
export class DonorProfileComponent implements OnInit {

  donor: any; // Donor profile data
  updateForm!: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private donorService: DonorService,
    private donorSharedService: DonorSharedService
  ) {}

  ngOnInit(): void {
    // Get the donor ID from route parameters
    const donorId = this.route.snapshot.paramMap.get('id');
    if (donorId) {
      // First, try to get the donor from the shared service
      this.donor = this.donorSharedService.getDonorById(Number(donorId));

      // If not found in the shared service, fetch from the API
      if (!this.donor) {
        this.donorService.getDonorById(Number(donorId)).subscribe(
          (response: any) => {
            this.donor = response;
            this.initUpdateForm(); // Initialize the update form with donor data
          },
          (error: any) => {
            console.error('Error fetching donor profile:', error);
            // Optionally, you can handle error actions here
          }
        );
      } else {
        this.initUpdateForm(); // Initialize the update form with donor data
      }
    }
  }

  private initUpdateForm() {
    this.updateForm = this.fb.group({
      name: this.donor.name,
      bloodType: this.donor.bloodType,
      contactNumber: this.donor.contactNumber,
      email: this.donor.email,
      state: this.donor.state,
      city: this.donor.city,
      country: this.donor.country,
      password: this.donor.password
       // Only include if you want to allow password update
    });
  }

  updateProfile() {
    const updatedDonorData = this.updateForm.value;
    this.donorService.updateDonor(this.donor.id, updatedDonorData).subscribe(
      (response: any) => {
        console.log('Donor profile updated:', response);
        // Optionally, you can handle success actions here
      },
      (error: any) => {
        console.error('Error updating donor profile:', error);
        // Optionally, you can handle error actions here
      }
    );
  }

  deleteProfile() {
    // Delete the donor profile using the service
    this.donorService.deleteDonor(this.donor.id).subscribe(
      () => {
        console.log('Donor profile deleted');
        // Redirect to a suitable page (e.g., home page) after deletion
        this.router.navigate(['/home']);
      },
      (error: any) => {
        console.error('Error deleting donor profile:', error);
        // Optionally, you can handle error actions here
      }
    );
    }


// requestBlood(): void {
//   if (this.donor) {
//     this.donorService.requestBlood(this.donor.id)
//     .subscribe(
//       () => {
//         this.donor.bloodDonationRequested = true;
//       },
//       (error: any) =>
//         console.error('Error requesting blood donation:', error);
//       }
//     );
//   }
}





import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DonorCountComponent } from './donor-count/donor-count.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private router: Router) {}

  // Function to navigate to the DonorCount component
  navigateToDonorCount() {
    this.router.navigate(['/donor-count']);
    this.router.navigate(['/login']);
    this.router.navigate(['/contact-us']);
    this.router.navigate(['/donor-list']);
    this.router.navigate(['/home']);
    this.router.navigate(['/search']);
  }
  
}

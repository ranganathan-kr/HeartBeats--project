import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
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

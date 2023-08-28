import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donor-login',
  templateUrl: './donor-login.component.html',
  styleUrls: ['./donor-login.component.css']
})
export class DonorLoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    // // Perform actual login validation here (e.g., check against a service or API)
    // // For demonstration, let's assume a successful login
    // if (this.username === 'your_username' && this.password === 'your_password') {
    //   // Redirect to the donor dashboard page
    //   this.router.navigate(['/donor-dashboard']);
    // } else {
    //   alert('Invalid login credentials. Please try again.');
    // }
    this.router.navigate(['/donor-profile']);
  }
}

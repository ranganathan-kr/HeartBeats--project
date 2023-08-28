import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Donor } from '../donor.model'; // Define the User model

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<Donor | null>;
  public currentUser: Observable<Donor | null>;

  constructor() {
    this.currentUserSubject = new BehaviorSubject<Donor | null>(null);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // Implement methods for login, logout, registration, etc.
  // For simplicity, here's a basic login function:
  login(email: string, password: string) {
    // Authenticate user and update currentUserSubject
  }
}

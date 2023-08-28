import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { Donor } from '../Models/Donor';

@Injectable({
  providedIn: 'root'
})
export class DonorService {

  private registeredDonors: Donor[] = [];
  private loggedInDonor: Donor | null = null;

  private donors: Array<any> = []; // Array to store donor details
 
  constructor(private http: HttpClient) {}
  getDonors() {
    return [...this.donors]; // Return a copy of the donors array
  }
  

  login(email: string, password: string): Observable<any> {
    const loginUrl = `${this.apiUrl}/login`;
    return this.http.post(loginUrl, { email, password });
  }

 
  private apiUrl = 'https://localhost:7026/api/Donors'; // Replace with your API base URL

  getDonorProfile(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }


  registerDonor(donor: any): Observable<any> {
    const url = `${this.apiUrl}`; // Replace with your API endpoint
    return this.http.post(url, donor);
  }

  updateDonor(id: number, updatedDonor: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, updatedDonor);
  }

  deleteDonor(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  requestBlood(donorId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/request/${donorId}`, {});
  }
  reportDonor(donorId: number, reason: string): Observable<any> {
    const url = `${this.apiUrl}/reportDonor`;
    return this.http.post(url, { donorId, reason });
  }
  
  getDonorById(id: number): Observable<any> {
    const url = `${this.apiUrl}/api/Donors/${id}`; // Update the endpoint
    return this.http.get(url);
  }
  CreateDonor(donor: any): Observable<any> {
    const url = `${this.apiUrl}`; // Adjust the URL based on your API endpoint
    return this.http.post(url, donor);
  }
  
  getDonorByEmail(email: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/donors?email=${email}`);
  }

  getCities(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/cities`);
  }

  getStates(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/states`);
  }

  getBloodTypes(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/bloodtypes`);
  }


  searchDonors(city: string, state: string, bloodType: string): Observable<Donor[]> {
    return this.http.get<Donor[]>(`${this.apiUrl}/search`, {
      params: { city, state, bloodType }
    });

  
  }
}
export { Donor };


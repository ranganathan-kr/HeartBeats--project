import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';
import { Donor } from 'src/Models/Donor';

@Injectable({
  providedIn: 'root'
})
 export  class DonorsService {

  private apiUrl = 'https://localhost:7043/api/Donor';



  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<Donor> {
    const loginData = { username, password }; // Create an object with username and password

    return this.http.post<Donor>(`${this.apiUrl}/login`, loginData);
  }

  updateDonor(id: number, updatedDonor: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, updatedDonor);
  }

  deleteDonor(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getDonorProfile(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }
  public AddDonor(student : any):Observable<any>
  {
    return this.http.post(this.apiUrl, student);
  }
  // public AddDonor(donor : any):Observable<any>
  // {
  //   return this.http.post(this.apiUrl, donor);
  // }
 
  searchDonors(city: string, state: string, bloodType: string): Observable<Donor[]> {
    return this.http.get<Donor[]>(`${this.apiUrl}/`, {
      params: { city, state, bloodType }
    });
  
   
  }

  public logindetails(loginform: any)
   {   
     const url = `${this.apiUrl}/phnnumber=${loginform.phnnumber},password=${loginform.password}`; 
     console.log(url);
        return this.http.get(url).pipe(map((response:any)=>  
        {     
         return response  
          }),
        catchError((err)=>{    
            return throwError( () => err.error)   
         })    ); 
         }

}

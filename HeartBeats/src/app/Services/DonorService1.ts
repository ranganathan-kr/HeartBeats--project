import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DonorService1 {

  private basepath = "https://localhost:7026/api/Donors";

  constructor(private http:HttpClient) { }

  public GetDonors():Observable<any>
  {
    return this.http.get(this.basepath );
  }


  public GetDonorById(id:number):Observable<any>
  {
    return this.http.get(`https://localhost:7026/api/Donors/${id}`);                       //.pipe(retry(0), catchError(this.handleError));
  }

  public CreateDonor(donor : any):Observable<any>
  {
    return this.http.post('https://localhost:7026/api/Donors/${id}', donor);
  }

  public UpdateDonor(id:number, donor:any)
  {
    const url = `${this.basepath}/${id}`;
    return this.http.put(url , donor);
  }
  
}
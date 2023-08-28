import { Component } from '@angular/core';
import { DonorService1 } from '../Services/DonorService1';

@Component({
  selector: 'app-get-donors',
  templateUrl: './get-donors.component.html',
  styleUrls: ['./get-donors.component.css']
})
export class GetDonorsComponent {
[x: string]: any;
  public donors: any;
  constructor(private service: DonorService1) { }

  ngOnInit(): void {
    this.getDonors();
  }

  public getDonors(): void 
  {
    this.service.GetDonors().subscribe(result => {
      this.donors = result;
      console.log(this.donors);
    });
  }
}

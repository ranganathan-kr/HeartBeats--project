import { Component, Input } from '@angular/core';
import { Donor } from '../Services/DonorsService';

@Component({
  selector: 'app-donor-list',
  templateUrl: './donor-list.component.html'
})
export class DonorListComponent {
  @Input()
  donors!: Donor[];
}

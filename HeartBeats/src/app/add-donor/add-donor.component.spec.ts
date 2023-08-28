import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDonorComponent } from './add-donor.component';

describe('AddDonorComponent', () => {
  let component: AddDonorComponent;
  let fixture: ComponentFixture<AddDonorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddDonorComponent]
    });
    fixture = TestBed.createComponent(AddDonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

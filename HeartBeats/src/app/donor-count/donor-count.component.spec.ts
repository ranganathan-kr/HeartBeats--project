import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorCountComponent } from './donor-count.component';

describe('DonorCountComponent', () => {
  let component: DonorCountComponent;
  let fixture: ComponentFixture<DonorCountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonorCountComponent]
    });
    fixture = TestBed.createComponent(DonorCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

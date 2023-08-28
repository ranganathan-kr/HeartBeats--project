import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { DonorProfileComponent } from './donor-profile.component';

describe('DonorProfileComponent', () => {
  let component: DonorProfileComponent;
  let fixture: ComponentFixture<DonorProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonorProfileComponent]
    });
    fixture = TestBed.createComponent(DonorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

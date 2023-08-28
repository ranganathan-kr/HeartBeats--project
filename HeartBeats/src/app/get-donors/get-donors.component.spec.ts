import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDonorsComponent } from './get-donors.component';

describe('GetDonorsComponent', () => {
  let component: GetDonorsComponent;
  let fixture: ComponentFixture<GetDonorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetDonorsComponent]
    });
    fixture = TestBed.createComponent(GetDonorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

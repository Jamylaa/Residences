import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddApartmentsByResidenceComponent } from './add-apartments-by-residence.component';

describe('AddApartmentsByResidenceComponent', () => {
  let component: AddApartmentsByResidenceComponent;
  let fixture: ComponentFixture<AddApartmentsByResidenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddApartmentsByResidenceComponent]
    });
    fixture = TestBed.createComponent(AddApartmentsByResidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

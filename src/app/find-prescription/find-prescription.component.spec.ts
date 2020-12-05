import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPrescriptionComponent } from './find-prescription.component';

describe('FindPrescriptionComponent', () => {
  let component: FindPrescriptionComponent;
  let fixture: ComponentFixture<FindPrescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindPrescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionUpdateInfoComponent } from './prescription-update-info.component';

describe('PrescriptionUpdateInfoComponent', () => {
  let component: PrescriptionUpdateInfoComponent;
  let fixture: ComponentFixture<PrescriptionUpdateInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrescriptionUpdateInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriptionUpdateInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

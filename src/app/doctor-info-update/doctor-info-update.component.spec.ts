import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorInfoUpdateComponent } from './doctor-info-update.component';

describe('DoctorInfoUpdateComponent', () => {
  let component: DoctorInfoUpdateComponent;
  let fixture: ComponentFixture<DoctorInfoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorInfoUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorInfoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

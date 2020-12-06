import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAppointmentInfoComponent } from './update-appointment-info.component';

describe('UpdateAppointmentInfoComponent', () => {
  let component: UpdateAppointmentInfoComponent;
  let fixture: ComponentFixture<UpdateAppointmentInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAppointmentInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAppointmentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNotificationInfoComponent } from './update-notification-info.component';

describe('UpdateNotificationInfoComponent', () => {
  let component: UpdateNotificationInfoComponent;
  let fixture: ComponentFixture<UpdateNotificationInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateNotificationInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateNotificationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

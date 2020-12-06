import {Component, Input, OnInit} from '@angular/core';
import {AppointmentServices} from '../appointment.service';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {

  @Input() firstName: string;
  @Input() lastName: string;
  @Input() type: string;
  @Input() duration: string;
  @Input() physicianAvailability: boolean;
  @Input() date: string;
  @Input() phoneNumber: string;
  @Input() email: string;
  @Input() doctor: string;

  constructor(private appointmentService: AppointmentServices) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  addAppointment() {
    // tslint:disable-next-line:max-line-length
    this.appointmentService.addAppointment(this.firstName, this.lastName, this.type, this.duration, this.physicianAvailability, this.date, this.phoneNumber, this.email, this.doctor);
  }

}

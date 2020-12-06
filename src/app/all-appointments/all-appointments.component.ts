import { Component, OnInit } from '@angular/core';
import {AppointmentServices} from '../appointment.service';

@Component({
  selector: 'app-all-appointments',
  templateUrl: './all-appointments.component.html',
  styleUrls: ['./all-appointments.component.css']
})
export class AllAppointmentsComponent implements OnInit {

  public appointments;

  constructor(private appointmentService: AppointmentServices) { }

  ngOnInit(): void {
    this.getAppointments();
  }

  // tslint:disable-next-line:typedef
  private getAppointments() {
    this.appointmentService.getAppointment().subscribe(
      data => {this.appointments = data; },
      err => console.log(err),
      () => console.log('Finished Loading')
    );
  }
}

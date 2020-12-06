import { Component, OnInit } from '@angular/core';
import {AppointmentServices} from '../appointment.service';

@Component({
  selector: 'app-delete-appointments',
  templateUrl: './delete-appointments.component.html',
  styleUrls: ['./delete-appointments.component.css']
})
export class DeleteAppointmentsComponent implements OnInit {

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

  // tslint:disable-next-line:typedef variable-name
  deleteAppointment(_id: string) {
    this.appointmentService.deleteAppointment(_id);
  }
}

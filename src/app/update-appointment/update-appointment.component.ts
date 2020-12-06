import { Component, OnInit } from '@angular/core';
import {AppointmentServices} from '../appointment.service';

@Component({
  selector: 'app-update-appointment',
  templateUrl: './update-appointment.component.html',
  styleUrls: ['./update-appointment.component.css']
})
export class UpdateAppointmentComponent implements OnInit {

  public appointment;

  constructor(private appointmentService: AppointmentServices) { }

  ngOnInit(): void {
    this.getAppointment();
  }

  // tslint:disable-next-line:typedef
  private getAppointment() {
    this.appointmentService.getAppointment().subscribe(
      data => {this.appointment = data; },
      err => console.log(err),
      () => console.log('Finished Loading')
    );
  }

  // tslint:disable-next-line:typedef
  hideList() {
    document.getElementById('hide-div').style.display = 'none';
    document.getElementById('hide-table').style.display = 'none';
  }

}

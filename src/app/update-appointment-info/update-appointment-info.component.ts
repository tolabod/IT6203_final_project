import {Component, Input, OnInit} from '@angular/core';
import {AppointmentServices} from '../appointment.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-update-appointment-info',
  templateUrl: './update-appointment-info.component.html',
  styleUrls: ['./update-appointment-info.component.css']
})
export class UpdateAppointmentInfoComponent implements OnInit {

  private id: string;

  @Input() firstName: string;
  @Input() lastName: string;
  @Input() type: string;
  @Input() duration: string;
  @Input() physicianAvailability: boolean;
  @Input() date: string;
  @Input() phoneNumber: string;
  @Input() email: string;
  @Input() doctor: string;

  constructor(private appointmentService: AppointmentServices, public route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('_id')) {
        this.id = paramMap.get('_id');
      } else {
        this.id = null;
      }
    });
  }

  // tslint:disable-next-line:typedef
  updateAppointment() {
    // tslint:disable-next-line:max-line-length
    this.appointmentService.updateAppointment(this.id, this.firstName, this.lastName, this.type, this.duration, this.physicianAvailability, this.date, this.phoneNumber, this.email, this.doctor);
  }

}

import { Component, OnInit, Input } from '@angular/core';
import {DoctorService} from '../doctor.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {
  constructor(private doctorService: DoctorService) { }

  @Input() firstName: string;
  @Input() lastName: string;
  @Input() city: string;
  @Input() specialty: string;
  @Input() phone: string;

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

  // tslint:disable-next-line:typedef
  addDoctor() {
    this.doctorService.addDoctors(this.firstName, this.lastName, this.phone, this.city, this.specialty)
  }
}

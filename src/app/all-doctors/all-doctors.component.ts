import { Component, OnInit } from '@angular/core';
import {DoctorService} from '../doctor.service';

@Component({
  selector: 'app-all-doctors',
  templateUrl: './all-doctors.component.html',
  styleUrls: ['./all-doctors.component.css']
})
export class AllDoctorsComponent implements OnInit {

  public doctor;

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.getDoctors();
  }

  // tslint:disable-next-line:typedef
  private getDoctors() {
    this.doctorService.getDoctors().subscribe(
      data => {this.doctor = data; },
      err => console.log(err),
      () => console.log('Finished Loading')
    );
  }
}

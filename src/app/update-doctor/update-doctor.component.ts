import { Component, OnInit } from '@angular/core';
import {DoctorService} from '../doctor.service';

@Component({
  selector: 'app-update-doctor',
  templateUrl: './update-doctor.component.html',
  styleUrls: ['./update-doctor.component.css']
})
export class UpdateDoctorComponent implements OnInit {

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

  // tslint:disable-next-line:typedef
  hideList() {
    document.getElementById('hide-div').style.display = 'none';
    document.getElementById('hide-table').style.display = 'none';
  }
}

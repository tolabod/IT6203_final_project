import { Component, OnInit } from '@angular/core';
import {DoctorService} from '../doctor.service';

@Component({
  selector: 'app-delete-doctor',
  templateUrl: './delete-doctor.component.html',
  styleUrls: ['./delete-doctor.component.css']
})
export class DeleteDoctorComponent implements OnInit {

  public doctor;

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.getDoctors();
  }

  // tslint:disable-next-line:typedef variable-name
  deleteDoctor(_id: string) {
    this.doctorService.deleteDoctor(_id);
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

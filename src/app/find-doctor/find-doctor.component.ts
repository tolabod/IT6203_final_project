import {Component, Input, OnInit} from '@angular/core';
import {DoctorService} from '../doctor.service';

@Component({
  selector: 'app-find-doctor',
  templateUrl: './find-doctor.component.html',
  styleUrls: ['./find-doctor.component.css']
})
export class FindDoctorComponent implements OnInit {
  @Input() searchDoctor: string;
  public doctor;

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  findDoctor() {
    this.doctorService.findDoctor(this.searchDoctor).subscribe(
      data => {this.doctor = data; },
      err => console.log(err),
      () => console.log('Search Item Available')
    );
  }
}

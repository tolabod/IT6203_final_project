import {Component, Input, OnInit} from '@angular/core';
import {DoctorService} from '../doctor.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-doctor-info-update',
  templateUrl: './doctor-info-update.component.html',
  styleUrls: ['./doctor-info-update.component.css']
})
export class DoctorInfoUpdateComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  public id: string;

  constructor(private doctorService: DoctorService, public route: ActivatedRoute, private router: Router) { }

  @Input() firstName: string;
  @Input() lastName: string;
  @Input() city: string;
  @Input() specialty: string;
  @Input() phoneNumber: string;

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
  updateDoctor() {
    this.doctorService.updateDoctor(this.id, this.firstName, this.lastName, this.phoneNumber, this.city, this.specialty);
  }

}

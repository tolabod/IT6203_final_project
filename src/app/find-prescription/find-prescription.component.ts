import { Component, OnInit, Input } from '@angular/core';
import {PrescriptionService} from '../prescription.service';

@Component({
  selector: 'app-find-prescription',
  templateUrl: './find-prescription.component.html',
  styleUrls: ['./find-prescription.component.css']
})
export class FindPrescriptionComponent implements OnInit {
  @Input() searchPrescription: string;
  public prescription;

  constructor(private prescriptionService: PrescriptionService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  findPrescription() {
    this.prescriptionService.findPrescription(this.searchPrescription).subscribe(
      data => {this.prescription = data; },
      err => console.log(err),
      () => console.log('Search Item Available')
    );
  }

}

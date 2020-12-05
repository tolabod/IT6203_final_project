import { Component, OnInit } from '@angular/core';
import {PrescriptionService} from '../prescription.service';

@Component({
  selector: 'app-all-prescription',
  templateUrl: './all-prescription.component.html',
  styleUrls: ['./all-prescription.component.css']
})
export class AllPrescriptionComponent implements OnInit {

  public prescription;

  constructor(private prescriptionService: PrescriptionService) { }

  ngOnInit(): void {
    this.getPrescription();
  }

  // tslint:disable-next-line:typedef
  private getPrescription() {
    this.prescriptionService.getPrescription().subscribe(
      data => {this.prescription = data; },
      err => console.log(err),
      () => console.log('Finished Loading')
    );
  }
}

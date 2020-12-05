import { Component, OnInit } from '@angular/core';
import {PrescriptionService} from '../prescription.service';

@Component({
  selector: 'app-update-prescription',
  templateUrl: './update-prescription.component.html',
  styleUrls: ['./update-prescription.component.css']
})
export class UpdatePrescriptionComponent implements OnInit {

  public prescription;

  constructor(private prescriptionService: PrescriptionService) { }

  ngOnInit(): void {
    this.getPrescription()
;  }

  // tslint:disable-next-line:typedef
  private getPrescription() {
    this.prescriptionService.getPrescription().subscribe(
      data => {this.prescription = data; },
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

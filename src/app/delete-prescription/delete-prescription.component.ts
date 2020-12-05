import { Component, OnInit } from '@angular/core';
import {PrescriptionService} from '../prescription.service';

@Component({
  selector: 'app-delete-prescription',
  templateUrl: './delete-prescription.component.html',
  styleUrls: ['./delete-prescription.component.css']
})
export class DeletePrescriptionComponent implements OnInit {

  public prescription;

  // tslint:disable-next-line:variable-name
  constructor(private prescriptionService: PrescriptionService) { }

  ngOnInit(): void {
    this.getPrescription();
  }

  // tslint:disable-next-line:typedef variable-name
  deletePrescription(_id: string) {
    this.prescriptionService.deletePrescription(_id);
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

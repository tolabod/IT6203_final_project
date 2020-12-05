import {Component, Input, OnInit} from '@angular/core';
import {PrescriptionService} from '../prescription.service';

@Component({
  selector: 'app-add-prescription',
  templateUrl: './add-prescription.component.html',
  styleUrls: ['./add-prescription.component.css']
})
export class AddPrescriptionComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  constructor(private _prescription: PrescriptionService) { }

  @Input() patient: string;
  @Input() prescription: string;
  @Input() dosage: number;
  @Input() usageInterval: number;
  @Input() pharmacy: string;
  @Input() manufacturer: string;
  @Input() presidingDoctor: string;

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  addPrescription() {
    // tslint:disable-next-line:max-line-length
    this._prescription.addPrescription(this.patient, this.prescription, this.dosage, this.usageInterval, this.pharmacy, this.manufacturer, this.presidingDoctor);
  }
}

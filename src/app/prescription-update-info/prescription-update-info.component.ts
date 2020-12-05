import {Component, Input, OnInit} from '@angular/core';
import {PrescriptionService} from '../prescription.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-prescription-update-info',
  templateUrl: './prescription-update-info.component.html',
  styleUrls: ['./prescription-update-info.component.css']
})
export class PrescriptionUpdateInfoComponent implements OnInit {

  private id: string;

  constructor(private prescriptionService: PrescriptionService, public route: ActivatedRoute, private router: Router) { }

  @Input() patient: string;
  @Input() prescription: string;
  @Input() dosage: number;
  @Input() usageInterval: number;
  @Input() pharmacy: string;
  @Input() manufacturer: string;
  @Input() presidingDoctor: string;

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
  updatePrescription() {
    // tslint:disable-next-line:max-line-length
    this.prescriptionService.updatePrescription(this.id, this.patient, this.prescription, this.dosage, this.usageInterval, this.pharmacy, this.manufacturer, this.presidingDoctor);
  }
}

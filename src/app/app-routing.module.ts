import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PrescriptionComponent} from './prescription/prescription.component';
import {AddPrescriptionComponent} from './add-prescription/add-prescription.component';
import {DeletePrescriptionComponent} from './delete-prescription/delete-prescription.component';
import {FindPrescriptionComponent} from './find-prescription/find-prescription.component';
import {AllPrescriptionComponent} from './all-prescription/all-prescription.component';
import {UpdatePrescriptionComponent} from './update-prescription/update-prescription.component';
import {PrescriptionUpdateInfoComponent} from './prescription-update-info/prescription-update-info.component';
import {DoctorComponent} from './doctor/doctor.component';
import {AddDoctorComponent} from './add-doctor/add-doctor.component';
import {FindDoctorComponent} from './find-doctor/find-doctor.component';
import {DeleteDoctorComponent} from './delete-doctor/delete-doctor.component';

const routes: Routes = [
  {path: 'prescription', component: PrescriptionComponent, children: [
      {path: 'add', component: AddPrescriptionComponent},
      {path: 'delete', component: DeletePrescriptionComponent},
      {path: 'find', component: FindPrescriptionComponent},
      {path: 'all', component: AllPrescriptionComponent},
      {path: 'update', component: UpdatePrescriptionComponent, children: [
          {path: 'info/:_id', component: PrescriptionUpdateInfoComponent}
        ]},
    ]},

  {path: 'doctor', component: DoctorComponent, children: [
      {path: 'add', component: AddDoctorComponent},
      {path: 'find', component: FindDoctorComponent},
      {path: 'delete', component: DeleteDoctorComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

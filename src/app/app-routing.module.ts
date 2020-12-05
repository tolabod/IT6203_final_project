import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PrescriptionComponent} from './prescription/prescription.component';
import {AddPrescriptionComponent} from './add-prescription/add-prescription.component';
import {DeletePrescriptionComponent} from './delete-prescription/delete-prescription.component';
import {FindPrescriptionComponent} from './find-prescription/find-prescription.component';

const routes: Routes = [
  {path: 'prescription', component: PrescriptionComponent, children: [
      {path: 'add', component: AddPrescriptionComponent},
      {path: 'delete', component: DeletePrescriptionComponent},
      {path: 'find', component: FindPrescriptionComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

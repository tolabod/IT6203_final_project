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
import {AllDoctorsComponent} from './all-doctors/all-doctors.component';
import {UpdateDoctorComponent} from './update-doctor/update-doctor.component';
import {DoctorInfoUpdateComponent} from './doctor-info-update/doctor-info-update.component';
import {NotificationComponent} from './notification/notification.component';
import {AddNotificationComponent} from './add-notification/add-notification.component';
import {AllNotificationComponent} from './all-notification/all-notification.component';
import {DeleteNotificationComponent} from './delete-notification/delete-notification.component';
import {UpdateNotificationComponent} from './update-notification/update-notification.component';
import {UpdateNotificationInfoComponent} from './update-notification-info/update-notification-info.component';
import {AppointmentComponent} from './appointment/appointment.component';
import {AddAppointmentComponent} from './add-appointment/add-appointment.component';
import {AllAppointmentsComponent} from './all-appointments/all-appointments.component';
import {DeleteAppointmentsComponent} from './delete-appointments/delete-appointments.component';
import {UpdateAppointmentComponent} from './update-appointment/update-appointment.component';
import {UpdateAppointmentInfoComponent} from './update-appointment-info/update-appointment-info.component';

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
      {path: 'all', component: AllDoctorsComponent},
      {path: 'update', component: UpdateDoctorComponent, children: [
          {path: 'info/:_id', component: DoctorInfoUpdateComponent},
        ]},
    ]},

  {path: 'notification', component: NotificationComponent, children: [
      {path: 'add', component: AddNotificationComponent},
      {path: 'all', component: AllNotificationComponent},
      {path: 'delete', component: DeleteNotificationComponent},
      {path: 'update', component: UpdateNotificationComponent, children: [
          {path: 'info/:_id', component: UpdateNotificationInfoComponent},
        ]},
    ]},

  {path: 'appointment', component: AppointmentComponent, children: [
      {path: 'add', component: AddAppointmentComponent},
      {path: 'all', component: AllAppointmentsComponent},
      {path: 'delete', component: DeleteAppointmentsComponent},
      {path: 'update', component: UpdateAppointmentComponent, children: [
          {path: 'info/:_id', component: UpdateAppointmentInfoComponent},
        ]},
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

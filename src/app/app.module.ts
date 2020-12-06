import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrescriptionComponent } from './prescription/prescription.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { AddPrescriptionComponent } from './add-prescription/add-prescription.component';
import {FormsModule} from '@angular/forms';
import {PrescriptionService} from './prescription.service';
import { DeletePrescriptionComponent } from './delete-prescription/delete-prescription.component';
import { FindPrescriptionComponent } from './find-prescription/find-prescription.component';
import { AllPrescriptionComponent } from './all-prescription/all-prescription.component';
import { UpdatePrescriptionComponent } from './update-prescription/update-prescription.component';
import { PrescriptionUpdateInfoComponent } from './prescription-update-info/prescription-update-info.component';
import { DoctorComponent } from './doctor/doctor.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import {DoctorService} from './doctor.service';
import { FindDoctorComponent } from './find-doctor/find-doctor.component';
import { DeleteDoctorComponent } from './delete-doctor/delete-doctor.component';
import { AllDoctorsComponent } from './all-doctors/all-doctors.component';
import { UpdateDoctorComponent } from './update-doctor/update-doctor.component';
import { DoctorInfoUpdateComponent } from './doctor-info-update/doctor-info-update.component';
import { NotificationComponent } from './notification/notification.component';
import { AddNotificationComponent } from './add-notification/add-notification.component';
import {MatInputModule} from '@angular/material/input';
import {NotificationService} from './notification.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PrescriptionComponent,
    AddPrescriptionComponent,
    DeletePrescriptionComponent,
    FindPrescriptionComponent,
    AllPrescriptionComponent,
    UpdatePrescriptionComponent,
    PrescriptionUpdateInfoComponent,
    DoctorComponent,
    AddDoctorComponent,
    FindDoctorComponent,
    DeleteDoctorComponent,
    AllDoctorsComponent,
    UpdateDoctorComponent,
    DoctorInfoUpdateComponent,
    NotificationComponent,
    AddNotificationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
  ],
  providers: [
    PrescriptionService,
    DoctorService,
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

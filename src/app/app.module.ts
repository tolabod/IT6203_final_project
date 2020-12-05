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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PrescriptionService],
  bootstrap: [AppComponent]
})
export class AppModule { }

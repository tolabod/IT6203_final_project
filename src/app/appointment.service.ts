import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()

export class AppointmentServices {
  constructor(private http: HttpClient) {}

  // tslint:disable-next-line:typedef
  getAppointment() {
    return this.http.get('http://localhost:3000/api/v1/appointment/get');
  }


  // tslint:disable-next-line:typedef max-line-length
  addAppointment(firstName: string, lastName: string, type: string, duration: string, physicianAvailability: boolean, date: string, phoneNumber: string, email: string, doctor: string) {
    // tslint:disable-next-line:max-line-length
    this.http.post('http://localhost:3000/api/v1/appointment/add', {firstName, lastName, type, duration, physicianAvailability, phoneNumber, email, doctor, date})
      .subscribe((responseData) => {
        console.log(responseData);
      });
    location.reload();
  }


  // tslint:disable-next-line:typedef
  deleteAppointment(notificationId: string) {
    this.http.delete('http://localhost:3000/api/v1/appointment/delete/' + notificationId)
      .subscribe(() => console.log(`Deleted: ${notificationId}`));
    location.reload();
  }

  // tslint:disable-next-line:typedef max-line-length
  updateAppointment(id: string, firstName: string, lastName: string, type: string, duration: string, physicianAvailability: boolean, date: string, phoneNumber: string, email: string, doctor: string) {
    // tslint:disable-next-line:max-line-length
    this.http.put('http://localhost:3000/api/v1/appointment/update/' + id, {firstName, lastName, type, duration, physicianAvailability, phoneNumber, email, doctor, date})
      .subscribe(() => {
        console.log(`Updated: ${id}`);
      });
    location.assign('appointment/update');
  }
}

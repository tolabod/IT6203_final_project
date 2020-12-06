import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()

export class DoctorService {
  constructor(private http: HttpClient) {}


  // tslint:disable-next-line:typedef
  getDoctors() {
    return this.http.get('http://localhost:3000/api/v1/doctors/get');
  }

  // tslint:disable-next-line:typedef
  findDoctor(search: string) {
    // console.log(search);
    return this.http.get('http://localhost:3000/api/v1/doctor/find/' + search);
  }

  // tslint:disable-next-line:typedef
  addDoctors(firstName: string, lastName: string, phoneNumber: string, city: string, specialty: string) {
    this.http.post('http://localhost:3000/api/v1/doctors/add', { firstName, lastName, phoneNumber, city, specialty })
      .subscribe((responseData) => {
        console.log(responseData);
      });
    location.reload();
  }

  // tslint:disable-next-line:typedef
  deleteDoctor(doctorId: string) {
    this.http.delete('http://localhost:3000/api/v1/doctors/delete/' + doctorId)
      .subscribe(() => {
        console.log('Deleted: ' + doctorId);
      });
    location.reload();
  }

  // tslint:disable-next-line:typedef
  updateDoctor(doctorId: string, firstName: string, lastName: string, phoneNumber: string, city: string, specialty: string) {
    this.http.put('http://localhost:3000/api/v1/doctors/update/' + doctorId, { firstName, lastName, phoneNumber, city, specialty })
      .subscribe(() => {
        console.log('Updated: ' + doctorId);
      });
    location.reload();
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()

export class NotificationService {
  constructor(private http: HttpClient) {}

  // tslint:disable-next-line:typedef
  getNotification() {
    return this.http.get('http://localhost:3000/api/v1/notification/get');
  }


  // tslint:disable-next-line:typedef max-line-length
  addNotification(firstName: string, lastName: string, type: string, enableNotification: boolean, date: string, phoneNumber: string, email: string, doctor: string) {
    // tslint:disable-next-line:max-line-length
    this.http.post('http://localhost:3000/api/v1/notification/add', {firstName, lastName, type, enableNotification, phoneNumber, email, doctor, date})
      .subscribe((responseData) => {
        console.log(responseData);
      });
    location.reload();
  }


  // tslint:disable-next-line:typedef
  deleteNotification(notificationId: string) {
    this.http.delete('http://localhost:3000/api/v1/notification/delete/' + notificationId)
      .subscribe(() => console.log(`Deleted: ${notificationId}`));
    location.reload();
  }

  // tslint:disable-next-line:typedef max-line-length
  updateNotification(id: string, firstName: string, lastName: string, type: string, date: string, enableNotification: boolean, phoneNumber: string, email: string, doctor: string) {
    // tslint:disable-next-line:max-line-length
    this.http.put('http://localhost:3000/api/v1/notification/update/' + id, {firstName, lastName, type, date, enableNotification, phoneNumber, email, doctor})
      .subscribe(() => {
        console.log(`Updated: ${id}`);
      });
    location.assign('notification/update');
  }
}

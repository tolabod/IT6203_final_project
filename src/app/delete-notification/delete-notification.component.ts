import { Component, OnInit } from '@angular/core';
import {NotificationService} from '../notification.service';

@Component({
  selector: 'app-delete-notification',
  templateUrl: './delete-notification.component.html',
  styleUrls: ['./delete-notification.component.css']
})
export class DeleteNotificationComponent implements OnInit {

  public notification;

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.getNotifications();
  }


  // tslint:disable-next-line:typedef variable-name
  deleteNotification(_id: string) {
    this.notificationService.deleteNotification(_id);
  }

  // tslint:disable-next-line:typedef
  private getNotifications() {
    this.notificationService.getNotification().subscribe(
      data => {this.notification = data; },
      err => console.log(err),
      () => console.log('Finished Loading')
    );
  }
}

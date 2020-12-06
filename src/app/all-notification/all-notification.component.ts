import { Component, OnInit } from '@angular/core';
import {NotificationService} from '../notification.service';

@Component({
  selector: 'app-all-notification',
  templateUrl: './all-notification.component.html',
  styleUrls: ['./all-notification.component.css']
})
export class AllNotificationComponent implements OnInit {

  public notification;

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.getNotifications();
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

import { Component, OnInit } from '@angular/core';
import {NotificationService} from '../notification.service';

@Component({
  selector: 'app-update-notification',
  templateUrl: './update-notification.component.html',
  styleUrls: ['./update-notification.component.css']
})
export class UpdateNotificationComponent implements OnInit {

  public notification;

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.getNotification();
  }

  // tslint:disable-next-line:typedef
  private getNotification() {
    this.notificationService.getNotification().subscribe(
      data => {this.notification = data; },
      err => console.log(err),
      () => console.log('Finished Loading')
    );
  }

  // tslint:disable-next-line:typedef
  hideList() {
    document.getElementById('hide-div').style.display = 'none';
    document.getElementById('hide-table').style.display = 'none';
  }
}

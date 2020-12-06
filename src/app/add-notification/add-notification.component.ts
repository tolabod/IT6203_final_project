import {Component, Input, OnInit} from '@angular/core';
import {NotificationService} from '../notification.service';

@Component({
  selector: 'app-add-notification',
  templateUrl: './add-notification.component.html',
  styleUrls: ['./add-notification.component.css']
})
export class AddNotificationComponent implements OnInit {

  @Input() firstName: string;
  @Input() lastName: string;
  @Input() type: string;
  @Input() enableNotification: boolean;
  @Input() date: string;
  @Input() phoneNumber: string;
  @Input() email: string;
  @Input() doctor: string;

  constructor(private notificationService: NotificationService) { }

  // constructor() {
  // }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  addNotification() {
    // tslint:disable-next-line:max-line-length
    this.notificationService.addNotification(this.firstName, this.lastName, this.type, this.enableNotification, this.date, this.phoneNumber, this.email, this.doctor);
  }
}

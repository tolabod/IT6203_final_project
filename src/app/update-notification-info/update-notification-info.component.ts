import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {NotificationService} from '../notification.service';

@Component({
  selector: 'app-update-notification-info',
  templateUrl: './update-notification-info.component.html',
  styleUrls: ['./update-notification-info.component.css']
})
export class UpdateNotificationInfoComponent implements OnInit {

  private id: string;

  @Input() firstName: string;
  @Input() lastName: string;
  @Input() type: string;
  @Input() enableNotification: boolean;
  @Input() date: string;
  @Input() phoneNumber: string;
  @Input() email: string;
  @Input() doctor: string;

  constructor(private notificationService: NotificationService, public route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('_id')) {
        this.id = paramMap.get('_id');
      } else {
        this.id = null;
      }
    });
  }

  // tslint:disable-next-line:typedef
  updateNotification() {
    // tslint:disable-next-line:max-line-length
    this.notificationService.updateNotification(this.id, this.firstName, this.lastName, this.type, this.date, this.enableNotification, this.phoneNumber, this.email, this.doctor);
  }

}

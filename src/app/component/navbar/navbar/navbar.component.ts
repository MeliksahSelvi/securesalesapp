import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../../service/user.service";
import {User} from "../../../interface/user";
import {NotificationService} from "../../../service/notification.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {

  @Input()user:User;

  constructor(private router:Router,private userService:UserService,private notification:NotificationService) {
  }

  logOut(){
    this.userService.logOut();
    this.router.navigate(['/login']);
    this.notification.onSuccess('You\'ve been successfully logged out');
  }
}

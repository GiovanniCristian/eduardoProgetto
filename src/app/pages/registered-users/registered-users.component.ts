import { UserService } from './../../shared/services/user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { IUser } from 'src/app/shared/models/iuser.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-registered-users',
  templateUrl: './registered-users.component.html',
  styleUrls: ['./registered-users.component.scss']
})
export class RegisteredUsersComponent implements OnInit , OnDestroy {

  users: IUser[] = new Array<IUser>();
  subscription: any

  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.subscription =
    this.userService.getAll().subscribe((res) => {
      this.users = res.data;
      console.log(res.data);
    })
  }

  ngOnDestroy(): void {
    if (this.subscription) {
    this.subscription.unsubscribe();
    }
  }
}

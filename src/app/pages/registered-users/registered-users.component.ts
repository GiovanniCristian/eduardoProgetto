import { UserService } from './../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-registered-users',
  templateUrl: './registered-users.component.html',
  styleUrls: ['./registered-users.component.scss']
})
export class RegisteredUsersComponent implements OnInit {

  users: User[] = new Array<User>();

  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.userService.getAll().subscribe((res) => {
      this.users = res;
      console.log(res);
    })
  }
}

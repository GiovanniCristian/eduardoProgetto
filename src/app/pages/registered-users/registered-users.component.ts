import { UserService } from './../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registered-users',
  templateUrl: './registered-users.component.html',
  styleUrls: ['./registered-users.component.scss']
})
export class RegisteredUsersComponent implements OnInit {

  users: any = []

  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.userService.getAll().subscribe((users: any) => {
      this.users = users.data;
      console.log(users.data);
    })
  }
}

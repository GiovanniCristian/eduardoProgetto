import { UserService } from './../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  data = {
    email: '',
    password: ''
  };

  constructor(private userService: UserService){ }


  ngOnInit(): void {
}

  setEmail(email: string):void {
    this.data.email = email
  }
  setPassword(password: string):void {
    this.data.password = password
  }

  registerUser() {
    this.userService.register(this.data).subscribe(data => {
      console.log(data);

      }, err => {console.log(err);
    })
  }
}

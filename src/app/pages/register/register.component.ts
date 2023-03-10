import { UserService } from './../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // dati //
  data = {
    email: '',
    password: ''
  };

  //  imoprtazione del service nel costruttore del componente //
  constructor(private userService: UserService){ }


  ngOnInit(): void {
}
  //  funzioni //
  setEmail(email: string):void {
    this.data.email = email
  }
  setPassword(password: string):void {
    this.data.password = password
  }

  registerUser() {
    this.userService.register(this.data).subscribe({
      next: data => {console.log(data);},
      error: err => {console.log(err);}
    })
  }
}

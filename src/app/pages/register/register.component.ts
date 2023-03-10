import { UserService } from './../../shared/services/user.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit , OnDestroy {
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

  // customizzare il messaggio in console per la chiamata post //
  registerUser() {
    this.userService.register(this.data).subscribe({
      next: data => {
        console.log('New user registered');
        console.log(data);
      },
      error: err => {
        console.log('Please, try Again');
        console.log(err);
      }
    })
  }

  ngOnDestroy(): void {
    this.userService.unsubscribe();
  }
}

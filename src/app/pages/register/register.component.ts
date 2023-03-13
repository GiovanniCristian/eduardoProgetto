import { UserService } from './../../shared/services/user.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  // dati //
  data = {
    email: '',
    password: '',
  };

  //creo una variabile dove salvare il subscribe
  sub: any

  //  imoprtazione del service nel costruttore del componente //
  constructor(private userService: UserService) {}

  ngOnInit(): void {

  }
  //  funzioni //
  setEmail(email: string): void {
    this.data.email = email;
  }
  setPassword(password: string): void {
    this.data.password = password;
  }

  // customizzare il messaggio in console per la chiamata post //
  registerUser() {
    // this.sub richiamo la variabile creata sopra per salvare i dati della subscribe //
    this.sub = this.userService.register(this.data).subscribe({

      //this.data salvo i dati con il metodo register//
      //e apro la subscription con loro, NON CON IL SERVICE//

      next: (data) => {
        console.log('New user registered');
        console.log(data);
      },
      error: (err) => {
        console.log('Please, try Again');
        console.log(err);
      },
    });
  }

  // distruggiamo il componente (lo chiudiamo dal browser) e //
  // spengo la subcription per non continuare a mandare dati //
  ngOnDestroy(): void {
    if (this.sub) {
    this.sub.unsubscribe();
    }
  }
}

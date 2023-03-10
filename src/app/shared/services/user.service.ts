/*  il SERVICE serve a catturare la logica comune per i componenti in modo da
semplificare il codice all'interno del TS dei componenti vari. Una volta creato,
lo si importa nel costruttore del componente  */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = new Array<User>();

  constructor(private http:HttpClient) { }

  // chiamate API //
  register(user: any) {
  return this.http.post('https://reqres.in/api/users' , user)
  }

  getAll() {
    return this.http.get<User[]>('https://reqres.in/api/users')
  }
}

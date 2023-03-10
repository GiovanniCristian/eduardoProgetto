/*  il SERVICE serve a catturare la logica comune per i componenti in modo da
semplificare il codice all'interno del TS dei componenti vari. Una volta creato,
lo si importa nel costruttore del componente  */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../models/iuser.model';
import { IUserRes } from '../models/iuser-res.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  unsubscribe() {
    throw new Error('Method not implemented.');
  }
  users: IUser[] = new Array<IUser>();

  constructor(private http:HttpClient) { }

  // chiamate API //
  register(user: any) {
  return this.http.post('https://reqres.in/api/users' , user)
  }

  // questa chiamata riceve i dati "DATA" dal BE quindi inserisco il modello IUserRes //
  // senza le [] perché mi torna un oggetto (oggeto DATA) //
  getAll() {
    return this.http.get<IUserRes>('https://reqres.in/api/users')
  }
}

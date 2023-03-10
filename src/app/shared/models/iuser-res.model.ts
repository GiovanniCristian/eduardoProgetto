import { IUser } from "./iuser.model";

// il backend invia gli oggetti "data" e creo un nuovo modello che dichiara che data contiene i miei User //
export interface IUserRes {
  data: IUser[];
}

// i modelli servono a memorizzare blocchi di informazioni da passare ai dati nei componenti //
// possono essere Interfaccia o Classi //
// Interfaccia (Typescript) è la struttura scheletro dell'oggetto e contiene le info da memorizzare //
// le Classi sono veri costruttori che servono a progettare //

export class User {
  public users: string;
  public email: string;
  public password: string


  constructor(users: string, email: string, password: string) {
    this.users = users;
    this.email = email;
    this.password = password;
  }
}

// i modelli servono a memorizzare blocchi di informazioni da passare ai dati nei componenti //
// possono essere Interfaccia o Classi //
// Interfaccia (Typescript) è la struttura scheletro dell'oggetto e contiene le info da memorizzare //
// le Classi sono veri costruttori che servono a progettare //

// modello dei dati interni a "data" dal backend //
export interface IUser {
  id: number;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
}

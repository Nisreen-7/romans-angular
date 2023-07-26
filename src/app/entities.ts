export interface Utilisateur {
  id?:number;
  name:string;
  address:string;
  email:string;
  telephone:number;
}

export interface Annonce {
  id?:number;
  image:string;
  title:string;
  description:string;
  dateA:Date;
  categorie:string;
  statueA:string;
  utilisateur?:Utilisateur;
}

export interface Demande {
  id?:number;
  date_debut:Date;
  date_retour:Date;
  raison:string;
  statueD:string;
  utilisateur?:Utilisateur;
  annonce?:Annonce;
}

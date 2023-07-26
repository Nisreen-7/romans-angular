import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Annonce } from './entities';
@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  constructor(private http:HttpClient) { }

  all() {
    return this.http.get<Annonce[]>(environment.serverUrl+'/api/annonce');
  }

  one(id:number) {
    return this.http.get<Annonce>(environment.serverUrl+'/api/annonce/'+id);
  }

  add(annonce:Annonce) {
    return this.http.post<Annonce>(environment.serverUrl+'/api/annonce', annonce);
  }

  delete(id:number) {
    return this.http.delete<void>(environment.serverUrl+'/api/annonce/'+id);

  }

  update(annonce:Annonce) {
    return this.http.patch<Annonce>('http://localhost:8000/api/annonce/'+annonce.id, {...annonce, utilisateur:undefined});
  }


}

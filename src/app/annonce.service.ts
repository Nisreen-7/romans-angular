import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Annonce } from './entities';
@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  constructor(private http:HttpClient) { }

  fetchAll() {
    return this.http.get<Annonce[]>(environment.serverUrl+'/api/annonce');
  }

  fetchOne(id:number) {
    return this.http.get<Annonce>(environment.serverUrl+'/api/annonce/'+id);
  }

  add(annonce:Annonce) {
    return this.http.post<Annonce>(environment.serverUrl+'/api/annonce', annonce);
  }

  delete(id:number) {
    return this.http.delete<void>(environment.serverUrl+'/api/annonce/'+id);

  }

  update(annonce:Annonce) {
    return this.http.patch<Annonce>(environment.serverUrl+annonce.id, {...annonce, utilisateur:undefined});
  }

  search(term:string) {
    return this.http.get<Annonce[]>(environment.serverUrl+'/api/annonce/search/'+term)
  }
}

import { Injectable } from '@angular/core';
import { Demande } from './entities';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  constructor(private http:HttpClient) { }

  fetchAll() {
    return this.http.get<Demande[]>(environment.serverUrl+'/api/demande');
  }

  fetchOne(id:number) {
    return this.http.get<Demande>(environment.serverUrl+'/api/demande/'+id);
  }

  add(demande:Demande) {
    return this.http.post<Demande>(environment.serverUrl+'/api/demande', demande);
  }

  delete(id:number) {
    return this.http.delete<void>(environment.serverUrl+'/api/demande/'+id);

  }

  update(demande:Demande) {
    return this.http.patch<Demande>(environment.serverUrl+demande.id, {...demande, utilisateur:undefined, annonce:undefined});
  }

  search(term:string) {
    return this.http.get<Demande[]>(environment.serverUrl+'/api/demande/search/'+term)
  }

  getAnnD(id: number){
    return this.http.get<Demande[]>(environment.serverUrl+'/api/utilisateur/annonce/'+id+'/demande');
  }
}

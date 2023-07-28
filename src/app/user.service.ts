import { Injectable } from '@angular/core';
import { Utilisateur } from './entities';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  fetchAll() {
    return this.http.get<Utilisateur[]>(environment.serverUrl+'/api/utilisateur');
  }

  fetchOne(id:number) {
    return this.http.get<Utilisateur>(environment.serverUrl+'/api/utilisateur/'+id);
  }

  add(user:Utilisateur) {
    return this.http.post<Utilisateur>(environment.serverUrl+'/api/utilisateur', user);
  }

  delete(id:number) {
    return this.http.delete<void>(environment.serverUrl+'/api/utilisateur/'+id);

  }

  update(user:Utilisateur) {
    return this.http.patch<Utilisateur>(environment.serverUrl+user.id,user);
  }
}

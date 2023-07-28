import { Component, OnInit } from '@angular/core';
import { Annonce, Utilisateur } from '../entities';
import { UserService } from '../user.service';
import { AnnonceService } from '../annonce.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  constructor(private service: UserService,private service1: AnnonceService) { }
user:Utilisateur[]=[];
annonces: Annonce[]=[];


  ngOnInit(): void {
    this.service.fetchAll()
      .subscribe(data => this.user = data);

  }

}

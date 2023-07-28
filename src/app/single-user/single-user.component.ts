import { Component, OnInit } from '@angular/core';
import { Annonce, Demande, Utilisateur } from '../entities';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { DemandeService } from '../demande.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: UserService, private serviceD : DemandeService,private router: Router) { }
  list: Annonce[] = [];
  listDemande: Demande[] = [];

  user: Utilisateur = {
    name: '',
    address: '',
    email: '',
    telephone: 0
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.service.fetchOne(params['id']).subscribe(data => {
        this.user = data;

        if (data) {
          this.service.getAnnUser(params['id']).subscribe(data => {
            this.list = data;

            this.serviceD.getAnnD(params['id']).subscribe(data => {
              this.listDemande = data;
            });
          });
        }
      });
    });
  }

  retour() {
    this.router.navigate(['/']);

  }
}

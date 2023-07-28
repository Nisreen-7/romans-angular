import { Component, Input, OnInit } from '@angular/core';
import { DemandeService } from '../demande.service';
import { Router } from '@angular/router';
import { NotificationService } from '../notification.service';
import { Demande } from '../entities';

@Component({
  selector: 'app-form-demande',
  templateUrl: './form-demande.component.html',
  styleUrls: ['./form-demande.component.css']
})
export class FormDemandeComponent {

  constructor(private service: DemandeService, private router: Router, private notificationService: NotificationService) { }

  demande: Demande = {
    date_debut: new Date(), date_retour: new Date(), statueD: '', raison: '',
    utilisateur: {
      name: '', address: '', email: '', telephone: 0
    }, annonce: {
      image: '',
      title: '',
      description: '',
      dateA: new Date,
      categorie: '',
      statueA: ''
    }

  };
  OnSubmit() {
    if (this.demande.id) {
      this.service.update(this.demande).subscribe(data => {
        this.demande = data;
        this.notificationService.notify('Vous avez modifier la demande en success');
        this.router.navigate(['/'])
      });
    }
    else {
      this.service.add(this.demande).subscribe(() => {
        this.notificationService.notify('Vous avez ajouter la demande en success');
        this.router.navigate(['/'])
      });
    }


  }
}

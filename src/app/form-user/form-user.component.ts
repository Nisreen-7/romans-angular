import { Component, Input, OnInit } from '@angular/core';
import { Utilisateur } from '../entities';
import { UserService } from '../user.service';
import { NotificationService } from '../notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent  {

  constructor(private service: UserService, private router: Router, private notificationService: NotificationService) { }

  editing=false;

  
  user: Utilisateur = {name: '', address: '', email: '', telephone: 0}

  handSubmit(): void {
      this.service.add(this.user).subscribe(() => {
        this.notificationService.notify('Vous avez ajouter nouvel user en success');
        this.router.navigate(['/'])
      });  }

}



import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AnnonceService } from '../annonce.service';
import { Annonce } from '../entities';
import { Router } from '@angular/router';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-form-annonce',
  templateUrl: './form-annonce.component.html',
  styleUrls: ['./form-annonce.component.css']
})
export class FormAnnonceComponent {

  constructor(private service: AnnonceService, private router: Router, private notificationService: NotificationService) { }
  editing=false;

  @Input()
  annonce: Annonce = {
    title: '', image: '', description: '', dateA: new Date, categorie: '', statueA: '',
    utilisateur: {
      name: '', address: '', email: '', telephone: 0
    }
  };


  handleImage(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(target.files[0]);
      reader.onload = () => {
        this.annonce.image = reader.result as string;
      };
    }
  }


  onSubmit() {
    if(this.annonce.id){
      this.service.update(this.annonce).subscribe(data =>{
        this.annonce = data;
        this.editing=false;
        this.notificationService.notify('Vous avez modifier l\'annonce en success');
        this.router.navigate(['/'])
      });
    }
    else{
      this.service.add(this.annonce).subscribe(() => {
        this.notificationService.notify('Vous avez ajouter l\'annonce en success');
        this.router.navigate(['/'])
      });
    }


  }
}





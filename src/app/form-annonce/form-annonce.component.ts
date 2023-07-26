import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AnnonceService } from '../annonce.service';
import { Annonce } from '../entities';

@Component({
  selector: 'app-form-annonce',
  templateUrl: './form-annonce.component.html',
  styleUrls: ['./form-annonce.component.css']
})
export class FormAnnonceComponent {

  constructor(private service: AnnonceService) { }
  @Input()
  annonce: Annonce = {
    title: '', image: '', description: '', dateA: new Date, categorie: '', statueA: ''
  };


  @Output()
  added = new EventEmitter<Annonce>();

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


  onSubmit(){
    this.added.emit(this.annonce);
  }
}

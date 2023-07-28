import { Component, Input } from '@angular/core';
import { Annonce } from '../entities';
import { Router } from '@angular/router';
import { NotificationService } from '../notification.service';
import { AnnonceService } from '../annonce.service';

@Component({
  selector: 'app-list-search',
  templateUrl: './list-search.component.html',
  styleUrls: ['./list-search.component.css']
})
export class ListSearchComponent {

  constructor( private router: Router) { }

  @Input()
   results: Annonce[] = [];

retour(){
  this.router.navigate(['/'])

}



}

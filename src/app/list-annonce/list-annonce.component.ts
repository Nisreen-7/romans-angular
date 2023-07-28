import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Annonce } from '../entities';
import { AnnonceService } from '../annonce.service';

@Component({
  selector: 'app-list-annonce',
  templateUrl: './list-annonce.component.html',
  styleUrls: ['./list-annonce.component.css']
})
export class ListAnnonceComponent {

  @Input({required:true})
  annonce: Annonce  ;


}

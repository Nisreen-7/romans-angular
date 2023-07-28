import { Component, Input } from '@angular/core';
import { Demande } from '../entities';

@Component({
  selector: 'app-list-demande',
  templateUrl: './list-demande.component.html',
  styleUrls: ['./list-demande.component.css']
})
export class ListDemandeComponent {

  @Input()
  demande: Demande;
}

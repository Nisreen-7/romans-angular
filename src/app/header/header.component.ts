import { Component } from '@angular/core';
import { AnnonceService } from '../annonce.service';
import { Annonce } from '../entities';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public service : AnnonceService){}

  logo="https://img.freepik.com/vecteurs-premium/colombe-blanche-volant-branche-dans-son-bec_646794-19.jpg";

  term = '';
  results:Annonce[] = [];

  
  doSearch() {
    if(this.term.length < 2) {
      this.results = [];
    } else{
      this.service.search(this.term).subscribe(data => this.results = data);

    }
  }
}

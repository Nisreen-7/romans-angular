import { Component, OnInit } from '@angular/core';
import { Annonce } from '../entities';
import { AnnonceService } from '../annonce.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private service: AnnonceService) { }
  list: Annonce[] = [];


  ngOnInit(): void {
    this.service.fetchAll()
      .subscribe(data => this.list = data);

  }


}

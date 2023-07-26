import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnnonceService } from '../annonce.service';
import { Annonce } from '../entities';

@Component({
  selector: 'app-single-annonce',
  templateUrl: './single-annonce.component.html',
  styleUrls: ['./single-annonce.component.css']
})
export class SingleAnnonceComponent implements OnInit {

constructor(private route: ActivatedRoute, private service: AnnonceService) { }
editing=false;

annonce: Annonce = {
    image:'',
  title:'',
  description:'',
  dateA:new Date,
  categorie:'',
  statueA:'',
  utilisateur:{
    name:'',
    address:'',
    email:'',
    telephone:0
  }
};


  ngOnInit(): void {

    this.route.params.subscribe(params =>
      this.service.one(params['id'])
      .subscribe(data =>this.annonce = data));

  }

  updateAnnonce(annonce: Annonce) {
    this.service.update(annonce).subscribe(data =>{
      this.annonce = data;
      this.editing=false;
    });
  }


}

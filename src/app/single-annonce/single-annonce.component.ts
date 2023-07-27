import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnonceService } from '../annonce.service';
import { Annonce } from '../entities';

@Component({
  selector: 'app-single-annonce',
  templateUrl: './single-annonce.component.html',
  styleUrls: ['./single-annonce.component.css']
})
export class SingleAnnonceComponent implements OnInit {

constructor(private route: ActivatedRoute, private service: AnnonceService,private router: Router) { }
editing=false;

list: Annonce[]=[];

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
      this.service.fetchOne(params['id'])
      .subscribe(data =>this.annonce = data));
  }
  
  Delete(id:any) {
    this.service.delete(id)
    .subscribe(() =>{
         this.list = this.list.filter(item => item.id != this.annonce.id);
         this.router.navigate(['/']);

    });
    }
}





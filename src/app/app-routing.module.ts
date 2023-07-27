import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SingleAnnonceComponent } from './single-annonce/single-annonce.component';
import { FormAnnonceComponent } from './form-annonce/form-annonce.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'form-Annonce', component: FormAnnonceComponent },

  { path: 'single-annonce/:id', component: SingleAnnonceComponent },

  { path: '**', component: NotFoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

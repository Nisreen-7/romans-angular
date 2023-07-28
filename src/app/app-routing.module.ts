import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SingleAnnonceComponent } from './single-annonce/single-annonce.component';
import { FormAnnonceComponent } from './form-annonce/form-annonce.component';
import { UserComponent } from './user/user.component';
import { FormUserComponent } from './form-user/form-user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user', component: UserComponent },

  { path: 'form-Annonce', component: FormAnnonceComponent },
  { path: 'form-user', component: FormUserComponent },
  { path: 'form-demande', component: FormUserComponent },

  { path: 'single-annonce/:id', component: SingleAnnonceComponent },

  { path: '**', component: NotFoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

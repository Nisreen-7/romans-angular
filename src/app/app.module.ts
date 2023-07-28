import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListAnnonceComponent } from './list-annonce/list-annonce.component';
import { FormAnnonceComponent } from './form-annonce/form-annonce.component';
import { SingleAnnonceComponent } from './single-annonce/single-annonce.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListSearchComponent } from './list-search/list-search.component';
import { UserComponent } from './user/user.component';
import { FormUserComponent } from './form-user/form-user.component';
import { FormDemandeComponent } from './form-demande/form-demande.component';

@NgModule({
  declarations: [
    AppComponent,
    ListAnnonceComponent,
    FormAnnonceComponent,
    SingleAnnonceComponent,
    HomeComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    ListSearchComponent,
    UserComponent,
    FormUserComponent,
    FormDemandeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

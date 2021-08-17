import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TitulairesComponent } from './titulaires/titulaires.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NewTitulaireComponent } from './new-titulaire/new-titulaire.component';
import { SiteComponent } from './site/site.component';
import { NewSiteComponent } from './new-site/new-site.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TitulairesComponent,
    HomeComponent,
    NewTitulaireComponent,
    SiteComponent,
    NewSiteComponent,
  ],
    imports: [
        BrowserModule, FormsModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule,
    ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

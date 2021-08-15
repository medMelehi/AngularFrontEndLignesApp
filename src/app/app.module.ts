import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TitulairesComponent } from './titulaires/titulaires.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NewTitulaireComponent } from './new-titulaire/new-titulaire.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TitulairesComponent,
    HomeComponent,
    NewTitulaireComponent,
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule,HttpClientModule,
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

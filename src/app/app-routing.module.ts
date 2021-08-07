import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitulairesComponent } from './titulaires/titulaires.component';
import { AddTitulaireComponent } from './add-titulaire/add-titulaire.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: 'titulaires', component: TitulairesComponent },
  { path: 'AddTitulaire', component: AddTitulaireComponent },
  { path: 'Home', component: HomeComponent },
  { path: '', redirectTo :'/Home',pathMatch:"full"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
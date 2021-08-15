import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitulairesComponent } from './titulaires/titulaires.component';
import { HomeComponent } from './home/home.component';
import { NewTitulaireComponent } from './new-titulaire/new-titulaire.component';
const routes: Routes = [
  { path: 'titulaires', component: TitulairesComponent },
  { path: 'newTitulaire', component: NewTitulaireComponent },
  { path: 'Home', component: HomeComponent },
  { path: '', redirectTo :'/Home',pathMatch:"full"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
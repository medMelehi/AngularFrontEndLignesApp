import { Component, OnInit } from '@angular/core';
import { Titulaire } from 'src/model/model.titulaire';
import { TitulairesService } from '../services/titulaires.service';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
//import { SrvRecord } from 'dns';
@Component({
  selector: 'app-new-titulaire',
  templateUrl: './new-titulaire.component.html',
  styleUrls: ['./new-titulaire.component.css']
})
export class NewTitulaireComponent implements OnInit {
  typeContrats = [
    {key:'aucun',value:'aucun'},
    {key:'cdd',value:'cdd'},
    {key:'cdi',value:'cdi'}
  ];
  form : FormGroup;
  public mode:number=1;
  titulaire:Titulaire = new Titulaire();

  constructor(private titulaireService:TitulairesService) {

   }

  ngOnInit(): void {
    this.form = new FormGroup({
      matricule: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      nom: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      prenom: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      telephone: new FormControl('', [
        Validators.minLength(8)
      ]),
      dateRecrutement: new FormControl(''),
      typeContrat: new FormControl(this.typeContrats[0].value)
    });
  }
  get matricule() { return this.form.get('matricule')  as FormControl; }
  get nom() { return this.form.get('nom')  as FormControl; }
  get prenom() { return this.form.get('prenom')  as FormControl; }
  get email() { return this.form.get('email') as FormControl; }
  get telephone() { return this.form.get('telephone') as FormControl; }
  get dateRecrutement() { return this.form.get('dateRecrutement') as FormControl; }
  get typeContrat() { return this.form.get('typeContrat') as FormControl; }

  saveTitulaire(){
    this.titulaireService.saveTitulaire(this.titulaire)
    .subscribe((data : any)=>{
      this.mode=0;
      this.titulaire=data;
          },err=>{
        console.log("errroooor"+err);
      });

  }

  onSubmit() {
    console.log(this.form.value);
   this.titulaireService.saveTitulaire(this.form.value)
      .subscribe((data : any)=>{
        this.mode=0;
        this.titulaire=data;
      },err=>{
        console.log("errroooor"+err);
      });
  }
}

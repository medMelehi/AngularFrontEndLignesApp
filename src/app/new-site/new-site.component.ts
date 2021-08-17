import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Titulaire} from "../../model/model.titulaire";
import {TitulairesService} from "../services/titulaires.service";
import {Site} from "../../model/model.site";
import {SitesService} from "../services/sites.service";

@Component({
  selector: 'app-new-site',
  templateUrl: './new-site.component.html',
  styleUrls: ['./new-site.component.css']
})
export class NewSiteComponent implements OnInit {

  etats = [
    {key:'aucun',value:'aucun'},
    {key:'disponible',value:'disponible'},
    {key:'indisponible',value:'indisponible'}
  ];
  form : FormGroup;
  public mode:number=1;
  site:Site=new Site();

  constructor(private siteService:SitesService) {

  }

  ngOnInit(): void {
    this.form = new FormGroup({
      nom: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      adresse: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      dateOuverture: new FormControl(''),
      etat: new FormControl(this.etats[0].value)
    });
  }
  get adresse() { return this.form.get('adresse')  as FormControl; }
  get nom() { return this.form.get('nom')  as FormControl; }
  get dateOuverture() { return this.form.get('dateOuverture')  as FormControl; }
  get etat() { return this.form.get('etat') as FormControl; }




  onSubmit() {
    console.log(this.form.value);
    this.siteService.saveSite(this.form.value)
      .subscribe((data : any)=>{
        this.mode=0;
        this.site=data;
        console.log(data);
      },err=>{
        console.log("errroooor"+err);
      });
  }
}

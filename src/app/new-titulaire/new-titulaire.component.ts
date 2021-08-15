import { Component, OnInit } from '@angular/core';
import { Titulaire } from 'src/model/model.titulaire';
import { TitulairesService } from '../services/titulaires.service';
//import { SrvRecord } from 'dns';

@Component({
  selector: 'app-new-titulaire',
  templateUrl: './new-titulaire.component.html',
  styleUrls: ['./new-titulaire.component.css']
})
export class NewTitulaireComponent implements OnInit {
  public mode:number=1;
  titulaire:Titulaire = new Titulaire();
  typeContrats:String[] = ["aucun","cdd","cdi"];
  
  constructor(private titulaireService:TitulairesService) {
    this.mode=1;
   }

  ngOnInit(): void {
    this.mode=1;
  }

  saveTitulaire(){
    this.titulaireService.saveTitulaire(this.titulaire)
    .subscribe((data : any)=>{
      this.mode=0;
      this.titulaire=data;
          },err=>{
        console.log("errroooor"+err);
      });
      
  }

}

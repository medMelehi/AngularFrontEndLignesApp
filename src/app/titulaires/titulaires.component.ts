import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TitulairesService } from '../services/titulaires.service';

@Component({
  selector: 'app-titulaires',
  templateUrl: './titulaires.component.html',
  styleUrls: ['./titulaires.component.css']
})
export class TitulairesComponent implements OnInit {

 public titulaires :any;
 public matricule:any;
 public nom:any;
 public email:any;

  constructor( private titService:TitulairesService) { }

  ngOnInit(): void {
  }

  onGetTitulaires(){
    this.titService.getTitulaires()
   .subscribe(data=>{
      this.titulaires = data;
        },err=>{
      console.log(err);
    })
    
  }
}

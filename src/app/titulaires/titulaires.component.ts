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
  public size:number=1;
  public currentPage:number=0;
  public totalPages:number;
  public pages:Array<number>;

  constructor( private titService:TitulairesService) { }

  ngOnInit(): void {
  }

  onGetTitulaires(){
    this.titService.getTitulaires(this.currentPage,this.size)
   .subscribe(data=>{
      this.titulaires = data;
      this.totalPages = (data as any).page.totalPages;
      this.pages=new Array<number>(this.totalPages);
        },err=>{
      console.log(err);
    }) 
  }
  onPgaeTitulaire(i:number){
    this.currentPage=i;
    this.onGetTitulaires();
  }
  onNextPgaeTitulaire(){
    this.currentPage++;
    this.onGetTitulaires();
  }
  onPreviousPgaeTitulaire(){
    this.currentPage--;
    this.onGetTitulaires();
  }
}

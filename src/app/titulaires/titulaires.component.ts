import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TitulairesService } from '../services/titulaires.service';
import * as $ from "jquery";
@Component({
  selector: 'app-titulaires',
  templateUrl: './titulaires.component.html',
  styleUrls: ['./titulaires.component.css']
})

export class TitulairesComponent implements OnInit {

 public titulaires :any;
 public matricule:String="";
 public nom:String="";
 public email:String="";
  public size:number=6;
  public currentPage:number=0;
  public totalPages:number;
  public pages:Array<number>;

  constructor( private titService:TitulairesService) { }

  ngOnInit(): void {
    var self = this;
    this.onSearchTitulaires();

        $('#mat').focus(function(){
          self.nom="";
          self.email="";
        });
        $("#nom").focus(function(){
          self.matricule="";
          self.email="";
        });
        $("#email").focus(function(){
          self.nom="";
          self.matricule="";
        });
        $('input').keyup(function(event){

          var mat = $('#mat').val();
          var nom = $('#nom').val();
          var email = $('#email').val();
          console.log("mat:"+mat+"-nom:"+nom+"-email:"+email);
          if (mat =="" && nom =="" && email ==""  ) {
            console.log("empty inputs");
            self.onSearchTitulaires();
            }
          var keycode = (event.keyCode ? event.keyCode : event.which);
          if(keycode+"" == '13'){
            $('#search').click();
          }
      });


  }


  onPgaeTitulaire(i:number){
    this.currentPage=i;
    this.onSearchTitulaires();
  }
  onNextPgaeTitulaire(){
    this.currentPage++;
    this.onSearchTitulaires();
  }
  onPreviousPgaeTitulaire(){
    this.currentPage--;
    this.onSearchTitulaires();
  }
  onSearchTitulaires(){
    console.log("search clicked");
    this.titService.searchTitulaires(this.matricule,this.nom,this.email,this.currentPage,this.size)
   .subscribe((data : any)=>{
    this.titulaires = data;
    console.log(data);
    this.totalPages = data.page.totalPages;
    this.pages=new Array<number>(this.totalPages);
        },err=>{
      console.log("errroooor"+err);
    })
  }


  /*  onGetTitulaires(){
    this.titService.getTitulaires(this.currentPage,this.size)
   .subscribe(data=>{
      this.titulaires = data;
      console.log(data);
      this.totalPages = (data as any).page.totalPages;
      this.pages=new Array<number>(this.totalPages);
        },err=>{
      console.log(err);
    })
  } */
}

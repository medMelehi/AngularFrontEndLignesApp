import { Component, OnInit } from '@angular/core';
import {TitulairesService} from "../services/titulaires.service";
import {SitesService} from "../services/sites.service";
import * as $ from "jquery";

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {
  public sites :any;
  public nom:String="";
  public adresse:String="";
  public etat:String="";
  public size:number=6;
  public currentPage:number=0;
  public totalPages:number;
  public pages:Array<number>;
  constructor( private siteService:SitesService) {

  }

  ngOnInit(): void {
    var self = this;
    this.onSearchSite();

    $('#etat').focus(function(){
      self.nom="";
      self.adresse="";
    });
    $("#nom").focus(function(){
      self.etat="";
      self.adresse="";
    });
    $("#adresse").focus(function(){
      self.nom="";
      self.etat="";
    });
    $('input').keyup(function(event){

      var nom = $('#nom').val();
      var adresse = $('#adresse').val();
      var etat = $('#etat').val();
      console.log("nom:"+nom+"-adresse:"+adresse+"-etat:"+etat);
      if (adresse =="" && nom =="" && etat ==""  ) {
        console.log("empty inputs");
        self.onSearchSite();
      }
      var keycode = (event.keyCode ? event.keyCode : event.which);
      if(keycode+"" == '13'){
        $('#search').click();
      }
    });


  }


  onPgaeSite(i:number){
    this.currentPage=i;
    this.onSearchSite();
  }
  onNextPgaeSite(){
    this.currentPage++;
    this.onSearchSite();
  }
  onPreviousPgaeSite(){
    this.currentPage--;
    this.onSearchSite();
  }
  onSearchSite() {
    console.log("search clicked");
    this.siteService.searchSites(this.nom, this.adresse, this.etat, this.currentPage, this.size)
      .subscribe((data: any) => {
        this.sites = data;
        console.log(data);
        this.totalPages = data.page.totalPages;
        this.pages = new Array<number>(this.totalPages);
      }, err => {
        console.log("errroooor" + err);
      })
  }
  }

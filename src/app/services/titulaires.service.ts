import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Titulaire } from 'src/model/model.titulaire';
export interface resp {
  _embedded: any;
  _links: any;
  page: any;
}
@Injectable({
  providedIn: 'root'
})
export class TitulairesService {

  private host:string="http://localhost:8088"

  constructor(private httpClient:HttpClient) {   }

  public  getTitulaires(page:number , size:number){
    return this.httpClient.get<resp>(this.host+"/titulaires?page="+page+"&size="+size);
   }
   public  searchTitulaires(matricule:String,nom:String,email:String,page:number , size:number){
    return this.httpClient.request('GET', this.host+"/titulaires/search/byNomEmailMatPage?nom="+nom+"&mat="+matricule+"&email="+email+"&page="+page+"&size="+size, {responseType:'json'});
   }
   public  saveTitulaire (titulaire:Titulaire):Observable<Titulaire>{
    //return this.httpClient.request('POST', this.host+"/titulaires", {responseType:'json'});
    return this.httpClient.post<Titulaire>(this.host+"/titulaires/", titulaire,{responseType:'json'});
  }



}

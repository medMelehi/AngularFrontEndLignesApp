import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitulairesService {

  private host:string="http://localhost:8088"

  constructor(private httpClient:HttpClient) {   }

  public  getTitulaires(page:number , size:number){
    return this.httpClient.get(this.host+"/titulaires?page="+page+"&size="+size);  
   }
}

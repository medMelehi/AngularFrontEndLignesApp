import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitulairesService {

  constructor(private httpClient:HttpClient) {   }

  public  getTitulaires(){
    return this.httpClient.get("http://localhost:8088/titulaires");  
   }
}

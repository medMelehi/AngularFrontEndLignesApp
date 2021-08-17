import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Titulaire} from "../../model/model.titulaire";
import {Observable} from "rxjs";
import {Site} from "../../model/model.site";

export interface resp {
  _embedded: any;
  _links: any;
  page: any;
}
@Injectable({
  providedIn: 'root'
})
export class SitesService {

  private host: string = "http://localhost:8088"

  constructor(private httpClient: HttpClient) {
  }

  public getSites(page: number, size: number) {
    return this.httpClient.get<resp>(this.host + "/sites?page=" + page + "&size=" + size);
  }

  public searchSites( nom: String,adresse: String, etat: String, page: number, size: number) {
    console.log("/sites/search/byNomAdresseEtatPage?nom=" + nom + "&adresse=" + adresse + "&etat=" + etat + "&page=" + page + "&size=" + size);
    return this.httpClient.request('GET', this.host + "/sites/search/byNomAdresseEtatPage?nom=" + nom + "&adresse=" + adresse + "&etat=" + etat + "&page=" + page + "&size=" + size, {responseType: 'json'});
  }

  public saveSite(site: Site): Observable<Titulaire> {
    return this.httpClient.post<Titulaire>(this.host + "/sites/", site, {responseType: 'json'});
  }
}

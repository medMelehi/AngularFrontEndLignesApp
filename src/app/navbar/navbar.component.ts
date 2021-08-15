import { Component, OnInit } from '@angular/core';
import { NewTitulaireComponent } from '../new-titulaire/new-titulaire.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  changeModeTitulaire(){
    NewTitulaireComponent.arguments.mode=1;
  }
}

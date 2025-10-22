import { Component, OnInit } from '@angular/core';

import { initializeApp } from 'firebase/app';
import { LoginService } from './services/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = '03-directivas-angular';

  constructor(private loginService:LoginService){}

  login:boolean=false;

  ngOnInit(): void {
    initializeApp({
      apiKey: "AIzaSyDoCb_b-QPEb35uXMrk8pgQvblRzlVEBDU",
      authDomain: "listado-personas-b1f9d.firebaseapp.com"
    });
  }


  isAuthenticado():boolean{
     return this.loginService.isAuthenticado();
  }
  logout(){
      this.loginService.logout();
  }
}

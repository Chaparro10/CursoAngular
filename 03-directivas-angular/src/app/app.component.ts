import { Component, OnInit } from '@angular/core';

import { initializeApp } from 'firebase/app';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = '03-directivas-angular';

  constructor(){}


  ngOnInit(): void {
    initializeApp({
      apiKey: "AIzaSyDoCb_b-QPEb35uXMrk8pgQvblRzlVEBDU",
      authDomain: "listado-personas-b1f9d.firebaseapp.com"
    });
  }
}

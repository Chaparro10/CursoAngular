import { Injectable } from '@angular/core';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any[]=[{
    titulo:'Dashboard',
    icono:'mdi mdi-gauge',
    submenu:[
      {
        titulo:'Principal',
        url:'/'
      },
      {titulo:'ProgressBar',url:'/dashboard/progress'},
      {titulo:'Graficas',url:'/dashboard/grafica'}
    ]
  }];
  constructor() { }
}

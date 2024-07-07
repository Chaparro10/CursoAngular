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
      { titulo:'Principal',url:'/'},
      {titulo:'ProgressBar',url:'/dashboard/progress'},
      {titulo:'Graficas',url:'/dashboard/grafica'},
      {titulo:'Rxjs',url:'/dashboard/rxjs'}
    ],
    expanded: false
  },
  {
    titulo:'Mantenimientos',
    icono:'mdi mdi-folder-lock-open',
    submenu:[
      {titulo:'Usuarios',url:'usuarios'},
      // {titulo:'Hospitales',url:'hospitales'},
      // {titulo:'Medicos',url:'medicos'}
    ]
  }
];
  constructor() { }
}

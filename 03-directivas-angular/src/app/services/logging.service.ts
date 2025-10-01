import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  sendMessageConsole(mensaje:string){
      console.log(mensaje)
  }
}

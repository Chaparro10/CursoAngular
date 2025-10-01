import { Injectable } from '@angular/core';
import { Persona } from '../models/persona.model';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  personas:Persona[]=[new Persona("Usuario1","apellido1"),new Persona("Usuario2","apellido2"),new Persona("Usuario3","apellido3")]

  constructor(private loggigService:LoggingService) { }

personaAgregada(persona:Persona){
  this.loggigService.sendMessageConsole("Enviando logs desde el servicio de personas")
    this.personas.push(persona);
}

}

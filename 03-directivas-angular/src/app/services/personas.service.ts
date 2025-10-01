import { Injectable } from '@angular/core';
import { Persona } from '../models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  personas:Persona[]=[new Persona("Usuario1","apellido1"),new Persona("Usuario2","apellido2"),new Persona("Usuario3","apellido3")]

  constructor() { }


  personaAgregada(persona:Persona){
    this.personas.push(persona);
}
 

}

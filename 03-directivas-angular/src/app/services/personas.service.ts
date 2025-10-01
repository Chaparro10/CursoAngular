import { Injectable } from '@angular/core';
import { Persona } from '../models/persona.model';
import { LoggingService } from './logging.service';
import { DataServices } from './data.services';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  personas: Persona[] = [];

  constructor(private loggigService: LoggingService, private dataService: DataServices) { }

  personaAgregada(persona: Persona) {
    this.loggigService.sendMessageConsole("Enviando logs desde el servicio de personas")
    this.personas.push(persona);
    this.dataService.guardarPersona(this.personas);
  }

  encontrarPersona(index: number) {
    let persona: Persona = this.personas[index];
    return persona;
  }

  modificarPersona(index: number, persona: Persona) {
    let persona1 = this.personas[index];
    persona1.nombre = persona.nombre;
    persona1.apellido = persona.apellido;
  }


  eliminarPersona(index: number) {
    let persona1 = this.personas[index];
    this.personas.splice(index, 1);

  }

  obtenerPersonas(): Observable<Persona[]> {
    return this.dataService.cargarPersonas();
  }

  setPersonas(personas: Persona[]) {
    this.personas = personas;
  }
}

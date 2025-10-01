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

  agregarPersona(persona: Persona) {
    this.loggigService.sendMessageConsole("agregamos persona "
      + persona.nombre)
    this.personas.push(persona);
    this.dataService.guardarPersonas(this.personas);
  }

  encontrarPersona(index: number) {
    if (this.personas && this.personas.length > index) {
      return this.personas[index];
    }
    console.error('Persona no encontrada en el índice:', index);
    return undefined;
  }

  modificarPersona(index: number, persona: Persona) {
    let persona1 = this.personas[index]; // Paso por referencia
    persona1.nombre = persona.nombre;
    persona1.apellido = persona.apellido;
    this.dataService.modificarPersona(index, persona);
  }


  eliminarPersona(index: number) {
    this.personas.splice(index, 1);

  }

  obtenerPersonas() {
    return this.dataService.cargarPersonas();
  }

  setPersonas(personas: Persona[]) {
    this.personas = personas;
  }
}

import { Component, EventEmitter, Output } from '@angular/core';
import { Persona } from '../../models/persona.model';

@Component({
  selector: 'app-formulario',
  standalone: false,
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  nombreInput:string="";
  apellidoInput:string="";

  @Output() personaCreada = new EventEmitter<Persona>(); //comunicar del hijo al padre

  agregarPersona(nombre:HTMLInputElement,apellido:HTMLInputElement){
    let personaNew=new Persona(nombre.value,apellido.value);
    this.personaCreada.emit(personaNew);
  }
}

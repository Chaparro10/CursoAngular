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

  agregarPersona(){
    let personaNew=new Persona(this.nombreInput,this.apellidoInput);
    this.personaCreada.emit(personaNew);
  }
}

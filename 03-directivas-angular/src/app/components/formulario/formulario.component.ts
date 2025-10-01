import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
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

  @ViewChild("nombreRef") nombre!:ElementRef;
  @ViewChild("apellidoRef") apellido!:ElementRef;

  agregarPersona(){
    let personaNew=new Persona(this.nombre.nativeElement,this.apellido.nativeElement);
    this.personaCreada.emit(personaNew);
  }
}

import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Persona } from '../../models/persona.model';
import { PersonasService } from '../../services/personas.service';

@Component({
  selector: 'app-formulario',
  standalone: false,
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  nombreInput:string="";
  apellidoInput:string="";

  // @Output() personaCreada = new EventEmitter<Persona>(); //comunicar del hijo al padre

  @ViewChild("nombreRef") nombre!:ElementRef;
  @ViewChild("apellidoRef") apellido!:ElementRef;


  constructor(private personasService:PersonasService){}

  agregarPersona(){
    let personaNew=new Persona(this.nombre.nativeElement.value,this.apellido.nativeElement.value);
    // this.logginService.sendMessageConsole(`Persona: ${personaNew.nombre}`);
    // this.personaCreada.emit(personaNew);
    this.personasService.personaAgregada(personaNew);

  }
}

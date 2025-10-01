import { Component } from '@angular/core';
import { Persona } from '../../models/persona.model';

@Component({
  selector: 'app-personas',
  standalone: false,
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.css'
})
export class PersonasComponent {
  isActive:boolean=false;
  mensaje:string="No se ha agregado ninguna persona";
  titulo:string="Listado de personas";
  mostrar:boolean=false;
  title:string="";

  personas:Persona[]=[new Persona("Usuario1","apellido1"),new Persona("Usuario2","apellido2"),new Persona("Usuario3","apellido3")]


  modificarTitulo(event:Event){
    this.title=(<HTMLInputElement>event.target).value;
  }

  personaAgregada(persona:Persona){
      this.personas.push(persona);
  }
}

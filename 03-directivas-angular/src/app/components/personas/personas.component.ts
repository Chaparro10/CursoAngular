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
  titulo:string="";
  mostrar:boolean=false;



  personas:Persona[]=[new Persona("Usuario1","apellido1"),new Persona("Usuario2","apellido2"),new Persona("Usuario3","apellido3")]


  agregarPersona(){
    this.mensaje="Persona agregada";
    this.mostrar=true;
  }

  modificarTitulo(event:Event){
    this.titulo=(<HTMLInputElement>event.target).value;
  }
}

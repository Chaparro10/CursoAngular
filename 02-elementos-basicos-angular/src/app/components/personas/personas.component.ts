import { Component } from '@angular/core';

@Component({
  selector: 'app-personas',
  standalone: false,
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.scss'
})
export class PersonasComponent {

  isActive:boolean=false;
  mensaje:string="No se ha agregado ninguna persona";

  agregarPersona(){
    this.mensaje="Persona agregada";
  }
}

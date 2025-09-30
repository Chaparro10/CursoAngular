import { Component } from '@angular/core';

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
  agregarPersona(){
    this.mensaje="Persona agregada";
    this.mostrar=true;
  }

  modificarTitulo(event:Event){
    this.titulo=(<HTMLInputElement>event.target).value;
  }
}

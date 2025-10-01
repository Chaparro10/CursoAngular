import { Component, OnInit } from '@angular/core';
import { Persona } from '../../models/persona.model';
import { PersonasService } from '../../services/personas.service';

@Component({
  selector: 'app-personas',
  standalone: false,
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.css'
})
export class PersonasComponent  implements OnInit{
  isActive:boolean=false;
  mensaje:string="No se ha agregado ninguna persona";
  titulo:string="Listado de personas";
  mostrar:boolean=false;
  title:string="";

  personas:Persona[]=[];


  constructor(private personaService:PersonasService){}


  ngOnInit(): void {
      this.personas=this.personaService.personas;
  }

  modificarTitulo(event:Event){
    this.title=(<HTMLInputElement>event.target).value;
  }

// personaAgregada(persona:Persona){
//   this.personaService.personaAgregada(persona);
// }

}

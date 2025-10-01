import { Component, Input } from '@angular/core';
import { Persona } from '../../models/persona.model';

@Component({
  selector: 'app-persona',
  standalone: false,
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css'
})
export class PersonaComponent {
  nombre:string="juan";
  apellido:string='Perez';
  edad:number=28;

  @Input() persona!:Persona; //recibir del padre al hijo
  @Input() indice!:number;
}

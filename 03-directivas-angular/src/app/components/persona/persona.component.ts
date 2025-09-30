import { Component } from '@angular/core';

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
}

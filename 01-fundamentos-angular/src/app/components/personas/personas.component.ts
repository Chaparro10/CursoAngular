import { Component } from '@angular/core';

@Component({
  selector: 'app-personas',
  standalone: false,
  template: '<h1>Listado de personas</h1> <app-persona></app-persona>',
  styleUrl: './personas.component.scss'
})
export class PersonasComponent {

}

import { Component, OnInit } from '@angular/core';
import { Persona } from '../../models/persona.model';
import { PersonasService } from '../../services/personas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personas',
  standalone: false,
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.css'
})
export class PersonasComponent implements OnInit {
  isActive: boolean = false;
  mensaje: string = "No se ha agregado ninguna persona";
  titulo: string = "Listado de personas";
  mostrar: boolean = false;
  title: string = "";

  personas: Persona[] = [];


  constructor(
    private personaService: PersonasService,
     private router: Router) { }


  ngOnInit(): void {
      this.setPersonas();
  }

  modificarTitulo(event: Event) {
    this.title = (<HTMLInputElement>event.target).value;
  }

  agregar() {
    this.router.navigate(["personas/agregar"]);
  }

  setPersonas(){
    this.personaService.obtenerPersonas().subscribe({
      next: (personas:Persona[]) => {
        this.personas = personas;
        this.personaService.setPersonas(personas);
      },
      error: (err) => console.log('error al cargar personas:', err)
    })
  }



}

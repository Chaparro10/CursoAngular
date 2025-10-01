import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Persona } from '../../models/persona.model';
import { PersonasService } from '../../services/personas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  standalone: false,
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit {
  nombreInput: string = "";
  apellidoInput: string = "";
  index: number = 0;
  // @Output() personaCreada = new EventEmitter<Persona>(); //comunicar del hijo al padre

  @ViewChild("nombreRef") nombre!: ElementRef;
  @ViewChild("apellidoRef") apellido!: ElementRef;


  constructor(private personasService: PersonasService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
    if(this.index){
       let persona:Persona=this.personasService.encontrarPersona(this.index);
       this.nombreInput=persona.nombre;
       this.apellidoInput=persona.apellido;
    }
  }

  agregarPersona() {
    let personaNew = new Persona(this.nombre.nativeElement.value, this.apellido.nativeElement.value);

    if(this.index){
        this.personasService.modificarPersona(this.index,personaNew);
    }else{
      this.personasService.personaAgregada(personaNew);
    }
    this.router.navigate(['/personas']);
    // this.logginService.sendMessageConsole(`Persona: ${personaNew.nombre}`);
    // this.personaCreada.emit(personaNew);
  }

  eliminarPersona(){
    if(this.index){
        this.personasService.eliminarPersona(this.index);
    }
    this.router.navigate(['/personas']);
  }
}

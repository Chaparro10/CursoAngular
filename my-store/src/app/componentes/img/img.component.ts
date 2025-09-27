import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  standalone: false,
  templateUrl: './img.component.html',
  styleUrl: './img.component.scss'
})
export class ImgComponent implements OnInit {

  @Input() imagen: string = '';//recibir datos del padre con Input
  imageDefault='https://imgs.search.brave.com/My_Zsb7i_Fup2KsoPsM7kzNAq3TTa2BXD-vbED7OrLA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8w/NC8yMi8xNy8zNi93/b29kZW4tbi0xMzQ2/MTk3XzY0MC5wbmc';

  @Output() loaded = new EventEmitter<string>();

  constructor(){}

  ngOnInit(): void {
      
  }

  imagenError(){
    this.imagen=this.imageDefault
  }

  imagenLoaded(){
   this.loaded.emit(`Evento del hijo ${this.imagen}`);
  }

}

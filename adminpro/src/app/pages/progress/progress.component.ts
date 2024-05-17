import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.css'
})
export class ProgressComponent {

  progreso1: number=20;
  progreso2: number=10;


  getProgreso1(){
      return `${this.progreso1}%`;
  }
  getProgreso2(){
    return `${this.progreso2}%`;
  }

}

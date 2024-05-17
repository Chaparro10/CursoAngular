import { Component,EventEmitter,Input, Output } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrl: './incrementador.component.css'
})
export class IncrementadorComponent {
      
  @Input() progreso:number=50; //Pasar Datos de la componente padre a la Hija
  @Output() valorSalida: EventEmitter<number>= new EventEmitter();

  @Input() btnClass:string ='btn btn-primary'; //Color de boton por condicion
  // getPorcentaje(){
  //   return  `${this.progreso}%`;
  // }



  cambiaValor(valor: number) {
    // Calcular el nuevo valor de progreso
    let nuevoProgreso = this.progreso + valor;
  
    // Asegurarse de que el valor esté entre 0 y 100
    if (nuevoProgreso > 100) {
      nuevoProgreso = 100;
    } else if (nuevoProgreso < 0) {
      nuevoProgreso = 0;
    }
  
    // Actualizar la propiedad progreso
   
    this.progreso = nuevoProgreso;
  
    // Devolver el progreso actualizado
    // return this.progreso;
    this.valorSalida.emit(this.progreso);
  }

  OnChange(nuevoValor:any){
    if(nuevoValor>100){
      this.progreso=100;
    Swal.fire('Error...', 'No se permiten mas de 100!', 'error')
    }else if(nuevoValor<0){
      this.progreso=0;
      Swal.fire('Error...', 'No se permiten valores Negativos!', 'error')
    }else{
      this.progreso=nuevoValor;
    }
     console.log(nuevoValor)
     this.valorSalida.emit(this.progreso);
  }
  
}

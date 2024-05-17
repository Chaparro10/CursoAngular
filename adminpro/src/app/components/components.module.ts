import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';//Directivas
import { FormsModule } from '@angular/forms';


import { IncrementadorComponent } from './incrementador/incrementador.component';



@NgModule({
  declarations: [
    IncrementadorComponent
  ],
  exports:[
      IncrementadorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ComponentsModule { }

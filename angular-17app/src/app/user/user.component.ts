import { Component, Input } from '@angular/core';
import { GamesComponent } from "../games/games.component";

@Component({
  selector: 'app-user',
  imports: [GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
    username:string="Kevin";
    isLoggedIn:boolean=true
    user:string='Kevin' //componente padre


    cambiarLogin(){
      this.isLoggedIn=!this.isLoggedIn;
    }
    mensajeRecibido: string = 'hola';

    recibirMensaje(mensaje: any) {
      this.mensajeRecibido = mensaje;
    }
}

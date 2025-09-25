import { Component, Input, OnInit } from '@angular/core';
import { GamesComponent } from "../games/games.component";
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-user',
  imports: [GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent  {
  constructor(private usuarioService: UsuarioService) {
  }
  username: string = "Kevin";
  isLoggedIn: boolean = true
  user: string = 'Kevin' //componente padre
  valorBitcoin:any;


  cambiarLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }
  mensajeRecibido: string = 'hola';

  recibirMensaje(mensaje: any) {
    this.mensajeRecibido = mensaje;
  }
  getBitcoin() {
 this.usuarioService.getBitcoinPrice().subscribe(response=>{
    console.log('response', response)
    },(error)=>{
      console.log(error);
    })
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
    username:string="Kevin";
    isLoggedIn:boolean=true


    cambiarLogin(){
      this.isLoggedIn=!this.isLoggedIn;
    }
}

import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { error } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls:['./login.component.css']
})
export class LoginComponent {



  
  public formSubmited=false;

  public LoginForms=this.fb.group({
    email:[localStorage.getItem('email') ?? '',[Validators.required,Validators.minLength(5)]],
    password:['',[Validators.required,Validators.minLength(5)]],
    remember:[false]
  })


  constructor(private fb:FormBuilder,private usuarioService:UsuarioService){

  }


  LoginUsuario(){
      console.log(this.LoginForms.value)
      this.usuarioService.LoginUsuario(this.LoginForms.value).subscribe(
        respuesta=>{
          console.log(respuesta)
          if(this.LoginForms.get('remember')?.value){
            const email = this.LoginForms.get('email')?.value ?? '';
            localStorage.setItem('email', email);

          }else{
            localStorage.removeItem('email');
          }
        },(error)=>console.log(error))
  }

}

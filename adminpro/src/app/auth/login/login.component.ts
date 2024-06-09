import { Component,AfterViewInit, ElementRef, ViewChild} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { error } from 'console';
import { response } from 'express';

import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

declare const google:any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls:['./login.component.css']
})
export class LoginComponent implements AfterViewInit {

  @ViewChild('googleBtn') googleBtn?: ElementRef;

  ngAfterViewInit(): void {
      this.googleInit();
  }

  
  
  public formSubmited=false;

  public LoginForms=this.fb.group({
    email:[localStorage.getItem('email') ?? '',[Validators.required,Validators.minLength(5)]],
    password:['',[Validators.required,Validators.minLength(5)]],
    remember:[false]
  })


  constructor(private fb:FormBuilder,private usuarioService:UsuarioService,private router: Router){

  }


  LoginUsuario() {
    this.formSubmited = true;

    if (this.LoginForms.invalid) {
      return;
    }

    this.usuarioService.LoginUsuario(this.LoginForms.value).subscribe(
      respuesta => {
        if (!respuesta.ok) {
          Swal.fire('Error', respuesta.message || 'Error al iniciar sesión', 'error');
          return;
        }

        if (this.LoginForms.get('remember')?.value) {
          const email = this.LoginForms.get('email')?.value ?? '';
          localStorage.setItem('email', email);
        } else {
          localStorage.removeItem('email');
        }

        // Navegar al inicio
        this.router.navigateByUrl('/');
      },
      error => {
        Swal.fire('Error', error.error.message || 'Error al iniciar sesión', 'error');
      }
    );
  }

//LOGIN CON GOOGLE
  googleInit(){
    google.accounts.id.initialize({
      client_id: "971959509961-8r89ce73mbth67ke1f573o6qi7287ls2.apps.googleusercontent.com",
      callback:(response:any)=> this.handleCredentialResponse(response)
  });
  google.accounts.id.renderButton(
      this.googleBtn?.nativeElement, 
      { theme: "outline", size: "large" } // customization attributes
  );
  }

  handleCredentialResponse(response:any){
    console.log("ENCODED JWT ID TOKEN: "+response.credential);
    this.usuarioService.LoginGoogle(response.credential).subscribe(
      response=>{
        console.log({login:response})
         //NAVEGAR AL INICIO
         this.router.navigateByUrl('/');
      }
    )
  }

}

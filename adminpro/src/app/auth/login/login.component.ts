import { Component,AfterViewInit, ElementRef, ViewChild} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { error } from 'console';

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

  googleInit(){
    google.accounts.id.initialize({
      client_id: "971959509961-8r89ce73mbth67ke1f573o6qi7287ls2.apps.googleusercontent.com",
      callback: this.handleCredentialResponse
  });
  google.accounts.id.renderButton(
      this.googleBtn?.nativeElement, 
      { theme: "outline", size: "large" } // customization attributes
  );
  }

  handleCredentialResponse(response:any){
    console.log("ENCODED JWT ID TOKEN: "+response.credential);
  }
  
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

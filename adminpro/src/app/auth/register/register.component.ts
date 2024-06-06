import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { error } from 'console';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.css']
})
export class RegisterComponent {

  public formSubmited=false;

  public registerForms=this.fb.group({
    nombre:['',[Validators.required,Validators.minLength(5)]],
    email:['',[Validators.required,Validators.minLength(5)]],
    password:['',[Validators.required,Validators.minLength(5)]],
    password2:['',[Validators.required]],
    img:[''],
    terminos:[false,[Validators.required]]

  },{Validators: this.passwordIguales('password','password2')})

  constructor(private fb:FormBuilder,private usuarioService: UsuarioService){

  }

  crearUsuario(){
    this.formSubmited=true;
    console.log(this.registerForms.value)

    if(this.registerForms.invalid){
        return;
    }
    this.usuarioService.crearUsuario(this.registerForms.value).subscribe(
      respuesta => {
        console.log("Usuario Creado");
        console.log(respuesta);
        Swal.fire('Success', 'Usuario Creado Correctamente', 'success');
      },
      error => {
        console.warn('Error creating user:', error);
        Swal.fire('Error', error.error.msg || 'Error al crear el usuario', 'error');
      }
    );
  }


  campoValido(campo:any){
    if(this.registerForms.get(campo)?.invalid && this.formSubmited){
        return true
    }else{
      return false;
    }
  }
  aceptaTerminos(){
    return !this.registerForms.get('terminos')?.value && this.formSubmited;
  }

  contrasenaNoValida(){
    const pass1=this.registerForms.get('password')?.value;
    const pass2=this.registerForms.get('password2')?.value;


    if(pass1 != pass2 && this.formSubmited){
      return true;
    }else {
      return false;
    }
  }

  passwordIguales(password:any , password2:any){
    return (formGroup: FormGroup)=>{
      const pass1Control=formGroup.get(password);
      const pass2Control=formGroup.get(password2);

      if(pass1Control?.value === pass2Control?.value){
          pass2Control?.setErrors(null);
      }else{
        pass2Control?.setErrors({NoIguales:true})
      }
    }
  }


}

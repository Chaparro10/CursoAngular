import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { FileUploadService } from '../../services/file-upload.service';
import Swal from 'sweetalert2';
import { error } from 'console';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'] // Corrección de `styleUrl` a `styleUrls`
})
export class PerfilComponent implements OnInit {

  // Declaración del FormGroup
  public perfilForm: FormGroup;

  //Instancia del modelo
  public usuario: Usuario | undefined;

  public ImagenSubir?:File;

  public ImagenTemporal:any=null || ''

  // Inyección de FormBuilder en el constructor
  constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private fileService: FileUploadService,private cdr: ChangeDetectorRef) {
  this.usuario = usuarioService.usuario;

  this.perfilForm = this.fb.group({
    nombre: [this.usuario?.nombre, Validators.required],
    email: [this.usuario?.email, [Validators.required, Validators.email]]
  });
}

ngOnInit(): void {

}

// Método para manejar la actualización del perfil correo y usuario
ActualizaPerfil()  {
  console.log(this.perfilForm?.value);
  this.usuarioService.actualizarUsuario(this.perfilForm.value).subscribe(respuesta => {
    console.log(respuesta)


    if (this.usuario) {
      const { nombre, email } = this.perfilForm.value;

      this.usuario.nombre = nombre;
      this.usuario.email = email;
    }
    Swal.fire("success","Usuario Actualizado correctamente","success")
  },(error) =>{
      Swal.fire("Error",error.error.message,"error")
      //console.log("Error",error.error.message)
  })
}

botonCancelar(){
 
    Swal.fire({
      title: "Seguro que desea cancelar",
       icon:'info',
      showDenyButton: true
      //showCancelButton: true
    }).then((result)=>{
      if(result.isConfirmed){
        Swal.fire("Cancelando ","Cancelando imagen","info")
        this.ImagenTemporal=null || ''
      }else{
          this.ImagenSubir=this.ImagenTemporal
      }
    })
}

cambiarImagen(event:any){
  const file=event.target.files[0];

  
  this.ImagenSubir=file
  console.log(event.target.files[0])

  if(!file)
    {
      this.ImagenTemporal = null;
      return;
    }

  const reader =new FileReader();
  const url64=reader.readAsDataURL(file)

  reader.onloadend=()=>{
    this.ImagenTemporal=reader.result;
    console.log('Temporal',reader.result)
  }
}

subirImagen(){
      if(this.ImagenSubir  && this.usuario?._id){

        this.fileService.actualizarFoto(this.ImagenSubir,'usuarios',this.usuario._id).then(respuesta=>{
      
            if(this.usuario){
              console.log("aquiiiiiiii")
                this.usuario.img = respuesta;
                this.cdr.detectChanges(); // Forzar la detección de cambios
            }

          console.log('Imagen subida correctamente', respuesta);
          Swal.fire("Imagen","Imagen Actualizada Correctamente","success")
        },error=>{
          Swal.fire("Error","Error al subir la imagen","error")
          //console.error('Error al subir la imagen', error);
        })
      } 
    
}
}

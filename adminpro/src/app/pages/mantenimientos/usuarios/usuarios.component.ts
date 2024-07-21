import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { Usuario } from '../../../models/usuario.model';
import { Console } from 'console';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent implements OnInit {
  Listusuarios:any;
  search:any;
  filtroUsuarios:any; //guardar la informacion filtrada

  public  usuario?: Usuario;
  constructor(private usuarioservice:UsuarioService){
  }

  ngOnInit(): void {
    this.TraerUsuario();
  }

  TraerUsuario(){
    this.usuarioservice.getUsuarios().subscribe((data:any)=>{
      this.Listusuarios=data;
      console.log("Esta es la data",this.Listusuarios)

      this.filtroUsuarios = this.Listusuarios; // Inicializa con todos los usuarios
  })

     
  }

      //TRABAJANDO EL FILTRADO POR NUMERO DE EMPLEADO
  filtrarDatos(terminoDeBusqueda: string) {
    if (terminoDeBusqueda.trim() === '') {
      console.log("No hay coincidencias");
      // Si no hay término de búsqueda, mostramos todos los datos
      this.filtroUsuarios = this.Listusuarios;
      return;
    }
    console.log("Estos son los datos :" + this.filtroUsuarios)
    // Filtramos los datos basados en el término de búsqueda
    this.filtroUsuarios = this.Listusuarios
      .filter((c:any) => c.nombre.toLowerCase().indexOf(terminoDeBusqueda.trim().toLowerCase()) > -1
        || String(c.email).toLowerCase().indexOf(terminoDeBusqueda.trim().toLowerCase()) > -1
      );
  }


  //Eliminar Usuario
  EliminarUsuario(usuario: Usuario) {
    console.log("User", usuario)
    console.log("Usuario Recibido:",usuario._id,'Usuario Id:',this.usuarioservice.usuario?._id)
    if(usuario._id ===this.usuarioservice.usuario?._id){
        return Swal.fire('Error','No te puedes Borrar a ti mismo','error')
    }
    console.log("No deberia entrar aqui")
    return;

    Swal.fire({
      title: "¿Borrar Usuario?",
      text: `¿Seguro de Borra?, a ${usuario.nombre} ` ,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar"
    }).then((result) => {
      if (result.isConfirmed) {

        this.usuarioservice.EliminaUsuario(usuario).subscribe(response=>{
          Swal.fire({
            title: "Deleted!",
            text: `Usuario Eliminado ${usuario.nombre} ` ,
            icon: "success"
          });
          this.TraerUsuario();
        },(error=>{
          Swal.fire({
            title: "Deleted!",
            text: "Ocurrio un error al eliminar el Usuario!",
            icon: "error"
          });
        }))
       
      }
    });
  }

  CambiarRol(data:any){
      console.log('Data select',data)

      this.usuarioservice.actualizarInfoUser(data).subscribe(response=>{
        console.log("Reespuesta Update Rol",response)
      })
  }
}

import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { Usuario } from '../../../models/usuario.model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent implements OnInit {
  Listusuarios:any;
  search:any;
  filtroUsuarios:any; //guardar la informacion filtrada
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
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../assets/environments/environment';

import { tap } from 'rxjs';


const base_url=environment.base_url;
@Injectable({
  providedIn: 'root'
})


export class UsuarioService {

  constructor(private http:HttpClient) { }

  crearUsuario(formData: any) {
    console.log("Creando usuario");
    return this.http.post(`${base_url}/usuarios`, formData)
      .pipe(
        tap((resp: any) => {
          localStorage.setItem("token", resp.token) //Guardando el Token en el localStorage
        })
      )
  }

  LoginUsuario(formData: any) {
    console.log("Login usuario");
    return this.http.post(`${base_url}/login`, formData)
      .pipe(
        tap((resp: any) => {
          localStorage.setItem("token", resp.token) //Guardando el Token en el localStorage
        })
      )
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../assets/environments/environment';

import { tap } from 'rxjs';
import { response } from 'express';


const base_url=environment.base_url;
const url_google=environment.url_google;
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

  LoginGoogle(token:string) {
    return this.http.post(`${url_google}`, {token}).pipe(
      tap((response:any)=>{
        localStorage.setItem("tokenGoogle",response.token)
      })
    )
  }
}

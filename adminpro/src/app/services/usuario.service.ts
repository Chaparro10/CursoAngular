import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "../../assets/enviroment/environment";

import { Observable, catchError, map, of, tap } from 'rxjs';
import { response } from 'express';
import { error } from 'console';
import { Router } from '@angular/router';

import { Usuario } from '../models/usuario.model';


const base_url=environment.base_url;
const url_google=environment.url_google;
@Injectable({
  providedIn: 'root'
})


export class UsuarioService  {

public  usuario?: Usuario;


  constructor(private http:HttpClient,private router:Router) {
    
   }


  crearUsuario(formData: any) {
    console.log("Creando usuario");
    return this.http.post(`${base_url}/usuarios`, formData)
      .pipe(
        tap((resp: any) => {
          localStorage.setItem("token", resp.token) //Guardando el Token en el localStorage
        })
      )
  }

  actualizarUsuario(data:{email:any,nombre:any}){

    const token = localStorage.getItem('token');
  
  if (!token || token === undefined || token === '') {
    console.log("No hay token disponible");
    return of(false); // Retornar un Observable de false inmediatamente
  }
    const headers = new HttpHeaders({ 
      'Authorization': `Bearer ${token}`
    });

    return this.http.put(`${base_url}/usuarios/${this.usuario?._id}`, data,{headers})
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
        localStorage.setItem("token",response.token1)
      })
    )
  }

  logout(){
    localStorage.removeItem('token')
    this.router.navigateByUrl('/login')
  }

  private decodeToken(token: string): any {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map((c: string) => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  }
  
VerificaToken(): Observable<boolean> {

  const token = localStorage.getItem('token');
  
  if (!token || token === undefined || token === '') {
    console.log("No hay token disponible");
    return of(false); // Retornar un Observable de false inmediatamente
  }
  
  console.log("Este es el token", token);
  
  // Decodificar el token para obtener el ID
  const decodedToken = this.decodeToken(token);
  const userId = decodedToken.uid; 
  
  console.log('user id',userId)

    // Realizar la solicitud GET al backend con el token en los headers
    const headers = new HttpHeaders({ 
      'Authorization': `Bearer ${token}`
    });

  // Realizar la solicitud GET al backend con el ID en el cuerpo
  return this.http.get<any>(`${base_url}/login/renew`,{headers}).pipe(
    tap((response: any) => {

      console.log("Estoy aqui dentro de renew")
      console.log("Respuesta:",response)
      const {email,nombre,img='',role,_id,google}=response.user
      this.usuario= new Usuario(nombre,email,_id,google,'',img,role)
     
      this.usuario.imprimirUsuario()
       // Actualizar el token en el localStorage si se recibe uno nuevo
       if (response.token) {
        localStorage.setItem('token', response.token);
      }
    }),
    map(response => true),
    catchError((error) => {
      console.error('Error during token renewal:', error);
      return of(false);
    })
  );
}


  
  
}

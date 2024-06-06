import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../assets/environments/environment';



const base_url=environment.base_url;
@Injectable({
  providedIn: 'root'
})


export class UsuarioService {

  constructor(private http:HttpClient) { }

  crearUsuario(formData:any){
    console.log("Creando usuario");
    return this.http.post(`${base_url}/usuarios`,formData)
  }

  LoginUsuario(formData:any){
    console.log("Login usuario");
    return this.http.post(`${base_url}/login`,formData)
  }
}

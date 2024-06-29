import { Injectable } from '@angular/core';
import { environment } from '../../assets/enviroment/environment';
import { HttpHeaders } from '@angular/common/http';


const base_url=environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor() { }

  async actualizarFoto(
    archivo:File,
    tipo:'usuarios'| 'medicos' | 'hospitales',
    id:string
  ){
    try{
      const url=`${base_url}/upload/${tipo}/${id}`;
      //(`${base_url}/usuarios/${this.usuario?._id}`, data,{headers})
      const formData = new FormData();
      formData.append('imagen',archivo)

      const token = localStorage.getItem('token');
      const headers = new HttpHeaders({ 
        'Authorization': `Bearer ${token}`
      });
  
      const resp=await fetch(url,{
        method: 'PUT',body:formData

      });

      const data=await resp.json();

      console.log(data)

      if(data.success==true){
          return data.file;
      }else{
        console.log(data.message)
        return false;
      }

      //return 'esto es una prueba';

      console.log(resp)

  }catch(error){
    console.log(error)
    return false;
  }
  }
}

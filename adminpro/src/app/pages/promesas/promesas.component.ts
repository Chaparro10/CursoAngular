import { Component } from '@angular/core';
import { resolve } from 'path';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrl: './promesas.component.css'
})
export class PromesasComponent {

  ngOnInit():void{
    const promesa = new Promise((resolve ,reject)=>{
      
      if(true){
        resolve("Hola mundo")
      }else{
        reject("Todo se derrumbo")
      }
      
    });

    promesa.then((mensaje)=>{
      console.log(mensaje)
    })
    .catch(error =>{
      console.log(error)
    })
    this.getUsuarios().then(usuarios =>{
      console.log(usuarios)
    })

    console.log("Fin del init");
  }

  //Funciones que retornan promesas
  getUsuarios(){
    return new Promise(resolve=>{
      fetch('https://reqres.in/api/users?page=2')
      .then(respuesta=>respuesta.json())
      .then(body =>resolve(body.data))
    })

    
  }
   

    
}

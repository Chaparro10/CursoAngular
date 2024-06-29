
import { environment } from "../../assets/enviroment/environment";

const base_url=environment.base_url;
export class Usuario{
    constructor(
        public nombre:String,//Obligatorios
		public email:String,
       public _id?: string, //Opcionales
        public google?: Boolean,
	    public password?:String ,
		public img?:String ,
		public role?:String
		

    ){

    }

    imprimirUsuario(){
        console.log(this.nombre)
    }



   get MostrarImagen(){
        //localhost:3000/api/upload/medicos/660a48d9fed90a45df0eada1
        if(this.img){
           // console.log("imagen",this.img)
            if(this.img.startsWith("http")){
                return `${this.img}`;
            }
            return `${base_url}/upload/usuarios/${this.img}`;
        }else{
            return `${base_url}/upload/no-image`; 
        }
    }

    get NombreUsuario(){
        return `${this.nombre}`;
    }
}
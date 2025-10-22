import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { getAuth, signInWithEmailAndPassword, getIdToken } from 'firebase/auth';
import firebase from "firebase/compat/app";

@Injectable()
export class LoginService{
    token!:any;

    constructor(private router:Router){}


    login(email:string,password:string){
            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
            .then(
                response => {
                    getIdToken(response.user).then(
                        token=>{
                            this.token=token;
                            this.router.navigate(['/']);
                        }
                    )
                }
            )
           
    }


    getIdToken(){
        return this.token;
    }

    isAuthenticado():boolean{
        return this.token != null;
    }

    logout(){
        getAuth().signOut().then(()=>{
            this.token=null;
            this.router.navigate(['login'])
        }).catch(error=>console.log("error logut ", error));
    }
}
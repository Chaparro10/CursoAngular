import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Persona } from "../models/persona.model";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";


@Injectable()
export class DataServices {
    constructor(private httpClient: HttpClient) { }



    //Guardar persona
    guardarPersona(personas: Persona[]) {
        this.httpClient.put('https://listado-personas-b1f9d-default-rtdb.firebaseio.com/datos.json', personas)
            .subscribe(
                response => {
                    console.log('resultado de guardar personas', response);
                },
                error => { console.log('error al guardar personas', error) }
            );
    }

    cargarPersonas():Observable<Persona[]>{
        return this.httpClient.get<{[key: string]: Persona}>("https://listado-personas-b1f9d-default-rtdb.firebaseio.com/datos.json/")
            .pipe(
                map(response => {
                    if (!response) return [];
                    const personasArray = Object.keys(response).map(key => response[key]);
                    
                    // Si el primer elemento es un array, lo aplanamos
                    if (personasArray.length > 0 && Array.isArray(personasArray[0])) {
                        return personasArray[0];
                    }
                    
                    return personasArray;
                })
            );
    }
}
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Persona } from "../models/persona.model";


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
}
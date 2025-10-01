import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Persona } from "../models/persona.model";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";


@Injectable()
export class DataServices {
    constructor(private httpClient: HttpClient) { }

    cargarPersonas(): Observable<Persona[]>{
        return this.httpClient.get<Persona[]>('https://listado-personas-b1f9d-default-rtdb.firebaseio.com/datos.json');
    }


    //Guardar persona
    guardarPersonas(personas: Persona[]) {
        this.httpClient
            .put('https://listado-personas-b1f9d-default-rtdb.firebaseio.com/datos.json',personas)
            .subscribe({
                next: (response) => console.log('resultado guardar personas: ' + response),
                error: (error) => console.log('Error al guardar Personas: ' + error),
                complete: () => console.log('Petición completada con éxito'),
            });
        }

    // cargarPersonas(): Observable<Persona[]> {
    //     return this.httpClient.get<{ [key: string]: Persona }>("https://listado-personas-b1f9d-default-rtdb.firebaseio.com/datos.json/")
    //         .pipe(
    //             map(response => {
    //                 if (!response) return [];
    //                 const personasArray = Object.keys(response).map(key => response[key]);

    //                 // Si el primer elemento es un array, lo aplanamos
    //                 if (personasArray.length > 0 && Array.isArray(personasArray[0])) {
    //                     return personasArray[0];
    //                 }

    //                 return personasArray;
    //             })
    //         );
    // }

    modificarPersona(index: number, persona: Persona): void {
        const url = `https://listado-personas-b1f9d-default-rtdb.firebaseio.com/datos/${index}.json`;
        this.httpClient.put(url, persona)
            .subscribe({
                next: (response) => console.log("Resultado modificar Persona: ", response),
                error: (error) => console.log("Error en modificar Persona: " + error),
                complete: () => console.log("Modificación completada")
            });
    }
}
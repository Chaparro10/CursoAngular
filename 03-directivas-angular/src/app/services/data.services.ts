import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Persona } from "../models/persona.model";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";


@Injectable()
export class DataServices {
    constructor(private httpClient: HttpClient) { }

    cargarPersonas(): Observable<Persona[]> {
        return this.httpClient.get<Persona[]>('https://listado-personas-b1f9d-default-rtdb.firebaseio.com/datos.json');
    }


    //Guardar persona
    guardarPersonas(personas: Persona[]) {
        this.httpClient
            .put('https://listado-personas-b1f9d-default-rtdb.firebaseio.com/datos.json', personas)
            .subscribe({
                next: (response) => console.log('resultado guardar personas: ' + response),
                error: (error) => console.log('Error al guardar Personas: ' + error),
                complete: () => console.log('Petición completada con éxito'),
            });
    }

    modificarPersona(index: number, persona: Persona): void {
        const url = `https://listado-personas-b1f9d-default-rtdb.firebaseio.com/datos/${index}.json`;
        this.httpClient.put(url, persona)
            .subscribe({
                next: (response) => console.log("Resultado modificar Persona: ", response),
                error: (error) => console.log("Error en modificar Persona: " + error),
                complete: () => console.log("Modificación completada")
            });
    }

    eliminarPersona(index: number): void {
        const url = `https://listado-personas-b1f9d-default-rtdb.firebaseio.com/datos/${index}.json`;
        this.httpClient.delete(url)
            .subscribe({
                next: (response) => console.log("Resultado eliminar Persona: ", response),
                error: (error) => console.log("Error en eliminar Persona: " + error),
                complete: () => console.log("Eliminacion completada")
            });
    }
}
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {

  constructor(private usuarioService: UsuarioService, private router: Router) { }



  canActivate(): Observable<boolean> | boolean {
    const token = localStorage.getItem('token');

    if (!token || token === undefined || token === '') {
      console.log("No hay token disponible");
      // Redirigir al usuario a la página de inicio de sesión
      this.router.navigate(['/login']);
      return false; // Retornar false indicando que no se puede activar la ruta
    } else {
      // Retornar true indicando que se puede activar la ruta
      return true;
    }
  }

  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ){
  //   console.log("Pase por aqui");

    // return this.usuarioService.VerificaToken();

    // if (this.usuarioService.VerificaToken()) {
    //   return true;
    //   console.log("Pase por aqui1");
    // } else {
    //   console.log("Pase por aqui2");
    //   this.router.navigate(['/login']);
    //   return false;
    // }
  // }
}

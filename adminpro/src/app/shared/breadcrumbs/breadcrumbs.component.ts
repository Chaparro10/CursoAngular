import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Observable, Subscription, filter, map } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs', // Selector para usar este componente en el HTML
  templateUrl: './breadcrumbs.component.html',
  styles: ``
})
export class BreadcrumbsComponent implements OnDestroy {
  // Propiedad para almacenar el título
  public titulo?: string;

  // Suscripción para manejar la emisión de eventos de ruta
  public titlesSubs$: Subscription;

  // Inyección del servicio Router en el constructor
  constructor(private route: Router) {
    // Subscribirse a los argumentos de la ruta y asignar el título
    this.titlesSubs$ = this.getRouteArguments().subscribe(({ titulo }) => {
      this.titulo = titulo;
    });
  }

  // Método que se ejecuta cuando el componente se destruye
  ngOnDestroy(): void {
    // Desuscribirse para evitar fugas de memoria
    this.titlesSubs$.unsubscribe();
  }

  // Método privado para obtener argumentos de la ruta
  private getRouteArguments(): Observable<any> {
    return this.route.events
      .pipe(
        // Filtrar eventos para que solo pase si es una instancia de ActivationEnd
        filter((event): event is ActivationEnd => event instanceof ActivationEnd),
        // Filtrar eventos donde el primer hijo del snapshot sea null
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        // Mapear el evento para obtener los datos del snapshot
        map((event: ActivationEnd) => event.snapshot.data),
      );
  }
}

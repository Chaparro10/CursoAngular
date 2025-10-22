import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonasComponent } from './components/personas/personas.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: PersonasComponent },
  {
    path: 'personas', component: PersonasComponent, children: [
      { path: 'agregar', component: FormularioComponent },
      { path: ':id', component: FormularioComponent },
    ]
  },
  {
    path:'login',component:LoginComponent
  },
  { path: '**', component: ErrorComponent } // Ruta por defecto para rutas no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

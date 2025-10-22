import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonasComponent } from './components/personas/personas.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './login/login.component';
import { LoginGuardian } from './guards/login.guardian.service';

const routes: Routes = [
  { path: '', component: PersonasComponent,canActivate:[LoginGuardian] },
  {
    path: 'personas', component: PersonasComponent,canActivate:[LoginGuardian] ,children: [
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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//modulos
import { PagesRoutingModule } from './pages/pages.routing';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import path from 'path';
import { NotpagefoundComponent } from './pages/notpagefound/notpagefound.component';



const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'',redirectTo:'/dashboard',pathMatch:'full'},//si va vacio redirecciona
  {path:'**',component:NotpagefoundComponent}//si no la encuentra 
];

@NgModule({ 
  declarations:[],
  imports: [RouterModule.forRoot(routes),
    PagesRoutingModule//Rutas definidas aqui
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

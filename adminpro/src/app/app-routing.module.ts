import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import path from 'path';
import { ProgressComponent } from './pages/progress/progress.component';
import { NotpagefoundComponent } from './pages/notpagefound/notpagefound.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  {
      path:'',
      component:PagesComponent,
      children:[
        {path:'dashboard',component:DashboardComponent},
        {path:'progress',component:ProgressComponent},
        {path:'',redirectTo:'/dashboard',pathMatch:'full'},//si va vacio redirecciona
      ]
  },
  
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  
  
  {path:'**',component:NotpagefoundComponent}//si no la encuentra 
 

];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

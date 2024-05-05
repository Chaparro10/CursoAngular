import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import path from 'path';
import { ProgressComponent } from './pages/progress/progress.component';
import { NotpagefoundComponent } from './pages/notpagefound/notpagefound.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'progress',component:ProgressComponent},
  {path:'',redirectTo:'/dashboard',pathMatch:'full'},//si va vacio redirecciona
  {path:'**',component:NotpagefoundComponent}//si no la encuentra 
 

];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

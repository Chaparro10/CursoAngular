import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { GraficaComponent } from "./grafica/grafica.component";
import { PromesasComponent } from "./promesas/promesas.component";
import { RxjsComponent } from "./rxjs/rxjs.component";
import { authGuard } from "../guards/auth.guard";
import { PerfilComponent } from "./perfil/perfil.component";


const routes: Routes=[
    {
        path:'dashboard',//Ruta principal 
        component:PagesComponent,
        canActivate:[authGuard],
        children:[//Hijas
          {path:'',component:DashboardComponent},
          {path:'progress',component:ProgressComponent,data:{titulo:'PROGRESS'}},
          {path:'grafica',component:GraficaComponent,data:{titulo:'GRAFICA'}},
          {path:'promesas',component:PromesasComponent,data:{titulo:'PROMESAS'}},
          {path:'rxjs',component:RxjsComponent,data:{titulo:'RXJS'}},
          {path:'perfil',component:PerfilComponent,data:{titulo:'Perfil'}}

        ]
    },
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class PagesRoutingModule{}
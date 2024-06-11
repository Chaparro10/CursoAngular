import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { GraficaComponent } from "./grafica/grafica.component";
import { PromesasComponent } from "./promesas/promesas.component";
import { RxjsComponent } from "./rxjs/rxjs.component";
import { authGuard } from "../guards/auth.guard";

const routes: Routes=[
    {
        path:'dashboard',//Ruta principal 
        component:PagesComponent,
        canActivate:[authGuard],
        children:[//Hijas
          {path:'',component:DashboardComponent},
          {path:'progress',component:ProgressComponent},
          {path:'grafica',component:GraficaComponent},
          {path:'promesas',component:PromesasComponent},
          {path:'rxjs',component:RxjsComponent}

        ]
    },
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class PagesRoutingModule{}
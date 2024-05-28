import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgChartsModule } from 'ng2-charts';


//Componentes
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { GraficaComponent } from './grafica/grafica.component';
//modulos
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { ComponentsModule } from '../components/components.module';

// Importar modulos necesarios para pages
import { FormsModule } from '@angular/forms';
import { PromesasComponent } from './promesas/promesas.component';





@NgModule({
  declarations: [
    ProgressComponent,
    DashboardComponent,
    PagesComponent,
    GraficaComponent,
    PromesasComponent,
    // Grafica1Component
  ],
  exports: [
     ProgressComponent,
    DashboardComponent,
    PagesComponent,
    
    // Grafica1Component],
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule,
    AppRoutingModule,
    FormsModule,
    NgChartsModule
    
  ]
})
export class PagesModule { }

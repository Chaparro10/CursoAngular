import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonasComponent } from './components/personas/personas.component';
import { PersonaComponent } from './components/persona/persona.component';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ErrorComponent } from './components/error/error.component';
import { DataServices } from './services/data.services';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login.service';
import { LoginGuardian } from './guards/login.guardian.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    PersonaComponent,
    FormularioComponent,
    ErrorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataServices,LoginService,LoginGuardian],
  bootstrap: [AppComponent]
})
export class AppModule { }

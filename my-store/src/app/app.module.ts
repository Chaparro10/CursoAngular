import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import {provideHttpClient} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImgComponent } from './componentes/img/img.component';
import { ProductsComponent } from './componentes/products/products.component';
import { ProductComponent } from './componentes/product/product.component';
import { NavComponent } from './componentes/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ImgComponent,
    ProductsComponent,
    ProductComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }

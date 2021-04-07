import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'; //agregado el modulo de formularios

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EjerciciosComponent } from './ejercicios/ejercicios.component';

@NgModule({
  declarations: [
    AppComponent,
    EjerciciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //agregar a la libreria los formularios
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

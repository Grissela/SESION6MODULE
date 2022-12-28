import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactosComponent } from './contactos/contactos.component';



@NgModule({
  declarations: [
    HomeComponent,
    NosotrosComponent,
    ServiciosComponent,
    ContactosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PageModule { }

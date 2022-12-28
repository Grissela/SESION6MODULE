import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactosComponent } from './contactos/contactos.component';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { InicioComponent } from './inicio/inicio.component';



@NgModule({
  declarations: [
    NosotrosComponent,
    ServiciosComponent,
    ContactosComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    UsuariosModule
  ]
})
export class PageModule { }

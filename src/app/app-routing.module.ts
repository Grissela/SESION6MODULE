import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './modulos/page/contactos/contactos.component';
import { InicioComponent } from './modulos/page/inicio/inicio.component';
import { NosotrosComponent } from './modulos/page/nosotros/nosotros.component';
import { ServiciosComponent } from './modulos/page/servicios/servicios.component';

// Rutas de navegacion
const routes: Routes = [
  {path:'', component:InicioComponent},
  {path:'inicio',component:InicioComponent},
  {path:'nosotros',component:NosotrosComponent},
  {path:'servicios',component:ServiciosComponent},
  {path:'contactos',component:ContactosComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

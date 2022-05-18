import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductoHijoCComponent } from './producto-hijo-c/producto-hijo-c.component';
import { ProductosService } from './productos.service';
import { ContactoComponent } from './contacto/contacto.component';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { DetalleProductosComponent } from './detalle-productos/detalle-productos.component';
import { RouterModule, Routes } from '@angular/router';
import { FiltroPipe } from './filtro.pipe';

const appRoutes:Routes=[

    {path: 'contacto', component:ContactoComponent },
    {path: 'productos', component:ListadoProductosComponent },
    {path: 'detalle/:id', component:DetalleProductosComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductoHijoCComponent,
    ContactoComponent,
    ListadoProductosComponent,
    DetalleProductosComponent,
    FiltroPipe,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

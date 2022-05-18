import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto.model';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent implements OnInit {

  titulo = 'Listado de Productos';

  constructor( private productosService:ProductosService) { //inyectando el servicio de Productos

   }

  ngOnInit(): void {
    this.productos=this.productosService.productos;
  }
  productos:Producto[]=[]; //array de donde estan los productos

  public page: number=0;


  nextPage(){
    this.page += 2; //accion boton para ir hacia adelante en la paginacion
  }

  prevPage(){
    if(this.page > 0) //accion boton para ir hacia atras
      this.page -=2;
  }



}

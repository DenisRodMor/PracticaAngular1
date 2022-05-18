import { Component, OnInit } from '@angular/core';
import { Producto } from '../model/producto.model';
import { ProductosService } from '../productos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle-productos',
  templateUrl: './detalle-productos.component.html',
  styleUrls: ['./detalle-productos.component.css']
})
export class DetalleProductosComponent implements OnInit {



  constructor(private router:Router,private productosService:ProductosService, private route:ActivatedRoute) { //inyeccion de rutas y de servicio

   }


   productos:Producto[]=[];
  ngOnInit(): void {
    this.productos=this.productosService.productos; //cargar el servicio

    this.indice=this.route.snapshot.params['id']; // esto es qu3 el indice de esta clase tiene que ser igual al indice que se le esta enviando  a traves de la ruta

    let producto:Producto=this.productosService.encontrarProducto(this.indice);//ene sta variable se almacena el producto que tiene el id que se ha almacenado en this.indice

    this.cuadroNombre=producto.nombre; //informacion que traerá
    this.cuadroDescripcion=producto.descripcion;
    this.cuadroFechaIngreso=producto.fechaingreso;
    this.cuadroPrecio=producto.precio;
    this.cuadroCantidad=producto.cantidad;
  }


  volverHome(){
    this.router.navigate(['/productos']); //metodo para regresar al listado de productos por medio de boton
  }


cuadroNombre: string=""; //variables a utilizar para traer la info
cuadroDescripcion: string="";
cuadroFechaIngreso: string="";
cuadroPrecio: number=0;
cuadroCantidad: number=0;

indice:number;//variable para almacenar el indice en la URL

}

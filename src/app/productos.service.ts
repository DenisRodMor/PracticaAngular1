import { Injectable } from "@angular/core";
import { Producto } from "./producto.model";

@Injectable()
export class ProductosService{

  constructor(){

  }

  productos:Producto[]=[ //arreglo con los productos disponibles para uso


    new Producto(1,"Disco SSD", "Disco duro para computadora", "04/12/2021", 57000, 10),
    new Producto(2,"Base enfriadora", "Base enfriadora para computadora", "04/12/2021", 20000, 20),
    new Producto(3,"Cargador iMEXX", "Base enfriadora para computadora", "04/12/2021", 15000, 10),
    new Producto(4,"Base Razer", "Base enfriadora para computadora", "04/12/2021", 25000, 20),
    new Producto(5,"Teclado iMEXX", "Teclado gaming para computadora", "04/12/2021", 10000, 20),
    new Producto(6,"Teclado Motospeed k27", "Teclado gaming para computadora", "04/12/2021", 22000, 20),
    new Producto(7,"Motorola g60", "Celular ultima tecnologia", "04/12/2021", 250000, 5),
    new Producto(8,"Apple Iphone 13", "Celular ultima tecnologia", "04/12/2021", 1000000, 5),
    new Producto(9,"Samsung Galaxy Z Fold", "Celular ultima tecnologia", "04/12/2021", 950000, 4),
    new Producto(10,"ONEPLUS 10 PRO", "Celular ultima tecnologia", "04/12/2021", 800000, 3),
    new Producto(11,"Xiaomi 12", "Celular ultima tecnologia", "04/12/2021", 500000, 6),
    new Producto(12,"PC Igaming MOBA Athlon", "Computadora Gaming", "04/12/2021", 960000, 2),
    new Producto(13,"Acer Nitro 5", "Computadora Gaming", "04/12/2021", 750000, 2),
    new Producto(14,"Lenovo IdeaPad Gaming 3", "Computadora Gaming", "04/12/2021", 680000, 1),
    new Producto(15,"MSI A320M-A PRO MAX", "Tarjeta madre para computadora", "04/12/2021", 38000, 4),
    new Producto(16,"MSI A520M PRO-VH", "Tarjeta madre para computadora", "04/12/2021", 40800, 5),
    new Producto(17,"Gigabyte A520M-H ", "Tarjeta madre para computadora", "04/12/2021", 55000, 7),
    new Producto(18,"Monitor LG ", "Monitor para computadora de 32 pulgadas", "04/12/2021", 100000, 3),
    new Producto(19,"Mouse Motospeed", "Mouse gamer para computadora", "04/12/2021", 10000, 15),
    new Producto(20,"Parlante", "Parlante con adaptador para USB", "04/12/2021", 15000, 5),
    new Producto(21,"USB 128GB ", "Dispositivo de almacenamiento externo", "04/12/2021", 8500, 10),
    new Producto(22,"EPSON L150", "Impresora EPSON L150 con scaner", "04/12/2021", 150000, 5),



];

  encontrarProducto(indice:number){ //encargado de buscar el producto por medio del indice que tiene en el arreglo

    let producto:Producto=this.productos[indice];

    return producto;

  }
}

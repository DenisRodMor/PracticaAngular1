export class Producto{
  constructor(id:number,nombre:string, descripcion:string, fechaingreso:string, precio:number, cantidad:number){

    this.id=id;
    this.nombre=nombre;
    this.descripcion=descripcion; //informacion de los productos
    this.fechaingreso=fechaingreso;
    this.precio=precio;
    this.cantidad=cantidad;


  }

id:number=0;
nombre:string="";
descripcion:string=""; //variables a utilizar a la hora de ingresar productos en el servicio
fechaingreso:string="";
precio:number=0;
cantidad:number=0;



}

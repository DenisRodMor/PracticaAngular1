import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from './model/producto.model';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(productos: Producto[], page: number = 0): Producto[] {


    return productos.slice(page, page + 2); //filtro para que muestre solo dos productos por pagina

  } // al ser 22 productos, cuenta con 11 paginas

}

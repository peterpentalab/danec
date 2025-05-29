
import { Component, Input } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html'
})
export class ProductoListComponent {
  @Input() productos: Producto[] = [];

  constructor(private productoService: ProductosService) {}

  eliminar(id: number) {
    this.productoService.deleteProducto(id).subscribe(() => {
      this.productos = this.productos.filter(p => p.id !== id);
    });
  }
}

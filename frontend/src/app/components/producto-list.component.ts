import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto.model';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html'
})
export class ProductoListComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private productoService: ProductoService) {}

  ngOnInit() {
    this.productoService.getProductos().subscribe(data => this.productos = data);
  }

  editar(producto: Producto) {}

  eliminar(id: number) {
    this.productoService.deleteProducto(id).subscribe(() => {
      this.productos = this.productos.filter(p => p.id !== id);
    });
  }
}

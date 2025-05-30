import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { PlantaService } from '../services/planta.service';
import { Producto } from '../models/producto.model';
import { Planta } from '../models/planta.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html'
})
export class ProductoFormComponent implements OnInit {
  producto: Producto = { id: 0, nombre: '', tipo: '', plantaId: 0 };
  plantas: Planta[] = [];

  constructor(
    private productoService: ProductoService,
    private plantaService: PlantaService,
    private router: Router
  ) {}

  ngOnInit() {
    this.plantaService.getPlantas().subscribe(data => {
      this.plantas = data;
    });
  }

  guardar() {
    console.log('Enviando producto:', this.producto);
    this.productoService.saveProducto(this.producto).subscribe({
      next: () => {
        console.log('Producto creado con éxito');
        this.router.navigate(['/productos']);
      },
      error: (err) => {
        console.error('Error al guardar producto:', err);
      }
    });
  }
}

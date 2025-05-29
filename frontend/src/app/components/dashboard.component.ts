
import { Component, OnInit } from '@angular/core';
import { PlantasService } from '../services/plantas.service';
import { ProductosService } from '../services/productos.service';
import { Planta } from '../models/planta';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  plantas: Planta[] = [];
  productosPorPlanta: { [key: number]: number } = {};

  constructor(
    private plantaService: PlantasService,
    private productoService: ProductosService
  ) {}

  ngOnInit(): void {
    this.plantaService.getPlantas().subscribe(data => {
      this.plantas = data;
      this.plantas.forEach(p => {
        this.productoService.getProductosPorPlanta(p.id).subscribe(prods => {
          this.productosPorPlanta[p.id] = prods.length;
        });
      });
    });
  }
}

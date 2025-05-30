import { Component, OnInit } from '@angular/core';
import { PlantaService } from '../services/planta.service';
import { Planta } from '../models/planta.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planta-list',
  templateUrl: './planta-list.component.html'
})
export class PlantaListComponent implements OnInit {
  plantas: Planta[] = [];

  constructor(private plantaService: PlantaService, private router: Router) {}

  ngOnInit() {
    this.plantaService.getPlantas().subscribe(data => this.plantas = data);
  }

  editar(planta: Planta) {
    // Esto sería para modo edición, o lo manejas con rutas
    this.router.navigate(['/plantas/crear'], { state: { planta } });
  }

  eliminar(id: number) {
    this.plantaService.deletePlanta(id).subscribe(() => {
      this.plantaService.getPlantas().subscribe(data => this.plantas = data);
    });
  }
}

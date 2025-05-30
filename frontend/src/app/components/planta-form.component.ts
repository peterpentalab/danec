import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlantaService } from '../services/planta.service';
import { Planta } from '../models/planta.model';

@Component({
  selector: 'app-planta-form',
  templateUrl: './planta-form.component.html'
})
export class PlantaFormComponent {
  planta: Planta = { nombre: '', ubicacion: '' };

  constructor(
    private plantaService: PlantaService,
    private router: Router
  ) {}

  guardar() {
  console.log('Intentando guardar planta:', this.planta);
  this.plantaService.savePlanta(this.planta).subscribe({
    next: () => {
      console.log('Planta guardada con éxito');
      this.router.navigate(['/plantas']);
    },
    error: err => {
      console.error('Error al guardar la planta:', err);
    }
  });
}
}

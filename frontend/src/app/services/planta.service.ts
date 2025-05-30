import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Planta } from '../models/planta.model';

@Injectable({
  providedIn: 'root'
})
export class PlantaService {
  private apiUrl = 'http://localhost:8080/api/plantas';

  constructor(private http: HttpClient) {}

  // Obtener todas las plantas
  getPlantas(): Observable<Planta[]> {
    return this.http.get<Planta[]>(this.apiUrl);
  }

  // Obtener planta por ID
  getPlanta(id: number): Observable<Planta> {
    return this.http.get<Planta>(`${this.apiUrl}/${id}`);
  }

  // Guardar nueva planta o editar existente
  savePlanta(planta: Planta): Observable<Planta> {
    if (planta.id) {
      return this.http.put<Planta>(`${this.apiUrl}/${planta.id}`, planta);
    } else {
      return this.http.post<Planta>(this.apiUrl, planta);
    }
  }

  // Eliminar planta
  deletePlanta(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

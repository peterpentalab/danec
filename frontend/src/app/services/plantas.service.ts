
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Planta } from '../models/planta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlantasService {
  private baseUrl = 'http://localhost:8080/api/plantas';

  constructor(private http: HttpClient) {}

  getPlantas(): Observable<Planta[]> {
    return this.http.get<Planta[]>(this.baseUrl);
  }

  createPlanta(planta: Planta): Observable<Planta> {
    return this.http.post<Planta>(this.baseUrl, planta);
  }

  deletePlanta(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}

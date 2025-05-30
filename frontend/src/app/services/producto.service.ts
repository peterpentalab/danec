import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl = 'http://localhost:8080/api/productos';

  constructor(private http: HttpClient) {}

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }

  getProducto(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.apiUrl}/${id}`);
  }

  saveProducto(producto: Producto): Observable<Producto> {
    return producto.id
      ? this.http.put<Producto>(`${this.apiUrl}/${producto.id}`, producto)
      : this.http.post<Producto>(this.apiUrl, producto);
  }

  deleteProducto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getByPlantaId(plantaId: number): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.apiUrl}/planta/${plantaId}`);
  }
}

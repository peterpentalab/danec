
package com.danec.service;

import com.danec.model.Producto;
import com.danec.repository.ProductoRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ProductoService {
    private final ProductoRepository productoRepository;

    public ProductoService(ProductoRepository productoRepository) {
        this.productoRepository = productoRepository;
    }

    public List<Producto> findAll() {
        return productoRepository.findAll();
    }

    public Producto save(Producto producto) {
        producto.setFechaRegistro(LocalDateTime.now());
        return productoRepository.save(producto);
    }

    public Producto findById(Long id) {
        return productoRepository.findById(id).orElse(null);
    }

    public void delete(Long id) {
        productoRepository.deleteById(id);
    }

    public List<Producto> findByPlanta(Long plantaId) {
        return productoRepository.findByPlantaId(plantaId);
    }
}

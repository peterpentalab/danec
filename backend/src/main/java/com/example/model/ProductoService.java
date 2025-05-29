
package com.example.service;

import com.example.model.Producto;
import com.example.repository.ProductoRepository;
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

    public List<Producto> findByPlantaId(Long plantaId) {
        return productoRepository.findByPlantaId(plantaId);
    }

    public Producto save(Producto producto) {
        producto.setFechaRegistro(LocalDateTime.now());
        return productoRepository.save(producto);
    }

    public void delete(Long id) {
        productoRepository.deleteById(id);
    }

    public Producto findById(Long id) {
        return productoRepository.findById(id).orElse(null);
    }
}

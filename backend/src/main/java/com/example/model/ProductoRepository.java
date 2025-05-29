
package com.example.repository;

import com.example.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

/**
 * Repositorio JPA para la entidad Producto.
 */
public interface ProductoRepository extends JpaRepository<Producto, Long> {
    List<Producto> findByPlantaId(Long plantaId);
}

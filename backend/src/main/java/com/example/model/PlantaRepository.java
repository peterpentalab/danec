
package com.example.repository;

import com.example.model.Planta;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Repositorio JPA para la entidad Planta.
 */
public interface PlantaRepository extends JpaRepository<Planta, Long> {}

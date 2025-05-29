
package com.example.model;

import jakarta.persistence.*;
import java.util.List;

/**
 * Entidad que representa una planta de producción.
 */
@Entity
public class Planta {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nombre;

    private String ubicacion;

    @OneToMany(mappedBy = "planta", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Producto> productos;

    // Getters y setters
}

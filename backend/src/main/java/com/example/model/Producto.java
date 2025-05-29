
package com.example.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

/**
 * Entidad que representa un producto alimenticio.
 */
@Entity
public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nombre;

    private String tipo;

    private LocalDateTime fechaRegistro;

    @ManyToOne
    @JoinColumn(name = "planta_id")
    private Planta planta;

    // Getter y Setter para fechaRegistro
    public LocalDateTime getFechaRegistro() {
        return fechaRegistro;
    }

    public void setFechaRegistro(LocalDateTime fechaRegistro) {
        this.fechaRegistro = fechaRegistro;
    }

    // Otros getters y setters...
}

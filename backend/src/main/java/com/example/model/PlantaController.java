
package com.example.controller;

import com.example.model.Planta;
import com.example.service.PlantaService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Controlador REST para operaciones sobre plantas.
 */
@RestController
@RequestMapping("/api/plantas")
@CrossOrigin(origins = "*")
public class PlantaController {

    private final PlantaService plantaService;

    public PlantaController(PlantaService plantaService) {
        this.plantaService = plantaService;
    }

    @GetMapping
    public List<Planta> getAll() {
        return plantaService.findAll();
    }

    @PostMapping
    public Planta create(@RequestBody Planta planta) {
        return plantaService.save(planta);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        plantaService.delete(id);
    }

    @GetMapping("/{id}")
    public Planta getById(@PathVariable Long id) {
        return plantaService.findById(id);
    }
}

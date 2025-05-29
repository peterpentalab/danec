
package com.example.service;

import com.example.model.Planta;
import com.example.repository.PlantaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlantaService {

    private final PlantaRepository plantaRepository;

    public PlantaService(PlantaRepository plantaRepository) {
        this.plantaRepository = plantaRepository;
    }

    public List<Planta> findAll() {
        return plantaRepository.findAll();
    }

    public Planta save(Planta planta) {
        return plantaRepository.save(planta);
    }

    public void delete(Long id) {
        plantaRepository.deleteById(id);
    }

    public Planta findById(Long id) {
        return plantaRepository.findById(id).orElse(null);
    }
}

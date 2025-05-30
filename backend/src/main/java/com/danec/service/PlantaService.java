
package com.danec.service;

import com.danec.model.Planta;
import com.danec.repository.PlantaRepository;
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

    public Planta findById(Long id) {
        return plantaRepository.findById(id).orElse(null);
    }

    public void delete(Long id) {
        plantaRepository.deleteById(id);
    }
}

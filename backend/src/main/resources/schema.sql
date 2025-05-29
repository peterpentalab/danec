-- MariaDB Script
CREATE DATABASE IF NOT EXISTS plants_db;
USE plants_db;

CREATE TABLE planta (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    ubicacion VARCHAR(200)
);

CREATE TABLE producto (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    tipo VARCHAR(50),
    fecha_registro DATETIME,
    planta_id BIGINT,
    FOREIGN KEY (planta_id) REFERENCES planta(id)
);
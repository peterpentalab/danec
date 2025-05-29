
# 🏭 Plant Product System

Sistema Full Stack para gestionar plantas de producción y productos alimenticios.

---

## ⚙️ Tecnologías utilizadas

- 📦 Backend: Spring Boot 3.4.1 + JPA + WebSocket
- 🌐 Frontend: Angular 18
- 🛢️ Base de datos: MariaDB

---

## 📁 Estructura del Proyecto

```
plant-product-system/
├── backend/
├── pom.xml
│   ├── src/main/java/com/example/
│   │   ├── controller/
│   │   ├── model/
│   │   ├── repository/
│   │   └── service/
│   └── src/main/resources/
│       ├── application.properties
│       └── schema.sql
├── frontend/
│   ├── src/app/
│   │   ├── components/
│   │   ├── models/
│   │   └── services/
└── README.md
```

---

## 🚀 Instalación y ejecución

### 🔧 Requisitos

- Java 17
- Maven
- Node.js >= 18
- Angular CLI >= 18
- MariaDB Server

---

### 🛠️ Base de datos

1. Inicia MariaDB y crea la base de datos ejecutando el script:

```sql
source backend/src/main/resources/schema.sql
```

---

### ▶️ Backend (Spring Boot)

```bash
cd backend
mvn clean install
mvn spring-boot:run
```
Cuando se ejecuta mvn clean install Maven buscará el pom.xml en la raíz de backend para compilar y resolver todas las dependencias del proyecto.
El servicio estará disponible en: `http://localhost:8080`

---

### 🌐 Frontend (Angular)

```bash
cd frontend
npm install
ng serve
```

La aplicación se ejecutará en: `http://localhost:4200`

---

## 🔄 Funcionalidades

- Registro y listado de plantas
- Creación, edición y eliminación de productos alimenticios
- Asociación de productos a plantas
- Vista en tiempo real del total de productos por planta (usando WebSocket)
- Formularios con validaciones reactivas y modales para creación/edición

---

## 🧪 Endpoints de prueba

- `GET /api/plantas`
- `POST /api/plantas`
- `GET /api/productos`
- `POST /api/productos`
- `GET /api/productos/planta/{plantaId}`

---

## 🧩 Formularios con Modales

La aplicación incluye:
- Modales con formularios reactivos para crear y editar productos.
- Validación en tiempo real.
- Componente reutilizable `ProductoFormComponent`.

### 📍 Componentes clave

- `producto-form.component.ts` y `.html`: Modal para creación/edición
- `producto-list.component.ts` y `.html`: Listado con eliminación


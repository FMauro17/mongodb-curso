# MongoDB - Curso Completo
### EducaciónIT

Repositorio con los ejercicios, scripts y proyecto integrador desarrollados durante el curso de MongoDB.

---

## 🛠️ Tecnologías utilizadas

- **MongoDB Community** 8.2.5
- **MongoDB Compass** 1.49.1
- **mongosh** 2.7.0
- **MongoDB for VS Code**
- **MongoDB Tools** (mongoimport, mongodump, mongorestore)
- **JavaScript** (MongoDB Playground)

---

## 📁 Estructura del repositorio

```
mongodb-curso/
│
├── modulo2_crud.mongodb.js             # Operaciones CRUD y equivalencias SQL → MongoDB
├── modulo3_sma.mongodb.js              # Cálculo de Media Móvil Simple con JavaScript puro
├── modulo4_desafio.mongodb.js          # Aggregation Pipeline, importación y cursores
├── modulo5_desafio.mongodb.js          # Replica Sets y unión de colecciones
│
├── DataModel_cotizaciones_dia.pdf      # Data Model del proyecto integrador
├── DataModel_clientes_transporte.pdf   # Data Model del ejercicio de transporte
│
└── DIA - Cotizaciones Históricas.csv   # Dataset del proyecto integrador (ETF Dow Jones)
```

---

## 📚 Contenido por módulo

### Módulo 1 - Introducción y Modelado de Datos
- Instalación de MongoDB Community vía Homebrew en macOS (Apple Silicon M2)
- Modelado de datos: documentos embebidos vs referencias
- Importación de CSV mediante MongoDB Compass
- Diseño de Data Models (documentación técnica en PDF)

### Módulo 2 - Operaciones CRUD
- Equivalencias SQL → MongoDB (`SELECT`, `INSERT`, `DELETE`, `WHERE`)
- Operadores de comparación (`$ne`, `$eq`)
- Consultas con notación de punto para documentos embebidos
- `find()`, `findOne()`, `insertOne()`, `deleteMany()`, `countDocuments()`

### Módulo 3 - JavaScript en MongoDB
- Cálculo de **Media Móvil Simple (SMA)** con ventana de 4 registros mediante JavaScript puro
- Señales de trading: campo `operacion` con valores `"comprar"` / `"vender"`
- Cursores manuales con `hasNext()` y `next()`
- Aggregation Pipeline con `$group` y `$sum`

### Módulo 4 - Mongo Tools y Aggregation
- `mongoimport` para CSV y JSON
- `mongodump` para backups (carpeta y archivo comprimido `.gz`)
- `mongorestore` para restauración
- Descarga de datos con `curl` desde APIs públicas
- Aggregation con `$avg` para calcular promedios

### Módulo 5 - Replica Sets
- Configuración de un Replica Set con 1 servidor primario y 2 secundarios
- Inicialización con `rs.initiate()`
- Monitoreo con `rs.status()`
- Script para unir colecciones con documentos embebidos (`$lookup` manual con `forEach`)

---

## 💡 Proyecto Integrador

**Análisis de Media Móvil Simple sobre el ETF Dow Jones (DIA)**

El proyecto consiste en implementar el análisis de la Media Móvil Simple (SMA) sobre datos históricos del ETF DIA, gestionando una base de datos MongoDB.

- **Dataset**: 6.148 registros de cotizaciones históricas (1998 - 2022)
- **Base de datos**: `inversiones`
- **Colección**: `cotizaciones_dia`
- **Campos calculados**:
  - `sma_4`: Media Móvil Simple con ventana de 4 registros
  - `operacion`: Señal de trading (`"comprar"` / `"vender"`) basada en la comparación entre el precio de cierre y la SMA

---

## ⚙️ Configuración del entorno (macOS Apple Silicon M2)

**Iniciar el servidor:**
```bash
brew services run mongodb/brew/mongodb-community
```

**Detener el servidor:**
```bash
brew services stop mongodb/brew/mongodb-community
```

**Verificar estado:**
```bash
brew services list
```

**Conectarse con mongosh:**
```bash
mongosh
```

---

## 📄 Licencia

MIT License - libre uso con atribución.

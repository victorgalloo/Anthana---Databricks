# 🚀 Demo Databricks - Konfío

Demo de **Gobernanza de Datos** para la presentación Anthana × Konfío.

## Objetivo

Demostrar que Databricks puede responder en segundos las preguntas que la CNBV e IDB Invest hacen:

1. **¿Qué datos usó este modelo?** → Linaje automático
2. **¿Quién accedió a estos datos?** → Audit log unificado  
3. **¿Cuál era el estado en fecha X?** → Time Travel

## Estructura

```
databricks-demo/
├── setup/                      # Scripts para crear el ambiente
│   ├── 01_create_catalog.sql   # Crear catálogo y esquemas
│   ├── 02_create_tables.sql    # Crear tablas
│   ├── 03_insert_sample_data.sql # Datos de ejemplo
│   └── 04_add_governance_tags.sql # Tags de gobernanza
├── demo/                       # Queries para la demo en vivo
│   ├── lineage_queries.sql     # Mostrar linaje de datos
│   ├── time_travel_queries.sql # Mostrar reproducibilidad
│   └── audit_queries.sql       # Mostrar auditoría de acceso
├── run_setup.py                # Script Python para setup automático
├── config.py                   # Configuración de conexión
└── requirements.txt            # Dependencias Python
```

## Setup Rápido

### Opción 1: Automático (Python)

```bash
# Instalar dependencias
pip install -r requirements.txt

# Ejecutar setup
python run_setup.py
```

### Opción 2: Manual (SQL Editor)

1. Abre Databricks SQL Editor
2. Ejecuta los archivos de `setup/` en orden (01, 02, 03, 04)

## Requisitos Previos

- [ ] SQL Warehouse activo en Databricks
- [ ] Unity Catalog habilitado en el workspace
- [ ] Permisos para crear catálogos

## Demo en Vivo (15-20 min)

### Parte 1: Unity Catalog (5 min)
1. Abrir Catalog Explorer → `konfio_demo`
2. Mostrar tags en tablas (`compliance: cnbv`)
3. Mostrar tags en columnas (`pii: true`)

### Parte 2: Linaje (5 min)
1. Ejecutar `demo/lineage_queries.sql`
2. Ir a `credit_decisions` → Pestaña "Lineage"
3. Mostrar el grafo visual de dependencias

### Parte 3: Time Travel (5 min)
1. `DESCRIBE HISTORY loan_applications`
2. `SELECT * FROM loan_applications VERSION AS OF 0`
3. Explicar caso de auditoría

### Parte 4: Auditoría (5 min)
1. Ejecutar `demo/audit_queries.sql`
2. Mostrar quién accedió a qué
3. Generar "reporte CNBV" en segundos

## Preguntas para el Cierre

- *"¿Cuánto tardan hoy en responder una solicitud de auditoría de linaje?"*
- *"¿Tienen visibilidad de quién accede a datos PII en SageMaker?"*
- *"¿Podrían reconstruir el estado exacto de sus datos de hace 6 meses?"*

## Troubleshooting

### No aparecen logs de auditoría
El `system.access.audit` tiene delay de 15-30 min. Ejecuta queries 30 min antes de la demo.

### Error "Catalog not found"
Verifica que Unity Catalog esté habilitado. Ve a Admin Console → Workspace Settings.

### Error "Warehouse not running"
Inicia el SQL Warehouse desde SQL → SQL Warehouses → Start.

---

Creado por Anthana.agency para demo Konfío | Diciembre 2024


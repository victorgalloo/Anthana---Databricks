# Cheat Sheet Técnico: Databricks
## Referencia Rápida para Conversaciones con Ejecutivos | Dic 2024

---

## 1. ARQUITECTURA LAKEHOUSE (Para No-Técnicos)

### El Problema Que Resuelve
```
ANTES (Arquitectura Tradicional):
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│  Data Lake  │───▶│     ETL     │───▶│  Warehouse  │
│   (S3/Raw)  │    │   (Glue)    │    │  (Redshift) │
└─────────────┘    └─────────────┘    └─────────────┘
      │                                      │
      │         ┌─────────────┐             │
      └────────▶│  ML/AI      │◀────────────┘
                │ (SageMaker) │
                └─────────────┘

❌ Problemas:
- Datos duplicados en 3 lugares
- Costos 3x
- Gobernanza fragmentada
- "¿Cuál es la verdad?"
```

### La Solución Lakehouse
```
AHORA (Databricks Lakehouse):
┌────────────────────────────────────────────────┐
│                 UNITY CATALOG                   │
│            (Gobernanza Unificada)               │
├────────────────────────────────────────────────┤
│                                                 │
│    ┌─────────────────────────────────────┐     │
│    │           DELTA LAKE                 │     │
│    │     (Una sola fuente de verdad)      │     │
│    │                                      │     │
│    │  ┌──────┐ ┌──────┐ ┌──────────┐    │     │
│    │  │  SQL │ │Python│ │Streaming │    │     │
│    │  │  BI  │ │  ML  │ │Real-time │    │     │
│    │  └──────┘ └──────┘ └──────────┘    │     │
│    └─────────────────────────────────────┘     │
│                                                 │
└────────────────────────────────────────────────┘

✅ Beneficios:
- UNA sola copia de datos
- Costos 50-70% menores
- Gobernanza desde día 1
- Una versión de la verdad
```

### Analogía Simple
> "Imagina que tienes 3 bodegas con copias de tu inventario. 
> Cada vez que vendes algo, tienes que actualizar las 3.
> A veces se desincroniza y no sabes cuál es la correcta.
> 
> Lakehouse = UNA bodega inteligente que sirve para todo."

---

## 2. UNITY CATALOG (El Diferenciador Clave)

### Qué Es
**Unity Catalog = El "Google de tus datos" + Control de acceso**

```
Funciones principales:
┌─────────────────────────────────────────────────┐
│  1. DESCUBRIMIENTO                              │
│     "¿Dónde están los datos de clientes?"       │
│     → Busca y encuentra cualquier tabla         │
├─────────────────────────────────────────────────┤
│  2. LINAJE                                      │
│     "¿De dónde viene este número?"              │
│     → Traza origen de cualquier dato            │
├─────────────────────────────────────────────────┤
│  3. ACCESO                                      │
│     "¿Quién puede ver qué?"                     │
│     → Permisos granulares por columna           │
├─────────────────────────────────────────────────┤
│  4. AUDITORÍA                                   │
│     "¿Quién accedió a datos sensibles?"         │
│     → Log inmutable de todo acceso              │
└─────────────────────────────────────────────────┘
```

### Por Qué Importa para Regulación
```
PREGUNTA DEL AUDITOR:
"Muéstrame quién accedió a datos de clientes el mes pasado"

SIN UNITY CATALOG:
- Revisar logs de 5 sistemas diferentes
- Cruzar información manualmente
- Semanas de trabajo

CON UNITY CATALOG:
- 3 clics
- Reporte automático
- 5 minutos
```

### Jerarquía de Gobernanza
```
METASTORE (nivel más alto)
│
├── CATÁLOGO: konfio_prod
│   ├── ESQUEMA: clientes
│   │   ├── TABLA: datos_personales
│   │   ├── TABLA: historial_creditos
│   │   └── VISTA: resumen_clientes
│   │
│   └── ESQUEMA: riesgos
│       ├── TABLA: scores
│       └── MODELO ML: modelo_riesgo_v2
│
└── CATÁLOGO: konfio_sandbox
    └── (para desarrollo/pruebas)
```

---

## 3. DELTA LAKE (El Formato de Datos)

### Qué Es
**Delta Lake = Parquet con superpoderes**

### Características Clave
| Feature | Qué Hace | Por Qué Importa |
|---------|----------|-----------------|
| **ACID Transactions** | Escrituras atómicas | No hay datos corruptos |
| **Time Travel** | Viajar en el tiempo | Auditoría y rollback |
| **Schema Evolution** | Cambiar estructura | No rompe pipelines |
| **Audit History** | Historial de cambios | Cumplimiento regulatorio |

### Time Travel en Acción
```sql
-- Ver datos como estaban hace 30 días
SELECT * FROM clientes TIMESTAMP AS OF '2024-11-24'

-- Ver datos antes de un cambio específico
SELECT * FROM clientes VERSION AS OF 42

-- Restaurar a versión anterior
RESTORE TABLE clientes TO VERSION AS OF 42
```

### Por Qué Esto Importa para Bancos/Fintechs
```
ESCENARIO: Auditor pregunta sobre decisión de crédito

"¿Por qué rechazaron al cliente X hace 6 meses?"

CON TIME TRAVEL:
1. Ir a la fecha exacta de la decisión
2. Ver el score que tenía el cliente
3. Ver los datos que alimentaron el modelo
4. Demostrar que la decisión fue correcta

SIN TIME TRAVEL:
"Eh... no tenemos esa información..."
→ Multa potencial
```

---

## 4. DATABRICKS vs SNOWFLAKE (Comparativa)

### Tabla Comparativa
| Aspecto | Databricks | Snowflake |
|---------|------------|-----------|
| **ADN** | IA/ML first | SQL/BI first |
| **Datos no estructurados** | Nativo | Limitado/caro |
| **ML/AI** | Integrado (MLflow) | Add-on (Snowpark) |
| **Propiedad datos** | En TU cloud (S3) | En cloud de Snowflake |
| **Precio ML workloads** | Más económico | Muy caro (créditos) |
| **Real-time streaming** | Nativo | Limitado |
| **Gobernanza** | Unity Catalog | Similar |

### Cuándo Elegir Databricks
```
✅ DATABRICKS es mejor cuando:
- ML/AI es core del negocio (fintechs)
- Procesan datos no estructurados (PDFs, imágenes)
- Necesitan streaming en tiempo real (fraude)
- Quieren control total de sus datos
- Tienen workloads de procesamiento pesado

❌ SNOWFLAKE es mejor cuando:
- Solo necesitan reportes SQL/BI
- No hacen ML en-house
- Todo es datos estructurados
- Prefieren "managed service" simple
```

### Argumento para Konfío
> "Konfío es una empresa de ML. Sus modelos de riesgo SON el negocio.
> Snowflake es un warehouse para reportes.
> Databricks es una plataforma de inteligencia artificial.
> 
> ¿Quieren ser una empresa de reportes o de IA?"

---

## 5. MLOps y MLFLOW

### Qué Es MLflow
**MLflow = El "Git" para modelos de Machine Learning**

```
CICLO DE VIDA DE UN MODELO:

1. EXPERIMENTOS
   - Probar diferentes algoritmos
   - Trackear métricas automáticamente
   - Comparar resultados

2. REGISTRO
   - Modelo aprobado → Model Registry
   - Versionado (v1, v2, v3...)
   - Metadatos (quién, cuándo, datos usados)

3. DESPLIEGUE
   - Staging → Production
   - Aprobaciones requeridas
   - Rollback si falla

4. MONITOREO
   - Drift detection
   - Performance tracking
   - Alertas automáticas
```

### Por Qué Importa para Regulación
```
PREGUNTA DEL REGULADOR:
"¿Cómo saben que su modelo de crédito no discrimina?"

CON MLFLOW:
- "Este es el modelo v2.3 en producción"
- "Fue entrenado con estos datos [link]"
- "Estas fueron las métricas de fairness"
- "Fue aprobado por [persona] el [fecha]"
- "Aquí está el reporte de bias"

SIN MLFLOW:
- "Creo que es este notebook..."
- "¿Quién lo subió?"
- "No estoy seguro qué datos usó..."
```

---

## 6. CASOS DE USO EN FINTECH

### 1. Detección de Fraude en Tiempo Real
```
ARQUITECTURA:
Transacción → Kafka/Kinesis → Databricks Streaming → Score → Decisión
                                      │
                                      ▼
                              Feature Store
                         (características del cliente)

LATENCIA: < 100 milisegundos

SIN DATABRICKS:
- Lambda functions + SageMaker
- Latencia: 500ms - 2s
- Costo: 3x mayor
- Mantenimiento: complejo
```

### 2. Scoring Crediticio con Unity Catalog
```
GOBERNANZA DEL MODELO:

┌─────────────────────────────────────────┐
│  MODELO: scoring_crediticio_v3          │
├─────────────────────────────────────────┤
│  Datos de entrada:                      │
│  ├── clientes.ingresos (PII)           │
│  ├── facturas.monto_total              │
│  └── buro.score_externo                │
├─────────────────────────────────────────┤
│  Linaje completo trazable              │
│  Acceso auditado                        │
│  Aprobaciones documentadas             │
└─────────────────────────────────────────┘
```

### 3. Customer 360
```
UNIFICACIÓN DE DATOS:

Marketing    ─┐
CRM          ─┼─▶ DELTA LAKE ─▶ Vista Única ─▶ Personalización
Transacciones─┤      │                │
Soporte      ─┘      │                │
                     │                │
              Unity Catalog        ML Models
           (gobernanza)     (recomendaciones)
```

---

## 7. PRICING Y MODELO DE CONSUMO

### Unidades de Consumo (DBUs)
```
DBU = Databricks Unit

TIPOS DE COMPUTE:
┌─────────────────────┬──────────────┬─────────────────┐
│ Tipo                │ Precio/DBU   │ Uso típico      │
├─────────────────────┼──────────────┼─────────────────┤
│ Jobs Compute        │ $0.15-0.22   │ ETL, batch      │
│ SQL Compute         │ $0.22-0.35   │ BI, queries     │
│ All-Purpose         │ $0.40-0.55   │ Desarrollo      │
│ Serverless SQL      │ $0.35-0.50   │ Analytics       │
└─────────────────────┴──────────────┴─────────────────┘
```

### Estimación de Costos
```
EMPRESA MEDIANA (50 usuarios):

Consumo mensual estimado:
├── SQL Analytics: 20,000 DBU × $0.30 = $6,000
├── ETL Jobs: 15,000 DBU × $0.18 = $2,700
├── ML Development: 10,000 DBU × $0.45 = $4,500
└── Streaming: 5,000 DBU × $0.25 = $1,250

TOTAL DATABRICKS: ~$14,500/mes
+ Storage S3: ~$1,500/mes
──────────────────────────────
TOTAL: ~$16,000/mes ($192K/año)

vs. Arquitectura fragmentada (Redshift + Glue + SageMaker):
Estimado: $25,000-30,000/mes
AHORRO: 40-50%
```

---

## 8. CERTIFICACIONES DATABRICKS

### Path de Certificación
```
NIVELES:
1. Data Engineer Associate
2. Data Engineer Professional
3. Machine Learning Associate
4. Machine Learning Professional
5. Data Analyst Associate

RECOMENDACIÓN PARA ANTHANA:
- Juan José: ML Professional + Data Engineer Professional
- Carlos: Data Engineer Associate
- Víctor: Data Analyst Associate (para demos)
```

### Valor de Certificación
- ✅ Credibilidad con clientes
- ✅ Acceso a deals exclusivos de Databricks
- ✅ Mejor pricing como partner

---

## 9. QUICK REFERENCE PARA REUNIONES

### Frases Clave (Memorizar)
```
"Lakehouse es la convergencia de Data Lake y Data Warehouse en una sola plataforma"

"Unity Catalog es como el GPS de tus datos: sabes dónde están, quién los usa, y de dónde vienen"

"Delta Lake te permite viajar en el tiempo y ver tus datos como estaban hace 6 meses"

"Databricks fue creado por los inventores de Apache Spark y MLflow"

"Con Unity Catalog, puedes responder una auditoría en minutos, no en semanas"
```

### Números Impactantes
```
• Reducción de costos: 30-50% vs arquitecturas fragmentadas
• Tiempo de insights: De semanas a minutos
• Productividad de ingeniería: +30% (una sola plataforma)
• Time-to-market ML: 50% más rápido
• Tiempo de auditoría: De semanas a horas
```

### Clientes de Referencia (Públicos)
```
GLOBAL:
- Shell, Comcast, Conde Nast, Atlassian
- HSBC, ABN AMRO, Nationwide

LATAM/MÉXICO:
- Grupo Bimbo (Juan José trabajó ahí)
- Mercado Libre (público)
- Nubank (público)
- Itaú (público)
```

---

## 10. GLOSARIO RÁPIDO

| Término | Definición Simple |
|---------|-------------------|
| **Lakehouse** | Data Lake + Data Warehouse en uno |
| **Unity Catalog** | Sistema de gobernanza y permisos |
| **Delta Lake** | Formato de archivos con superpoderes |
| **MLflow** | Sistema para gestionar modelos de ML |
| **Feature Store** | Repositorio de características para ML |
| **DBU** | Unidad de consumo (facturación) |
| **Photon** | Motor de queries súper rápido |
| **Delta Sharing** | Compartir datos de forma segura |
| **Structured Streaming** | Procesamiento en tiempo real |
| **Mosaic AI** | Suite de herramientas de IA generativa |

---

*Cheat Sheet preparado por Anthana Group | Diciembre 2024*


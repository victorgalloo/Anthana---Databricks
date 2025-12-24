# Análisis Competitivo: Databricks vs Snowflake
## Guía para Conversaciones de Venta

---

## Resumen Ejecutivo

| Dimensión | Snowflake | Databricks | Ganador para Konfío |
|-----------|-----------|------------|---------------------|
| **Core DNA** | Data Warehouse SQL | Data + AI Platform | 🟠 Databricks |
| **Machine Learning** | Add-on (Snowpark) | Nativo (MLflow) | 🟠 Databricks |
| **Datos no estructurados** | Limitado/caro | Nativo | 🟠 Databricks |
| **Streaming** | Snowpipe (micro-batch) | Structured Streaming | 🟠 Databricks |
| **Gobernanza** | Por base de datos | Unity Catalog unificado | 🟠 Databricks |
| **Propiedad de datos** | Formato propietario | Delta Lake (open source) | 🟠 Databricks |
| **SQL BI tradicional** | Excelente | Muy bueno | 🔵 Snowflake |
| **Facilidad de uso (analistas)** | Más simple | Requiere más técnico | 🔵 Snowflake |
| **Costo para BI puro** | Competitivo | Similar | Empate |
| **Costo para ML intensivo** | Caro (créditos) | Más económico (Spot) | 🟠 Databricks |

**Veredicto para Konfío:** Databricks es claramente superior para un caso de uso donde el core business es **modelado algorítmico de riesgo crediticio**, no solo reportes BI.

---

## 1. Arquitectura Fundamental

### Snowflake: Data Warehouse en la Nube

```
┌─────────────────────────────────────────┐
│            SNOWFLAKE                    │
│  ┌─────────────────────────────────┐   │
│  │      Virtual Warehouses         │   │
│  │   (Cómputo elástico SQL)        │   │
│  └─────────────────────────────────┘   │
│                  ▲                      │
│                  │                      │
│  ┌─────────────────────────────────┐   │
│  │      Storage Propietario        │   │
│  │   (Formato cerrado en S3)       │   │
│  └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

**Filosofía:** "El mejor Data Warehouse SQL que puedes comprar."

### Databricks: Plataforma de Datos + IA

```
┌─────────────────────────────────────────┐
│            DATABRICKS                   │
│  ┌─────────────────────────────────┐   │
│  │         Unity Catalog           │   │
│  │   (Gobernanza unificada)        │   │
│  └─────────────────────────────────┘   │
│        │           │           │        │
│  ┌─────┴────┐ ┌────┴────┐ ┌───┴─────┐  │
│  │   SQL    │ │  Spark  │ │ MLflow  │  │
│  │Serverless│ │Clusters │ │+ Mosaic │  │
│  └──────────┘ └─────────┘ └─────────┘  │
│                  ▲                      │
│  ┌─────────────────────────────────┐   │
│  │       Delta Lake (Open)         │   │
│  │   (Tu S3, tu formato)           │   │
│  └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

**Filosofía:** "Unifica todos tus workloads de datos bajo un solo techo gobernado."

---

## 2. Comparativa Detallada por Dimensión

### 2.1 Machine Learning

| Aspecto | Snowflake | Databricks |
|---------|-----------|------------|
| **Historia** | Snowpark ML (2022+) | Fundado por creadores de Spark (2013) |
| **Frameworks soportados** | Python limitado, UDFs | Python, R, Scala, Java nativos |
| **Gestión de modelos** | Model Registry básico | MLflow (estándar industria) |
| **Feature Store** | No nativo | Feature Store integrado |
| **Entrenamiento distribuido** | Limitado | Spark ML, PyTorch, TensorFlow |
| **GPU support** | Reciente, limitado | Maduro, clusters GPU |
| **GenAI** | Cortex (nuevo) | Mosaic AI (adquisición $1.3B) |

**Implicación para Konfío:**

Los modelos de scoring crediticio de Konfío requieren:
- Re-entrenamiento frecuente sobre TBs de datos históricos
- Experimentación rápida (A/B testing de features)
- Trazabilidad completa para auditoría

Snowflake puede hacer BI sobre los resultados del modelo, pero Databricks es donde se **construyen** los modelos.

### 2.2 Datos No Estructurados

| Tipo de dato | Snowflake | Databricks |
|--------------|-----------|------------|
| **PDFs (facturas)** | External stage + UDF | Procesamiento nativo Spark |
| **Imágenes (INE/IFE)** | Muy limitado | Computer vision integrado |
| **Geolocalización** | Soporte básico | Análisis geoespacial completo |
| **Logs de dispositivos** | JSON semi-estructurado | Streaming + Delta Lake |
| **Costo de procesamiento** | Alto (créditos) | Eficiente (Spark workers) |

**Implicación para Konfío:**

El proceso de KYC (Know Your Customer) implica:
- Verificación de documentos (INE, comprobante domicilio)
- Análisis de facturas electrónicas (XML/PDF)
- Validación de selfies

Snowflake requiere mover estos datos a servicios externos (Rekognition, etc.), creando complejidad y costos. Databricks procesa todo en el mismo lugar.

### 2.3 Procesamiento en Tiempo Real

| Capacidad | Snowflake | Databricks |
|-----------|-----------|------------|
| **Ingestión** | Snowpipe (micro-batch, minutos) | Structured Streaming (segundos) |
| **Latencia mínima** | ~1 minuto | ~100 milisegundos |
| **Integración Kafka** | Via conectores externos | Nativo |
| **Procesamiento stateful** | No | Sí (windows, aggregations) |
| **Modelo unificado batch/streaming** | No | Sí (mismo código) |

**Implicación para Konfío:**

Para detección de fraude en transacciones SPEI/tarjetas:
- Snowpipe: "El fraude ocurrió hace 3 minutos, ahora lo detectamos"
- Databricks Streaming: "Bloqueamos la transacción antes de que se complete"

La diferencia es crítica cuando el fraude puede significar millones en pérdidas.

### 2.4 Gobernanza y Cumplimiento

| Capacidad | Snowflake | Databricks (Unity Catalog) |
|-----------|-----------|---------------------------|
| **Alcance** | Por cuenta/base de datos | Multi-cloud, multi-workspace |
| **Linaje de datos** | Dentro de Snowflake | End-to-end (incluyendo ML) |
| **Linaje de modelos** | No | Sí (MLflow integrado) |
| **Enmascaramiento dinámico** | Sí | Sí |
| **Row-level security** | Sí | Sí |
| **Auditoría** | Logs de consultas | Logs completos + linaje visual |
| **Clasificación de datos** | Tags básicos | Etiquetas semánticas con herencia |

**Implicación para Konfío:**

Para una auditoría de IDB Invest que pregunte:
> "Demuestre qué datos alimentaron el modelo que rechazó el crédito de empresa XYZ el 15 de marzo"

- **Snowflake:** Requiere correlacionar logs de múltiples sistemas manualmente.
- **Databricks:** Un query en Unity Catalog muestra el linaje visual completo.

### 2.5 Propiedad de Datos (Vendor Lock-in)

| Aspecto | Snowflake | Databricks |
|---------|-----------|------------|
| **Formato de almacenamiento** | Propietario (micro-partitions) | Delta Lake (Parquet + logs, open source) |
| **Ubicación física** | Controlado por Snowflake | Tu bucket de S3/ADLS |
| **Costo de egress** | Cobrado por Snowflake | Directo a proveedor de nube |
| **Portabilidad** | Costosa, requiere export | Los datos ya están en tu nube |
| **Lectura por otras herramientas** | Via Snowflake únicamente | Cualquier herramienta que lea Parquet |

**Implicación para Konfío:**

Si en 5 años Konfío decide cambiar de plataforma:
- **Snowflake:** Proyecto de migración de 6-12 meses, costos significativos de egress.
- **Databricks:** Los datos siguen en S3 de Konfío, en formato abierto.

Para una institución bancaria regulada, la **soberanía de datos** no es negociable.

### 2.6 Modelo de Costos

| Concepto | Snowflake | Databricks |
|----------|-----------|------------|
| **Unidad de medida** | Créditos por segundo | DBUs por hora |
| **Almacenamiento** | Incluido (comprimido) | Tu nube (transparente) |
| **Uso de Spot/Preemptible** | No disponible | Sí (hasta 70% ahorro) |
| **Consultas concurrentes** | Escala con más warehouses | SQL Serverless auto-escala |
| **Entrenamiento ML** | Créditos a precio completo | Clusters GPU con Spot |
| **Idle time** | Se cobra mínimo | Clusters se apagan |

**Análisis para Konfío:**

Para un workload típico de fintech:
- 60% BI/Reportes
- 30% ML Training
- 10% Streaming

| Escenario | Costo Mensual Snowflake | Costo Mensual Databricks |
|-----------|-------------------------|--------------------------|
| Solo BI | $25,000 | $28,000 |
| BI + ML moderado | $45,000 | $35,000 |
| BI + ML intensivo | $80,000 | $50,000 |
| + Streaming fraude | +$15,000 | +$8,000 |

*Nota: Estimaciones ilustrativas. Requiere sizing detallado.*

**Conclusión:** Para cargas de trabajo intensivas en ML (el core de Konfío), Databricks es 20-40% más económico.

---

## 3. Respuestas a Objeciones Comunes

### "Ya usamos Snowflake y funciona bien"

**Respuesta:**
> "Snowflake es excelente para BI y reportes SQL. La pregunta es: ¿dónde entrenan sus modelos de riesgo? Si es en SageMaker o notebooks separados, están perdiendo la trazabilidad que CNBV les va a exigir. Databricks unifica el warehouse Y el ML en un solo plano de gobernanza."

### "Snowflake es más fácil de usar"

**Respuesta:**
> "Para analistas SQL puros, sí. Pero su equipo de Data Science ya trabaja en Python. Databricks les da notebooks colaborativos con SQL Y Python, sin cambiar de herramienta. Y para analistas, Databricks SQL es igual de simple."

### "No queremos arriesgar una migración"

**Respuesta:**
> "Entendido. Por eso proponemos Lakehouse Federation: conectamos Databricks a sus tablas actuales (Glue, Redshift, incluso Snowflake) SIN mover datos. Empiezan a usar la gobernanza de Unity Catalog hoy, y migran gradualmente solo lo que tenga sentido."

### "El equipo ya conoce Snowflake"

**Respuesta:**
> "El equipo conoce SQL. Databricks SQL usa el mismo ANSI SQL. La curva de aprendizaje es mínima. Además, para los Data Scientists que ya usan Python, Databricks es más natural que Snowpark."

### "Snowflake tiene mejor soporte enterprise"

**Respuesta:**
> "Ambos tienen soporte 24/7 para enterprise. La diferencia es que con Anthana como partner, tienen un equipo local en México que conoce su industria (fintech), su regulador (CNBV), y que ha implementado esto en empresas como Bimbo."

---

## 4. Cuándo SÍ Recomendar Snowflake

Seamos honestos. Snowflake es mejor opción cuando:

| Escenario | Por qué Snowflake |
|-----------|-------------------|
| 100% BI, cero ML | Más simple de operar |
| Equipo sin Python, solo SQL | Curva de aprendizaje menor |
| Data sharing extensivo | Snowflake Marketplace más maduro |
| Ya tienen multi-año firmado | No vale la pena romper contrato |

**Pero para Konfío, NINGUNA de estas condiciones aplica.** Su negocio ES Machine Learning.

---

## 5. Matriz de Decisión

### Criterios de Evaluación (Ponderados)

| Criterio | Peso | Snowflake (1-5) | Databricks (1-5) | Score SF | Score DB |
|----------|------|-----------------|------------------|----------|----------|
| Capacidades ML nativas | 25% | 2 | 5 | 0.50 | 1.25 |
| Streaming tiempo real | 15% | 2 | 5 | 0.30 | 0.75 |
| Gobernanza unificada | 20% | 3 | 5 | 0.60 | 1.00 |
| Propiedad de datos | 10% | 2 | 5 | 0.20 | 0.50 |
| Costo para ML | 15% | 2 | 4 | 0.30 | 0.60 |
| Facilidad BI | 10% | 5 | 4 | 0.50 | 0.40 |
| Madurez enterprise | 5% | 5 | 4 | 0.25 | 0.20 |
| **TOTAL** | 100% | - | - | **2.65** | **4.70** |

**Databricks gana por amplio margen para el perfil de Konfío.**

---

## 6. Talking Points para la Reunión

### Opener
> "Entendemos que probablemente ya usan o han evaluado Snowflake. Es una gran herramienta para lo que fue diseñada: BI y SQL. Pero Konfío no es una empresa de reportes—es una empresa de Machine Learning que hace préstamos. La pregunta no es dónde guardar datos, es dónde construir inteligencia."

### Core Message
> "Databricks fue creado por los inventores de Apache Spark y MLflow. La IA no es un feature añadido; es el ADN. Y con Unity Catalog, obtienen la gobernanza de nivel bancario que CNBV y IDB Invest les van a exigir."

### Proof Point
> "Nuestro equipo implementó gobernanza de datos en Grupo Bimbo para 33 países usando Databricks. Si funciona para una de las empresas más complejas de México, funciona para fintech."

### Call to Action
> "¿Qué les parece si hacemos un assessment de 2 semanas donde conectamos Databricks a su infraestructura actual—sin mover datos—y les mostramos el linaje que hoy no pueden ver? Sin riesgo, sin compromiso."

---

*Documento preparado por Anthana Group*  
*Diciembre 2024*



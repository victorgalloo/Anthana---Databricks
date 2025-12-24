# Propuesta Técnica: Transformación de Datos en Konfío
## Implementación de Databricks Data Intelligence Platform

---

**Preparado por:** Anthana Group  
**Cliente:** Konfío  
**Fecha:** Diciembre 2024  
**Versión:** 1.0  
**Clasificación:** Confidencial

---

## 1. Resumen Ejecutivo

### El Desafío

Konfío se encuentra en una transición crítica: de unicornio fintech ágil a institución bancaria regulada. Esta metamorfosis exige que los datos—el corazón del negocio de crédito algorítmico—se traten no solo como activos para decisiones rápidas, sino como **evidencia legal y contable** sujeta a escrutinio forense.

### La Situación Actual

| Dimensión | Estado Actual | Riesgo |
|-----------|---------------|--------|
| **Arquitectura** | AWS fragmentado (SageMaker, Glue, Redshift) | Silos de datos, duplicación |
| **Gobernanza** | Políticas IAM distribuidas | Inconsistencia, gaps de auditoría |
| **Linaje** | Limitado por sistema | Incapacidad de trazar decisiones crediticias |
| **ML Ops** | SageMaker aislado | Modelos no reproducibles |
| **Regulación** | Presión CNBV + IDB Invest | Riesgo de incumplimiento |

### La Solución

Implementar **Databricks Data Intelligence Platform** con **Unity Catalog** como capa de gobernanza unificada, permitiendo a Konfío:

1. Cumplir con requisitos regulatorios (CNBV, IDB Invest)
2. Reducir el Costo Total de Propiedad (TCO) en 20-30%
3. Acelerar el time-to-market de modelos de ML en 40%
4. Escalar el equipo de ingeniería sin deuda técnica

### Inversión Estimada

| Concepto | Año 1 | Año 2+ |
|----------|-------|--------|
| Licencias Databricks | $300K - $500K USD | Según consumo |
| Servicios Anthana | $200K - $350K USD | Soporte continuo |
| **Total** | $500K - $850K USD | - |

**ROI esperado:** 18-24 meses

---

## 2. Diagnóstico de la Arquitectura Actual

### 2.1 Stack Tecnológico Inferido

```
┌─────────────────────────────────────────────────────────────────┐
│                        CAPA DE APLICACIÓN                       │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐             │
│  │   Webapp    │  │   API de    │  │    Apps     │             │
│  │   Cliente   │  │   Crédito   │  │   Móviles   │             │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘             │
└─────────┼────────────────┼────────────────┼─────────────────────┘
          │                │                │
┌─────────┼────────────────┼────────────────┼─────────────────────┐
│         ▼                ▼                ▼                     │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                    AWS API Gateway                       │   │
│  └─────────────────────────────────────────────────────────┘   │
│                              │                                  │
│  ┌───────────────────────────┼───────────────────────────────┐ │
│  │                   CAPA DE DATOS                            │ │
│  │                           │                                │ │
│  │   ┌───────────┐    ┌─────┴─────┐    ┌───────────┐         │ │
│  │   │  Amazon   │    │   AWS     │    │  Amazon   │         │ │
│  │   │ SageMaker │◄───┤   Glue    │───►│  Redshift │         │ │
│  │   │  (ML)     │    │  (ETL)    │    │  (DW)     │         │ │
│  │   └─────┬─────┘    └─────┬─────┘    └─────┬─────┘         │ │
│  │         │                │                │                │ │
│  │         └────────────────┼────────────────┘                │ │
│  │                          ▼                                 │ │
│  │              ┌─────────────────────┐                       │ │
│  │              │     Amazon S3       │                       │ │
│  │              │    (Data Lake)      │                       │ │
│  │              │  Parquet/CSV/JSON   │                       │ │
│  │              └─────────────────────┘                       │ │
│  └────────────────────────────────────────────────────────────┘ │
│                              AWS                                │
└─────────────────────────────────────────────────────────────────┘
```

### 2.2 Problemas Identificados

#### 🔴 Problema 1: Fragmentación del Linaje

**Síntoma:** Incapacidad de responder "¿Qué datos usó el modelo que rechazó el crédito de la empresa X hace 6 meses?"

**Causa raíz:** El linaje termina en las fronteras de cada servicio:
- AWS Glue tiene su catálogo
- SageMaker tiene sus experimentos
- Redshift tiene sus grants

**Impacto regulatorio:** La CNBV puede exigir reconstruir el estado exacto de la información en cualquier momento pasado.

#### 🔴 Problema 2: Duplicación de Datos

**Síntoma:** Los mismos datos existen en S3 (raw), Glue (transformados), Redshift (analíticos) y volúmenes EBS de SageMaker (features).

**Causa raíz:** Arquitectura "best-of-breed" sin capa de abstracción unificada.

**Impacto financiero:** 
- Costos de almacenamiento multiplicados
- Costos de transferencia de datos entre servicios
- Inconsistencia: ¿el "ingreso mensual" en Redshift es el mismo que calculó el Data Scientist?

#### 🔴 Problema 3: Seguridad Inconsistente

**Síntoma:** Un usuario bloqueado en Redshift puede tener acceso a los datos crudos en S3.

**Causa raíz:** Políticas IAM de AWS, roles de SageMaker y grants de Redshift no están sincronizados semánticamente.

**Impacto regulatorio:** IDB Invest exige "separación de funciones" y controles de acceso auditables.

#### 🟡 Problema 4: Fricción Ingeniería/Data Science

**Síntoma:** Modelos desarrollados en notebooks de SageMaker deben ser "reescritos" para producción.

**Causa raíz:** Lenguajes, entornos y formatos de datos diferentes.

**Impacto operativo:** Tiempo de despliegue de modelos medido en semanas, no días.

---

## 3. Arquitectura Propuesta: Databricks Lakehouse

### 3.1 Visión de Estado Futuro

```
┌─────────────────────────────────────────────────────────────────┐
│                        CAPA DE APLICACIÓN                       │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐             │
│  │   Webapp    │  │   API de    │  │    Apps     │             │
│  │   Cliente   │  │   Crédito   │  │   Móviles   │             │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘             │
└─────────┼────────────────┼────────────────┼─────────────────────┘
          │                │                │
┌─────────┼────────────────┼────────────────┼─────────────────────┐
│         ▼                ▼                ▼                     │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │                    DATABRICKS PLATFORM                       ││
│  │  ┌─────────────────────────────────────────────────────────┐││
│  │  │                    UNITY CATALOG                        │││
│  │  │   • Gobernanza Unificada    • Auditoría Completa       │││
│  │  │   • Linaje Automatizado     • Seguridad ABAC           │││
│  │  └─────────────────────────────────────────────────────────┘││
│  │                              │                               ││
│  │  ┌──────────────┬────────────┴────────────┬───────────────┐ ││
│  │  │              │                         │               │ ││
│  │  ▼              ▼                         ▼               ▼ ││
│  │ ┌────────┐ ┌──────────┐ ┌─────────────┐ ┌─────────────┐   ││
│  │ │Databr. │ │ Delta    │ │   MLflow    │ │  Databricks │   ││
│  │ │  SQL   │ │  Live    │ │   + Model   │ │  Streaming  │   ││
│  │ │Server- │ │ Tables   │ │  Registry   │ │  (Fraude)   │   ││
│  │ │  less  │ │  (ETL)   │ │   (MLOps)   │ │             │   ││
│  │ └────────┘ └──────────┘ └─────────────┘ └─────────────┘   ││
│  │                              │                               ││
│  │  ┌─────────────────────────────────────────────────────────┐││
│  │  │                    DELTA LAKE                            │││
│  │  │   • Formato Abierto (Parquet + Logs)                    │││
│  │  │   • ACID Transactions    • Time Travel                  │││
│  │  │   • Schema Evolution     • Z-Ordering                   │││
│  │  └─────────────────────────────────────────────────────────┘││
│  └─────────────────────────────────────────────────────────────┘│
│                              │                                  │
│              ┌───────────────┴───────────────┐                  │
│              │         Amazon S3             │                  │
│              │    (Konfío's Own Bucket)      │                  │
│              │    ← Propiedad de Konfío →    │                  │
│              └───────────────────────────────┘                  │
│                              AWS                                │
└─────────────────────────────────────────────────────────────────┘
```

### 3.2 Componentes Clave

#### Unity Catalog: El Corazón de la Gobernanza

Unity Catalog es un **metastore unificado** que proporciona:

| Capacidad | Beneficio para Konfío |
|-----------|----------------------|
| **Catálogo centralizado** | Un solo lugar para descubrir todos los datos |
| **Control de acceso granular** | Permisos a nivel de columna, row-level security |
| **Linaje automatizado** | Trazabilidad desde transacción hasta decisión crediticia |
| **Auditoría completa** | Logs inmutables de quién accedió qué y cuándo |
| **Enmascaramiento dinámico** | PII protegida sin duplicar datos |

**Ejemplo de política de seguridad:**

```sql
-- Crear función de enmascaramiento para RFC
CREATE FUNCTION mask_rfc(rfc STRING)
RETURNS STRING
RETURN CONCAT(LEFT(rfc, 3), '***', RIGHT(rfc, 3));

-- Aplicar a columna sensible
ALTER TABLE clientes.informacion_fiscal
ALTER COLUMN rfc SET MASK mask_rfc
USING CASE WHEN IS_MEMBER('cumplimiento') THEN rfc ELSE mask_rfc(rfc) END;
```

#### Delta Lake: El Formato del Futuro

Delta Lake añade capacidades críticas sobre archivos Parquet:

| Capacidad | Uso en Konfío |
|-----------|---------------|
| **ACID Transactions** | Consistencia en escrituras concurrentes |
| **Time Travel** | Auditar el estado de datos en cualquier fecha |
| **Schema Evolution** | Añadir columnas sin romper pipelines |
| **Z-Ordering** | Consultas ultra-rápidas por RFC o fecha |

**Ejemplo de Time Travel para auditoría:**

```sql
-- ¿Qué datos tenía este cliente cuando le otorgamos el crédito?
SELECT * FROM gold.clientes_scoring
TIMESTAMP AS OF '2024-06-15 14:30:00'
WHERE cliente_id = 'ABC123';

-- ¿Qué versión del modelo usamos ese día?
SELECT * FROM ml.model_registry
VERSION AS OF 47
WHERE model_name = 'scoring_pymes_v2';
```

#### Delta Live Tables: ETL Declarativo

En lugar de scripts de Glue frágiles, Delta Live Tables define pipelines como **expectativas de calidad**:

```python
import dlt

@dlt.table(
    name="transacciones_validadas",
    comment="Transacciones con validación de calidad"
)
@dlt.expect_or_drop("monto_positivo", "monto > 0")
@dlt.expect_or_fail("fecha_valida", "fecha <= current_date()")
@dlt.expect("cliente_existe", "cliente_id IS NOT NULL")
def transacciones_validadas():
    return (
        dlt.read("transacciones_raw")
        .filter("status = 'completada'")
        .withColumn("fecha_proceso", current_timestamp())
    )
```

**Beneficio:** Las expectativas de calidad generan métricas automáticas y detienen el pipeline si hay datos corruptos.

#### Streaming para Fraude en Tiempo Real

```python
from pyspark.sql.functions import *
from pyspark.sql.types import *

# Stream de transacciones entrantes
transacciones_stream = (
    spark.readStream
    .format("kafka")
    .option("kafka.bootstrap.servers", "kafka:9092")
    .option("subscribe", "transacciones_spei")
    .load()
)

# Enriquecimiento con perfil histórico (de Delta Lake)
perfil_cliente = spark.table("gold.perfil_transaccional")

# Detección de anomalías
alertas = (
    transacciones_stream
    .join(perfil_cliente, "cliente_id")
    .withColumn("z_score", 
        (col("monto") - col("monto_promedio_6m")) / col("monto_stddev_6m")
    )
    .filter("abs(z_score) > 3")  # Más de 3 desviaciones estándar
    .writeStream
    .format("delta")
    .outputMode("append")
    .table("alertas.fraude_potencial")
)
```

---

## 4. Plan de Implementación (12 Meses)

### Fase 1: Cimientos y Gobernanza Federalizada (Meses 1-3)

**Objetivo:** Establecer la plataforma sin migración masiva.

| Semana | Actividad | Entregable |
|--------|-----------|------------|
| 1-2 | Diseño de arquitectura y red | Documento de arquitectura |
| 3-4 | Provisioning Databricks E2 | Workspace operativo |
| 5-6 | Configuración Unity Catalog | Metastore + jerarquía |
| 7-8 | Federación con AWS Glue | Tablas existentes visibles |
| 9-10 | Integración SSO + roles | RBAC configurado |
| 11-12 | PoC modelo de riesgo | Modelo funcionando en Databricks |

**Entregable Fase 1:**
- ✅ Databricks operativo en VPC de Konfío
- ✅ Unity Catalog conectado a Glue existente
- ✅ 100% de tablas actuales visibles (sin mover datos)
- ✅ SSO integrado con IdP de Konfío
- ✅ Un modelo de riesgo funcionando como PoC

### Fase 2: Migración del Núcleo (Meses 4-6)

**Objetivo:** Mover datos críticos a Delta Lake.

| Semana | Actividad | Entregable |
|--------|-----------|------------|
| 13-14 | Identificar tablas Gold prioritarias | Lista de 20-30 tablas |
| 15-18 | Conversión a Delta Lake | Tablas migradas |
| 19-20 | Implementar enmascaramiento PII | Políticas aplicadas |
| 21-22 | Migrar primeros pipelines a DLT | 3-5 pipelines |
| 23-24 | Validación de paridad | Tests de regresión |

**Entregable Fase 2:**
- ✅ Tablas Gold en Delta Lake con Time Travel
- ✅ Enmascaramiento dinámico de PII activo
- ✅ 30-40% de reducción en tiempos de ETL
- ✅ Primeros dashboards en Databricks SQL

### Fase 3: Aceleración de IA y Fraude (Meses 7-9)

**Objetivo:** Desplegar capacidades diferenciadas.

| Semana | Actividad | Entregable |
|--------|-----------|------------|
| 25-28 | Arquitectura de streaming | Pipeline de fraude live |
| 29-30 | Feature Store centralizado | Features reutilizables |
| 31-32 | Migración MLflow completa | Todos los modelos registrados |
| 33-36 | Integración GenAI (Mosaic) | PoC de análisis crediticio |

**Entregable Fase 3:**
- ✅ Detección de fraude en tiempo real (< 500ms)
- ✅ Feature Store con 50+ features
- ✅ Todos los modelos de ML trazables
- ✅ Prototipo de "Analista IA" para crédito

### Fase 4: Optimización y Escala Bancaria (Meses 10-12)

**Objetivo:** Preparar para auditorías y optimizar costos.

| Semana | Actividad | Entregable |
|--------|-----------|------------|
| 37-40 | Simulacro de auditoría CNBV | Reportes de linaje |
| 41-44 | Optimización FinOps | Reducción 15% de costos |
| 45-48 | Databricks SQL Serverless | Analistas autónomos |
| 48 | Entrenamiento equipo completo | Certificaciones |

**Entregable Fase 4:**
- ✅ Capacidad de generar reportes de auditoría en minutos
- ✅ Costos optimizados con Spot Instances
- ✅ SQL Serverless para todos los analistas
- ✅ Equipo de Konfío certificado en Databricks

---

## 5. Equipo y Recursos

### Equipo Anthana (Propuesto)

| Rol | Dedicación | Responsabilidad |
|-----|------------|-----------------|
| **Tech Lead (Juan José)** | 50% | Arquitectura, gobernanza, QA |
| **Data Engineer Sr.** | 100% | Migración, Delta Lake, DLT |
| **ML Engineer** | 75% | MLflow, Feature Store, modelos |
| **Data Engineer Jr.** | 100% | Pipelines, soporte |
| **Project Manager** | 25% | Coordinación, reportes |

### Equipo Konfío (Requerido)

| Rol | Dedicación | Responsabilidad |
|-----|------------|-----------------|
| **Sponsor Ejecutivo** | 5% | Decisiones de negocio, escalaciones |
| **Tech Lead interno** | 50% | Contraparte técnica, validaciones |
| **Data Engineer** | 50% | Transferencia de conocimiento |
| **Seguridad/Compliance** | 20% | Revisión de políticas |
| **DevOps/Infra** | 30% | Redes, IAM, integración AWS |

---

## 6. Análisis Financiero

### 6.1 Inversión Requerida

| Concepto | Año 1 | Notas |
|----------|-------|-------|
| **Licencias Databricks** | $300K - $500K | Según DBUs consumidos |
| **AWS (incremental)** | $50K - $100K | Networking, transferencia |
| **Servicios Anthana** | $200K - $350K | Implementación + soporte |
| **Capacitación** | $20K - $30K | Certificaciones, workshops |
| **Contingencia (15%)** | $85K - $150K | Buffer |
| **TOTAL** | $655K - $1.13M | - |

### 6.2 Ahorros Esperados

| Concepto | Ahorro Anual | Justificación |
|----------|--------------|---------------|
| **Reducción licencias** | $100K - $200K | Consolidar Redshift + herramientas |
| **Reducción storage** | $50K - $80K | Eliminar duplicación |
| **Productividad** | $150K - $300K | 20% menos tiempo en "plomería" |
| **Evitar multas** | Incalculable | Compliance CNBV/IDB Invest |
| **TOTAL** | $300K - $580K | - |

### 6.3 ROI

| Escenario | Payback |
|-----------|---------|
| Conservador | 24 meses |
| Esperado | 18 meses |
| Optimista | 12 meses |

---

## 7. Riesgos y Mitigaciones

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|--------------|---------|------------|
| Resistencia al cambio | Media | Alto | Capacitación temprana, quick wins |
| Complejidad de migración | Media | Medio | Federación primero, migración gradual |
| Costos mayores a esperado | Baja | Alto | FinOps desde día 1, alertas de budget |
| Dependencia de Anthana | Media | Medio | Transferencia de conocimiento activa |
| Cambios en prioridades Konfío | Media | Alto | Sponsor ejecutivo comprometido |

---

## 8. Próximos Pasos

1. **Validar propuesta** con stakeholders técnicos de Konfío
2. **Discovery profundo** (2 semanas) para refinar estimaciones
3. **Piloto acotado** con caso de uso de bajo riesgo
4. **Contrato marco** para implementación por fases
5. **Kickoff Fase 1** con equipo conjunto

---

## Anexos

### A. Glosario de Términos

| Término | Definición |
|---------|------------|
| **Lakehouse** | Arquitectura que combina Data Lake y Data Warehouse |
| **Delta Lake** | Formato de almacenamiento open source con ACID |
| **Unity Catalog** | Servicio de gobernanza y metadatos de Databricks |
| **MLflow** | Plataforma open source para ciclo de vida de ML |
| **DLT** | Delta Live Tables - pipelines de ETL declarativos |
| **DBU** | Databricks Unit - unidad de medida de consumo |

### B. Referencias Técnicas

- Databricks Documentation: docs.databricks.com
- Delta Lake: delta.io
- Unity Catalog: docs.databricks.com/data-governance/unity-catalog
- MLflow: mlflow.org

---

*Este documento es confidencial y está destinado exclusivamente para uso de Konfío.*

**Anthana Group**  
Partner Databricks  
Ciudad de México



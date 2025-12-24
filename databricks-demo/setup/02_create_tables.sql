-- ============================================
-- DEMO: Gobernanza de Datos para Konfío
-- Paso 2: Crear Tablas
-- ============================================

USE CATALOG konfio_demo;
USE SCHEMA credit;

-- Tabla principal: Solicitudes de crédito
CREATE OR REPLACE TABLE loan_applications (
    application_id STRING NOT NULL COMMENT 'ID único de solicitud',
    customer_rfc STRING NOT NULL COMMENT 'RFC del cliente (PII)',
    customer_name STRING COMMENT 'Nombre del cliente (PII)',
    requested_amount DECIMAL(12,2) COMMENT 'Monto solicitado en MXN',
    term_months INT COMMENT 'Plazo en meses',
    sector STRING COMMENT 'Sector económico del negocio',
    state STRING COMMENT 'Estado de la república',
    application_date TIMESTAMP COMMENT 'Fecha de solicitud',
    status STRING COMMENT 'Estado: PENDING, APPROVED, REJECTED',
    analyst_id STRING COMMENT 'ID del analista asignado'
)
COMMENT 'Solicitudes de crédito de PYMES'
TBLPROPERTIES (
    'quality' = 'gold',
    'owner' = 'risk_team'
);

-- Tabla de features para el modelo
CREATE OR REPLACE TABLE customer_features (
    customer_rfc STRING NOT NULL COMMENT 'RFC del cliente',
    credit_score INT COMMENT 'Score de buró (300-850)',
    avg_monthly_revenue DECIMAL(12,2) COMMENT 'Facturación mensual promedio',
    years_in_business INT COMMENT 'Años de operación',
    previous_loans INT COMMENT 'Préstamos anteriores con Konfío',
    payment_history_score DECIMAL(5,2) COMMENT 'Score de historial de pagos (0-100)',
    default_probability DECIMAL(5,4) COMMENT 'Probabilidad de impago calculada',
    risk_segment STRING COMMENT 'Segmento: LOW, MEDIUM, HIGH',
    feature_date TIMESTAMP COMMENT 'Fecha de cálculo de features'
)
COMMENT 'Features calculados para modelo de riesgo crediticio'
TBLPROPERTIES (
    'quality' = 'gold',
    'ml_feature_table' = 'true'
);

-- Tabla de decisiones (output del modelo)
CREATE OR REPLACE TABLE credit_decisions (
    decision_id STRING NOT NULL COMMENT 'ID único de decisión',
    application_id STRING NOT NULL COMMENT 'ID de solicitud relacionada',
    customer_rfc STRING NOT NULL COMMENT 'RFC del cliente',
    model_version STRING COMMENT 'Versión del modelo usado',
    default_probability DECIMAL(5,4) COMMENT 'Probabilidad de impago',
    recommended_amount DECIMAL(12,2) COMMENT 'Monto recomendado',
    recommended_rate DECIMAL(5,2) COMMENT 'Tasa recomendada',
    decision STRING COMMENT 'APPROVED, REJECTED, MANUAL_REVIEW',
    decision_reason STRING COMMENT 'Razón codificada de la decisión',
    decision_timestamp TIMESTAMP COMMENT 'Momento exacto de la decisión',
    approved_by STRING COMMENT 'Usuario que aprobó (si aplica)'
)
COMMENT 'Decisiones de crédito generadas por el modelo'
TBLPROPERTIES (
    'quality' = 'gold',
    'regulatory' = 'cnbv_auditable'
);


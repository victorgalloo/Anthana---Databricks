-- ============================================
-- DEMO: Gobernanza de Datos para Konfío
-- Paso 4: Agregar Tags de Gobernanza
-- ============================================

USE CATALOG konfio_demo;
USE SCHEMA credit;

-- ============================================
-- TAGS EN TABLAS (Clasificación de datos)
-- ============================================

-- Tabla de solicitudes: datos regulados
ALTER TABLE loan_applications SET TAGS (
    'compliance' = 'cnbv',
    'data_classification' = 'confidential',
    'retention_years' = '10',
    'owner_team' = 'risk'
);

-- Tabla de features: datos para ML
ALTER TABLE customer_features SET TAGS (
    'compliance' = 'cnbv',
    'data_classification' = 'confidential',
    'ml_feature_store' = 'true',
    'owner_team' = 'data_science'
);

-- Tabla de decisiones: auditable por reguladores
ALTER TABLE credit_decisions SET TAGS (
    'compliance' = 'cnbv',
    'compliance_idb' = 'idb_invest',
    'data_classification' = 'highly_confidential',
    'retention_years' = '10',
    'audit_required' = 'true',
    'owner_team' = 'risk'
);

-- ============================================
-- TAGS EN COLUMNAS (PII y datos sensibles)
-- ============================================

-- Marcar columnas PII en loan_applications
ALTER TABLE loan_applications ALTER COLUMN customer_rfc SET TAGS (
    'pii' = 'true',
    'pii_type' = 'tax_id',
    'mask_required' = 'true'
);

ALTER TABLE loan_applications ALTER COLUMN customer_name SET TAGS (
    'pii' = 'true',
    'pii_type' = 'full_name',
    'mask_required' = 'true'
);

-- Marcar columnas PII en customer_features
ALTER TABLE customer_features ALTER COLUMN customer_rfc SET TAGS (
    'pii' = 'true',
    'pii_type' = 'tax_id',
    'mask_required' = 'true'
);

-- Marcar columnas PII en credit_decisions
ALTER TABLE credit_decisions ALTER COLUMN customer_rfc SET TAGS (
    'pii' = 'true',
    'pii_type' = 'tax_id',
    'mask_required' = 'true'
);

-- ============================================
-- COMENTARIOS DESCRIPTIVOS
-- ============================================

COMMENT ON TABLE loan_applications IS 
'Solicitudes de crédito de PYMES. Datos regulados por CNBV con retención de 10 años. Contiene PII (RFC, nombre).';

COMMENT ON TABLE customer_features IS 
'Features calculados para el modelo de riesgo crediticio. Actualización diaria. Fuente para Feature Store de ML.';

COMMENT ON TABLE credit_decisions IS 
'Registro inmutable de decisiones crediticias. Auditable por CNBV e IDB Invest. Time Travel habilitado para reproducibilidad.';


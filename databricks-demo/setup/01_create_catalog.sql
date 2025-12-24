-- ============================================
-- DEMO: Gobernanza de Datos para Konfío
-- Paso 1: Crear Catálogo y Esquemas
-- ============================================

-- Crear catálogo principal para la demo
CREATE CATALOG IF NOT EXISTS konfio_demo
COMMENT 'Demo de gobernanza de datos para presentación Konfío-Anthana';

-- Usar el catálogo
USE CATALOG konfio_demo;

-- Crear esquema de crédito
CREATE SCHEMA IF NOT EXISTS credit
COMMENT 'Datos de solicitudes y decisiones de crédito';

-- Crear esquema de clientes
CREATE SCHEMA IF NOT EXISTS customers
COMMENT 'Información de clientes y features';

-- Crear esquema de auditoría
CREATE SCHEMA IF NOT EXISTS audit_reports
COMMENT 'Reportes pre-construidos para auditorías';


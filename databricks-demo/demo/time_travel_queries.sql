-- ============================================
-- DEMO: Queries para mostrar TIME TRAVEL
-- "Reproducibilidad perfecta para auditorías"
-- ============================================

USE CATALOG konfio_demo;
USE SCHEMA credit;

-- ============================================
-- QUERY 1: Ver historial de cambios de una tabla
-- ============================================

DESCRIBE HISTORY loan_applications;

-- Resultado: Lista de todas las versiones con:
-- - version: número de versión
-- - timestamp: cuándo ocurrió
-- - operation: INSERT, UPDATE, DELETE, etc.
-- - userName: quién hizo el cambio

-- ============================================
-- QUERY 2: Consultar datos en una versión específica
-- "¿Cuál era el estado el 1 de diciembre?"
-- ============================================

-- Por versión (más confiable)
SELECT * FROM loan_applications VERSION AS OF 0;

-- Por timestamp (más intuitivo para auditores)
-- SELECT * FROM loan_applications TIMESTAMP AS OF '2024-12-01 12:00:00';

-- ============================================
-- QUERY 3: Comparar versiones
-- "¿Qué cambió entre la versión 0 y la actual?"
-- ============================================

-- Datos en versión 0
SELECT 'v0' as version, COUNT(*) as registros, SUM(requested_amount) as monto_total
FROM loan_applications VERSION AS OF 0
UNION ALL
-- Datos actuales
SELECT 'current' as version, COUNT(*) as registros, SUM(requested_amount) as monto_total
FROM loan_applications;

-- ============================================
-- QUERY 4: Caso de auditoría real
-- "El 1 de diciembre rechazamos APP-2024-006. 
--  ¿Qué datos tenía el cliente en ese momento?"
-- ============================================

-- Paso 1: Ver la decisión
SELECT 
    application_id,
    decision,
    decision_reason,
    decision_timestamp
FROM credit_decisions
WHERE application_id = 'APP-2024-006';

-- Paso 2: Ver los features que alimentaron esa decisión
-- (en el momento de la decisión)
SELECT 
    f.customer_rfc,
    f.credit_score,
    f.default_probability,
    f.risk_segment,
    f.feature_date
FROM customer_features f
WHERE f.customer_rfc = 'CONS880101MNO';

-- Paso 3: Verificar qué modelo se usó
SELECT 
    model_version,
    default_probability as model_output,
    decision
FROM credit_decisions
WHERE application_id = 'APP-2024-006';

-- ============================================
-- DEMO EN VIVO: Hacer un cambio y revertir
-- ============================================

-- 1. Guardar versión actual
SELECT MAX(version) as version_actual FROM (DESCRIBE HISTORY loan_applications);

-- 2. Hacer un UPDATE (simular error)
-- UPDATE loan_applications 
-- SET status = 'ERROR' 
-- WHERE application_id = 'APP-2024-001';

-- 3. Verificar cambio
-- SELECT * FROM loan_applications WHERE application_id = 'APP-2024-001';

-- 4. RESTAURAR a versión anterior
-- RESTORE TABLE loan_applications TO VERSION AS OF 0;

-- ============================================
-- INSTRUCCIONES PARA LA DEMO:
--
-- 1. Muestra DESCRIBE HISTORY - "Cada cambio queda registrado"
-- 2. Muestra consulta por versión - "Podemos reconstruir cualquier momento"
-- 3. Muestra caso de auditoría - "El auditor pregunta, nosotros respondemos en segundos"
-- 4. (Opcional) Haz un cambio en vivo y reviértelo
-- ============================================


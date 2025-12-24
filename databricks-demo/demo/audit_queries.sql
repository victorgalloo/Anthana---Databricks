-- ============================================
-- DEMO: Queries para mostrar AUDITORÍA DE ACCESO
-- "¿Quién tocó mis datos?"
-- ============================================

-- NOTA: El audit log puede tener un delay de 15-30 minutos
-- Ejecuta algunas queries 30 min antes de la demo para que aparezcan

-- ============================================
-- QUERY 1: Todos los accesos recientes a tablas de crédito
-- ============================================

SELECT 
    event_time,
    user_identity.email as usuario,
    action_name as accion,
    request_params.full_name_arg as tabla_accedida,
    source_ip_address as ip_origen
FROM system.access.audit
WHERE request_params.full_name_arg LIKE '%konfio_demo%'
  AND event_date >= current_date() - INTERVAL 7 DAYS
ORDER BY event_time DESC
LIMIT 50;

-- ============================================
-- QUERY 2: ¿Quién consultó la tabla de decisiones?
-- (La más sensible para reguladores)
-- ============================================

SELECT 
    event_time,
    user_identity.email as usuario,
    action_name,
    request_params.commandText as query_ejecutada
FROM system.access.audit
WHERE request_params.full_name_arg LIKE '%credit_decisions%'
  AND event_date >= current_date() - INTERVAL 7 DAYS
ORDER BY event_time DESC
LIMIT 20;

-- ============================================
-- QUERY 3: Usuarios únicos que accedieron datos PII
-- ============================================

SELECT DISTINCT
    user_identity.email as usuario,
    COUNT(*) as total_accesos,
    MIN(event_time) as primer_acceso,
    MAX(event_time) as ultimo_acceso
FROM system.access.audit
WHERE request_params.full_name_arg LIKE '%konfio_demo.credit%'
  AND event_date >= current_date() - INTERVAL 30 DAYS
GROUP BY user_identity.email
ORDER BY total_accesos DESC;

-- ============================================
-- QUERY 4: Cambios de permisos (GRANT/REVOKE)
-- ============================================

SELECT 
    event_time,
    user_identity.email as admin_usuario,
    action_name,
    request_params
FROM system.access.audit
WHERE action_name IN ('grantPermission', 'revokePermission', 'updatePermissions')
  AND event_date >= current_date() - INTERVAL 30 DAYS
ORDER BY event_time DESC;

-- ============================================
-- QUERY 5: Actividad fuera de horario laboral
-- (Detección de comportamiento anómalo)
-- ============================================

SELECT 
    event_time,
    user_identity.email as usuario,
    action_name,
    request_params.full_name_arg as recurso,
    HOUR(event_time) as hora
FROM system.access.audit
WHERE request_params.full_name_arg LIKE '%konfio_demo%'
  AND (HOUR(event_time) < 7 OR HOUR(event_time) > 22)
  AND event_date >= current_date() - INTERVAL 7 DAYS
ORDER BY event_time DESC;

-- ============================================
-- QUERY 6: Reporte ejecutivo para CNBV
-- ============================================

SELECT 
    'Accesos a datos sensibles (últimos 30 días)' as metrica,
    COUNT(*) as valor
FROM system.access.audit
WHERE request_params.full_name_arg LIKE '%konfio_demo.credit%'
  AND event_date >= current_date() - INTERVAL 30 DAYS

UNION ALL

SELECT 
    'Usuarios únicos con acceso' as metrica,
    COUNT(DISTINCT user_identity.email) as valor
FROM system.access.audit
WHERE request_params.full_name_arg LIKE '%konfio_demo.credit%'
  AND event_date >= current_date() - INTERVAL 30 DAYS

UNION ALL

SELECT 
    'Cambios de permisos' as metrica,
    COUNT(*) as valor
FROM system.access.audit
WHERE action_name IN ('grantPermission', 'revokePermission')
  AND event_date >= current_date() - INTERVAL 30 DAYS;

-- ============================================
-- INSTRUCCIONES PARA LA DEMO:
--
-- 1. 30 min ANTES: Ejecuta varias queries SELECT sobre las tablas
--    para generar actividad en el audit log
--
-- 2. Durante la demo:
--    - Query 1: "Miren, aquí está TODO lo que pasó"
--    - Query 2: "¿Quién vio las decisiones de crédito? Aquí está"
--    - Query 5: "¿Accesos fuera de horario? Los detectamos"
--    - Query 6: "El reporte para CNBV, generado automáticamente"
--
-- 3. Pregunta clave: "¿Cuánto tardarían hoy en generar este reporte?"
-- ============================================


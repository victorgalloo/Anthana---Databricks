-- ============================================
-- DEMO: Queries para mostrar LINAJE DE DATOS
-- Ejecutar en Databricks SQL Editor
-- ============================================

USE CATALOG konfio_demo;

-- ============================================
-- QUERY 1: Vista que une todo el pipeline
-- (Esto genera linaje automático en Unity Catalog)
-- ============================================

CREATE OR REPLACE VIEW credit.full_credit_pipeline AS
SELECT 
    -- Datos de solicitud
    a.application_id,
    a.customer_name,
    a.requested_amount,
    a.sector,
    a.state,
    a.application_date,
    
    -- Features calculados
    f.credit_score,
    f.avg_monthly_revenue,
    f.years_in_business,
    f.payment_history_score,
    f.default_probability as feature_default_prob,
    f.risk_segment,
    
    -- Decisión final
    d.decision,
    d.recommended_amount,
    d.recommended_rate,
    d.decision_reason,
    d.decision_timestamp,
    d.model_version,
    
    -- Calculado: diferencia entre solicitado y aprobado
    CASE 
        WHEN d.recommended_amount IS NOT NULL 
        THEN a.requested_amount - d.recommended_amount 
        ELSE NULL 
    END as amount_reduction
    
FROM credit.loan_applications a
LEFT JOIN credit.customer_features f ON a.customer_rfc = f.customer_rfc
LEFT JOIN credit.credit_decisions d ON a.application_id = d.application_id;

-- ============================================
-- QUERY 2: Ver el pipeline completo
-- ============================================

SELECT 
    application_id,
    customer_name,
    sector,
    credit_score,
    risk_segment,
    decision,
    decision_reason
FROM credit.full_credit_pipeline
ORDER BY application_date DESC;

-- ============================================
-- QUERY 3: Análisis por sector (para mostrar linaje)
-- ============================================

CREATE OR REPLACE VIEW credit.sector_analysis AS
SELECT 
    sector,
    COUNT(*) as total_applications,
    SUM(CASE WHEN decision = 'APPROVED' THEN 1 ELSE 0 END) as approved,
    SUM(CASE WHEN decision = 'REJECTED' THEN 1 ELSE 0 END) as rejected,
    ROUND(AVG(credit_score), 0) as avg_credit_score,
    ROUND(AVG(default_probability) * 100, 2) as avg_default_prob_pct,
    SUM(requested_amount) as total_requested,
    SUM(recommended_amount) as total_approved_amount
FROM credit.full_credit_pipeline
WHERE decision IS NOT NULL
GROUP BY sector
ORDER BY total_applications DESC;

SELECT * FROM credit.sector_analysis;

-- ============================================
-- INSTRUCCIONES PARA LA DEMO:
-- 
-- 1. Ejecuta estas queries
-- 2. Ve a Catalog → konfio_demo → credit → full_credit_pipeline
-- 3. Click en pestaña "Lineage"
-- 4. Verás el grafo: loan_applications + customer_features → full_credit_pipeline
-- 5. Click en las conexiones para ver qué columnas fluyen
-- ============================================


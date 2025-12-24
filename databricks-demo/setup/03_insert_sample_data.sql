-- ============================================
-- DEMO: Gobernanza de Datos para Konfío
-- Paso 3: Insertar Datos de Ejemplo
-- ============================================

USE CATALOG konfio_demo;
USE SCHEMA credit;

-- Insertar solicitudes de crédito
INSERT INTO loan_applications VALUES
-- Aprobados
('APP-2024-001', 'GAPA850101ABC', 'Grupo Alimenticio del Pacífico SA', 500000.00, 24, 'Restaurantes', 'Jalisco', '2024-12-01 09:30:00', 'APPROVED', 'analyst_01'),
('APP-2024-002', 'SERV920215XYZ', 'Servicios Integrales del Norte', 250000.00, 12, 'Servicios', 'Nuevo León', '2024-12-01 10:15:00', 'APPROVED', 'analyst_02'),
('APP-2024-003', 'RETA880530DEF', 'Retail Moderno CDMX', 750000.00, 36, 'Retail', 'CDMX', '2024-12-02 11:00:00', 'APPROVED', 'analyst_01'),
('APP-2024-004', 'MANU910101GHI', 'Manufacturas del Bajío', 1200000.00, 48, 'Manufactura', 'Guanajuato', '2024-12-03 14:00:00', 'APPROVED', 'analyst_03'),
('APP-2024-005', 'TECH950815JKL', 'Tech Solutions MX', 300000.00, 18, 'Tecnología', 'CDMX', '2024-12-04 09:00:00', 'APPROVED', 'analyst_02'),

-- Rechazados  
('APP-2024-006', 'CONS880101MNO', 'Construcciones Rápidas SA', 2000000.00, 60, 'Construcción', 'Estado de México', '2024-12-01 11:30:00', 'REJECTED', 'analyst_01'),
('APP-2024-007', 'IMPO910220PQR', 'Importadora del Sureste', 800000.00, 24, 'Comercio', 'Yucatán', '2024-12-02 15:45:00', 'REJECTED', 'analyst_03'),
('APP-2024-008', 'AGRI850601STU', 'Agrícola Los Pinos', 450000.00, 12, 'Agricultura', 'Sinaloa', '2024-12-03 10:30:00', 'REJECTED', 'analyst_02'),

-- Pendientes
('APP-2024-009', 'TRAN900101VWX', 'Transportes Unidos del Centro', 600000.00, 24, 'Transporte', 'Querétaro', '2024-12-05 08:00:00', 'PENDING', 'analyst_01'),
('APP-2024-010', 'HOSP880915YZA', 'Hospitalidad Premium SA', 1500000.00, 36, 'Hospitalidad', 'Quintana Roo', '2024-12-05 16:00:00', 'PENDING', 'analyst_03');

-- Insertar features de clientes
INSERT INTO customer_features VALUES
('GAPA850101ABC', 745, 850000.00, 12, 2, 95.5, 0.0850, 'LOW', '2024-12-01 09:00:00'),
('SERV920215XYZ', 710, 320000.00, 8, 1, 88.0, 0.1200, 'LOW', '2024-12-01 10:00:00'),
('RETA880530DEF', 780, 1200000.00, 15, 3, 98.0, 0.0450, 'LOW', '2024-12-02 10:30:00'),
('MANU910101GHI', 720, 2500000.00, 20, 0, 92.0, 0.0950, 'LOW', '2024-12-03 13:30:00'),
('TECH950815JKL', 695, 450000.00, 5, 1, 85.0, 0.1500, 'MEDIUM', '2024-12-04 08:30:00'),
('CONS880101MNO', 580, 600000.00, 3, 0, 45.0, 0.4200, 'HIGH', '2024-12-01 11:00:00'),
('IMPO910220PQR', 620, 350000.00, 7, 1, 55.0, 0.3500, 'HIGH', '2024-12-02 15:00:00'),
('AGRI850601STU', 550, 200000.00, 25, 0, 40.0, 0.4800, 'HIGH', '2024-12-03 10:00:00'),
('TRAN900101VWX', 680, 700000.00, 10, 2, 78.0, 0.1800, 'MEDIUM', '2024-12-05 07:30:00'),
('HOSP880915YZA', 700, 3000000.00, 8, 0, 82.0, 0.1400, 'MEDIUM', '2024-12-05 15:30:00');

-- Insertar decisiones de crédito
INSERT INTO credit_decisions VALUES
('DEC-2024-001', 'APP-2024-001', 'GAPA850101ABC', 'risk_model_v2.3', 0.0850, 500000.00, 18.5, 'APPROVED', 'LOW_RISK_AUTO_APPROVE', '2024-12-01 09:35:00', 'system'),
('DEC-2024-002', 'APP-2024-002', 'SERV920215XYZ', 'risk_model_v2.3', 0.1200, 250000.00, 21.0, 'APPROVED', 'LOW_RISK_AUTO_APPROVE', '2024-12-01 10:20:00', 'system'),
('DEC-2024-003', 'APP-2024-003', 'RETA880530DEF', 'risk_model_v2.3', 0.0450, 750000.00, 16.5, 'APPROVED', 'EXCELLENT_CREDIT_HISTORY', '2024-12-02 11:05:00', 'analyst_01'),
('DEC-2024-004', 'APP-2024-004', 'MANU910101GHI', 'risk_model_v2.3', 0.0950, 1000000.00, 19.0, 'APPROVED', 'STRONG_FINANCIALS', '2024-12-03 14:30:00', 'analyst_03'),
('DEC-2024-005', 'APP-2024-005', 'TECH950815JKL', 'risk_model_v2.3', 0.1500, 280000.00, 22.5, 'APPROVED', 'MEDIUM_RISK_MANUAL_APPROVE', '2024-12-04 09:45:00', 'analyst_02'),
('DEC-2024-006', 'APP-2024-006', 'CONS880101MNO', 'risk_model_v2.3', 0.4200, NULL, NULL, 'REJECTED', 'HIGH_DEFAULT_PROBABILITY', '2024-12-01 11:35:00', NULL),
('DEC-2024-007', 'APP-2024-007', 'IMPO910220PQR', 'risk_model_v2.3', 0.3500, NULL, NULL, 'REJECTED', 'POOR_PAYMENT_HISTORY', '2024-12-02 15:50:00', NULL),
('DEC-2024-008', 'APP-2024-008', 'AGRI850601STU', 'risk_model_v2.3', 0.4800, NULL, NULL, 'REJECTED', 'INSUFFICIENT_CREDIT_SCORE', '2024-12-03 10:35:00', NULL);


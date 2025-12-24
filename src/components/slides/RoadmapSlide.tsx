'use client'

import { motion } from 'framer-motion'
import SlideLayout from '../Layout'
import Tooltip from '../Tooltip'

const phases = [
  {
    phase: 1,
    name: 'Cimientos',
    duration: 'Meses 1-3',
    activities: [
      { name: 'Despliegue Databricks E2', why: 'Arquitectura enterprise-grade. Redes privadas (VPC Peering), single sign-on, seguridad bancaria.' },
      { name: 'Unity Catalog setup', why: 'El corazón de la gobernanza. Define la jerarquía de catálogos, esquemas y permisos.' },
      { name: 'Federación con AWS Glue', why: 'Conecta el catálogo existente SIN migrar datos. Valor inmediato, riesgo mínimo.' },
      { name: 'PoC modelo no crítico', why: 'Probamos la plataforma con algo de bajo riesgo antes de tocar producción.' },
    ],
    investment: '$80-120K',
    why: 'Esta fase reduce riesgo. No tocamos producción, pero establecemos todo para poder hacerlo después.',
  },
  {
    phase: 2,
    name: 'Migración Core',
    duration: 'Meses 4-6',
    activities: [
      { name: 'Conversión a Delta Lake', why: 'Tablas Gold a Delta = Time Travel, mejor performance, menor costo.' },
      { name: 'Seguridad granular', why: 'Enmascaramiento de PII, row-level security. Los devs trabajan con datos reales pero ofuscados.' },
      { name: 'Delta Live Tables (DLT)', why: 'Pipelines de ETL con calidad de datos automática y monitoreo built-in.' },
    ],
    investment: '$60-80K',
    why: 'Aquí empezamos a ver ROI real: mejor performance, menos errores de ETL, compliance mejorado.',
  },
  {
    phase: 3,
    name: 'IA & Fraude',
    duration: 'Meses 7-9',
    activities: [
      { name: 'Streaming para fraude', why: 'Detección en milisegundos vs segundos. Feature Store para características en tiempo real.' },
      { name: 'MLOps unificado', why: 'Todos los modelos (incluso SageMaker) registrados en Unity Catalog para trazabilidad.' },
      { name: 'GenAI/LLM pilots', why: 'Casos de uso de IA generativa: asistente interno, análisis de documentos, chatbots.' },
    ],
    investment: '$80-100K',
    why: 'ROI más alto. Fraude detectado en tiempo real = dinero ahorrado. GenAI = diferenciación competitiva.',
  },
  {
    phase: 4,
    name: 'Escala Bancaria',
    duration: 'Meses 10-12',
    activities: [
      { name: 'Simulacro auditoría CNBV', why: 'Probamos que podemos responder a cualquier pregunta del regulador en minutos.' },
      { name: 'FinOps optimization', why: 'Ajuste fino de clústeres, spot instances, auto-scaling. Maximizar valor por dólar.' },
      { name: 'SQL Serverless para BI', why: 'Analistas de negocio con acceso self-service sin depender de IT.' },
    ],
    investment: '$40-60K',
    why: 'Consolidación y optimización. El sistema ya funciona, ahora lo hacemos más eficiente y escalable.',
  },
]

export default function RoadmapSlide() {
  return (
    <SlideLayout id="roadmap">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-emerald-600 font-medium text-lg mb-4">Plan de Implementación</p>
        
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          <Tooltip
            content="12 meses es el tiempo típico para una implementación completa. Valor incremental cada 3 meses."
            context="No es big-bang. Cada fase entrega valor y reduce riesgo para la siguiente."
          >
            12 meses al éxito
          </Tooltip>
        </h2>

        <p className="text-xl text-gray-500 mb-6">
          Patrón{' '}
          <Tooltip content="Strangler Fig es una técnica de migración gradual. Reemplazas el sistema viejo pieza por pieza mientras sigue funcionando. Sin downtime, sin big-bang.">
            "Strangler Fig"
          </Tooltip>
          : valor incremental, riesgo mínimo.{' '}
          <Tooltip content="Calculado: Fases 1-4 totalizan $260-360K. Depende del alcance y complejidad específica del cliente.">
            Inversión total: $260-360K
          </Tooltip>
        </p>

        <div className="grid md:grid-cols-4 gap-3">
          {phases.map((p, i) => (
            <Tooltip key={i} content={p.why}>
              <motion.div
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow cursor-help"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Header */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 px-4 py-3 text-white">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold bg-emerald-500 px-2 py-0.5 rounded">FASE {p.phase}</span>
                    <span className="text-xs text-gray-400">{p.duration}</span>
                  </div>
                  <h3 className="font-bold text-lg">{p.name}</h3>
                </div>

                {/* Activities */}
                <div className="p-3">
                  <div className="space-y-2 mb-3">
                    {p.activities.map((a, j) => (
                      <Tooltip key={j} content={a.why}>
                        <div className="flex items-start gap-2 hover:bg-gray-50 p-1 rounded transition-colors cursor-help">
                          <span className="text-emerald-500 text-xs mt-1">✓</span>
                          <span className="text-xs text-gray-700">{a.name}</span>
                        </div>
                      </Tooltip>
                    ))}
                  </div>

                  {/* Investment */}
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-xs text-gray-400 uppercase">Inversión</p>
                    <p className="text-lg font-bold text-emerald-600">{p.investment}</p>
                  </div>
                </div>
              </motion.div>
            </Tooltip>
          ))}
        </div>

        {/* ROI Summary */}
        <motion.div
          className="mt-4 grid grid-cols-4 gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Tooltip content="Promedio de empresas que migran de silos (Glue+Redshift+SageMaker) a Lakehouse. Menos copias de datos, menos ETL.">
            <div className="bg-emerald-50 rounded-xl p-3 text-center cursor-help">
              <p className="text-2xl font-bold text-emerald-600">20-30%</p>
              <p className="text-xs text-gray-500">Reducción TCO</p>
            </div>
          </Tooltip>
          <Tooltip content="Ingenieros dejan de hacer 'plomería' (mover datos entre sistemas) y se enfocan en crear valor.">
            <div className="bg-blue-50 rounded-xl p-3 text-center cursor-help">
              <p className="text-2xl font-bold text-blue-600">+20%</p>
              <p className="text-xs text-gray-500">Productividad Eng</p>
            </div>
          </Tooltip>
          <Tooltip content="Detección en tiempo real vs por lotes. Cada minuto de ventaja reduce las pérdidas por fraude.">
            <div className="bg-violet-50 rounded-xl p-3 text-center cursor-help">
              <p className="text-2xl font-bold text-violet-600">Real-time</p>
              <p className="text-xs text-gray-500">Detección Fraude</p>
            </div>
          </Tooltip>
          <Tooltip content="Responder auditorías de reguladores con evidencia inmutable y trazable. Sin esto, el riesgo es incalculable.">
            <div className="bg-amber-50 rounded-xl p-3 text-center cursor-help">
              <p className="text-2xl font-bold text-amber-600">100%</p>
              <p className="text-xs text-gray-500">Audit-ready</p>
            </div>
          </Tooltip>
        </motion.div>
      </motion.div>
    </SlideLayout>
  )
}

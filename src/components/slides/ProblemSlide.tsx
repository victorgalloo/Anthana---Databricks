'use client'

import { motion } from 'framer-motion'
import SlideLayout from '../Layout'
import Tooltip from '../Tooltip'

const problems = [
  {
    icon: '🔍',
    question: '¿Dónde están mis datos?',
    pain: 'Datos fragmentados en 5+ sistemas sin catálogo único',
    databricks: 'Unity Catalog: búsqueda semántica de todos los datos',
    why: 'En empresas grandes, los analistas pasan 40% de su tiempo buscando datos. Unity Catalog resuelve esto con búsqueda tipo Google.',
  },
  {
    icon: '🔐',
    question: '¿Quién accedió a qué?',
    pain: 'Permisos IAM desincronizados con grants SQL',
    databricks: 'Un solo sistema de permisos y auditoría',
    why: 'Cuando hay incidentes de seguridad, toma semanas reconstruir quién accedió a qué. Con Unity Catalog son 3 clics.',
  },
  {
    icon: '🧪',
    question: '¿Qué datos usó este modelo?',
    pain: 'Sin linaje entre ingesta → modelo → decisión',
    databricks: 'Linaje automático columna por columna',
    why: 'Reguladores y auditores exigen saber exactamente qué datos alimentaron una decisión de crédito. Sin linaje, es imposible.',
  },
  {
    icon: '💸',
    question: '¿Por qué pagamos tanto?',
    pain: 'Datos copiados 3x: S3 → Glue → Warehouse → ML',
    databricks: 'Una sola copia, múltiples usos',
    why: 'Cada copia de datos cuesta: storage, ETL, sincronización. Lakehouse elimina la duplicación.',
  },
]

export default function ProblemSlide() {
  return (
    <SlideLayout id="problem">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-emerald-600 font-medium text-lg mb-4">El dolor del mercado</p>
        
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          <Tooltip
            content="Estas son las preguntas que auditores, reguladores y directivos hacen constantemente. La mayoría de las empresas no pueden responder rápido."
            context="Cuando una empresa no puede responder estas preguntas, hay riesgo regulatorio, pérdida de productividad y costos ocultos."
          >
            Preguntas que las empresas<br />no pueden responder
          </Tooltip>
        </h2>

        <p className="text-xl text-gray-500 mb-10 max-w-2xl">
          Las arquitecturas fragmentadas (
          <Tooltip content="AWS Glue es ETL, Redshift es warehouse, SageMaker es ML. Tres sistemas, tres formas de seguridad, tres catálogos.">
            AWS Glue + Redshift + SageMaker
          </Tooltip>
          ) no tienen respuesta para auditorías ni reguladores.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {problems.map((p, i) => (
            <Tooltip key={i} content={p.why}>
              <motion.div
                className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-help"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl">{p.icon}</span>
                  <div className="flex-1">
                    <p className="font-bold text-gray-900 text-lg mb-2">{p.question}</p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <span className="text-red-500 mt-0.5">✗</span>
                        <p className="text-sm text-gray-500">{p.pain}</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-emerald-500 mt-0.5">✓</span>
                        <p className="text-sm text-gray-700 font-medium">{p.databricks}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Tooltip>
          ))}
        </div>
      </motion.div>
    </SlideLayout>
  )
}

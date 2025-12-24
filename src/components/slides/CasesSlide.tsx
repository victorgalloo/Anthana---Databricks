'use client'

import { motion } from 'framer-motion'
import SlideLayout from '../Layout'
import Tooltip from '../Tooltip'

const cases = [
  {
    company: 'SAT',
    logo: '🏛️',
    industry: 'Gobierno',
    challenge: 'Procesar 21.1 millones de facturas CFDI por día',
    solution: 'Azure Databricks + Data Lake Storage',
    results: [
      { metric: '90%', label: 'Reducción de costos', why: 'De $4.5M a $450K mensuales aproximadamente' },
      { metric: '$4M', label: 'Ahorro mensual USD', why: 'Ahorro directo en infraestructura y operación' },
      { metric: 'Min', label: 'vs horas de proceso', why: 'El tiempo de procesamiento pasó de horas a minutos' },
    ],
    quote: 'De horas a minutos en procesamiento fiscal',
    why: 'El SAT es el caso de éxito más importante de Databricks en gobierno. Demuestra que la tecnología funciona a escala nacional.',
    source: 'Microsoft Case Study',
  },
  {
    company: 'Grupo Bimbo',
    logo: '🍞',
    industry: 'CPG',
    challenge: 'Gestionar transacciones en 33 países',
    solution: 'Data Intelligence Platform + Unity Catalog',
    results: [
      { metric: '33', label: 'Países unificados', why: 'Gobernanza consistente en todas las operaciones globales' },
      { metric: '100K+', label: 'Transacciones/día', why: 'Volumen masivo de ventas y distribución' },
      { metric: '1', label: 'Plataforma global', why: 'Una sola fuente de verdad para toda la empresa' },
    ],
    quote: 'Gobernanza de datos a escala mundial',
    why: 'Juan José (nuestro Technical Lead) lideró este proyecto. Es nuestra referencia más fuerte.',
    source: 'Experiencia directa Anthana',
  },
  {
    company: 'Crediclub',
    logo: '💳',
    industry: 'Fintech',
    challenge: 'Latencia alta en app móvil de microfinanzas',
    solution: 'Migración a Azure + Azure Databricks',
    results: [
      { metric: '90%', label: 'Reducción latencia', why: 'Mejora drástica en experiencia de usuario' },
      { metric: '2x', label: 'Capacidad proceso', why: 'Duplicaron capacidad sin duplicar costos' },
      { metric: '$25K', label: 'Ahorro mensual', why: 'Entre $20K-$30K USD de ahorro operativo' },
    ],
    quote: 'Duplicamos capacidad, redujimos costos',
    why: 'Caso perfecto para fintechs mexicanas. Demuestra ROI tangible en 90 días.',
    source: 'Press release Crediclub',
  },
  {
    company: 'Heineken MX',
    logo: '🍺',
    industry: 'Bebidas',
    challenge: 'Pronóstico de demanda para todo el catálogo',
    solution: 'ML Pipelines en Databricks',
    results: [
      { metric: '100%', label: 'Catálogo cubierto', why: 'Predicciones para cada SKU, no solo top sellers' },
      { metric: 'Semanal', label: 'Predicciones', why: 'Forecasts actualizados cada semana' },
      { metric: '↓', label: 'Desperdicio', why: 'Reducción de merma y sobre-stock' },
    ],
    quote: 'ML para cada SKU en cada centro de distribución',
    why: 'Demuestra capacidad de ML en producción para CPG. Muy relevante para Tier 2 y 3.',
    source: 'Databricks Case Study',
  },
]

export default function CasesSlide() {
  return (
    <SlideLayout id="cases">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-emerald-600 font-medium text-lg mb-4">Casos de Éxito en México</p>
        
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          <Tooltip
            content="Estos no son casos hipotéticos. Son implementaciones reales en empresas mexicanas con resultados medibles."
            context="Tener casos locales es clave para vender. Los ejecutivos quieren ver que funciona aquí, no solo en Silicon Valley."
          >
            Resultados comprobados
          </Tooltip>
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {cases.map((c, i) => (
            <Tooltip
              key={i}
              content={c.why}
              context={`Fuente: ${c.source}`}
            >
              <motion.div
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Header */}
                <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{c.logo}</span>
                    <div>
                      <h3 className="font-bold text-gray-900">{c.company}</h3>
                      <p className="text-xs text-gray-500">{c.industry}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="mb-3">
                    <p className="text-xs text-gray-400 uppercase mb-1">Desafío</p>
                    <p className="text-sm text-gray-700">{c.challenge}</p>
                  </div>

                  <div className="mb-3">
                    <p className="text-xs text-gray-400 uppercase mb-1">Solución</p>
                    <p className="text-sm text-gray-700 font-medium">{c.solution}</p>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {c.results.map((r, j) => (
                      <Tooltip key={j} content={r.why}>
                        <div className="text-center bg-gray-50 rounded-lg py-2 hover:bg-emerald-50 transition-colors">
                          <p className="text-lg font-bold text-emerald-600">{r.metric}</p>
                          <p className="text-[10px] text-gray-500">{r.label}</p>
                        </div>
                      </Tooltip>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-xs italic text-gray-500 border-l-2 border-emerald-500 pl-2">
                    "{c.quote}"
                  </p>
                </div>
              </motion.div>
            </Tooltip>
          ))}
        </div>
      </motion.div>
    </SlideLayout>
  )
}

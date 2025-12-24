'use client'

import { motion } from 'framer-motion'
import SlideLayout from '../Layout'
import Tooltip from '../Tooltip'

const kpis = [
  { label: 'TAM México', value: '$80-120M', color: 'text-gray-900', growth: '+35% YoY', why: 'Mercado total direccionable. Calculado bottom-up con 250 empresas target.' },
  { label: 'Empresas Target', value: '250+', color: 'text-blue-600', growth: 'Identificadas', why: '47 ya usan Databricks + ~200 potenciales que aún no adoptan.' },
  { label: 'Ticket Promedio', value: '$200-300K', color: 'text-violet-600', growth: 'Por proyecto', why: 'Rango típico para implementación Unity Catalog o migración.' },
  { label: 'Pipeline Q1 Est.', value: '$1.5-2M', color: 'text-emerald-600', growth: '3-5 deals', why: 'Conservador: 60 meetings → 22 qualified → 12 proposals → 3-5 closed.' },
]

const projectionQ1 = [
  { metric: 'Outreach enviados', jan: 500, feb: 500, mar: 500, total: 1500, why: 'Base de Cloud Driver (12,000) permite 500/mes sin agotar.' },
  { metric: 'Meetings agendados', jan: 15, feb: 20, mar: 25, total: 60, why: 'Tasa de conversión 3-4% de outreach a meeting. Mejora con el tiempo.' },
  { metric: 'Oportunidades calificadas', jan: 5, feb: 7, mar: 10, total: 22, why: 'Aproximadamente 35% de meetings califican como oportunidad real.' },
  { metric: 'Propuestas enviadas', jan: 2, feb: 4, mar: 6, total: 12, why: 'No todos los qualified llegan a propuesta. 55% conversión.' },
  { metric: 'Deals cerrados', jan: 0, feb: 1, mar: 2, total: 3, why: 'Ciclo de venta de 8-12 semanas. Cierres empiezan en Feb.' },
]

const topProspects = [
  { rank: 1, name: 'Konfío', segment: 'Fintech', ticket: '$500-800K', connection: 'Víctor (ex-empleado)', hot: true, why: 'Conexión directa con CTO. Conocemos su dolor. Mayor probabilidad de cierre.' },
  { rank: 2, name: 'Grupo Bimbo', segment: 'Manufactura', ticket: '$400-800K', connection: 'Juan José (ex-empleado)', hot: true, why: 'Referencia existente. Pueden necesitar expansión o nuevos proyectos.' },
  { rank: 3, name: 'Clip', segment: 'Fintech', ticket: '$300-600K', connection: 'Cold (CTO target)', hot: false, why: 'Crecimiento agresivo de PrestaClip genera necesidad de gobernanza.' },
  { rank: 4, name: 'Stori', segment: 'Fintech', ticket: '$200-400K', connection: 'Cold (CEO target)', hot: false, why: 'Unicornio en expansión. Regulación los presiona.' },
  { rank: 5, name: 'Femsa/OXXO', segment: 'Retail', ticket: '$500K-1.5M', connection: 'Cold (enterprise)', hot: false, why: 'Ticket enorme pero ciclo largo. Worth the effort.' },
]

export default function PipelineSlide() {
  return (
    <SlideLayout id="pipeline">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-emerald-600 font-medium text-lg mb-4">Inteligencia de Negocios</p>
        
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          <Tooltip
            content="Pipeline proyectado para Enero-Marzo 2025 basado en capacidad de outreach y conversion rates típicos."
            context="Es conservador. Con las conexiones directas (Konfío, Bimbo) podría ser mayor."
          >
            Pipeline Q1 2025
          </Tooltip>
        </h2>

        {/* KPIs */}
        <div className="grid grid-cols-4 gap-3 mb-6">
          {kpis.map((kpi, i) => (
            <Tooltip key={i} content={kpi.why}>
              <motion.div
                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-help"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">{kpi.label}</p>
                <p className={`text-2xl font-bold ${kpi.color}`}>{kpi.value}</p>
                <p className="text-xs text-emerald-600">{kpi.growth}</p>
              </motion.div>
            </Tooltip>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-4">
          {/* Projection Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-4 py-3 bg-gray-50 border-b border-gray-100">
              <h3 className="font-semibold text-gray-700 text-sm">
                <Tooltip
                  content="Proyección mes a mes basada en: capacidad de outreach, conversion rates históricos de consultoría, y ciclo de venta típico."
                  context="Los números mejoran cada mes porque: 1) Refinamos el mensaje, 2) Acumulamos referidos, 3) Pipeline madura."
                >
                  Proyección Conservadora Q1
                </Tooltip>
              </h3>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="px-3 py-2 text-left text-xs text-gray-500">Métrica</th>
                  <th className="px-2 py-2 text-center text-xs text-gray-500">Ene</th>
                  <th className="px-2 py-2 text-center text-xs text-gray-500">Feb</th>
                  <th className="px-2 py-2 text-center text-xs text-gray-500">Mar</th>
                  <th className="px-3 py-2 text-center text-xs text-gray-500 bg-gray-50">Q1</th>
                </tr>
              </thead>
              <tbody>
                {projectionQ1.map((row, i) => (
                  <Tooltip key={i} content={row.why}>
                    <tr className="border-b border-gray-50 last:border-0 hover:bg-gray-50 cursor-help">
                      <td className="px-3 py-2 text-gray-700">{row.metric}</td>
                      <td className="px-2 py-2 text-center text-gray-500">{row.jan}</td>
                      <td className="px-2 py-2 text-center text-gray-500">{row.feb}</td>
                      <td className="px-2 py-2 text-center text-gray-500">{row.mar}</td>
                      <td className="px-3 py-2 text-center font-bold text-emerald-600 bg-gray-50">{row.total}</td>
                    </tr>
                  </Tooltip>
                ))}
              </tbody>
            </table>
          </div>

          {/* Top Prospects */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-4 py-3 bg-gray-50 border-b border-gray-100">
              <h3 className="font-semibold text-gray-700 text-sm">
                <Tooltip
                  content="Ranking basado en: tamaño de ticket, probabilidad de cierre, urgencia del dolor y calidad de la conexión."
                  context="Konfío y Bimbo están arriba porque tenemos conexiones directas que reducen el ciclo de venta."
                >
                  Top 5 Prospectos Prioritarios
                </Tooltip>
              </h3>
            </div>
            <div className="divide-y divide-gray-50">
              {topProspects.map((p, i) => (
                <Tooltip key={i} content={p.why}>
                  <motion.div
                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 cursor-help"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`w-7 h-7 rounded-md flex items-center justify-center text-white text-xs font-bold ${p.hot ? 'bg-gradient-to-br from-amber-400 to-orange-500' : 'bg-gray-800'}`}>
                      {p.rank}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-gray-900 text-sm">
                          {p.name}
                          {p.hot && <span className="ml-1 w-2 h-2 bg-red-500 rounded-full inline-block animate-pulse" />}
                        </p>
                        <span className="text-xs text-gray-400">{p.segment}</span>
                      </div>
                      <p className="text-xs text-gray-500 truncate">{p.connection}</p>
                    </div>
                    <span className="text-xs font-semibold text-emerald-600">{p.ticket}</span>
                  </motion.div>
                </Tooltip>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </SlideLayout>
  )
}

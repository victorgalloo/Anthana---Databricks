'use client'

import { motion } from 'framer-motion'
import SlideLayout from '../Layout'
import Tooltip from '../Tooltip'

const hotProspects = [
  { 
    name: 'Konfío', 
    status: 'Ya usa Databricks',
    pain: 'Gobernanza para CNBV/IDB Invest',
    ticket: '$500-800K',
    connection: '🔥 Víctor (ex-empleado)',
    why: 'Conexión directa con CTO. Víctor conoce la arquitectura y los dolores desde adentro. Mayor probabilidad de cierre.',
  },
  { 
    name: 'Stori', 
    status: 'Ya usa Databricks',
    pain: 'ML para crédito masivo',
    ticket: '$200-400K',
    connection: 'Cold → CEO',
    why: 'Unicornio en expansión agresiva. Regulación los presiona. Ticket medio pero ciclo corto.',
  },
  { 
    name: 'Clip', 
    status: 'Ya usa Databricks',
    pain: 'PrestaClip, modelos de visión',
    ticket: '$300-600K',
    connection: 'Cold → CTO',
    why: 'PrestaClip crece rápido. Necesitan gobernanza antes de escalar más. Fraude es dolor real.',
  },
  { 
    name: 'Kueski', 
    status: 'Ya usa Databricks',
    pain: 'Riesgo BNPL, data alternativa',
    ticket: '$200-400K',
    connection: 'Cold → CDO',
    why: 'Líder BNPL en México. Su core es riesgo crediticio con data alternativa. Perfect fit para Databricks.',
  },
]

const warmProspects = [
  { name: 'Crediclub', industry: 'Fintech', ticket: '$150-300K', note: 'Migró a Azure Databricks', why: 'Ya hicieron migración a Databricks. Probablemente necesitan optimización o expansión.' },
  { name: 'Clara', industry: 'Fintech', ticket: '$150-300K', note: 'Gestión de gasto corporativo', why: 'Crecimiento acelerado. Tickets de gasto = mucha data transaccional.' },
  { name: 'Bitso', industry: 'Cripto', ticket: '$200-400K', note: 'Prevención fraude blockchain', why: 'Regulación cripto es brutal. Necesitan demostrar linaje de datos para compliance.' },
  { name: 'Rappi MX', industry: 'Super App', ticket: '$300-500K', note: 'Logística + fintech', why: 'Operación masiva en México. RappiCard + delivery = data compleja.' },
]

const enterprise = [
  { name: 'Liverpool', industry: 'Retail', ticket: '$300-600K', status: 'Cliente actual', why: 'Ya usan Databricks para Customer 360. Pueden necesitar expansión o nuevos proyectos.' },
  { name: 'Walmart MX', industry: 'Retail', ticket: '$400-800K', status: 'Cliente actual', why: 'Operación logística enorme. Siempre buscando optimizar supply chain.' },
  { name: 'Banorte', industry: 'Banca', ticket: '$500K-1M', status: 'Cliente actual', why: 'Transformación digital agresiva. Arquitectura Medallion ya implementada.' },
  { name: 'BBVA MX', industry: 'Banca', ticket: '$500K-1M', status: 'Cliente actual', why: 'El banco más grande de México. Cualquier proyecto con ellos es significativo.' },
  { name: 'Coca-Cola FEMSA', industry: 'CPG', ticket: '$400-800K', status: 'Cliente actual', why: 'Distribución masiva. Optimización de rutas es un caso de uso perfecto.' },
  { name: 'Heineken MX', industry: 'Bebidas', ticket: '$300-500K', status: 'Cliente actual', why: 'Ya tienen ML pipelines para forecasting. Pueden expandir a más casos.' },
]

export default function StakeholdersSlide() {
  return (
    <SlideLayout id="stakeholders">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-emerald-600 font-medium text-lg mb-4">Mapa de Prospectos</p>
        
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          <Tooltip
            content="Número verificado de empresas usando Databricks en México. Identificadas mediante LinkedIn, ofertas de trabajo y casos públicos."
            context="Cada una de estas empresas es un cliente potencial para: expansión, optimización, gobernanza o nuevos proyectos."
          >
            47+ empresas usan Databricks
          </Tooltip>
        </h2>
        
        <p className="text-xl text-gray-500 mb-6">
          <Tooltip content="No estamos evangelizando Databricks. Ya lo usan. La oportunidad es ayudarles a usarlo mejor.">
            La oportunidad: optimización, migración, gobernanza y nuevos proyectos.
          </Tooltip>
        </p>

        <div className="grid lg:grid-cols-3 gap-4">
          {/* Hot - Con conexión o ya identificados */}
          <div className="bg-white rounded-xl shadow-sm border border-red-200 overflow-hidden">
            <div className="bg-gradient-to-r from-red-500 to-orange-500 px-4 py-3 text-white">
              <h3 className="font-bold text-sm">
                <Tooltip content="Estas empresas tienen: 1) Conexión directa, 2) Dolor urgente identificado, o 3) Ambos. Máxima prioridad.">
                  🔥 Prioridad Crítica
                </Tooltip>
              </h3>
              <p className="text-xs opacity-80">Conexión directa o necesidad urgente</p>
            </div>
            <div className="p-3 space-y-3">
              {hotProspects.map((p, i) => (
                <Tooltip key={i} content={p.why}>
                  <motion.div
                    className="border-b border-gray-100 pb-2 last:border-0 cursor-help hover:bg-red-50 p-1 rounded transition-colors"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-gray-900 text-sm">{p.name}</span>
                      <span className="text-xs font-semibold text-emerald-600">{p.ticket}</span>
                    </div>
                    <p className="text-xs text-gray-500">{p.pain}</p>
                    <p className="text-xs text-orange-600 font-medium mt-1">{p.connection}</p>
                  </motion.div>
                </Tooltip>
              ))}
            </div>
          </div>

          {/* Warm - Ya usan Databricks */}
          <div className="bg-white rounded-xl shadow-sm border border-amber-200 overflow-hidden">
            <div className="bg-gradient-to-r from-amber-500 to-yellow-500 px-4 py-3 text-white">
              <h3 className="font-bold text-sm">
                <Tooltip content="Ya usan Databricks. No necesitamos vender la tecnología, solo nuestros servicios.">
                  ⚡ Prioridad Alta
                </Tooltip>
              </h3>
              <p className="text-xs opacity-80">Ya usan Databricks, oportunidad de servicio</p>
            </div>
            <div className="p-3 space-y-2">
              {warmProspects.map((p, i) => (
                <Tooltip key={i} content={p.why}>
                  <motion.div
                    className="flex items-center justify-between py-1.5 border-b border-gray-50 last:border-0 cursor-help hover:bg-amber-50 px-1 rounded transition-colors"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div>
                      <span className="font-semibold text-gray-900 text-sm">{p.name}</span>
                      <p className="text-xs text-gray-400">{p.note}</p>
                    </div>
                    <span className="text-xs font-semibold text-emerald-600">{p.ticket}</span>
                  </motion.div>
                </Tooltip>
              ))}
            </div>
          </div>

          {/* Enterprise - Grandes cuentas */}
          <div className="bg-white rounded-xl shadow-sm border border-blue-200 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-violet-500 px-4 py-3 text-white">
              <h3 className="font-bold text-sm">
                <Tooltip content="Empresas grandes que ya usan Databricks. Ciclos largos pero tickets enormes. La referencia de Cloud Driver ayuda aquí.">
                  🏢 Enterprise
                </Tooltip>
              </h3>
              <p className="text-xs opacity-80">Clientes actuales Databricks (referencia CD)</p>
            </div>
            <div className="p-3 space-y-1.5">
              {enterprise.map((p, i) => (
                <Tooltip key={i} content={p.why}>
                  <motion.div
                    className="flex items-center justify-between py-1 text-sm cursor-help hover:bg-blue-50 px-1 rounded transition-colors"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-900">{p.name}</span>
                      <span className="text-xs text-gray-400">{p.industry}</span>
                    </div>
                    <span className="text-xs text-gray-500">{p.ticket}</span>
                  </motion.div>
                </Tooltip>
              ))}
            </div>
          </div>
        </div>

        {/* Summary */}
        <Tooltip content="Esta es la estrategia: empezar donde tenemos ventaja (conexiones), luego expandir a donde hay momentum (fintechs), después escalar a enterprise.">
          <div className="mt-4 bg-gray-50 rounded-lg p-3 flex items-center justify-between cursor-help hover:bg-gray-100 transition-colors">
            <p className="text-sm text-gray-600">
              <strong>Estrategia:</strong> Empezar con conexiones directas (Konfío, Bimbo), 
              luego expandir a fintechs que ya usan Databricks.
            </p>
            <Tooltip content="Pipeline potencial si cerramos 30-40% de los prospectos identificados. Conservador.">
              <div className="text-right">
                <p className="text-xs text-gray-400">Pipeline potencial</p>
                <p className="text-lg font-bold text-emerald-600">$3-5M USD</p>
              </div>
            </Tooltip>
          </div>
        </Tooltip>
      </motion.div>
    </SlideLayout>
  )
}

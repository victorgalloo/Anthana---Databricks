'use client'

import { motion } from 'framer-motion'
import SlideLayout from '../Layout'
import Tooltip from '../Tooltip'

const marketDrivers = [
  {
    icon: '💳',
    title: 'Explosión Fintech',
    desc: 'México es el ecosistema fintech #1 de Hispanoamérica. Crédito en milisegundos, fraude en tiempo real.',
    why: 'Hay más de 600 fintechs en México. Todas necesitan infraestructura de datos moderna para competir.',
  },
  {
    icon: '🏦',
    title: 'Modernización Banca',
    desc: 'Conglomerados tradicionales compitiendo vs nativos digitales. Migración masiva a Azure.',
    why: 'Los bancos tienen presupuestos enormes y urgencia por modernizarse antes de perder más mercado.',
  },
  {
    icon: '🚛',
    title: 'Nearshoring',
    desc: 'México como hub manufacturero global. Optimización de cadena de suministro con big data.',
    why: 'El T-MEC y la tensión China-USA están trayendo manufactura a México. Todos necesitan optimizar.',
  },
]

const marketData = [
  { label: 'TAM Databricks MX', value: '$80-120M', subtext: 'Estimación 2024', why: 'Calculado: 250 empresas × ticket promedio $200-400K. Conservador.' },
  { label: 'Crecimiento LATAM', value: '150%', subtext: 'Reportado por Databricks', why: 'Databricks lo reportó oficialmente. No es estimación nuestra.' },
  { label: 'Empresas usando', value: '47+', subtext: 'Identificadas en investigación', why: 'Verificadas una por una mediante LinkedIn, ofertas de trabajo y casos.' },
]

const segments = [
  { name: 'Fintech & Cripto', count: 9, tam: '$15M', examples: 'Konfío, Clip, Stori, Bitso...', why: 'El sector más activo. Ticket promedio $200-400K por proyecto.' },
  { name: 'Banca Tradicional', count: 4, tam: '$20M', examples: 'Banorte, BBVA, Santander...', why: 'Pocos clientes pero tickets enormes ($500K-$1M).' },
  { name: 'Retail', count: 8, tam: '$15M', examples: 'Liverpool, Walmart, Coppel...', why: 'Customer 360 y Retail Media son prioridades de inversión.' },
  { name: 'CPG & Alimentos', count: 6, tam: '$12M', examples: 'Bimbo, FEMSA, Heineken...', why: 'Supply chain y forecasting. Referencia directa con Bimbo.' },
  { name: 'Telecom & Media', count: 6, tam: '$10M', examples: 'Telcel, AT&T, Televisa...', why: 'Volúmenes masivos de datos. Proyectos complejos.' },
  { name: 'Otros (Industria, Gobierno)', count: 14, tam: '$18M', examples: 'SAT, Cemex, Nissan...', why: 'Incluye manufactura, gobierno y aviación.' },
]

export default function MarketSlide() {
  return (
    <SlideLayout id="market">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-emerald-600 font-medium text-lg mb-4">Oportunidad de Mercado</p>
        
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          <Tooltip
            content="TAM (Total Addressable Market) calculado mediante análisis bottom-up: número de empresas × ticket promedio."
            context="Es una estimación conservadora. El mercado real podría ser mayor considerando expansión y nuevos adoptantes."
            source="Análisis Anthana, Dic 2024"
          >
            $80-120M USD en México
          </Tooltip>
        </h2>

        {/* Market Size Cards */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {marketData.map((item, i) => (
            <Tooltip key={i} content={item.why}>
              <motion.div
                className="bg-gray-900 rounded-xl p-4 text-white hover:bg-gray-800 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-xs text-gray-400 uppercase mb-1">{item.label}</p>
                <p className="text-3xl font-bold text-emerald-400">{item.value}</p>
                <p className="text-xs text-gray-500">{item.subtext}</p>
              </motion.div>
            </Tooltip>
          ))}
        </div>

        {/* Market Drivers */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {marketDrivers.map((d, i) => (
            <Tooltip key={i} content={d.why}>
              <motion.div
                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="text-2xl mb-2 block">{d.icon}</span>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{d.title}</h3>
                <p className="text-xs text-gray-500">{d.desc}</p>
              </motion.div>
            </Tooltip>
          ))}
        </div>

        {/* Segment Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-4 py-2 bg-gray-50 border-b border-gray-100">
            <h3 className="font-semibold text-gray-700 text-sm">
              <Tooltip
                content="Cada segmento tiene características y tickets diferentes. Esta segmentación guía nuestra estrategia de GTM."
                context="No todos los clientes son iguales. Priorizamos por TAM y facilidad de entrada."
              >
                Segmentación del Mercado
              </Tooltip>
            </h3>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="px-4 py-2 text-left text-xs text-gray-500">Sector</th>
                <th className="px-2 py-2 text-center text-xs text-gray-500">Empresas</th>
                <th className="px-2 py-2 text-center text-xs text-gray-500">TAM Est.</th>
                <th className="px-4 py-2 text-left text-xs text-gray-500">Ejemplos</th>
              </tr>
            </thead>
            <tbody>
              {segments.map((seg, i) => (
                <Tooltip key={i} content={seg.why}>
                  <tr className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors cursor-help">
                    <td className="px-4 py-2 font-medium text-gray-900">{seg.name}</td>
                    <td className="px-2 py-2 text-center text-gray-600">{seg.count}</td>
                    <td className="px-2 py-2 text-center font-semibold text-emerald-600">{seg.tam}</td>
                    <td className="px-4 py-2 text-xs text-gray-400">{seg.examples}</td>
                  </tr>
                </Tooltip>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </SlideLayout>
  )
}

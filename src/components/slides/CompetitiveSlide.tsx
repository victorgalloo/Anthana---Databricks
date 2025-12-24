'use client'

import { motion } from 'framer-motion'
import SlideLayout from '../Layout'
import Tooltip from '../Tooltip'

const competitors = [
  { 
    name: 'Globant', 
    size: '25,000+', 
    rate: '$200-250/hr', 
    databricks: '⭐⭐⭐',
    weakness: 'No especializado',
    why: 'Gigante de software. Hacen de todo: web, mobile, cloud. Databricks es solo uno de 100+ servicios. No tienen la profundidad.',
  },
  { 
    name: 'Wizeline', 
    size: '2,000+', 
    rate: '$150-200/hr', 
    databricks: '⭐⭐⭐',
    weakness: 'Product first, data second',
    why: 'Excelentes en producto y diseño. Datos es secundario. Sus mejores talentos no están en Databricks.',
  },
  { 
    name: 'Encora', 
    size: '5,000+', 
    rate: '$100-175/hr', 
    databricks: '⭐⭐',
    weakness: 'Snowflake focused',
    why: 'Han apostado fuerte por Snowflake. Sus certificaciones y experiencia están ahí, no en Databricks.',
  },
  { 
    name: 'Anthana', 
    size: '3', 
    rate: '$100-150/hr', 
    databricks: '⭐⭐⭐⭐⭐',
    weakness: 'Somos nuevos',
    highlight: true,
    why: 'Tamaño es nuestra ventaja, no debilidad. El senior que vende es el senior que implementa. Sin handoff a juniors.',
  },
]

const differentiators = [
  {
    icon: '🏆',
    title: 'Referencia Bimbo',
    desc: 'Unity Catalog en 33 países. Ningún competidor en México tiene esto.',
    why: 'Cuando un cliente pregunta "¿qué han hecho?", podemos decir: "gobernanza de datos para 130,000 empleados". Nadie más en MX puede.',
  },
  {
    icon: '🎯',
    title: 'Especialización 100%',
    desc: 'Solo hacemos Databricks. No 50 cosas, UNA muy bien.',
    why: 'Jack of all trades, master of none. Mientras otros dividen atención en 50 tecnologías, nosotros dominamos 1.',
  },
  {
    icon: '⚡',
    title: 'Velocidad Startup',
    desc: 'Propuesta en 48hrs. Globant toma 3 semanas.',
    why: 'Sin burocracia, sin comités de aprobación, sin capas de management. El CEO responde WhatsApp.',
  },
]

export default function CompetitiveSlide() {
  return (
    <SlideLayout id="competitive">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-emerald-600 font-medium text-lg mb-4">Análisis Competitivo</p>
        
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          <Tooltip
            content="En consultoría de datos, ser especialista beats ser generalista. Los clientes quieren el mejor en X, no alguien que 'también hace X'."
            context="Las grandes consultoras tienen marca pero no profundidad. Nosotros tenemos profundidad y rates competitivos."
          >
            Pequeños pero especializados
          </Tooltip>
        </h2>

        <p className="text-xl text-gray-500 mb-8">
          <Tooltip content="La estrategia de 'hacemos de todo' funciona para clientes que no saben lo que necesitan. Clientes sofisticados quieren especialistas.">
            Las grandes consultoras hacen 50 cosas. Nosotros hacemos UNA muy bien.
          </Tooltip>
        </p>

        {/* Competitor Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-8">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Empresa</th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase">
                  <Tooltip content="Número de empleados. Mayor tamaño = más burocracia, más rotación, menos accountability.">
                    Tamaño
                  </Tooltip>
                </th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase">
                  <Tooltip content="Rate por hora en USD. Nuestros rates son 40-50% menores porque no tenemos overhead de oficinas y management.">
                    Rate
                  </Tooltip>
                </th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase">
                  <Tooltip content="Calificación subjetiva basada en: número de proyectos Databricks, certificaciones, y casos públicos.">
                    Databricks
                  </Tooltip>
                </th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Debilidad</th>
              </tr>
            </thead>
            <tbody>
              {competitors.map((c, i) => (
                <Tooltip key={i} content={c.why}>
                  <motion.tr
                    className={`border-t border-gray-100 cursor-help hover:bg-gray-50 ${c.highlight ? 'bg-emerald-50 hover:bg-emerald-100' : ''}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <td className={`px-4 py-3 font-semibold ${c.highlight ? 'text-emerald-700' : 'text-gray-900'}`}>
                      {c.name}
                      {c.highlight && <span className="ml-2 text-xs bg-emerald-600 text-white px-2 py-0.5 rounded-full">Nosotros</span>}
                    </td>
                    <td className="px-4 py-3 text-gray-600">{c.size}</td>
                    <td className="px-4 py-3 text-gray-600">{c.rate}</td>
                    <td className="px-4 py-3">{c.databricks}</td>
                    <td className="px-4 py-3 text-gray-500 text-sm">{c.weakness}</td>
                  </motion.tr>
                </Tooltip>
              ))}
            </tbody>
          </table>
        </div>

        {/* Differentiators */}
        <div className="grid grid-cols-3 gap-4">
          {differentiators.map((d, i) => (
            <Tooltip key={i} content={d.why}>
              <motion.div
                className="bg-gray-900 rounded-xl p-5 text-white cursor-help hover:bg-gray-800 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="text-3xl mb-3 block">{d.icon}</span>
                <h3 className="font-semibold text-lg mb-1">{d.title}</h3>
                <p className="text-gray-400 text-sm">{d.desc}</p>
              </motion.div>
            </Tooltip>
          ))}
        </div>
      </motion.div>
    </SlideLayout>
  )
}

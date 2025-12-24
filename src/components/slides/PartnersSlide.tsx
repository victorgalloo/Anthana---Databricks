'use client'

import { motion } from 'framer-motion'
import SlideLayout from '../Layout'
import Tooltip from '../Tooltip'

const implementers = [
  { name: 'Softtek', type: 'Unicornio MX', specialty: 'Industrialized AI, Salud, Seguros', why: 'El unicornio de servicios TI más grande de México. Pero Databricks es solo uno de sus 100+ servicios.' },
  { name: 'Neoris', type: 'Consultora Digital', specialty: 'Arquitecturas analíticas, Industrial', why: 'Nacida de Cemex. Fuerte en industrial pero no especializada en Databricks.' },
  { name: 'Wizeline', type: 'Ingeniería', specialty: 'Orquestación, Despliegue de datos', why: 'Partner de Databricks pero su foco es producto y UX, no datos.' },
  { name: 'Accenture', type: 'Big 4', specialty: 'Migración empresarial', why: 'Marca global, precios globales. Para proyectos >$1M. Overkill para mid-market.' },
  { name: 'Deloitte', type: 'Big 4', specialty: 'Fábricas de modernización', why: 'Excelente en regulación y auditoría. Pero Databricks no es su core.' },
  { name: 'KPMG', type: 'Big 4', specialty: 'Auditoría con Clara (análisis de transacciones)', why: 'Usan Databricks internamente para auditoría. Pero no venden implementación.' },
]

const anthanaPosition = {
  strengths: [
    { text: 'Especialización 100% Databricks (no generalistas)', why: 'No vendemos SAP, Salesforce, ni web. Solo Databricks. Toda nuestra energía en un solo punto.' },
    { text: 'Referencia directa: Grupo Bimbo (Juan José)', why: 'Juan José lideró Unity Catalog para 33 países. Verificable. LinkedIn abierto.' },
    { text: 'Conocimiento interno: Konfío (Víctor)', why: 'Víctor trabajó 8 meses en Konfío. Conoce la arquitectura, las personas, los dolores.' },
    { text: 'Rates 40-50% menores que Big 4', why: 'Sin overhead de oficinas en Santa Fe, sin capas de management, sin venta de humo.' },
    { text: 'Agilidad de startup (propuesta en 48hrs)', why: 'No hay comités de aprobación. El CEO responde WhatsApp a las 10pm.' },
  ],
  differentiator: 'Los grandes hacen "de todo". Nosotros hacemos UNA cosa muy bien.',
}

const cloudDriverValue = [
  { item: '26 años', desc: 'de relaciones enterprise en México', why: 'Jorge Garrido ha construido relaciones durante décadas. Acceso a C-suite que tomaría años construir.' },
  { item: '12,000', desc: 'contactos en base de datos', why: 'No es una lista comprada. Son contactos con historial de interacción y compra.' },
  { item: '3,000', desc: 'en manufactura y distribución', why: 'El sweet spot para Tier 3. Empresas que necesitan optimización de supply chain.' },
  { item: 'Snowflake', desc: 'experiencia previa con partner técnico', why: 'Ya hicieron alianza con partner técnico antes. Saben cómo funciona el modelo.' },
]

export default function PartnersSlide() {
  return (
    <SlideLayout id="partners">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-emerald-600 font-medium text-lg mb-4">Ecosistema de Partners</p>
        
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          <Tooltip
            content="El mercado de implementadores de Databricks en México está dominado por generalistas. Nosotros somos la opción especializada."
            context="No competimos con las Big 4 por los deals de $5M. Competimos por el mid-market donde somos más ágiles y económicos."
          >
            Dónde encajamos
          </Tooltip>
        </h2>

        <div className="grid lg:grid-cols-3 gap-4">
          {/* Implementers */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-4 py-3 bg-gray-50 border-b border-gray-100">
              <h3 className="font-semibold text-gray-700 text-sm">
                <Tooltip content="Estos son los principales implementadores de Databricks en México. Todos son generalistas o tienen otro foco principal.">
                  Implementadores en MX
                </Tooltip>
              </h3>
            </div>
            <div className="p-3 space-y-2">
              {implementers.map((p, i) => (
                <Tooltip key={i} content={p.why}>
                  <motion.div
                    className="flex items-center gap-2 text-sm cursor-help hover:bg-gray-50 p-1 rounded transition-colors"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-gray-300 rounded-full" />
                    <span className="font-medium text-gray-700">{p.name}</span>
                    <span className="text-xs text-gray-400">· {p.type}</span>
                  </motion.div>
                </Tooltip>
              ))}
              <div className="pt-2 border-t border-gray-100 mt-2">
                <Tooltip content="Somos el único implementador en México 100% enfocado en Databricks. No hacemos nada más.">
                  <div className="flex items-center gap-2 text-sm cursor-help">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="font-bold text-emerald-600">Anthana</span>
                    <span className="text-xs text-gray-400">· Especialista puro</span>
                  </div>
                </Tooltip>
              </div>
            </div>
          </div>

          {/* Anthana Strengths */}
          <div className="bg-gray-900 rounded-xl p-4 text-white">
            <h3 className="font-semibold text-sm mb-3 text-gray-400 uppercase">Por qué Anthana gana</h3>
            <div className="space-y-2">
              {anthanaPosition.strengths.map((s, i) => (
                <Tooltip key={i} content={s.why}>
                  <motion.div
                    className="flex items-start gap-2 text-sm cursor-help hover:bg-gray-800 p-1 rounded transition-colors"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-emerald-400 mt-0.5">✓</span>
                    <span className="text-gray-300">{s.text}</span>
                  </motion.div>
                </Tooltip>
              ))}
            </div>
            <div className="mt-4 pt-3 border-t border-gray-700">
              <Tooltip content="Este es nuestro mantra. Los clientes sofisticados entienden que el especialista beats el generalista.">
                <p className="text-xs text-emerald-400 italic cursor-help">"{anthanaPosition.differentiator}"</p>
              </Tooltip>
            </div>
          </div>

          {/* Cloud Driver Value */}
          <div className="bg-emerald-600 rounded-xl p-4 text-white">
            <h3 className="font-semibold text-sm mb-3 uppercase opacity-80">
              <Tooltip content="Lo que Cloud Driver trae a la mesa. Sin ellos, tendríamos que construir estas relaciones desde cero (años).">
                Cloud Driver aporta
              </Tooltip>
            </h3>
            <div className="space-y-3">
              {cloudDriverValue.map((v, i) => (
                <Tooltip key={i} content={v.why}>
                  <motion.div
                    className="cursor-help hover:bg-emerald-500 p-1 rounded transition-colors"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-2xl font-bold">{v.item}</p>
                    <p className="text-xs opacity-80">{v.desc}</p>
                  </motion.div>
                </Tooltip>
              ))}
            </div>
          </div>
        </div>

        {/* Alliance Formula */}
        <Tooltip content="Esta es la fórmula de la alianza. Cloud Driver tiene las relaciones pero no el expertise técnico profundo. Anthana tiene el expertise pero no las relaciones. Juntos, ambos problemas se resuelven.">
          <motion.div
            className="mt-6 bg-gradient-to-r from-gray-900 via-emerald-900 to-emerald-600 rounded-xl p-4 text-white text-center cursor-help"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-lg font-medium">
              <span className="text-gray-300">Cloud Driver</span>
              <span className="mx-2 opacity-50">×</span>
              <span className="text-emerald-300">Anthana</span>
              <span className="mx-2">=</span>
              <span className="font-bold">Relaciones + Especialización</span>
            </p>
          </motion.div>
        </Tooltip>
      </motion.div>
    </SlideLayout>
  )
}

'use client'

import { motion } from 'framer-motion'
import SlideLayout from '../Layout'
import Tooltip from '../Tooltip'

const konfioData = {
  name: 'Konfío',
  logo: '🏦',
  tagline: 'Unicornio fintech mexicano',
  metrics: [
    { label: 'Empleados', value: '800+', why: 'Estimación basada en LinkedIn. Han crecido agresivamente.' },
    { label: 'Funding', value: '$400M+', why: 'Múltiples rondas incluyendo Serie E. Inversionistas de clase mundial.' },
    { label: 'Valuación', value: '$1B+', why: 'Alcanzaron status de unicornio. Una de las fintechs más valiosas de LATAM.' },
    { label: 'Inversores', value: 'IDB, SoftBank', why: 'IDB Invest impone requisitos estrictos de gobernanza y compliance.' },
  ],
  stack: [
    { name: 'AWS', why: 'Cloud principal. Toda su infraestructura corre aquí.' },
    { name: 'S3 + Glue', why: 'Data Lake actual. El problema: no tiene gobernanza unificada.' },
    { name: 'SageMaker', why: 'Modelos de ML para scoring crediticio. El corazón del negocio.' },
    { name: 'Redshift?', why: 'Probable data warehouse. Crea silos con el Data Lake.' },
  ],
  pains: [
    { text: 'Auditoría CNBV requiere linaje de datos', urgent: true, why: 'La CNBV puede pedir demostrar qué datos usó un modelo para rechazar un crédito. Hoy no pueden.' },
    { text: 'IDB Invest exige gobierno corporativo', urgent: true, why: 'Como inversionista institucional, IDB tiene cláusulas contractuales de gestión de riesgos tecnológicos.' },
    { text: 'Equipo se duplica → necesitan plataforma unificada', urgent: false, why: 'Francisco Padilla (CTO) ha dicho públicamente que quieren duplicar el equipo de ingeniería.' },
    { text: 'Fragmentación: datos en múltiples sistemas', urgent: false, why: 'S3, Glue, SageMaker, Redshift... cada uno con su propia seguridad y permisos.' },
  ],
  contacts: [
    { name: 'David Arana', role: 'CEO', type: 'Decisor final', why: 'Fundador. Toma decisiones estratégicas grandes. Difícil de alcanzar pero vale la pena.' },
    { name: 'Francisco Padilla', role: 'CTO', type: 'Target técnico', why: 'Nuestro target principal. Entiende el problema técnico y tiene presupuesto.' },
  ],
  ticket: '$500K - $800K',
  ticketWhy: 'Proyecto completo 12 meses: Assessment + Unity Catalog + Migración + Capacitación.',
  advantage: 'Víctor trabajó 8 meses ahí. Conoce el dolor desde adentro.',
  advantageWhy: 'No empezamos de cero. Sabemos exactamente cómo funciona su arquitectura, quién toma decisiones, y qué les duele.',
}

export default function DossierSlide() {
  return (
    <SlideLayout id="dossier">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-emerald-600 font-medium text-lg mb-4">
          <Tooltip
            content="Konfío es nuestro prospecto #1 porque: 1) Conexión directa, 2) Dolor urgente (regulación), 3) Ticket grande, 4) Ya usan Databricks (expansión)."
            context="Si cerramos Konfío, abre puertas a todo el sector fintech como referencia."
          >
            Dossier del Prospecto #1
          </Tooltip>
        </p>
        
        <div className="flex items-center gap-4 mb-6">
          <span className="text-5xl">{konfioData.logo}</span>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              {konfioData.name}
            </h2>
            <p className="text-xl text-gray-500">{konfioData.tagline}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            {/* Metrics */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Datos Clave</h3>
              <div className="grid grid-cols-2 gap-3">
                {konfioData.metrics.map((m, i) => (
                  <Tooltip key={i} content={m.why}>
                    <div className="cursor-help hover:bg-gray-50 p-1 rounded transition-colors">
                      <p className="text-xs text-gray-500">{m.label}</p>
                      <p className="text-lg font-bold text-gray-900">{m.value}</p>
                    </div>
                  </Tooltip>
                ))}
              </div>
            </div>

            {/* Stack */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
                <Tooltip content="Stack tecnológico identificado mediante ofertas de trabajo y fuentes públicas.">
                  Stack Actual
                </Tooltip>
              </h3>
              <div className="flex flex-wrap gap-2">
                {konfioData.stack.map((s, i) => (
                  <Tooltip key={i} content={s.why}>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 cursor-help hover:bg-emerald-100 transition-colors">
                      {s.name}
                    </span>
                  </Tooltip>
                ))}
              </div>
            </div>

            {/* Contacts */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Contactos Clave</h3>
              <div className="space-y-2">
                {konfioData.contacts.map((c, i) => (
                  <Tooltip key={i} content={c.why}>
                    <div className="flex items-center justify-between cursor-help hover:bg-gray-50 p-1 rounded transition-colors">
                      <div>
                        <p className="font-semibold text-gray-900">{c.name}</p>
                        <p className="text-xs text-gray-500">{c.role}</p>
                      </div>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">{c.type}</span>
                    </div>
                  </Tooltip>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {/* Pains */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
                <Tooltip content="Dolores identificados mediante: experiencia interna de Víctor, noticias públicas, y análisis de la industria.">
                  Dolores Identificados
                </Tooltip>
              </h3>
              <div className="space-y-2">
                {konfioData.pains.map((p, i) => (
                  <Tooltip key={i} content={p.why}>
                    <motion.div
                      className="flex items-start gap-2 cursor-help hover:bg-gray-50 p-1 rounded transition-colors"
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${p.urgent ? 'bg-red-500 animate-pulse' : 'bg-gray-300'}`} />
                      <p className={`text-sm ${p.urgent ? 'text-gray-900 font-medium' : 'text-gray-600'}`}>{p.text}</p>
                    </motion.div>
                  </Tooltip>
                ))}
              </div>
            </div>

            {/* Ticket */}
            <Tooltip content={konfioData.ticketWhy}>
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-4 text-white cursor-help">
                <h3 className="text-xs font-semibold uppercase tracking-wide mb-2 opacity-80">Ticket Estimado</h3>
                <p className="text-3xl font-bold">{konfioData.ticket}</p>
                <p className="text-sm opacity-80 mt-1">Proyecto completo 12 meses</p>
              </div>
            </Tooltip>

            {/* Advantage */}
            <Tooltip content={konfioData.advantageWhy}>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 cursor-help">
                <h3 className="text-xs font-semibold text-amber-800 uppercase tracking-wide mb-2">⭐ Ventaja Competitiva</h3>
                <p className="text-sm text-amber-900">{konfioData.advantage}</p>
              </div>
            </Tooltip>
          </div>
        </div>
      </motion.div>
    </SlideLayout>
  )
}

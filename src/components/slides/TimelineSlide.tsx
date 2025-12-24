'use client'

import { motion } from 'framer-motion'
import SlideLayout from '../Layout'
import Tooltip from '../Tooltip'

const timeline = [
  { 
    date: '22-26 Dic', 
    title: 'Preparación', 
    desc: 'ICP, prospectos, materiales, demos',
    status: 'done',
    icon: '✓',
    why: 'Esta presentación, investigación de mercado, templates de outreach, dossiers de prospectos. Todo listo.',
  },
  { 
    date: '27 Dic', 
    title: 'Alianza Cloud Driver', 
    desc: 'Firma NDA, acuerdo comercial',
    status: 'current',
    icon: '→',
    why: 'Reunión presencial para formalizar la alianza. Definir split de revenue y responsabilidades.',
  },
  { 
    date: 'Ene 6-31', 
    title: 'Campaña Outreach', 
    desc: '500 emails + LinkedIn',
    status: 'pending',
    icon: '📧',
    why: 'Outbound campaign usando la base de Cloud Driver + LinkedIn personalizado. 500 contactos en el primer mes.',
  },
  { 
    date: 'Ene-Feb', 
    title: '15-20 Reuniones', 
    desc: 'Discovery + Demos técnicas',
    status: 'pending',
    icon: '🤝',
    why: 'Conversion rate esperado: 3-4% de outreach a meeting. 15-20 reuniones calificadas.',
  },
  { 
    date: 'Feb-Mar', 
    title: '3-5 Deals', 
    desc: 'Propuestas + Cierre',
    status: 'pending',
    icon: '💰',
    why: 'Ciclo de venta de 8-12 semanas. Primeros cierres en Feb-Mar. Target: $500K-$1M en revenue.',
  },
]

const activities = [
  { date: 'Vie 27 Dic', activity: 'Reunión presencial Casa O', company: 'Cloud Driver', type: 'Alianza', status: 'scheduled', why: 'Reunión más importante. Define los términos de la alianza y el plan de acción.' },
  { date: 'Lun 6 Ene', activity: 'Lanzamiento campaña outbound', company: 'Top 50 Fintech', type: 'Outreach', status: 'pending', why: 'Primer batch de outreach. 50 fintechs priorizadas por tamaño y dolor.' },
  { date: 'Sem 13 Ene', activity: 'Reunión con Francisco Padilla (CTO)', company: 'Konfío', type: 'Demo', status: 'pending', why: 'El deal más importante. Si cerramos Konfío, abre puertas a todo el sector.' },
  { date: 'Sem 13 Ene', activity: 'Intro a equipo de datos', company: 'Grupo Bimbo', type: 'Referencia', status: 'pending', why: 'Juan José hace la intro. Posibilidad de expansión o nuevos proyectos.' },
  { date: 'Sem 20 Ene', activity: 'Demo Unity Catalog', company: 'Clip', type: 'Demo', status: 'pending', why: 'Clip está en crecimiento agresivo. Necesitan gobernanza antes de escalar más.' },
  { date: 'Feb', activity: 'Propuesta formal', company: 'Konfío', type: 'Proposal', status: 'pending', why: 'Si el discovery va bien, propuesta formal con pricing y alcance.' },
]

const allianceTerms = [
  { item: 'Cloud Driver genera demanda', detail: 'Base de datos de 12,000 contactos', why: '12,000 contactos enterprise construidos en 26 años. Acceso que nos tomaría años construir.' },
  { item: 'Anthana ejecuta técnicamente', detail: 'Demos, propuestas, implementación', why: 'Nosotros ponemos el expertise técnico. Juan José es el arma secreta.' },
  { item: 'Split propuesto', detail: '75-80% Anthana / 20-25% Cloud Driver', why: 'Anthana hace la ejecución técnica (más trabajo). Cloud Driver genera el lead.' },
  { item: 'Fondos de marketing', detail: 'AWS + Databricks para eventos', why: 'Ambos tienen programas de co-marketing para partners. Dinero para eventos y contenido.' },
]

export default function TimelineSlide() {
  return (
    <SlideLayout id="timeline">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-emerald-600 font-medium text-lg mb-4">Plan de Ejecución</p>
        
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
          <Tooltip
            content="Plan detallado para los primeros 3 meses de 2025. Objetivo: generar $500K-$1M en pipeline cerrado."
            context="El éxito de Q1 determina el momentum del año completo."
          >
            Timeline Q1 2025
          </Tooltip>
        </h2>

        {/* Timeline */}
        <div className="relative mb-8">
          <div className="absolute top-6 left-0 right-0 h-1 bg-gray-200 rounded-full" />
          
          <div className="flex justify-between relative">
            {timeline.map((item, i) => (
              <Tooltip key={i} content={item.why}>
                <motion.div
                  className="flex flex-col items-center text-center w-1/5 cursor-help"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold z-10 mb-2 transition-all ${
                    item.status === 'done' 
                      ? 'bg-emerald-500 text-white' 
                      : item.status === 'current'
                      ? 'bg-blue-500 text-white animate-pulse shadow-lg shadow-blue-500/30'
                      : 'bg-white border-2 border-gray-200 text-gray-400 hover:border-emerald-500 hover:text-emerald-500'
                  }`}>
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 text-xs mb-0.5">{item.title}</h4>
                  <p className="text-xs text-gray-500 mb-0.5">{item.desc}</p>
                  <span className="text-xs text-gray-400">{item.date}</span>
                </motion.div>
              </Tooltip>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-4">
          {/* Activities Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-100 bg-gray-50">
              <h3 className="font-semibold text-gray-900 text-sm">
                <Tooltip content="Actividades concretas con fecha y responsable. Tracking semanal de avance.">
                  Próximas Actividades
                </Tooltip>
              </h3>
            </div>
            <div className="divide-y divide-gray-50 max-h-60 overflow-y-auto">
              {activities.map((act, i) => (
                <Tooltip key={i} content={act.why}>
                  <motion.div
                    className="flex items-center px-4 py-2.5 hover:bg-gray-50 transition-colors cursor-help"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-xs font-medium text-gray-900 w-20">{act.date}</span>
                    <div className="flex-1">
                      <p className="text-xs text-gray-700">{act.activity}</p>
                      <p className="text-xs text-gray-400">{act.company}</p>
                    </div>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      act.status === 'scheduled' 
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-amber-100 text-amber-700'
                    }`}>
                      {act.type}
                    </span>
                  </motion.div>
                </Tooltip>
              ))}
            </div>
          </div>

          {/* Alliance Terms */}
          <div className="bg-gray-900 rounded-xl p-5 text-white">
            <h3 className="font-semibold text-sm mb-4 text-gray-400 uppercase">
              <Tooltip content="Los términos clave que debemos acordar con Cloud Driver. El split es negociable pero este es nuestro punto de partida.">
                Términos de la Alianza
              </Tooltip>
            </h3>
            <div className="space-y-3">
              {allianceTerms.map((term, i) => (
                <Tooltip key={i} content={term.why}>
                  <motion.div
                    className="flex items-start gap-3 cursor-help hover:bg-gray-800 p-1 rounded transition-colors"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-emerald-400 mt-0.5">✓</span>
                    <div>
                      <p className="font-medium text-sm">{term.item}</p>
                      <p className="text-xs text-gray-400">{term.detail}</p>
                    </div>
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

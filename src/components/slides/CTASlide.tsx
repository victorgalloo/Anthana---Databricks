'use client'

import { motion } from 'framer-motion'
import SlideLayout from '../Layout'
import Tooltip from '../Tooltip'

const nextSteps = [
  {
    step: 1,
    title: 'Demo técnica',
    desc: 'Unity Catalog en acción: linaje, auditoría, gobernanza',
    duration: '60 min',
    why: 'Ver es creer. Mostramos en vivo cómo responder "¿quién tocó estos datos?" en 3 clics.',
  },
  {
    step: 2,
    title: 'Assessment gratuito',
    desc: 'Evaluación de madurez de datos y gaps de gobernanza',
    duration: '2 semanas',
    why: 'Entregamos un reporte ejecutivo con hallazgos y roadmap. Sin compromiso, sin costo.',
  },
  {
    step: 3,
    title: 'PoC acotado',
    desc: 'Prueba de concepto con caso de uso real (no demo)',
    duration: '4-6 semanas',
    why: 'Implementamos algo real en su ambiente. Si no ven valor, no pagan. Riesgo cero.',
  },
]

const contacts = [
  {
    name: 'Víctor Gallo',
    role: 'CEO, Anthana',
    email: 'victor@anthana.agency',
    linkedin: 'linkedin.com/in/victorgallo',
    highlight: 'Ex-Konfío · Conoce el dolor desde adentro',
    why: 'Punto de contacto principal. Entiende negocio y técnico. Puede tener conversaciones con CEOs y CTOs.',
  },
  {
    name: 'Juan José Cardona',
    role: 'Technical Lead',
    email: 'jj@anthana.agency',
    linkedin: 'linkedin.com/in/juanjosecardona',
    highlight: 'Ex-Bimbo · Unity Catalog en 33 países',
    why: 'Para deep-dives técnicos. Puede responder cualquier pregunta sobre Databricks.',
  },
]

export default function CTASlide() {
  return (
    <SlideLayout id="cta">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="text-emerald-600 font-medium text-lg mb-4">Siguiente Paso</p>
        
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          <Tooltip
            content="Empezamos con bajo compromiso para que vean valor antes de invertir. Así construimos confianza."
            context="Nuestra estrategia: dar valor primero, pedir dinero después."
          >
            ¿Listos para ver el futuro?
          </Tooltip>
        </h2>
        
        <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
          <Tooltip content="No vendemos humo. Mostramos resultados reales en ambiente real antes de pedir compromiso.">
            Sin compromiso, sin riesgo
          </Tooltip>
          . Solo una conversación para ver si hay fit.
        </p>

        {/* Next Steps */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {nextSteps.map((s, i) => (
            <Tooltip key={i} content={s.why}>
              <motion.div
                className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-help text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    {s.step}
                  </div>
                  <span className="text-xs text-gray-400">{s.duration}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                <p className="text-sm text-gray-500">{s.desc}</p>
              </motion.div>
            </Tooltip>
          ))}
        </div>

        {/* CTA Button */}
        <Tooltip content="La acción más importante de esta presentación. Si leen esto y agendan, la presentación funcionó.">
          <motion.a
            href="mailto:victor@anthana.agency?subject=Demo Databricks - Alianza"
            className="inline-block bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Agendar Demo →
          </motion.a>
        </Tooltip>

        {/* Contacts */}
        <div className="mt-12 flex justify-center gap-8">
          {contacts.map((c, i) => (
            <Tooltip key={i} content={c.why}>
              <motion.div
                className="text-left cursor-help"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white font-semibold">
                    {c.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{c.name}</p>
                    <p className="text-xs text-gray-500">{c.role}</p>
                    <p className="text-xs text-emerald-600">{c.highlight}</p>
                  </div>
                </div>
              </motion.div>
            </Tooltip>
          ))}
        </div>

        {/* Footer logos */}
        <div className="mt-10 pt-8 border-t border-gray-100">
          <p className="text-xs text-gray-400 mb-4">Una alianza de</p>
          <div className="flex justify-center items-center gap-6">
            <span className="text-lg font-bold text-gray-900">ANTHANA</span>
            <span className="text-gray-300">×</span>
            <span className="text-lg font-bold text-emerald-600">CLOUD DRIVER</span>
            <span className="text-gray-300">×</span>
            <span className="text-lg font-bold text-orange-500">DATABRICKS</span>
          </div>
        </div>
      </motion.div>
    </SlideLayout>
  )
}

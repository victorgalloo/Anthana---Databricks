'use client'

import { motion } from 'framer-motion'
import SlideLayout from '../Layout'
import Tooltip from '../Tooltip'

const differentiators = [
  {
    icon: '🏆',
    title: 'Referencia Bimbo',
    desc: 'Unity Catalog implementado para 130,000 empleados en 33 países. Ningún competidor en México tiene esto.',
    proof: 'Juan José lideró el proyecto',
    why: 'Cuando una empresa pregunta "¿han hecho algo así antes?", podemos responder con el caso más grande de gobernanza de datos en México.',
  },
  {
    icon: '🎯',
    title: 'Especialización 100%',
    desc: 'Solo hacemos Databricks. No 50 tecnologías. Mientras otros son "Jack of all trades", nosotros somos masters of one.',
    proof: '7 años de experiencia en datos',
    why: 'Las grandes consultoras asignan a generalistas. Nosotros asignamos a alguien que solo ha hecho esto por 7 años.',
  },
  {
    icon: '🔑',
    title: 'Conexiones estratégicas',
    desc: 'Víctor trabajó 8 meses en Konfío. Conocemos el dolor desde adentro. Abrimos puertas que otros no pueden.',
    proof: 'Acceso directo al CTO',
    why: 'Entrar a una empresa sin contactos toma 6+ meses. Nosotros podemos tener una reunión en semanas.',
  },
]

const team = [
  { 
    initials: 'JC', 
    name: 'Juan José Cardona', 
    role: 'Technical Lead',
    bg: 'Ex-Bimbo · Manager Ingeniería de Datos',
    highlight: '7 años exp. · Unity Catalog en 33 países',
    why: 'El activo más valioso de Anthana. Su experiencia en Bimbo es irrefutable y verificable.',
  },
  { 
    initials: 'VG', 
    name: 'Víctor Gallo', 
    role: 'CEO',
    bg: 'Ex-Konfío · Ex-Google',
    highlight: 'Conoce Konfío por dentro',
    why: 'Conocimiento interno de Konfío permite entender exactamente qué necesitan y cómo venderles.',
  },
  { 
    initials: 'CC', 
    name: 'Carlos Cardona', 
    role: 'Engineer',
    bg: 'Ex-Disney · iOS & Data',
    highlight: 'Product + Data Engineering',
    why: 'Experiencia en Disney demuestra capacidad de trabajar con empresas de clase mundial.',
  },
]

const rates = [
  { company: 'Slalom', rate: '$250-350', bar: 100, why: 'Partner Elite de Databricks, pero precios prohibitivos para mid-market.' },
  { company: 'Globant', rate: '$200-250', bar: 75, why: 'Marca conocida pero Databricks no es su especialidad.' },
  { company: 'Wizeline', rate: '$150-200', bar: 55, why: 'Buena reputación técnica pero foco en producto, no datos.' },
  { company: 'Anthana', rate: '$100-150', bar: 40, highlight: true, why: 'Misma calidad técnica, precio accesible, especialización láser.' },
]

export default function WhyUsSlide() {
  return (
    <SlideLayout id="why-us">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-emerald-600 font-medium text-lg mb-4">Por qué Anthana</p>
        
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
          <Tooltip
            content="Nuestro tamaño es una ventaja, no una debilidad. Los mejores recursos trabajan directamente en cada proyecto."
            context="En consultoras grandes, el 'A-team' vende y el 'B-team' ejecuta. En Anthana, solo hay un equipo."
          >
            Pequeños pero especializados
          </Tooltip>
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Differentiators */}
          <div className="space-y-4">
            {differentiators.map((d, i) => (
              <Tooltip key={i} content={d.why}>
                <motion.div
                  className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{d.icon}</span>
                    <div>
                      <h3 className="font-semibold text-gray-900">{d.title}</h3>
                      <p className="text-sm text-gray-500 mb-2">{d.desc}</p>
                      <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">
                        {d.proof}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Tooltip>
            ))}

            {/* Rates Comparison */}
            <div className="bg-gray-50 rounded-xl p-4">
              <h4 className="text-xs font-semibold text-gray-500 uppercase mb-3">
                <Tooltip
                  content="Comparación de rates por hora en USD basada en información pública y ofertas de trabajo."
                  context="Nuestros rates son 40-50% menores que las consultoras premium, con misma o mejor calidad técnica."
                >
                  Rates USD/hr
                </Tooltip>
              </h4>
              <div className="space-y-2">
                {rates.map((r, i) => (
                  <Tooltip key={i} content={r.why}>
                    <div className="flex items-center gap-3 cursor-help">
                      <span className={`text-xs w-16 ${r.highlight ? 'font-bold text-emerald-600' : 'text-gray-600'}`}>
                        {r.company}
                      </span>
                      <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${r.highlight ? 'bg-emerald-500' : 'bg-gray-400'}`}
                          style={{ width: `${r.bar}%` }}
                        />
                      </div>
                      <span className={`text-xs ${r.highlight ? 'font-bold text-emerald-600' : 'text-gray-500'}`}>
                        {r.rate}
                      </span>
                    </div>
                  </Tooltip>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-2">40-50% más económicos que consultoras premium</p>
            </div>
          </div>

          {/* Right: Team */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xs font-semibold text-gray-500 uppercase mb-3">El Equipo</h4>
            {team.map((t, i) => (
              <Tooltip key={i} content={t.why}>
                <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                    {t.initials}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-gray-900">{t.name}</p>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">{t.role}</span>
                    </div>
                    <p className="text-sm text-gray-500">{t.bg}</p>
                    <p className="text-xs text-emerald-600 font-medium mt-1">{t.highlight}</p>
                  </div>
                </div>
              </Tooltip>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </SlideLayout>
  )
}

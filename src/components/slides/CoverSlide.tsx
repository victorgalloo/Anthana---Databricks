'use client'

import { motion } from 'framer-motion'
import SlideLayout from '../Layout'
import Tooltip from '../Tooltip'

export default function CoverSlide() {
  return (
    <SlideLayout id="cover">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-900 rounded-lg">
            <span className="text-white font-bold text-sm">ANTHANA</span>
          </div>
          <span className="text-gray-300">×</span>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-600 rounded-lg">
            <span className="text-white font-bold text-sm">CLOUD DRIVER</span>
          </div>
          <span className="text-gray-300">×</span>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-orange-500 rounded-lg">
            <span className="text-white font-bold text-sm">DATABRICKS</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
          Alianza estratégica<br />
          <span className="text-emerald-600">Databricks México</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mb-10">
          <Tooltip 
            content="Cloud Driver tiene 26 años en el mercado mexicano con una base de 12,000 contactos enterprise."
            context="Las relaciones comerciales toman años en construirse. Esta alianza nos da acceso inmediato."
          >
            26 años de relaciones enterprise
          </Tooltip>
          {' + '}
          <Tooltip
            content="Anthana se especializa únicamente en Databricks. Juan José implementó Unity Catalog en Bimbo para 33 países."
            context="La especialización profunda supera a los generalistas en proyectos técnicos complejos."
          >
            especialización técnica profunda
          </Tooltip>.
          <br />Juntos capturamos un mercado de{' '}
          <Tooltip
            content="Estimación basada en: 250 empresas target × ticket promedio $200-300K. Crecimiento del mercado: 35% anual."
            context="Este TAM representa solo empresas mexicanas con capacidad de compra para proyectos Databricks."
            source="Análisis Anthana, Dic 2024"
          >
            $80-120M USD
          </Tooltip>.
        </p>

        <div className="flex items-center gap-8 text-sm">
          <Tooltip
            content="Total Addressable Market calculado: Fintechs ($15M) + Banca ($20M) + Retail ($15M) + CPG ($12M) + Telecom ($10M) + Otros ($18M)"
            context="No es un número inventado. Está respaldado por investigación de 47+ empresas que ya usan Databricks en México."
            source="Investigación ecosistema Databricks MX"
          >
            <div>
              <p className="text-gray-400">Mercado Target</p>
              <p className="text-2xl font-bold text-gray-900">$80-120M</p>
            </div>
          </Tooltip>
          <div className="w-px h-10 bg-gray-200" />
          <Tooltip
            content="47+ empresas identificadas que ya usan Databricks + ~200 empresas potenciales que aún no lo adoptan."
            context="La mayoría de estas empresas necesitan servicios de implementación, migración o optimización."
          >
            <div>
              <p className="text-gray-400">Empresas Target</p>
              <p className="text-2xl font-bold text-gray-900">250+</p>
            </div>
          </Tooltip>
          <div className="w-px h-10 bg-gray-200" />
          <Tooltip
            content="Proyección conservadora: 60 reuniones → 22 oportunidades → 12 propuestas → 3-5 deals cerrados en Q1."
            context="Basado en conversion rates típicos de consultoría: 10% lead-to-meeting, 30% meeting-to-qualified."
          >
            <div>
              <p className="text-gray-400">Pipeline Q1</p>
              <p className="text-2xl font-bold text-emerald-600">$1.5-2M</p>
            </div>
          </Tooltip>
        </div>
      </motion.div>
    </SlideLayout>
  )
}

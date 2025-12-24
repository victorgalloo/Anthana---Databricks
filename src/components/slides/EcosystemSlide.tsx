'use client'

import { motion } from 'framer-motion'
import SlideLayout from '../Layout'
import Tooltip from '../Tooltip'

const sectors = [
  {
    name: 'Fintech & Cripto',
    color: 'bg-emerald-500',
    count: 9,
    companies: ['Bineo', 'Kueski', 'Clip', 'Bitso', 'Konfío', 'Stori', 'Crediclub', 'Clara', 'Rappi'],
    why: 'El sector más activo. Necesitan ML para riesgo crediticio y fraude en tiempo real.',
  },
  {
    name: 'Banca',
    color: 'bg-blue-500',
    count: 4,
    companies: ['Banorte', 'BBVA México', 'Santander', 'Banco Azteca'],
    why: 'Modernización de legacy systems. Migración de mainframes a arquitecturas cloud.',
  },
  {
    name: 'Seguros',
    color: 'bg-violet-500',
    count: 4,
    companies: ['AXA México', 'MetLife', 'GNP Seguros', 'Seguros Monterrey'],
    why: 'Modelos actuariales modernos y procesamiento de siniestros con IA.',
  },
  {
    name: 'Retail',
    color: 'bg-amber-500',
    count: 8,
    companies: ['Liverpool', 'Walmart MX', 'Coppel', 'Soriana', 'Chedraui', 'Elektra', 'Palacio de Hierro', 'Kavak'],
    why: 'Customer 360, personalización omnicanal y Retail Media (monetización de datos).',
  },
  {
    name: 'CPG & Alimentos',
    color: 'bg-orange-500',
    count: 6,
    companies: ['Grupo Bimbo', 'Coca-Cola FEMSA', 'Heineken MX', 'Grupo Modelo', 'Sigma', 'Alsea'],
    why: 'Supply chain global, forecasting de demanda y optimización de distribución.',
  },
  {
    name: 'Telecom & Media',
    color: 'bg-pink-500',
    count: 6,
    companies: ['Totalplay', 'Telcel', 'Telmex', 'AT&T MX', 'TelevisaUnivision', 'TV Azteca'],
    why: 'Análisis de telemetría masiva, predicción de churn y personalización de contenido.',
  },
  {
    name: 'Industria & Auto',
    color: 'bg-gray-600',
    count: 6,
    companies: ['Cemex', 'Ternium', 'Nissan MX', 'Ford MX', 'GM México', 'Volkswagen MX'],
    why: 'IoT industrial, mantenimiento predictivo y optimización de manufactura.',
  },
  {
    name: 'Gobierno & Academia',
    color: 'bg-red-500',
    count: 4,
    companies: ['SAT', 'IMSS', 'Tec de Monterrey', 'UNAM'],
    why: 'Procesamiento fiscal masivo (SAT procesa 21M facturas/día) e investigación.',
  },
]

const totalCompanies = sectors.reduce((acc, s) => acc + s.count, 0)

export default function EcosystemSlide() {
  return (
    <SlideLayout id="ecosystem">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-emerald-600 font-medium text-lg mb-4">Ecosistema Databricks México</p>
        
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          <Tooltip
            content="Número exacto de empresas identificadas mediante investigación de LinkedIn, ofertas de empleo, casos de estudio y partners."
            context="No es una estimación. Cada empresa fue verificada individualmente."
            source="Investigación Anthana, Dic 2024"
          >
            {totalCompanies}+ empresas
          </Tooltip> ya usan Databricks
        </h2>

        <p className="text-xl text-gray-500 mb-6">
          <Tooltip
            content="Databricks reportó oficialmente este crecimiento en LATAM, con apertura de oficinas en CDMX."
            context="El momentum es real. Databricks está invirtiendo fuertemente en México."
            source="Databricks press release, 2024"
          >
            Crecimiento del 150% en LATAM
          </Tooltip>. Oficinas en CDMX. El mercado está maduro.
        </p>

        <div className="grid grid-cols-4 gap-3">
          {sectors.map((sector, i) => (
            <Tooltip
              key={i}
              content={sector.why}
              context={`${sector.count} empresas identificadas en este sector.`}
            >
              <motion.div
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <div className={`${sector.color} px-3 py-2 text-white`}>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-xs">{sector.name}</span>
                    <span className="text-xs opacity-80">{sector.count}</span>
                  </div>
                </div>
                <div className="p-2">
                  <div className="flex flex-wrap gap-1">
                    {sector.companies.slice(0, 6).map((company, j) => (
                      <span 
                        key={j} 
                        className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded"
                      >
                        {company}
                      </span>
                    ))}
                    {sector.companies.length > 6 && (
                      <span className="text-[10px] text-gray-400">+{sector.companies.length - 6}</span>
                    )}
                  </div>
                </div>
              </motion.div>
            </Tooltip>
          ))}
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-4 gap-4 mt-6">
          <Tooltip
            content="Databricks reportó crecimiento del 150% en América Latina en los últimos años."
            context="México representa una porción significativa de este crecimiento."
          >
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900">150%</p>
              <p className="text-xs text-gray-500">Crecimiento LATAM</p>
            </div>
          </Tooltip>
          <Tooltip
            content="Valuación de Databricks en su última ronda de financiamiento (2023)."
            context="Una de las startups más valiosas del mundo, validando la demanda del mercado."
          >
            <div className="text-center">
              <p className="text-3xl font-bold text-emerald-600">$43B</p>
              <p className="text-xs text-gray-500">Valuación Databricks</p>
            </div>
          </Tooltip>
          <Tooltip
            content="Databricks abrió oficinas físicas en Ciudad de México en 2024."
            context="Esto significa soporte local, partners locales y foco en el mercado mexicano."
          >
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">CDMX</p>
              <p className="text-xs text-gray-500">Oficinas locales</p>
            </div>
          </Tooltip>
          <Tooltip
            content="Identificamos adopción en 8 sectores distintos de la economía mexicana."
            context="No es una tecnología de nicho. Es infraestructura crítica para múltiples industrias."
          >
            <div className="text-center">
              <p className="text-3xl font-bold text-violet-600">8</p>
              <p className="text-xs text-gray-500">Sectores clave</p>
            </div>
          </Tooltip>
        </div>
      </motion.div>
    </SlideLayout>
  )
}

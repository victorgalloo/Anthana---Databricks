'use client'

import { motion } from 'framer-motion'
import SlideLayout from '../Layout'
import Tooltip from '../Tooltip'

const comparison = [
  { aspect: 'ADN', snowflake: 'SQL/BI first', databricks: 'IA/ML first', winner: 'databricks', why: 'Snowflake fue diseñado para reportes SQL. Databricks fue creado por los inventores de Spark para ML.' },
  { aspect: 'Datos no estructurados', snowflake: 'Limitado, caro', databricks: 'Nativo', winner: 'databricks', why: 'PDFs, imágenes, logs... Snowflake los procesa con dificultad. Databricks los maneja nativamente.' },
  { aspect: 'Propiedad de datos', snowflake: 'En cloud Snowflake', databricks: 'En TU AWS/Azure', winner: 'databricks', why: 'Con Snowflake tus datos viven en su cloud. Con Databricks, en tu propia cuenta. Sin lock-in.' },
  { aspect: 'ML/AI', snowflake: 'Add-on (Snowpark)', databricks: 'Core (MLflow)', winner: 'databricks', why: 'Snowflake agregó ML después. Databricks lo tiene desde el día 1. MLflow es el estándar de la industria.' },
]

const benefits = [
  {
    title: 'Unity Catalog',
    desc: 'El "Google de tus datos" + control de acceso. Un solo lugar para descubrir, gobernar y auditar.',
    stat: '3 clics',
    statLabel: 'para responder auditoría',
    why: 'Sin Unity Catalog, responder "quién accedió a estos datos" toma semanas de investigación manual. Con Unity Catalog, 3 clics.',
  },
  {
    title: 'Delta Lake',
    desc: 'Formato open source con Time Travel. Viaja en el tiempo y ve datos como estaban hace 6 meses.',
    stat: '100%',
    statLabel: 'propiedad de tus datos',
    why: 'Time Travel permite reconstruir el estado exacto de los datos cuando se tomó una decisión. Crítico para auditorías.',
  },
  {
    title: 'Lakehouse',
    desc: 'Data Lake + Data Warehouse en uno. Una sola copia de datos para ETL, ML y BI.',
    stat: '30-50%',
    statLabel: 'reducción de costos',
    why: 'Eliminas la duplicación de datos (Lake + Warehouse + ML). Menos copias = menos costos de storage y ETL.',
  },
]

export default function SolutionSlide() {
  return (
    <SlideLayout id="solution">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-emerald-600 font-medium text-lg mb-4">La solución</p>
        
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          <Tooltip
            content="Lakehouse = Data Lake + Data Warehouse en una sola plataforma. Lo mejor de ambos mundos sin los problemas de cada uno."
            context="Databricks inventó el concepto de Lakehouse. Hoy es el estándar de la industria."
          >
            Databricks Lakehouse
          </Tooltip>
        </h2>
        
        <p className="text-xl text-gray-500 mb-8">
          Creado por los inventores de{' '}
          <Tooltip content="Apache Spark es el motor de procesamiento de datos más usado del mundo. Los fundadores de Databricks lo crearon en UC Berkeley.">
            Apache Spark
          </Tooltip>
          {' y '}
          <Tooltip content="MLflow es el estándar open source para gestionar el ciclo de vida de modelos de ML. También creado por Databricks.">
            MLflow
          </Tooltip>
          .{' '}
          <Tooltip content="En su última ronda de financiamiento (Serie I, 2023), Databricks alcanzó una valuación de $43 mil millones de dólares.">
            Valuación $43B
          </Tooltip>.
        </p>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {benefits.map((b, i) => (
            <Tooltip key={i} content={b.why}>
              <motion.div
                className="bg-gray-900 rounded-xl p-5 text-white hover:bg-gray-800 transition-colors cursor-help"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-2">{b.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{b.desc}</p>
                <div className="pt-3 border-t border-gray-800">
                  <p className="text-2xl font-bold text-emerald-400">{b.stat}</p>
                  <p className="text-xs text-gray-500">{b.statLabel}</p>
                </div>
              </motion.div>
            </Tooltip>
          ))}
        </div>

        {/* vs Snowflake Quick Comparison */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-4 py-3 bg-gray-50 border-b border-gray-100">
            <h3 className="font-semibold text-gray-700 text-sm">
              <Tooltip
                content="Snowflake es el principal competidor. Es excelente para BI/reportes pero no fue diseñado para ML. Para fintechs donde ML es core, Databricks gana."
                context="Esta comparación es clave cuando el cliente ya tiene Snowflake o lo está considerando."
              >
                ¿Por qué Databricks y no Snowflake?
              </Tooltip>
            </h3>
          </div>
          <div className="grid grid-cols-3 divide-x divide-gray-100">
            <div className="p-2 text-center text-xs font-semibold text-gray-400 uppercase bg-gray-50">Aspecto</div>
            <div className="p-2 text-center text-xs font-semibold text-blue-600 uppercase bg-gray-50">Snowflake</div>
            <div className="p-2 text-center text-xs font-semibold text-orange-600 uppercase bg-gray-50">Databricks</div>
          </div>
          {comparison.map((row, i) => (
            <Tooltip key={i} content={row.why}>
              <div className="grid grid-cols-3 divide-x divide-gray-100 border-t border-gray-100 hover:bg-gray-50 cursor-help">
                <div className="p-2 text-xs text-gray-700">{row.aspect}</div>
                <div className="p-2 text-xs text-gray-500">{row.snowflake}</div>
                <div className={`p-2 text-xs font-medium ${row.winner === 'databricks' ? 'text-emerald-600 bg-emerald-50' : 'text-gray-700'}`}>
                  {row.databricks} {row.winner === 'databricks' && '✓'}
                </div>
              </div>
            </Tooltip>
          ))}
        </div>
      </motion.div>
    </SlideLayout>
  )
}

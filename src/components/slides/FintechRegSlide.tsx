'use client'

import { motion } from 'framer-motion'
import SlideLayout from '../Layout'
import Tooltip from '../Tooltip'

const cnbvRequirements = [
  {
    regulation: 'Anexo 11/12',
    name: 'Reporte Incidentes',
    pain: 'Determinar alcance de brecha en sistemas desconectados',
    solution: 'Linaje de Datos Automatizado',
    value: 'Respuesta forense en minutos, no semanas',
    why: 'Si hay una brecha de datos, el CISO debe responder: ¿Qué reportes usaron esa tabla corrupta? ¿Qué modelos la usaron? ¿Quién la descargó? Sin Unity Catalog, toma semanas.',
  },
  {
    regulation: 'Series R01/R13',
    name: 'Reportes Regulatorios',
    pain: 'Inconsistencia entre datos financieros y operativos',
    solution: 'Delta Live Tables (DLT)',
    value: 'Una sola fuente de verdad para CNBV',
    why: 'Producto dice "1M usuarios activos", Finanzas reporta "800K". La CNBV detecta la inconsistencia = multas inmediatas. DLT valida desde la fuente.',
  },
  {
    regulation: 'Art. 58 PLD',
    name: 'Lavado de Dinero',
    pain: 'Modelos de IA "caja negra" sin explicabilidad',
    solution: 'Feature Store + Model Lineage',
    value: 'IA avanzada SIN sacrificar auditabilidad',
    why: 'Si el modelo bloquea una cuenta por sospecha de lavado, CNBV pregunta: ¿con qué datos se entrenó? ¿qué versión del modelo? Unity Catalog responde en 3 clics.',
  },
  {
    regulation: 'Seguridad Info',
    name: 'Control de Acceso',
    pain: 'Permisos fragmentados en AWS/Azure/GCP',
    solution: 'Unified Metastore',
    value: 'Un solo plano de control para todo',
    why: 'Sin gobernanza unificada, un dev puede tener acceso bloqueado en Snowflake pero abierto en S3. Unity Catalog cierra estas brechas.',
  },
]

const tier1Fintechs = [
  {
    name: 'Nu México',
    logo: '💜',
    pain: '40,000 tablas, 800 contributors',
    insight: '¿Cuál es la tabla "oficial" para R01?',
    hook: 'Gobernanza Automatizada que no frena a ingenieros',
    why: 'Nu tiene cultura de "Analytics Engineering" donde cada analista crea tablas. Velocidad ✓ pero ¿cuál es la fuente oficial para CNBV? Proliferación = riesgo regulatorio.',
  },
  {
    name: 'Clip',
    logo: '📱',
    pain: 'PrestaClip = nuevo riesgo crediticio',
    insight: 'Feature skew entre entrenamiento e inferencia',
    hook: 'Feature Store para consistencia ML en tiempo real',
    why: 'Clip pasó de pagos a crédito (PrestaClip). Ahora necesitan que las features del modelo sean idénticas en entrenamiento vs producción. Cualquier skew = pérdidas por fraude.',
  },
  {
    name: 'Bitso',
    logo: '🔶',
    pain: 'SPEI + Blockchain en un solo reporte',
    insight: 'Conciliar SQL (fiat) con ledgers (cripto)',
    hook: 'Gobernanza unificada de activos digitales y fiat',
    why: 'Una transacción empieza en SPEI, se convierte a stablecoin, liquida en Brasil. El auditor quiere ver TODO el camino. Dos sistemas = auditoría imposible.',
  },
  {
    name: 'Mercado Pago',
    logo: '🤝',
    pain: '10,000 productores de datos (Data Mesh)',
    insight: 'Riesgo de "Datos Oscuros" no gobernados',
    hook: 'Gobernanza Federada para Data Mesh seguro',
    why: 'MELI tiene Data Mesh: miles de equipos crean datos autónomamente. Sin control central = silos de PII que escapan a seguridad. CNBV multa esto.',
  },
  {
    name: 'Covalto',
    logo: '🏦',
    pain: 'Adquisición de banco + IPO en Nasdaq',
    insight: 'Dos versiones de la verdad = SOX violation',
    hook: 'Lakehouse Audit-Ready para CNBV + SEC',
    why: 'Compraron Banco Finterra. Ahora deben unir core banking legacy con tech moderna. Y cumplir SOX para Nasdaq. Sin consolidación de datos = nightmare.',
  },
]

export default function FintechRegSlide() {
  return (
    <SlideLayout id="fintech-reg">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-emerald-600 font-medium text-lg mb-4">Por qué Databricks para Fintechs</p>
        
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          <Tooltip
            content="La Ley Fintech (2018) cambió las reglas. Ya no es solo velocidad, es auditabilidad. La CNBV puede revocar licencias por fallas de gobernanza."
            context="Los Anexos 11, 12 y el Art. 58 dictan requisitos técnicos específicos que la arquitectura de datos debe cumplir."
            source="Ley para Regular las ITF, 2018"
          >
            El crisol regulatorio CNBV
          </Tooltip>
        </h2>

        <p className="text-lg text-gray-500 mb-6">
          <Tooltip content="La CNBV no solo multa por mal comportamiento financiero. Multa por arquitecturas de datos que no pueden demostrar trazabilidad.">
            La gobernanza de datos ya no es "nice to have". Es la licencia para operar.
          </Tooltip>
        </p>

        {/* CNBV Requirements Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-6">
          <div className="px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white">
            <h3 className="font-bold text-sm">
              <Tooltip content="Cada requisito de CNBV tiene una solución específica en Databricks. No es marketing, es arquitectura que cumple regulación.">
                Mapeo: Requisitos CNBV → Soluciones Databricks
              </Tooltip>
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="px-3 py-2 text-xs text-gray-500">Regulación</th>
                  <th className="px-3 py-2 text-xs text-gray-500">Desafío Técnico</th>
                  <th className="px-3 py-2 text-xs text-gray-500">Solución</th>
                  <th className="px-3 py-2 text-xs text-gray-500">Valor</th>
                </tr>
              </thead>
              <tbody>
                {cnbvRequirements.map((req, i) => (
                  <Tooltip key={i} content={req.why}>
                    <tr className="border-t border-gray-100 hover:bg-red-50 cursor-help transition-colors">
                      <td className="px-3 py-2">
                        <span className="font-semibold text-red-600">{req.regulation}</span>
                        <p className="text-xs text-gray-400">{req.name}</p>
                      </td>
                      <td className="px-3 py-2 text-gray-600 text-xs">{req.pain}</td>
                      <td className="px-3 py-2 font-medium text-emerald-600 text-xs">{req.solution}</td>
                      <td className="px-3 py-2 text-xs text-gray-700">{req.value}</td>
                    </tr>
                  </Tooltip>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Tier 1 Fintechs */}
        <div className="bg-gray-900 rounded-xl p-4 text-white">
          <h3 className="font-semibold text-sm mb-3 text-gray-400 uppercase">
            <Tooltip content="Estas 5 fintechs representan >$2B en valuación combinada. Todas tienen el mismo problema: velocidad de crecimiento vs gobernanza regulatoria.">
              Tier 1 Fintechs: Dolores Específicos
            </Tooltip>
          </h3>
          <div className="grid grid-cols-5 gap-2">
            {tier1Fintechs.map((f, i) => (
              <Tooltip key={i} content={f.why}>
                <motion.div
                  className="bg-gray-800 rounded-lg p-3 hover:bg-gray-700 cursor-help transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">{f.logo}</span>
                    <span className="font-semibold text-xs">{f.name}</span>
                  </div>
                  <p className="text-[10px] text-red-400 mb-1">{f.pain}</p>
                  <p className="text-[10px] text-gray-400 italic mb-2">"{f.insight}"</p>
                  <p className="text-[10px] text-emerald-400 font-medium">{f.hook}</p>
                </motion.div>
              </Tooltip>
            ))}
          </div>
        </div>

        {/* Key Message */}
        <Tooltip content="Este es el argumento de cierre para cualquier Fintech: la regulación de IA viene. Los que tengan trazabilidad hoy, sobreviven. Los que no, no.">
          <motion.div
            className="mt-4 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl p-4 text-white text-center cursor-help"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium">
              🚀 <strong>Próxima frontera:</strong> La CNBV regulará IA (siguiendo EU AI Act). 
              Las Fintechs con <span className="text-yellow-300">trazabilidad de modelos hoy</span> serán las únicas preparadas.
            </p>
          </motion.div>
        </Tooltip>
      </motion.div>
    </SlideLayout>
  )
}


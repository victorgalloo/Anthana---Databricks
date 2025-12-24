'use client'

import { motion } from 'framer-motion'
import SlideLayout from '../Layout'
import Tooltip from '../Tooltip'

const tiers = [
  {
    tier: 'Tier 1',
    name: 'Fintech & Banca Digital',
    icon: '🎯',
    color: 'from-emerald-500 to-emerald-600',
    borderColor: 'border-emerald-500',
    focus: 'Alto volumen transaccional, regulación CNBV, Real-Time Analytics',
    painPoint: 'La falta de gobernanza está frenando tu IA y aumentando riesgo regulatorio.',
    hook: 'Audit de Gobernanza (Unity Catalog Readiness)',
    hookDetail: 'Sin costo',
    why: 'Tier más urgente. La regulación CNBV/IDB los presiona. Tienen presupuesto y dolor inmediato.',
    prospects: [
      { name: 'Nu México', pain: 'Gobernanza para modelos de riesgo a escala masiva', why: 'El neo-banco de más rápido crecimiento. Necesitan demostrar compliance antes de escalar más.' },
      { name: 'Clip', pain: 'Fraude en tiempo real + analytics de comercios', why: 'PrestaClip está creciendo. Cada fraude les cuesta dinero real.' },
      { name: 'Bitso', pain: 'Trazabilidad (Lineage) para cumplimiento internacional', why: 'Regulación cripto es brutal. Necesitan probar de dónde viene cada dato.' },
      { name: 'Mercado Pago MX', pain: 'Personalización masiva para créditos consumo', why: 'Millones de usuarios. La personalización a escala es un reto técnico enorme.' },
      { name: 'Covalto', pain: 'Unificar datos legacy bancarios con tech moderno', why: 'Compraron un banco. Ahora tienen que integrar sistemas de 30 años con tech moderna.' },
    ],
  },
  {
    tier: 'Tier 2',
    name: 'Retail & CPG Enterprise',
    icon: '🛒',
    color: 'from-blue-500 to-blue-600',
    borderColor: 'border-blue-500',
    focus: 'Unificación canales Online/Offline, Retail Media',
    painPoint: 'Tus silos de datos (Tienda vs. E-comm) te cuestan ventas cruzadas.',
    hook: 'Workshop de Unificación para Retail Media',
    hookDetail: 'Personalización',
    why: 'Presupuestos grandes, ciclos largos. La referencia de Bimbo abre puertas aquí.',
    prospects: [
      { name: 'Coppel', pain: 'Datos banco + tiendas desconectados', why: 'BanCoppel + tiendas = la vista 360 más valiosa de México, pero no la tienen unificada.' },
      { name: 'OXXO (FEMSA)', pain: 'Spin + OXXO Premia: vista 360 del cliente', why: '21,000 tiendas, programa de lealtad, app. Datos increíbles pero fragmentados.' },
      { name: 'Soriana', pain: 'Retail Media para monetizar datos', why: 'Retail Media es la tendencia. Soriana quiere monetizar sus datos con proveedores.' },
      { name: 'Grupo Modelo', pain: 'Forecasting para distribución (Bees)', why: 'Bees es su plataforma B2B. Predecir qué tienda necesita qué cerveza es oro.' },
      { name: 'Palacio de Hierro', pain: 'Hiper-personalización cliente VIP', why: 'Un cliente VIP mal tratado por un algoritmo genérico es un cliente perdido para siempre.' },
    ],
  },
  {
    tier: 'Tier 3',
    name: 'Manufactura & Distribución',
    icon: '🏭',
    color: 'from-amber-500 to-orange-500',
    borderColor: 'border-amber-500',
    focus: 'Optimización costos, Cadena de Suministro',
    painPoint: 'Pierdes dinero por falta de visibilidad en tiempo real de tu inventario.',
    hook: 'PoC: Predicción de Demanda con IA',
    hookDetail: '4 semanas',
    why: 'Base de Cloud Driver. 3,000 contactos en manufactura. Fácil de activar.',
    prospects: [
      { name: 'Cemex', pain: 'Optimización logística de cemento en tiempo real', why: 'Pioneros digitales con Cemex Go. Siempre buscando el siguiente nivel de optimización.' },
      { name: 'Mabe', pain: 'Predecir demanda componentes, evitar paros', why: 'Cadena global de componentes. Un paro de línea les cuesta millones.' },
      { name: 'Grupo Lala', pain: 'Reducir merma productos perecederos', why: 'Productos perecederos = cada día de error es dinero tirado a la basura.' },
      { name: 'Estafeta', pain: 'Rutas dinámicas + mantenimiento predictivo', why: 'El santo grial de logística: saber exactamente cuándo mantener cada camión.' },
      { name: 'Deacero', pain: 'Visibilidad inventarios, no sobre-producir', why: 'Industria pesada con márgenes ajustados. Sobre-producir es tan malo como quedarse corto.' },
    ],
  },
]

export default function ICPSlide() {
  return (
    <SlideLayout id="icp">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-emerald-600 font-medium text-lg mb-4">Go-to-Market Q1 2025</p>
        
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          <Tooltip
            content="15 empresas específicas seleccionadas por: tamaño, urgencia del dolor, probabilidad de cierre y conexiones existentes."
            context="No es una lista aleatoria. Cada empresa fue evaluada contra criterios de ICP (Ideal Customer Profile)."
          >
            15 prospectos prioritarios
          </Tooltip>
        </h2>

        <div className="grid lg:grid-cols-3 gap-4">
          {tiers.map((tier, i) => (
            <Tooltip key={i} content={tier.why}>
              <motion.div
                className={`bg-white rounded-xl shadow-sm border-t-4 ${tier.borderColor} overflow-hidden hover:shadow-md transition-shadow`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                {/* Header */}
                <div className="p-4 border-b border-gray-100">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{tier.icon}</span>
                    <div className={`px-2 py-0.5 bg-gradient-to-r ${tier.color} text-white rounded text-xs font-bold`}>
                      {tier.tier}
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm">{tier.name}</h3>
                  <p className="text-xs text-gray-400 mt-1">{tier.focus}</p>
                </div>

                {/* Prospects */}
                <div className="p-3 space-y-2">
                  {tier.prospects.map((p, j) => (
                    <Tooltip key={j} content={p.why}>
                      <motion.div
                        className="flex items-start gap-2 hover:bg-gray-50 rounded p-1 transition-colors cursor-help"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + i * 0.1 + j * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-gradient-to-r ${tier.color}`} />
                        <div>
                          <p className="text-sm font-semibold text-gray-900">{p.name}</p>
                          <p className="text-xs text-gray-500">{p.pain}</p>
                        </div>
                      </motion.div>
                    </Tooltip>
                  ))}
                </div>

                {/* Hook */}
                <div className="p-3 bg-gray-50 border-t border-gray-100">
                  <p className="text-xs text-gray-400 uppercase mb-1">Oferta de Gancho</p>
                  <p className="text-sm font-semibold text-gray-900">{tier.hook}</p>
                  <span className="inline-block mt-1 text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">
                    {tier.hookDetail}
                  </span>
                </div>
              </motion.div>
            </Tooltip>
          ))}
        </div>

        {/* Pain Points Summary */}
        <motion.div
          className="mt-4 bg-gray-900 rounded-xl p-4 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-3 gap-4">
            {tiers.map((tier, i) => (
              <Tooltip key={i} content={`Este mensaje resuena porque ataca el dolor principal del segmento: ${tier.painPoint}`}>
                <div className="text-center cursor-help">
                  <p className="text-xs text-gray-400 uppercase mb-1">Pain Point {tier.tier}</p>
                  <p className="text-xs text-gray-300 italic">"{tier.painPoint}"</p>
                </div>
              </Tooltip>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </SlideLayout>
  )
}

'use client'

import { useState, ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface TooltipProps {
  children: ReactNode
  content: string
  context?: string
  source?: string
}

export default function Tooltip({ children, content, context, source }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <span 
      className="relative inline-block cursor-help"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <span className="border-b border-dashed border-gray-400 hover:border-emerald-500 transition-colors">
        {children}
      </span>
      
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 5, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 pointer-events-none"
          >
            <div className="bg-gray-900 text-white rounded-lg shadow-xl p-3 text-left">
              {/* Main explanation */}
              <p className="text-sm leading-relaxed">{content}</p>
              
              {/* Context/Why it matters */}
              {context && (
                <div className="mt-2 pt-2 border-t border-gray-700">
                  <p className="text-xs text-emerald-400 font-medium mb-1">¿Por qué importa?</p>
                  <p className="text-xs text-gray-400">{context}</p>
                </div>
              )}
              
              {/* Source */}
              {source && (
                <p className="text-[10px] text-gray-500 mt-2 italic">Fuente: {source}</p>
              )}
              
              {/* Arrow */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                <div className="border-8 border-transparent border-t-gray-900" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  )
}

// Variante para cards completas
interface TooltipCardProps {
  children: ReactNode
  title: string
  content: string
  context?: string
}

export function TooltipCard({ children, title, content, context }: TooltipCardProps) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div 
      className="relative cursor-help"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <div className="hover:ring-2 hover:ring-emerald-500/50 rounded-xl transition-all">
        {children}
      </div>
      
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 top-full left-0 right-0 mt-2"
          >
            <div className="bg-gray-900 text-white rounded-lg shadow-xl p-4">
              <p className="text-emerald-400 font-semibold text-sm mb-1">{title}</p>
              <p className="text-sm text-gray-300 leading-relaxed">{content}</p>
              {context && (
                <p className="text-xs text-gray-500 mt-2 italic">{context}</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}


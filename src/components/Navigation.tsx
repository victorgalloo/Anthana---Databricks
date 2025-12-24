'use client'

import { motion } from 'framer-motion'

interface NavigationProps {
  totalSlides: number
  currentSlide: number
  onNavigate: (index: number) => void
}

export default function Navigation({ totalSlides, currentSlide, onNavigate }: NavigationProps) {
  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          onClick={() => onNavigate(index)}
          className="group relative flex items-center justify-end"
          aria-label={`Ir a slide ${index + 1}`}
        >
          {/* Tooltip */}
          <span className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs text-gray-500 whitespace-nowrap pr-2">
            {index + 1}
          </span>
          
          {/* Dot */}
          <motion.div
            className={`rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? 'w-2 h-5 bg-anthana' 
                : 'w-2 h-2 bg-gray-300 group-hover:bg-gray-400'
            }`}
            layout
          />
        </button>
      ))}
    </nav>
  )
}

export function SlideIndicator({ current, total }: { current: number; total: number }) {
  return (
    <div className="slide-indicator fixed bottom-8 left-8 z-50 flex items-center gap-4">
      <span className="text-sm font-medium text-anthana tabular-nums">
        {String(current + 1).padStart(2, '0')}
      </span>
      <div className="w-16 h-0.5 bg-gray-200 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-anthana rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${((current + 1) / total) * 100}%` }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      </div>
      <span className="text-sm text-muted tabular-nums">
        {String(total).padStart(2, '0')}
      </span>
    </div>
  )
}

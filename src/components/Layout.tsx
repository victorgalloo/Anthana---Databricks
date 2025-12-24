'use client'

import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
  id: string
}

export default function SlideLayout({ children, id }: LayoutProps) {
  return (
    <section id={id} className="slide bg-gradient-to-br from-slate-50 to-white flex flex-col min-h-screen">
      {/* Header */}
      <header className="flex items-center justify-between px-8 md:px-16 py-5 flex-shrink-0">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-2.5 py-1 bg-gray-900 rounded">
            <span className="text-xs font-bold tracking-wide text-white">ANTHANA</span>
          </div>
          <span className="text-gray-300 text-sm">×</span>
          <div className="flex items-center gap-2 px-2.5 py-1 bg-emerald-600 rounded">
            <span className="text-xs font-bold tracking-wide text-white">CLOUD DRIVER</span>
          </div>
          <span className="text-gray-300 text-sm">×</span>
          <div className="flex items-center gap-2 px-2.5 py-1 bg-orange-500 rounded">
            <span className="text-xs font-bold tracking-wide text-white">DATABRICKS</span>
          </div>
        </div>
        <span className="text-sm text-gray-400">Diciembre 2024</span>
      </header>

      {/* Content */}
      <div className="flex-1 flex items-center px-8 md:px-16 py-4">
        <div className="w-full max-w-6xl">
          {children}
        </div>
      </div>

      {/* Footer */}
      <footer className="flex items-center justify-between px-8 md:px-16 py-4 flex-shrink-0 border-t border-gray-100">
        <div className="flex items-center gap-6">
          <a href="https://anthana.agency" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
            anthana.agency
          </a>
          <span className="text-gray-200">|</span>
          <a href="mailto:victor@anthana.agency" className="text-xs text-gray-400 hover:text-emerald-600 transition-colors">
            victor@anthana.agency
          </a>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <span>Alianza Estratégica</span>
          <span className="text-emerald-500">●</span>
          <span>Databricks México</span>
        </div>
      </footer>
    </section>
  )
}

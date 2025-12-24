'use client'

import { useEffect, useState } from 'react'
import CoverSlide from '@/components/slides/CoverSlide'
import ProblemSlide from '@/components/slides/ProblemSlide'
import SolutionSlide from '@/components/slides/SolutionSlide'
import FintechRegSlide from '@/components/slides/FintechRegSlide'
import WhyUsSlide from '@/components/slides/WhyUsSlide'
import RoadmapSlide from '@/components/slides/RoadmapSlide'
import MarketSlide from '@/components/slides/MarketSlide'
import EcosystemSlide from '@/components/slides/EcosystemSlide'
import CasesSlide from '@/components/slides/CasesSlide'
import CompetitiveSlide from '@/components/slides/CompetitiveSlide'
import PartnersSlide from '@/components/slides/PartnersSlide'
import ICPSlide from '@/components/slides/ICPSlide'
import PipelineSlide from '@/components/slides/PipelineSlide'
import StakeholdersSlide from '@/components/slides/StakeholdersSlide'
import DossierSlide from '@/components/slides/DossierSlide'
import TimelineSlide from '@/components/slides/TimelineSlide'
import CTASlide from '@/components/slides/CTASlide'

const slides = [
  'cover',          // 1. Portada - Alianza
  'problem',        // 2. El problema del mercado
  'solution',       // 3. Databricks Lakehouse
  'fintech-reg',    // 4. Por qué Databricks para Fintechs
  'ecosystem',      // 5. 47+ empresas ya usan Databricks
  'cases',          // 6. Casos de éxito México
  'market',         // 6. Oportunidad $80-120M
  'why-us',         // 7. Por qué Anthana
  'competitive',    // 8. vs Competencia
  'partners',       // 9. Ecosistema de partners
  'icp',            // 10. Perfil Cliente Ideal (ICP)
  'pipeline',       // 11. Pipeline Q1
  'stakeholders',   // 12. Mapa de prospectos
  'dossier',        // 13. Deep dive Konfío
  'roadmap',        // 14. Plan implementación
  'timeline',       // 15. Timeline alianza
  'cta'             // 16. Call to action
]

export default function Presentation() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const newIndex = Math.round(scrollPosition / windowHeight)
      setCurrent(Math.min(newIndex, slides.length - 1))
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main>
      <CoverSlide />
      <ProblemSlide />
      <SolutionSlide />
      <FintechRegSlide />
      <EcosystemSlide />
      <CasesSlide />
      <MarketSlide />
      <WhyUsSlide />
      <CompetitiveSlide />
      <PartnersSlide />
      <ICPSlide />
      <PipelineSlide />
      <StakeholdersSlide />
      <DossierSlide />
      <RoadmapSlide />
      <TimelineSlide />
      <CTASlide />

      {/* Navigation */}
      <nav className="nav-dots fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-1.5">
        {slides.map((id, i) => (
          <button
            key={id}
            onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
            className={`w-2 h-2 rounded-full border transition-all duration-300 ${
              i === current 
                ? 'bg-emerald-600 border-emerald-600 scale-150' 
                : 'border-gray-300 hover:border-emerald-400 hover:bg-emerald-100'
            }`}
            aria-label={`Ir a slide ${i + 1}`}
          />
        ))}
      </nav>

      {/* Slide counter */}
      <div className="fixed bottom-6 right-6 text-sm text-gray-400 font-medium z-50">
        {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
      </div>
    </main>
  )
}

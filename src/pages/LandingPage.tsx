import { HeroSection } from '../components/sections/HeroSection'
import { OfferSection } from '../components/sections/OfferSection'
import { DiagnosticsSection } from '../components/sections/DiagnosticsSection'
import { ProgramSection } from '../components/sections/ProgramSection'
import { StrategySessionSection } from '../components/sections/StrategySessionSection'
import { ClosingSection } from '../components/sections/ClosingSection'

export function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-cyan-500/30 noise">
      <HeroSection />
      <OfferSection />
      <DiagnosticsSection />
      <ProgramSection />
      <StrategySessionSection />
      <ClosingSection />
    </div>
  )
}

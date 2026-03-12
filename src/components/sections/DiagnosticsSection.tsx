import { DiagnosticQuotes } from '../ui/DiagnosticQuotes'

export function DiagnosticsSection() {
  return (
    <section id="diagnostics" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-[30%] right-[5%] w-[500px] h-[500px] bg-cyan-500/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: clean text */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-sm text-cyan-400 font-medium mb-6 w-fit">
              Шаг 01 · 1 неделя
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-[-0.03em] mb-5">
              Интервью →<br />адаптированная программа
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Основатели курса лично разговаривают с вашей командой
              и перестраивают программу под ваши реальные задачи.
            </p>
          </div>

          {/* Right: quote cards with avatars */}
          <div className="relative">
            <div className="absolute -inset-4 bg-cyan-500/[0.03] rounded-3xl blur-xl pointer-events-none" />
            <div className="relative">
              <DiagnosticQuotes />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

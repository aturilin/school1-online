import {
  MailIcon, BrainIcon, DatabaseIcon, SendIcon,
  CheckIcon, ZapIcon, ArrowDownIcon,
} from 'lucide-react'

const steps = [
  { icon: MailIcon, title: 'Заявка', sub: 'Входящее письмо', color: 'text-gray-400', bg: 'bg-white/[0.06]', border: 'border-white/[0.08]' },
  { icon: BrainIcon, title: 'AI-агент', sub: 'Читает и классифицирует', color: 'text-amber-400', bg: 'bg-amber-500/15', border: 'border-amber-500/25', glow: true },
  { icon: DatabaseIcon, title: 'Проверка', sub: 'Сверка с базой', color: 'text-gray-400', bg: 'bg-white/[0.06]', border: 'border-white/[0.08]' },
  { icon: SendIcon, title: 'Действие', sub: 'Ответ + маршрутизация', color: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/20' },
]

export function AutomationFlow() {
  return (
    <div className="w-full max-w-sm mx-auto rounded-2xl overflow-hidden border border-white/10 bg-[#0c0c0e] shadow-2xl flex flex-col h-[400px]">
      {/* Header */}
      <div className="px-4 py-3 bg-white/[0.03] border-b border-white/[0.06] flex items-center gap-2.5">
        <div className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
          <ZapIcon className="w-3.5 h-3.5 text-amber-400" />
        </div>
        <span className="text-white/80 font-medium text-sm">AI-пайплайн</span>
        <div className="ml-auto flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[10px] text-green-400/80 font-mono">active</span>
        </div>
      </div>

      {/* Pipeline */}
      <div className="flex-1 flex flex-col justify-center px-4 py-4 gap-0">
        {steps.map((step, i) => {
          const Icon = step.icon
          const isLast = i === steps.length - 1
          return (
            <div key={step.title}>
              {/* Step card */}
              <div className={`rounded-xl ${step.bg} border ${step.border} px-4 py-3 flex items-center gap-3 relative`}>
                {step.glow && (
                  <div className="absolute -inset-1 bg-amber-500/5 rounded-xl blur-md -z-10" />
                )}
                <div className={`w-9 h-9 rounded-lg border ${step.border} ${step.bg} flex items-center justify-center shrink-0`}>
                  <Icon className={`w-4.5 h-4.5 ${step.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className={`text-sm font-semibold ${step.color === 'text-gray-400' ? 'text-white' : step.color}`}>{step.title}</div>
                  <div className="text-xs text-gray-500">{step.sub}</div>
                </div>
                {isLast && (
                  <div className="w-5 h-5 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                    <CheckIcon className="w-3 h-3 text-green-400" />
                  </div>
                )}
              </div>

              {/* Arrow between steps */}
              {!isLast && (
                <div className="flex items-center justify-center h-5">
                  <div className="flex flex-col items-center">
                    <div className="w-px h-2.5 bg-amber-500/30" />
                    <ArrowDownIcon className="w-3 h-3 text-amber-400/40 -mt-1" />
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Comparison stat */}
      <div className="mx-4 mb-4 rounded-xl bg-white/[0.03] border border-white/[0.06] px-4 py-2.5 flex items-center justify-between">
        <div>
          <div className="text-[10px] text-gray-600 uppercase tracking-wider mb-0.5">Было</div>
          <div className="text-xs text-gray-400">2-4 часа · 3 человека</div>
        </div>
        <div className="text-amber-400/60 text-lg font-light">→</div>
        <div className="text-right">
          <div className="text-[10px] text-amber-400/60 uppercase tracking-wider mb-0.5">Стало</div>
          <div className="text-xs text-amber-300 font-semibold">12 сек · 0 людей</div>
        </div>
      </div>
    </div>
  )
}

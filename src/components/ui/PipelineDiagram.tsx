import { SearchIcon, PenToolIcon, PaletteIcon, LayoutIcon, SparklesIcon } from 'lucide-react'

const agents = [
  { icon: SearchIcon, label: 'QA-агент', sub: 'проверяет', color: 'text-purple-400', bg: 'bg-purple-500/15', border: 'border-purple-500/25' },
  { icon: PenToolIcon, label: 'Корректор', sub: 'правит текст', color: 'text-blue-400', bg: 'bg-blue-500/15', border: 'border-blue-500/25' },
  { icon: PaletteIcon, label: 'Дизайнер', sub: 'визуалы', color: 'text-cyan-400', bg: 'bg-cyan-500/15', border: 'border-cyan-500/25' },
  { icon: LayoutIcon, label: 'Оформитель', sub: 'верстает', color: 'text-emerald-400', bg: 'bg-emerald-500/15', border: 'border-emerald-500/25' },
]

export function PipelineDiagram() {
  return (
    <div className="w-full max-w-sm mx-auto rounded-2xl overflow-hidden border border-white/10 bg-[#0c0c0e] shadow-2xl flex flex-col h-[400px]">
      {/* Header */}
      <div className="px-4 py-3 bg-white/[0.03] border-b border-white/[0.06] flex items-center gap-2.5">
        <div className="w-7 h-7 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
          <SparklesIcon className="w-3.5 h-3.5 text-purple-400" />
        </div>
        <span className="text-white/80 font-medium text-sm">Команда AI-агентов</span>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col px-4 py-4 gap-3 overflow-y-auto">
        {/* Input */}
        <div className="rounded-xl bg-white/[0.04] border border-white/[0.08] px-4 py-3">
          <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1.5">Вы задаёте</div>
          <div className="text-sm text-white">«Дроби. Сложение и вычитание»</div>
        </div>

        {/* Agent hub */}
        <div className="relative flex-1 flex items-center justify-center py-2">
          {/* Central node */}
          <div className="absolute w-10 h-10 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center z-10">
            <SparklesIcon className="w-4 h-4 text-purple-400" />
          </div>

          {/* Connection lines - SVG */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 120" preserveAspectRatio="xMidYMid meet">
            {/* Lines from center to corners */}
            <line x1="160" y1="60" x2="50" y2="20" stroke="rgba(168,85,247,0.15)" strokeWidth="1" />
            <line x1="160" y1="60" x2="270" y2="20" stroke="rgba(59,130,246,0.15)" strokeWidth="1" />
            <line x1="160" y1="60" x2="50" y2="100" stroke="rgba(34,211,238,0.15)" strokeWidth="1" />
            <line x1="160" y1="60" x2="270" y2="100" stroke="rgba(16,185,129,0.15)" strokeWidth="1" />
            {/* Cross connections */}
            <line x1="50" y1="20" x2="270" y2="20" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="50" y1="100" x2="270" y2="100" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="50" y1="20" x2="50" y2="100" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="270" y1="20" x2="270" y2="100" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="4 4" />
          </svg>

          {/* Agent cards in grid */}
          <div className="relative w-full grid grid-cols-2 gap-2.5 z-10">
            {agents.map((agent) => {
              const Icon = agent.icon
              return (
                <div key={agent.label} className={`flex items-center gap-2.5 rounded-lg ${agent.bg} border ${agent.border} px-3 py-2`}>
                  <Icon className={`w-3.5 h-3.5 ${agent.color} shrink-0`} />
                  <div className="min-w-0">
                    <div className="text-xs font-medium text-white leading-tight">{agent.label}</div>
                    <div className="text-[10px] text-gray-500 leading-tight">{agent.sub}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Output */}
        <div className="rounded-lg bg-purple-500/[0.06] border border-purple-500/15 px-3 py-2 text-center">
          <span className="text-xs text-purple-300">Тема → готовый комплект материалов</span>
        </div>
      </div>
    </div>
  )
}

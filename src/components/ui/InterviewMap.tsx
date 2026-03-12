import { Search, Users, FileText, BarChart3, MessageSquare, Clock } from 'lucide-react'

const painPoints = [
  { label: 'Ручная обработка заявок', x: 15, y: 18, icon: FileText },
  { label: 'Повторяющиеся отчёты', x: 72, y: 12, icon: BarChart3 },
  { label: 'Контент-рутина', x: 8, y: 65, icon: MessageSquare },
  { label: 'Долгий онбординг', x: 68, y: 72, icon: Clock },
]

export function InterviewMap() {
  return (
    <div className="rounded-2xl bg-[#0c0c0e] border border-cyan-500/15 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.06]">
        <div className="flex items-center gap-2.5">
          <Search className="w-4 h-4 text-cyan-400" />
          <span className="text-sm font-medium text-white">Карта болей команды</span>
        </div>
        <div className="px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[11px] text-cyan-400 font-medium">
          5 интервью
        </div>
      </div>

      {/* Map area */}
      <div className="relative h-[280px] md:h-[320px] p-4">
        {/* Center node */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-14 h-14 rounded-full bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.15)]">
            <Users className="w-6 h-6 text-cyan-400" />
          </div>
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] text-cyan-400/60 font-medium">
            ваша команда
          </div>
        </div>

        {/* Connection lines (SVG) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(34,211,238,0.3)" />
              <stop offset="100%" stopColor="rgba(34,211,238,0.05)" />
            </linearGradient>
          </defs>
          {painPoints.map((point, i) => (
            <line
              key={i}
              x1="50%" y1="50%"
              x2={`${point.x + 8}%`} y2={`${point.y + 5}%`}
              stroke="url(#lineGrad)"
              strokeWidth="1"
              strokeDasharray="4 4"
              opacity="0.6"
            />
          ))}
        </svg>

        {/* Pain point nodes */}
        {painPoints.map((point, i) => {
          const Icon = point.icon
          return (
            <div
              key={i}
              className="absolute z-10"
              style={{ left: `${point.x}%`, top: `${point.y}%` }}
            >
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.07] hover:border-cyan-500/20 transition-all duration-300 group">
                <Icon className="w-3.5 h-3.5 text-gray-500 group-hover:text-cyan-400 transition-colors shrink-0" />
                <span className="text-[11px] text-gray-400 group-hover:text-gray-300 whitespace-nowrap transition-colors">
                  {point.label}
                </span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Footer — AI maturity gauge */}
      <div className="px-5 py-3.5 border-t border-white/[0.06]">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] text-gray-500 uppercase tracking-wider font-medium">AI-зрелость команды</span>
          <span className="text-sm font-bold text-cyan-400">2.4 <span className="text-gray-600 font-normal">/ 5.0</span></span>
        </div>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((seg) => (
            <div
              key={seg}
              className={`h-1.5 flex-1 rounded-full ${
                seg <= 2
                  ? 'bg-cyan-400'
                  : seg <= 2.4
                    ? 'bg-cyan-400/40'
                    : 'bg-white/[0.06]'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

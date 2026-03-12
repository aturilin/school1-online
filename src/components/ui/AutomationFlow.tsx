import {
  FileTextIcon, MessageSquareIcon, ScaleIcon, ReceiptIcon,
  CheckIcon, ZapIcon, BrainIcon,
} from 'lucide-react'

const operations = [
  { icon: ReceiptIcon, title: 'Выставить счёт', sub: 'По данным из заявки', color: 'text-amber-400', bg: 'bg-amber-500/15', border: 'border-amber-500/25' },
  { icon: FileTextIcon, title: 'Подготовить акт', sub: 'Заполнить шаблон', color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20' },
  { icon: MessageSquareIcon, title: 'Ответить клиенту', sub: 'По контексту переписки', color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20' },
  { icon: ScaleIcon, title: 'Юр. шаблон', sub: 'Договор или допсоглашение', color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20' },
]

export function AutomationFlow() {
  return (
    <div className="w-full max-w-sm mx-auto rounded-2xl overflow-hidden border border-white/10 bg-[#0c0c0e] shadow-2xl flex flex-col h-[400px]">
      {/* Header */}
      <div className="px-4 py-3 bg-white/[0.03] border-b border-white/[0.06] flex items-center gap-2.5">
        <div className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
          <ZapIcon className="w-3.5 h-3.5 text-amber-400" />
        </div>
        <span className="text-white/80 font-medium text-sm">AI-автоматизация</span>
        <div className="ml-auto flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[10px] text-green-400/80 font-mono">active</span>
        </div>
      </div>

      {/* AI Agent hub */}
      <div className="px-4 pt-4 pb-2">
        <div className="rounded-xl bg-amber-500/[0.08] border border-amber-500/20 px-4 py-3 flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-amber-500/15 border border-amber-500/25 flex items-center justify-center shrink-0">
            <BrainIcon className="w-4.5 h-4.5 text-amber-400" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold text-amber-400">AI-агент</div>
            <div className="text-xs text-gray-500">Читает задачу → выбирает действие</div>
          </div>
        </div>
      </div>

      {/* Connector */}
      <div className="flex justify-center py-1">
        <div className="flex flex-col items-center">
          <div className="w-px h-2 bg-amber-500/30" />
          <div className="w-3 h-3 rounded-full border border-amber-500/30 flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-amber-400/60" />
          </div>
          <div className="w-px h-2 bg-amber-500/30" />
        </div>
      </div>

      {/* Operations grid */}
      <div className="flex-1 px-4 pb-4 flex flex-col gap-2">
        <div className="text-[10px] text-gray-600 uppercase tracking-wider mb-0.5">Операции</div>
        {operations.map((op) => {
          const Icon = op.icon
          return (
            <div key={op.title} className={`flex items-center gap-3 rounded-lg ${op.bg} border ${op.border} px-3 py-2.5`}>
              <div className={`w-8 h-8 rounded-lg border ${op.border} ${op.bg} flex items-center justify-center shrink-0`}>
                <Icon className={`w-4 h-4 ${op.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-white">{op.title}</div>
                <div className="text-[10px] text-gray-500">{op.sub}</div>
              </div>
              <CheckIcon className="w-3.5 h-3.5 text-amber-400/40 shrink-0" />
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

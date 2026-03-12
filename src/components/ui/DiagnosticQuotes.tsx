import { MonitorIcon } from 'lucide-react'

export function DiagnosticQuotes() {
  return (
    <div className="w-full space-y-3">
      {/* Zoom call screenshot */}
      <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
        <img
          src="/school1-online/images/audit-interview.jpg"
          alt="Аудит-интервью — 1 на 1 Zoom-звонок с командой"
          className="w-full h-auto"
        />
      </div>

      {/* Miro board strip */}
      <div className="rounded-xl bg-white/[0.02] border border-white/[0.06] p-3">
        <div className="flex items-center gap-1.5 mb-2.5">
          <MonitorIcon className="w-3.5 h-3.5 text-yellow-400/60" />
          <span className="text-[11px] text-gray-500 uppercase tracking-wider">Фиксируем на доске</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {[
            { text: 'Полдня на презентации', color: 'bg-yellow-500/[0.12] border-yellow-500/20 text-yellow-300/80' },
            { text: 'Поиск по 5 источникам', color: 'bg-orange-500/[0.12] border-orange-500/20 text-orange-300/80' },
            { text: 'Одни и те же ответы', color: 'bg-pink-500/[0.10] border-pink-500/20 text-pink-300/80' },
            { text: 'Отчёты вручную', color: 'bg-amber-500/[0.10] border-amber-500/20 text-amber-300/80' },
          ].map((tag) => (
            <div key={tag.text} className={`px-2.5 py-1 rounded-md border text-[11px] ${tag.color}`}>
              {tag.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

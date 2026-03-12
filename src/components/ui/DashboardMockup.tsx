import { BarChart3Icon, SendIcon } from 'lucide-react'

export function DashboardMockup() {
  return (
    <div className="w-full max-w-sm mx-auto rounded-2xl overflow-hidden border border-white/10 bg-[#0c0c0e] shadow-2xl flex flex-col h-[400px]">
      {/* Header */}
      <div className="px-4 py-3 bg-white/[0.03] border-b border-white/[0.06] flex items-center gap-2.5">
        <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
          <BarChart3Icon className="w-3.5 h-3.5 text-emerald-400" />
        </div>
        <span className="text-white/80 font-medium text-sm">Спроси у данных</span>
        <div className="ml-auto text-[10px] text-gray-600 font-mono">ad-hoc</div>
      </div>

      {/* Chat-with-data */}
      <div className="flex-1 flex flex-col px-4 py-4 gap-3 overflow-y-auto">

        {/* User question */}
        <div className="self-end max-w-[80%] bg-emerald-600/80 text-white rounded-2xl rounded-tr-sm px-4 py-2.5 text-sm">
          Какая конверсия по каналам за октябрь?
        </div>

        {/* AI answer */}
        <div className="self-start max-w-[90%] bg-white/[0.05] border border-white/[0.08] rounded-2xl rounded-tl-sm px-4 py-3">
          <div className="text-sm text-gray-300 mb-3">Конверсия по каналам, октябрь 2025:</div>

          {/* Simple bar chart */}
          <div className="space-y-2 mb-3">
            {[
              { channel: 'Органика', value: 4.2, width: '84%', color: 'bg-emerald-400' },
              { channel: 'Email', value: 3.1, width: '62%', color: 'bg-emerald-400/70' },
              { channel: 'Соцсети', value: 1.8, width: '36%', color: 'bg-emerald-400/50' },
              { channel: 'Реклама', value: 0.9, width: '18%', color: 'bg-emerald-400/30' },
            ].map((row) => (
              <div key={row.channel}>
                <div className="flex justify-between text-xs mb-0.5">
                  <span className="text-gray-400">{row.channel}</span>
                  <span className="text-white font-medium">{row.value}%</span>
                </div>
                <div className="h-1.5 w-full bg-white/[0.05] rounded-full overflow-hidden">
                  <div className={`h-full ${row.color} rounded-full`} style={{ width: row.width }} />
                </div>
              </div>
            ))}
          </div>

          {/* Key insight */}
          <div className="rounded-lg bg-emerald-500/[0.08] border border-emerald-500/15 px-3 py-2">
            <div className="text-xs text-emerald-300">📊 Органика лидирует. Email вырос на 40% к сентябрю.</div>
          </div>
        </div>

        {/* Second question */}
        <div className="self-end max-w-[80%] bg-emerald-600/80 text-white rounded-2xl rounded-tr-sm px-4 py-2.5 text-sm">
          А кто лучший менеджер?
        </div>

        {/* Quick answer */}
        <div className="self-start max-w-[90%] bg-white/[0.05] border border-white/[0.08] rounded-2xl rounded-tl-sm px-4 py-2.5">
          <div className="text-sm text-gray-300">Ирина К. — 23 сделки, конверсия 8.1% 🏆</div>
        </div>
      </div>

      {/* Input bar */}
      <div className="px-4 py-3 bg-white/[0.03] border-t border-white/[0.06] flex items-center gap-3">
        <div className="flex-1 bg-white/[0.04] border border-white/[0.08] rounded-full px-4 py-2 text-sm text-gray-500">Задайте вопрос данным...</div>
        <SendIcon className="w-4 h-4 text-emerald-400/60" />
      </div>
    </div>
  )
}

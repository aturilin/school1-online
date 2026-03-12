import { Vote, CheckCircle2 } from 'lucide-react'

const problems = [
  { label: 'Обработка заявок вручную', votes: 8, max: 8, selected: true },
  { label: 'Нет быстрой аналитики', votes: 6, max: 8, selected: true },
  { label: 'Контент создаётся неделю', votes: 4, max: 8, selected: false },
  { label: 'Онбординг новичков', votes: 2, max: 8, selected: false },
  { label: 'Дублирование отчётов', votes: 1, max: 8, selected: false },
]

const avatars = [
  { initials: 'АК', color: 'bg-purple-500/30 text-purple-300' },
  { initials: 'МС', color: 'bg-pink-500/30 text-pink-300' },
  { initials: 'ДВ', color: 'bg-blue-500/30 text-blue-300' },
  { initials: 'ОР', color: 'bg-emerald-500/30 text-emerald-300' },
]

export function VotingBoard() {
  return (
    <div className="rounded-2xl bg-[#0c0c0e] border border-purple-500/15 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.06]">
        <div className="flex items-center gap-2.5">
          <Vote className="w-4 h-4 text-purple-400" />
          <span className="text-sm font-medium text-white">Приоритизация проблем</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="px-2 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-[11px] text-purple-400 font-medium">
            Голосование завершено
          </div>
        </div>
      </div>

      {/* Voting list */}
      <div className="p-4 space-y-2.5">
        {problems.map((problem, i) => (
          <div
            key={i}
            className={`relative rounded-xl px-4 py-3 border transition-all ${
              problem.selected
                ? 'bg-purple-500/[0.08] border-purple-500/25'
                : 'bg-white/[0.02] border-white/[0.05]'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                {problem.selected && (
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                )}
                <span className={`text-[13px] ${problem.selected ? 'text-white font-medium' : 'text-gray-400'}`}>
                  {problem.label}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {/* Mini avatars for top items */}
                {problem.selected && (
                  <div className="flex -space-x-1.5">
                    {avatars.slice(0, problem.votes > 6 ? 4 : 3).map((av, j) => (
                      <div
                        key={j}
                        className={`w-5 h-5 rounded-full ${av.color} flex items-center justify-center text-[8px] font-bold border border-[#0c0c0e]`}
                      >
                        {av.initials}
                      </div>
                    ))}
                  </div>
                )}
                <span className={`text-[12px] font-mono ${problem.selected ? 'text-purple-400' : 'text-gray-600'}`}>
                  {problem.votes}
                </span>
              </div>
            </div>
            {/* Progress bar */}
            <div className="h-1 rounded-full bg-white/[0.04]">
              <div
                className={`h-full rounded-full transition-all ${
                  problem.selected ? 'bg-purple-400/60' : 'bg-white/[0.08]'
                }`}
                style={{ width: `${(problem.votes / problem.max) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-5 py-3 border-t border-white/[0.06] flex items-center gap-2">
        <span className="text-[11px] text-gray-500">Выбрано командой:</span>
        <span className="text-[11px] text-purple-400 font-medium">2 задачи для прототипирования →</span>
      </div>
    </div>
  )
}

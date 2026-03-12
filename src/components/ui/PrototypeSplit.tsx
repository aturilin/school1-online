import { Users, CheckCircle2, Zap, BarChart3 } from 'lucide-react'

const teamA = {
  name: 'Команда A',
  task: 'Автоматизация заявок',
  icon: Zap,
  members: [
    { initials: 'АК', color: 'bg-purple-500/30 text-purple-300' },
    { initials: 'МС', color: 'bg-pink-500/30 text-pink-300' },
    { initials: 'ДВ', color: 'bg-blue-500/30 text-blue-300' },
  ],
  steps: ['Заявка приходит', 'AI классифицирует', 'Авто-ответ + маршрут'],
}

const teamB = {
  name: 'Команда B',
  task: 'Быстрая аналитика',
  icon: BarChart3,
  members: [
    { initials: 'ОР', color: 'bg-emerald-500/30 text-emerald-300' },
    { initials: 'ИП', color: 'bg-amber-500/30 text-amber-300' },
    { initials: 'ЕС', color: 'bg-cyan-500/30 text-cyan-300' },
  ],
  steps: ['Вопрос на языке', 'AI строит запрос', 'График + инсайт'],
}

function TeamCard({ team, side }: { team: typeof teamA; side: 'left' | 'right' }) {
  const Icon = team.icon
  return (
    <div className="flex-1 p-4">
      {/* Team header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Users className="w-3.5 h-3.5 text-purple-400/60" />
          <span className="text-[12px] font-medium text-purple-400">{team.name}</span>
        </div>
        <div className="flex -space-x-1.5">
          {team.members.map((m, i) => (
            <div
              key={i}
              className={`w-5 h-5 rounded-full ${m.color} flex items-center justify-center text-[8px] font-bold border border-[#0c0c0e]`}
            >
              {m.initials}
            </div>
          ))}
        </div>
      </div>

      {/* Task */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
          <Icon className="w-4 h-4 text-purple-400" />
        </div>
        <span className="text-[13px] font-medium text-white">{team.task}</span>
      </div>

      {/* Mini flow */}
      <div className="space-y-2 mb-4">
        {team.steps.map((step, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold ${
              'bg-purple-500/10 text-purple-400 border border-purple-500/20'
            }`}>
              {i + 1}
            </div>
            <span className="text-[12px] text-gray-400">{step}</span>
          </div>
        ))}
      </div>

      {/* Ready badge */}
      <div className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 ${
        side === 'right' ? '' : ''
      }`}>
        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
        <span className="text-[11px] font-medium text-emerald-400">Прототип готов</span>
      </div>
    </div>
  )
}

export function PrototypeSplit() {
  return (
    <div className="rounded-2xl bg-[#0c0c0e] border border-purple-500/15 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.06]">
        <div className="flex items-center gap-2.5">
          <Zap className="w-4 h-4 text-purple-400" />
          <span className="text-sm font-medium text-white">Прототипирование</span>
        </div>
        <div className="px-2 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-[11px] text-purple-400 font-medium">
          Встреча 2
        </div>
      </div>

      {/* Split view */}
      <div className="flex flex-col sm:flex-row">
        <TeamCard team={teamA} side="left" />

        {/* Divider */}
        <div className="relative shrink-0">
          {/* Horizontal divider on mobile */}
          <div className="sm:hidden h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
          {/* Vertical divider on desktop */}
          <div className="hidden sm:block w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent" />
          {/* Center badge */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-[#0c0c0e] border border-purple-500/20 flex items-center justify-center z-10">
            <span className="text-[9px] font-bold text-purple-400">VS</span>
          </div>
        </div>

        <TeamCard team={teamB} side="right" />
      </div>
    </div>
  )
}

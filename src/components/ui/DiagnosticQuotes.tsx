const quotes = [
  {
    text: 'Трачу полдня на подготовку презентаций к каждому вебинару',
    name: 'Аня',
    role: 'Методист',
    avatar: '👩‍🏫',
    color: 'border-cyan-500/25',
    glow: 'bg-cyan-500/[0.06]',
  },
  {
    text: 'Ищу информацию по пяти источникам вручную, каждый раз одно и то же',
    name: 'Дима',
    role: 'Руководитель продукта',
    avatar: '👨‍💻',
    color: 'border-blue-500/25',
    glow: 'bg-blue-500/[0.06]',
  },
  {
    text: 'Пишу одни и те же ответы ученикам каждый день',
    name: 'Оля',
    role: 'Куратор',
    avatar: '👩‍💼',
    color: 'border-purple-500/25',
    glow: 'bg-purple-500/[0.06]',
  },
]

export function DiagnosticQuotes() {
  return (
    <div className="space-y-4">
      {quotes.map((q, i) => (
        <div
          key={i}
          className={`relative rounded-2xl border ${q.color} ${q.glow} px-5 py-4 transition-all duration-300 hover:scale-[1.02]`}
        >
          <div className="flex items-start gap-4">
            {/* Avatar */}
            <div className="w-11 h-11 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-xl shrink-0">
              {q.avatar}
            </div>
            <div className="flex-1 min-w-0">
              {/* Name + role */}
              <div className="flex items-baseline gap-2 mb-1.5">
                <span className="text-sm font-semibold text-white">{q.name}</span>
                <span className="text-[11px] text-gray-500">{q.role}</span>
              </div>
              {/* Quote bubble */}
              <p className="text-[14px] text-gray-300 leading-relaxed">
                «{q.text}»
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

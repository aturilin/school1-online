import { ArrowRight, Users, Lightbulb } from 'lucide-react'

const meetings = [
  {
    icon: Lightbulb,
    title: 'Находим главное',
    description: 'Каждый выписывает проблемы без цензуры → группируют → голосуют за две самые важные.',
  },
  {
    icon: Users,
    title: 'Прототипируем',
    description: 'Две команды — две задачи. Собирают AI-решение, презентуют друг другу, планируют внедрение.',
  },
]

const results = [
  {
    avatar: '👩‍🏫',
    name: 'Аня',
    role: 'Методист',
    before: 'Полдня на презентации',
    after: 'Комплект к вебинару за 10 минут',
    color: 'border-purple-500/25',
    glow: 'bg-purple-500/[0.06]',
  },
  {
    avatar: '👨‍💻',
    name: 'Дима',
    role: 'Руководитель продукта',
    before: 'Ищу по пяти источникам',
    after: 'Вопрос → сводка с цифрами',
    color: 'border-violet-500/25',
    glow: 'bg-violet-500/[0.06]',
  },
]

export function StrategySessionSection() {
  return (
    <section id="strategy" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-purple-500/[0.04] rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: text + meetings */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-sm text-purple-400 font-medium mb-6 w-fit">
              Шаг 03 · 1 неделя
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-[-0.03em] mb-5">
              Применяют к своим задачам
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              Две встречи по 3 часа с основателями курса.
              Команда прототипирует AI-решения на своём контексте.
            </p>

            <div className="space-y-4">
              {meetings.map((m, i) => {
                const Icon = m.icon
                return (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-purple-400" />
                    </div>
                    <div className="pt-0.5">
                      <div className="text-[15px] text-white font-semibold mb-1">{m.title}</div>
                      <p className="text-sm text-gray-400 leading-relaxed">{m.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right: before → after cards */}
          <div className="relative">
            <div className="absolute -inset-4 bg-purple-500/[0.03] rounded-3xl blur-xl pointer-events-none" />
            <div className="relative space-y-4">
              {results.map((r, i) => (
                <div
                  key={i}
                  className={`relative rounded-2xl border ${r.color} ${r.glow} px-5 py-5 transition-all duration-300 hover:scale-[1.02]`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-xl shrink-0">
                      {r.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-2 mb-2.5">
                        <span className="text-sm font-semibold text-white">{r.name}</span>
                        <span className="text-[11px] text-gray-500">{r.role}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <span className="text-gray-500 line-through">{r.before}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-purple-400/50 shrink-0" />
                        <span className="text-purple-300 font-medium">{r.after}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

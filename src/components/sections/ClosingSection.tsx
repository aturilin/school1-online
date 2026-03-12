import { ArrowRightIcon, SparklesIcon, UsersIcon, ShieldCheckIcon, ClockIcon } from 'lucide-react'

const features = [
  {
    icon: SparklesIcon,
    title: '4 модуля онлайн-симулятора',
    desc: 'Личная эффективность, разработка контента, бизнес-аналитика, операционный менеджмент',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
  },
  {
    icon: UsersIcon,
    title: 'Стратсессия с руководителями',
    desc: 'Две команды, четыре часа — два готовых прототипа для запуска',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
  },
  {
    icon: ClockIcon,
    title: '4 недели',
    desc: 'От диагностики до результата',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Гарантия возврата',
    desc: 'Если вам не понравится — вернём 100% денег без единого вопроса',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
  },
]

export function ClosingSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.02)_1px,_transparent_0)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-500/[0.04] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 py-20 md:py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-[-0.03em] mb-12 md:mb-14">
            Всё, что нужно — в одной программе
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="space-y-5">
              {features.map((f, i) => {
                const IconComp = f.icon
                return (
                  <div key={i} className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-xl ${f.bg} border ${f.border} flex items-center justify-center shrink-0 mt-0.5`}>
                      <IconComp className={`w-5 h-5 ${f.color}`} />
                    </div>
                    <div>
                      <div className="text-base font-semibold text-white leading-snug">{f.title}</div>
                      <div className="text-sm text-gray-500 leading-snug mt-0.5">{f.desc}</div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div>
              <div className="p-[1px] rounded-2xl" style={{ background: 'linear-gradient(135deg, rgba(34,211,238,0.2), rgba(59,130,246,0.15), rgba(168,85,247,0.2))' }}>
                <div className="bg-[#0a0a0a] rounded-2xl p-8 md:p-10">
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-6xl md:text-7xl font-extrabold text-white tracking-[-0.04em] leading-none">500</span>
                      <span className="text-xl text-gray-500 font-medium">тыс ₽</span>
                    </div>
                    <p className="text-sm text-gray-500">4 недели • до 15 участников • всё включено</p>
                  </div>
                  <a href="https://t.me/aturilin" target="_blank" rel="noopener noreferrer" className="group w-full inline-flex items-center justify-center gap-3 px-8 py-5 rounded-xl bg-cyan-500 text-black font-bold text-xl transition-all duration-300 glow-button hover:bg-cyan-400 hover:scale-[1.01] active:scale-[0.99]">
                    Обсудить запуск
                    <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 max-w-7xl mt-20">
          <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-8" />
          <p className="text-center text-xs text-gray-700 font-medium tracking-wide">
            © {new Date().getFullYear()} AI Executive Course • Подготовлено для Онлайн-школы №1
          </p>
        </div>
      </div>
    </section>
  )
}

import { Search, Zap, Rocket, ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Аудит',
    duration: '1 неделя',
    description:
      'Мы изучаем реальные процессы вашей команды и находим точки, где AI даст максимальный эффект. Не шаблон — план конкретно под вас.',
    accent: 'cyan',
    icon: Search,
    glowColor: 'rgba(34, 211, 238, 0.12)',
    borderColor: 'border-cyan-500/30',
    textColor: 'text-cyan-400',
    bgGlow: 'bg-cyan-500/20',
    shadowColor: 'shadow-[0_0_30px_rgba(34,211,238,0.15)]',
    numberBg: 'bg-cyan-500/10',
  },
  {
    number: '02',
    title: 'Онлайн-симулятор',
    duration: '2 недели',
    description:
      '4 практических модуля с задачами, адаптированными под вашу компанию. Никаких лекций — только практика. К концу они уже не захотят работать по-старому.',
    accent: 'blue',
    icon: Zap,
    glowColor: 'rgba(59, 130, 246, 0.12)',
    borderColor: 'border-blue-500/30',
    textColor: 'text-blue-400',
    bgGlow: 'bg-blue-500/20',
    shadowColor: 'shadow-[0_0_30px_rgba(59,130,246,0.15)]',
    numberBg: 'bg-blue-500/10',
  },
  {
    number: '03',
    title: 'Хакатон',
    duration: '1 неделя',
    description:
      'Две команды, четыре часа, два готовых прототипа. Ваши люди уходят не с идеями — а с работающими AI-решениями, которые можно запускать.',
    accent: 'purple',
    icon: Rocket,
    glowColor: 'rgba(168, 85, 247, 0.12)',
    borderColor: 'border-purple-500/30',
    textColor: 'text-purple-400',
    bgGlow: 'bg-purple-500/20',
    shadowColor: 'shadow-[0_0_30px_rgba(168,85,247,0.15)]',
    numberBg: 'bg-purple-500/10',
  },
]

export function OfferSection() {
  return (
    <section id="offer" className="relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-cyan-500/[0.04] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-[40%] right-[10%] w-[400px] h-[400px] bg-blue-500/[0.04] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[30%] w-[500px] h-[500px] bg-purple-500/[0.04] rounded-full blur-[150px] pointer-events-none" />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Header */}
          <div className="max-w-2xl mb-14 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-[-0.03em] mb-5">
              Как это работает
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Четыре недели — и ваша команда работает с AI уверенно и самостоятельно.
              Вот как устроен путь.
            </p>
          </div>

          {/* Steps — horizontal on desktop, vertical on mobile */}
          <div className="flex flex-col lg:flex-row lg:items-stretch gap-0">
            {steps.map((step, i) => {
              const Icon = step.icon
              const isLast = i === steps.length - 1
              return (
                <div key={step.number} className="contents">
                  {/* Card */}
                  <div className="flex-1 relative group">
                    <div
                      className={`relative h-full rounded-2xl bg-white/[0.03] border ${step.borderColor} backdrop-blur-sm p-7 md:p-8 transition-all duration-300 hover:bg-white/[0.05] ${step.shadowColor} hover:scale-[1.02]`}
                    >
                      {/* Inner glow accent */}
                      <div
                        className={`absolute -top-px -left-px w-24 h-24 ${step.bgGlow} rounded-full blur-[60px] opacity-50 pointer-events-none`}
                      />

                      {/* Step number + icon row */}
                      <div className="flex items-center gap-4 mb-6 relative">
                        <div
                          className={`flex items-center justify-center w-14 h-14 rounded-xl ${step.numberBg} border ${step.borderColor}`}
                        >
                          <Icon className={`w-6 h-6 ${step.textColor}`} />
                        </div>
                        <div>
                          <span className={`text-xs font-bold uppercase tracking-[0.15em] ${step.textColor}`}>
                            Шаг {step.number}
                          </span>
                          <div className={`inline-block ml-3 px-2.5 py-0.5 rounded-full text-[11px] font-medium ${step.numberBg} ${step.textColor} border ${step.borderColor}`}>
                            {step.duration}
                          </div>
                        </div>
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-[-0.02em]">
                        {step.title}
                      </h3>

                      <p className="text-[15px] leading-relaxed text-gray-400">
                        {step.description}
                      </p>

                      {/* Bottom gradient accent line */}
                      <div
                        className={`absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent ${
                          step.accent === 'cyan'
                            ? 'via-cyan-500/30'
                            : step.accent === 'blue'
                              ? 'via-blue-500/30'
                              : 'via-purple-500/30'
                        } to-transparent`}
                      />
                    </div>
                  </div>

                  {/* Connector arrow between cards */}
                  {!isLast && (
                    <>
                      {/* Desktop: horizontal arrow */}
                      <div className="hidden lg:flex items-center justify-center w-10 shrink-0">
                        <ArrowRight className={`w-5 h-5 ${
                          i === 0 ? 'text-cyan-400/60' : 'text-blue-400/60'
                        }`} />
                      </div>
                      {/* Mobile: vertical connector */}
                      <div className="flex lg:hidden justify-center py-3">
                        <div className={`w-px h-6 ${
                          i === 0
                            ? 'bg-gradient-to-b from-cyan-500/40 to-blue-500/40'
                            : 'bg-gradient-to-b from-blue-500/40 to-purple-500/40'
                        }`} />
                      </div>
                    </>
                  )}
                </div>
              )
            })}
          </div>


        </div>
      </div>
    </section>
  )
}

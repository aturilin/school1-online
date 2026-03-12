export function StrategySessionSection() {
  return (
    <section id="strategy" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: text */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-sm text-purple-400 font-medium mb-5 w-fit">
              Шаг 03 · 1 неделя
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-[-0.03em] mb-4">
              Хакатон: от проблем<br />к прототипам
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Две встречи по 2 часа с основателями курса.
              Команда находит главные проблемы и собирает работающие AI-решения.
            </p>
          </div>

          {/* Right: one card with two columns inside */}
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden">
            <div className="grid grid-cols-2">
              {/* Meeting 1 */}
              <div className="p-4 border-r border-white/[0.06]">
                <img src="/school1-online/images/hackathon-brainstorm.jpg" alt="" className="w-full aspect-square rounded-lg object-cover mb-3" />
                <div className="text-xs font-bold text-purple-400 mb-1.5">Встреча 1 · 2 ч</div>
                <div className="text-sm font-semibold text-white mb-2">Находим главное</div>
                <ul className="space-y-1.5 text-[12px] text-gray-400 leading-relaxed">
                  <li className="flex gap-1.5"><span className="text-purple-400/60 shrink-0">•</span>Каждый выписывает проблемы без цензуры</li>
                  <li className="flex gap-1.5"><span className="text-purple-400/60 shrink-0">•</span>Группируют по темам, находят паттерны</li>
                  <li className="flex gap-1.5"><span className="text-purple-400/60 shrink-0">•</span>Голосуют и выбирают 2 главные проблемы</li>
                </ul>
              </div>
              {/* Meeting 2 */}
              <div className="p-4">
                <img src="/school1-online/images/hackathon-prototype.jpg" alt="" className="w-full aspect-square rounded-lg object-cover mb-3" />
                <div className="text-xs font-bold text-violet-400 mb-1.5">Встреча 2 · 2 ч</div>
                <div className="text-sm font-semibold text-white mb-2">Прототипируем</div>
                <ul className="space-y-1.5 text-[12px] text-gray-400 leading-relaxed">
                  <li className="flex gap-1.5"><span className="text-violet-400/60 shrink-0">•</span>Разбиваются на 2 команды, каждая берёт проблему</li>
                  <li className="flex gap-1.5"><span className="text-violet-400/60 shrink-0">•</span>Собирают работающий AI-прототип</li>
                  <li className="flex gap-1.5"><span className="text-violet-400/60 shrink-0">•</span>Презентуют друг другу и планируют внедрение</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

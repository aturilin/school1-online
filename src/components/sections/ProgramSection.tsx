import { useState } from 'react'
import {
  BrainIcon, PenToolIcon, BarChart3Icon, ZapIcon,
  ChevronDownIcon, CheckCircle2Icon, ClockIcon, UsersIcon, WrenchIcon,
} from 'lucide-react'
import { TelegramChat } from '../ui/TelegramChat'
import { PipelineDiagram } from '../ui/PipelineDiagram'
import { DashboardMockup } from '../ui/DashboardMockup'
import { AutomationFlow } from '../ui/AutomationFlow'

interface Module {
  number: string; icon: React.ElementType; title: string; tagline: string
  accentBg: string; accentText: string; accentBorder: string
  description: string; deliverables: string[]; benefit: string
  visual: 'telegram' | 'pipeline' | 'dashboard' | 'automation'
}

const modules: Module[] = [
  {
    number: '01', icon: BrainIcon, title: 'Личная продуктивность',
    tagline: 'Ваш персональный AI-ассистент в Telegram',
    accentBg: 'bg-cyan-500/10', accentText: 'text-cyan-400', accentBorder: 'border-cyan-500/20',
    description: 'Представьте: утро понедельника, а у вас уже готова повестка на неделю, итоги пятничных созвонов собраны, и бот напоминает про важное. Каждый участник собирает своего AI-помощника в Telegram — под свои задачи, свой ритм, свой контекст.',
    deliverables: ['Работающий бот в Telegram — ваш второй мозг', 'Библиотека промптов, заточенных под ваши задачи', 'Привычка работать с AI каждый день'],
    benefit: '1–2 часа рутины в день просто исчезают', visual: 'telegram',
  },
  {
    number: '02', icon: PenToolIcon, title: 'Создание контента',
    tagline: 'Тема урока → полный комплект материалов',
    accentBg: 'bg-purple-500/10', accentText: 'text-purple-400', accentBorder: 'border-purple-500/20',
    description: 'Задаёте тему — AI создаёт план урока, тест с ответами, домашнее задание и тезисы для презентации. Участники проектируют свой контент-конвейер, тестируют и итерируют, пока результат не станет идеальным.',
    deliverables: ['Настроенный конвейер под ваши учебные материалы', 'Тесты, планы уроков, домашки — за минуты', 'Навык — генерировать, проверять и дорабатывать с AI'],
    benefit: 'Полный комплект материалов к уроку — за 10 минут', visual: 'pipeline',
  },
  {
    number: '03', icon: BarChart3Icon, title: 'Бизнес-аналитика',
    tagline: 'Спросите у данных — получите ответ',
    accentBg: 'bg-emerald-500/10', accentText: 'text-emerald-400', accentBorder: 'border-emerald-500/20',
    description: 'Больше не нужно ждать аналитика. Задаёте вопрос на обычном языке — «какая конверсия по каналам?» — и получаете ответ с цифрами и графиками. Ad-hoc аналитика для всей команды.',
    deliverables: ['Навык: задать вопрос данным и получить ответ', 'Готовые шаблоны для типовых отчётов', 'Понимание, где AI силён, а где нужен человек'],
    benefit: '«Сколько у нас...» — ответ за секунды, не за дни', visual: 'dashboard',
  },
  {
    number: '04', icon: ZapIcon, title: 'Автоматизация процессов',
    tagline: 'Рутина работает сама — без программистов',
    accentBg: 'bg-amber-500/10', accentText: 'text-amber-400', accentBorder: 'border-amber-500/20',
    description: 'Заявка приходит → AI читает и классифицирует → проверяет по базе → отвечает и маршрутизирует. Всё без участия человека. Участники проектируют свою цепочку автоматизации и забирают готовый прототип.',
    deliverables: ['Спроектированная цепочка автоматизации под ваш процесс', 'Чёткое понимание: что автоматизировать первым', 'Рабочий прототип, готовый к запуску'],
    benefit: 'Было: 2-4 часа и 3 человека → Стало: 12 секунд и 0 людей', visual: 'automation',
  },
]

function ModuleVisual({ type }: { type: string }) {
  switch (type) {
    case 'telegram': return <TelegramChat />
    case 'pipeline': return <PipelineDiagram />
    case 'dashboard': return <DashboardMockup />
    case 'automation': return <AutomationFlow />
    default: return null
  }
}

export function ProgramSection() {
  const [openModule, setOpenModule] = useState<number>(0)

  return (
    <section id="program" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-sm text-blue-400 font-medium mb-6 w-fit">
            Шаг 02 · 2 недели
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-[-0.02em] mb-4">Что внутри симулятора</h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-5">
            4 модуля. Ноль лекций. Только практика на задачах вашей компании.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/25">
            <span className="text-sm text-blue-400 font-medium">↓ Пример плана — адаптируется под вас после диагностики</span>
          </div>
        </div>

        <div className="space-y-3">
          {modules.map((mod, i) => {
            const isOpen = openModule === i
            const IconComp = mod.icon
            return (
              <div key={mod.number} className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? 'bg-white/[0.04] border-white/[0.1]' : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.03] hover:border-white/[0.08]'}`}>
                <button onClick={() => setOpenModule(isOpen ? -1 : i)} className="w-full flex items-center gap-4 md:gap-6 p-5 md:p-6 text-left">
                  <span className="text-2xl md:text-3xl font-extrabold text-white/10 select-none shrink-0 w-10 md:w-12">{mod.number}</span>
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${mod.accentBg} ${mod.accentBorder} ${mod.accentText}`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-bold text-white">{mod.title}</h3>
                    <p className={`text-sm ${mod.accentText} mt-0.5`}>{mod.tagline}</p>
                  </div>
                  <ChevronDownIcon className={`w-5 h-5 text-gray-500 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 md:px-6 pb-6 md:pb-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                      <div className="relative order-2 lg:order-1">
                        <div className={`absolute -inset-2 ${mod.accentBg} rounded-3xl blur-xl opacity-50`} />
                        <div className="relative"><ModuleVisual type={mod.visual} /></div>
                      </div>
                      <div className="order-1 lg:order-2">
                        <p className="text-gray-400 leading-relaxed mb-5">{mod.description}</p>
                        <div className="mb-5">
                          <div className="text-xs uppercase tracking-wider text-gray-500 font-medium mb-3">Что заберёте с собой</div>
                          <ul className="space-y-2">
                            {mod.deliverables.map((del, j) => (
                              <li key={j} className="flex items-start gap-2.5 text-sm text-gray-300">
                                <CheckCircle2Icon className={`w-4 h-4 ${mod.accentText} shrink-0 mt-0.5`} />{del}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className={`p-3.5 rounded-xl ${mod.accentBg} border ${mod.accentBorder}`}>
                          <p className={`text-sm font-medium ${mod.accentText}`}>↳ {mod.benefit}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

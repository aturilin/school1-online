import { BookOpenIcon, SparklesIcon, CheckCircleIcon, ClipboardListIcon, FileTextIcon, PresentationIcon } from 'lucide-react'

export function PipelineDiagram() {
  return (
    <div className="w-full max-w-sm mx-auto rounded-2xl overflow-hidden border border-white/10 bg-[#0c0c0e] shadow-2xl flex flex-col h-[400px]">
      {/* Header */}
      <div className="px-4 py-3 bg-white/[0.03] border-b border-white/[0.06] flex items-center gap-2.5">
        <div className="w-7 h-7 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
          <BookOpenIcon className="w-3.5 h-3.5 text-purple-400" />
        </div>
        <span className="text-white/80 font-medium text-sm">Контент-конвейер</span>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col px-4 py-4 gap-3 overflow-y-auto">

        {/* Input: lesson topic */}
        <div className="rounded-xl bg-white/[0.04] border border-white/[0.08] px-4 py-3">
          <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1.5">Тема урока</div>
          <div className="text-sm text-white">«Дроби. Сложение и вычитание»</div>
        </div>

        {/* AI generates */}
        <div className="flex items-center justify-center gap-2 py-0.5">
          <div className="h-px flex-1 bg-purple-500/20" />
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
            <SparklesIcon className="w-3 h-3 text-purple-400" />
            <span className="text-[10px] text-purple-400 font-medium">AI создаёт</span>
          </div>
          <div className="h-px flex-1 bg-purple-500/20" />
        </div>

        {/* Output cards */}
        <div className="space-y-2">
          {[
            { icon: FileTextIcon, label: 'План урока', detail: 'структура + тайминг' },
            { icon: ClipboardListIcon, label: 'Тест на 10 вопросов', detail: 'с ответами и разбором' },
            { icon: BookOpenIcon, label: 'Домашнее задание', detail: '3 уровня сложности' },
            { icon: PresentationIcon, label: 'Тезисы для презентации', detail: '12 слайдов' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3 rounded-lg bg-white/[0.03] border border-white/[0.06] px-3 py-2.5">
              <CheckCircleIcon className="w-4 h-4 text-purple-400 shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="text-xs font-medium text-white">{item.label}</div>
                <div className="text-[10px] text-gray-500">{item.detail}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="rounded-lg bg-purple-500/[0.06] border border-purple-500/15 px-3 py-2 text-center">
          <span className="text-xs text-purple-300">1 тема → полный комплект за 10 минут</span>
        </div>
      </div>
    </div>
  )
}

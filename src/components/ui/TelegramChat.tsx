import { SendIcon, PaperclipIcon, MicIcon } from 'lucide-react'

export function TelegramChat() {
  return (
    <div className="w-full max-w-sm mx-auto rounded-2xl overflow-hidden border border-white/10 bg-[#0f172a] shadow-2xl flex flex-col h-[400px]">
      <div className="px-4 py-3 bg-white/5 border-b border-white/10 flex items-center gap-3 backdrop-blur-md">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white font-bold">AI</div>
        <div>
          <div className="text-white font-medium text-sm">AI Executive Assistant</div>
          <div className="text-cyan-400 text-xs">bot</div>
        </div>
      </div>
      <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4 bg-[#09090b]/50">
        <div className="self-end max-w-[85%] bg-blue-600 text-white rounded-2xl rounded-tr-sm px-4 py-2 text-sm shadow-sm">
          Напомни про встречу с Дашей завтра
          <div className="text-[10px] text-blue-200 text-right mt-1">14:23</div>
        </div>
        <div className="self-start max-w-[90%] bg-white/10 border border-white/5 text-gray-200 rounded-2xl rounded-tl-sm px-4 py-3 text-sm shadow-sm backdrop-blur-sm">
          <div className="font-semibold text-cyan-400 mb-2 flex items-center gap-2"><span>🤖</span> Встреча запланирована</div>
          <div className="space-y-2">
            <div className="flex gap-2"><span className="text-gray-400 w-12">Время:</span><span className="text-white">Завтра, 15:00</span></div>
            <div className="flex gap-2"><span className="text-gray-400 w-12">Тема:</span><span className="text-white">Обсуждение Q4 KPI</span></div>
            <div className="mt-3 pt-3 border-t border-white/10">
              <div className="text-xs text-gray-400 mb-1">Подготовка:</div>
              <ul className="text-xs space-y-1 list-disc pl-4 text-gray-300">
                <li>Посмотреть отчет за Q3</li>
                <li>Подготовить список вопросов по маркетингу</li>
              </ul>
            </div>
          </div>
          <div className="text-[10px] text-gray-500 text-right mt-2">14:23</div>
        </div>
      </div>
      <div className="px-4 py-3 bg-white/5 border-t border-white/10 flex items-center gap-3">
        <PaperclipIcon className="w-5 h-5 text-gray-400" />
        <div className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-gray-400">Message...</div>
        <MicIcon className="w-5 h-5 text-gray-400" />
      </div>
    </div>
  )
}

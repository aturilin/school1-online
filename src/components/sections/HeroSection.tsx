import { ArrowDownIcon, ShieldCheckIcon } from 'lucide-react'

export function HeroSection() {
  const scrollToOffer = () => {
    const el = document.getElementById('offer')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-0 lg:min-h-screen flex items-center overflow-hidden py-20 lg:py-0">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.03)_1px,_transparent_0)] bg-[size:32px_32px]" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[400px] bg-cyan-500/15 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center">

          {/* Left: text */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-sm text-gray-400 mb-4 sm:mb-8 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Подготовлено для Онлайн-школы №1
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-[-0.03em] leading-[1.05] text-white mb-6">
              Ваша команда<br />
              <span className="text-gradient">полюбит AI</span>
              {' '}<span className="inline-block animate-pulse">❤️</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed mb-6 sm:mb-10 max-w-lg tracking-[-0.01em]">
              Не рассказываем про AI — даём попробовать руками. Через 4 недели они не смогут без него работать.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={scrollToOffer}
                className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-full bg-cyan-500 text-black font-semibold text-lg transition-all duration-300 glow-button hover:bg-cyan-400"
              >
                Как это устроено
                <ArrowDownIcon className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
              </button>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <ShieldCheckIcon className="w-4 h-4 text-emerald-500/70" />
                <span>100% возврат, если не понравится</span>
              </div>
            </div>
          </div>

          {/* Right: bold visual block */}
          <div className="relative flex items-center justify-center">
            {/* Glow layers */}
            <div className="absolute w-[340px] h-[340px] rounded-full bg-cyan-500/20 blur-[100px]" />
            <div className="absolute w-[250px] h-[250px] rounded-full bg-blue-600/15 blur-[80px] translate-x-8 translate-y-8" />
            <div className="absolute w-[200px] h-[200px] rounded-full bg-purple-600/10 blur-[70px] -translate-x-6 translate-y-4" />

            {/* Main circle */}
            <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm flex items-center justify-center">
              <div className="absolute inset-3 rounded-full border border-white/[0.05]" />
              <div className="absolute inset-8 rounded-full border border-cyan-500/10" />

              <div className="text-center z-10">
                <div className="text-7xl md:text-8xl font-extrabold text-white tracking-[-0.04em] leading-none mb-1">4</div>
                <div className="text-lg md:text-xl font-semibold text-gray-300 tracking-tight">недели</div>
                <div className="text-sm text-gray-500 mt-1">до результата</div>
              </div>

              {/* Orbiting labels */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm">
                <span className="text-xs font-semibold text-cyan-400">Аудит</span>
              </div>
              <div className="absolute top-1/2 -right-4 -translate-y-1/2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm">
                <span className="text-xs font-semibold text-blue-400">Симулятор</span>
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm">
                <span className="text-xs font-semibold text-purple-400">Хакатон</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden lg:flex">
        <div className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-white/40 animate-bounce" />
        </div>
      </div>
    </section>
  )
}

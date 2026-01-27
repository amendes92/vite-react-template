import { Link } from "react-router-dom";
import BottomNav from "../components/BottomNav";


export default function Module5() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-main-light dark:text-text-main-dark antialiased overflow-x-hidden pb-24 min-h-screen">
      {/* Top App Bar */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center justify-between px-4 h-14">
          <Link to="/" className="flex size-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-text-main-light dark:text-text-main-dark">
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
          </Link>
          <h2 className="text-base font-bold leading-tight tracking-tight">Módulo 05</h2>
          <button className="flex size-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-text-main-light dark:text-text-main-dark">
            <span className="material-symbols-outlined">more_horiz</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col w-full max-w-md mx-auto px-4 pt-4">
        {/* Headline & Tags */}
        <div className="mb-6 animate-fade-in-up">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary dark:text-blue-300 ring-1 ring-inset ring-primary/20">
              Tráfego Pago
            </span>
            <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent ring-1 ring-inset ring-accent/20">
              <span className="material-symbols-outlined text-[14px] mr-1 filled">local_fire_department</span>
              Alta Intenção
            </span>
          </div>
          <h1 className="text-3xl font-extrabold text-text-main-light dark:text-white leading-tight mb-3">
            Google Ads: <span className="text-primary">Fundo de Funil</span>
          </h1>
          <p className="text-text-sub-light dark:text-text-sub-dark text-base leading-relaxed">
            O Google Ads captura a demanda existente. Aprenda a aparecer exatamente quando o paciente procura por um ortopedista.
          </p>
        </div>

        {/* Section Header */}
        <div className="flex items-center justify-between mb-4 mt-2">
          <h3 className="text-lg font-bold text-text-main-light dark:text-white">Estratégias Principais</h3>
          <span className="text-xs font-medium text-text-sub-light dark:text-text-sub-dark uppercase tracking-wide">3 Aulas</span>
        </div>

        {/* Strategy Cards List */}
        <div className="space-y-4">
          {/* Card 1: Institucional */}
          <Link to="/module/5/structure" className="block">
            <div className="group relative flex flex-col gap-3 rounded-2xl bg-white dark:bg-surface-dark p-5 shadow-card hover:shadow-soft transition-all duration-300 border border-transparent hover:border-primary/20 cursor-pointer overflow-hidden">
              <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-primary/5 dark:bg-primary/10 group-hover:bg-primary/10 transition-colors"></div>
              <div className="flex items-start justify-between z-10">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900/30 text-primary dark:text-blue-300">
                    <span className="material-symbols-outlined text-2xl">shield_person</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-text-main-light dark:text-white group-hover:text-primary transition-colors">Institucional</h4>
                    <p className="text-sm font-medium text-accent">Proteção de Marca</p>
                  </div>
                </div>
                <div className="rounded-full bg-gray-50 dark:bg-gray-800 p-1.5 text-gray-400 group-hover:text-primary group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 transition-colors">
                  <span className="material-symbols-outlined text-xl">chevron_right</span>
                </div>
              </div>
              <p className="text-sm text-text-sub-light dark:text-text-sub-dark leading-normal z-10">
                Garanta que quem busca pelo seu nome encontre você, não o concorrente.
              </p>
              {/* Progress Bar Mockup */}
              <div className="mt-1 h-1.5 w-full rounded-full bg-gray-100 dark:bg-gray-700 overflow-hidden">
                <div className="h-full w-3/4 rounded-full bg-primary"></div>
              </div>
              <p className="text-[10px] text-text-sub-light dark:text-text-sub-dark font-medium mt-1">75% Concluído</p>
            </div>
          </Link>

          {/* Card 2: Especialidade + Geo */}
          <Link to="/module/5/structure" className="block">
            <div className="group relative flex flex-col gap-3 rounded-2xl bg-white dark:bg-surface-dark p-5 shadow-card hover:shadow-soft transition-all duration-300 border border-transparent hover:border-primary/20 cursor-pointer overflow-hidden">
              <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-orange-50 dark:bg-orange-900/10 group-hover:bg-orange-100/50 transition-colors"></div>
              <div className="flex items-start justify-between z-10">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 dark:bg-orange-900/20 text-accent">
                    <span className="material-symbols-outlined text-2xl">location_on</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-text-main-light dark:text-white group-hover:text-primary transition-colors">Especialidade + Geo</h4>
                    <p className="text-sm font-medium text-text-sub-light dark:text-gray-400">Segmentação Local</p>
                  </div>
                </div>
                <div className="rounded-full bg-gray-50 dark:bg-gray-800 p-1.5 text-gray-400 group-hover:text-primary group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 transition-colors">
                  <span className="material-symbols-outlined text-xl">chevron_right</span>
                </div>
              </div>
              <p className="text-sm text-text-sub-light dark:text-text-sub-dark leading-normal z-10">
                "Ortopedista de Joelho em SP". Capture pacientes próximos buscando sua especialidade.
              </p>
            </div>
          </Link>

          {/* Card 3: Sintomas (Negative Keywords for Demo Link) */}
          <Link to="/module/5/negative-keywords" className="block">
            <div className="group relative flex flex-col gap-3 rounded-2xl bg-white dark:bg-surface-dark p-5 shadow-card hover:shadow-soft transition-all duration-300 border border-transparent hover:border-primary/20 cursor-pointer overflow-hidden">
              <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-green-50 dark:bg-green-900/10 group-hover:bg-green-100/50 transition-colors"></div>
              <div className="flex items-start justify-between z-10">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400">
                    <span className="material-symbols-outlined text-2xl">paid</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-text-main-light dark:text-white group-hover:text-primary transition-colors">Sintomas</h4>
                    <p className="text-sm font-medium text-text-sub-light dark:text-gray-400">Dor e Procedimentos</p>
                  </div>
                </div>
                <div className="rounded-full bg-gray-50 dark:bg-gray-800 p-1.5 text-gray-400 group-hover:text-primary group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 transition-colors">
                  <span className="material-symbols-outlined text-xl">chevron_right</span>
                </div>
              </div>
              <p className="text-sm text-text-sub-light dark:text-text-sub-dark leading-normal z-10">
                Focada em quem busca a cura. Palavras-chave de fundo de funil para alta conversão.
              </p>
            </div>
          </Link>
        </div>

        {/* Quick Tips Section */}
        <div className="mt-8 mb-6">
          <h3 className="text-lg font-bold text-text-main-light dark:text-white mb-3">Dica do Especialista</h3>
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-5 text-white relative overflow-hidden shadow-lg shadow-blue-500/20">
            {/* Abstract BG Shape */}
            <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 rounded-full bg-white/10 blur-xl"></div>
            <div className="absolute bottom-0 left-0 -ml-4 -mb-4 w-20 h-20 rounded-full bg-accent/20 blur-xl"></div>
            <div className="relative z-10 flex gap-4">
              <div className="shrink-0 bg-white/20 p-2 rounded-lg h-min backdrop-blur-sm">
                <span className="material-symbols-outlined text-white">lightbulb</span>
              </div>
              <div>
                <p className="font-bold text-sm mb-1 text-blue-50 uppercase tracking-wide">CPC Otimizado</p>
                <p className="text-sm text-white/90 leading-snug">
                  Não comece com orçamento máximo. Teste suas palavras-chave negativas na primeira semana para economizar até 30% da verba.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation (iOS Style) */}
      <BottomNav />
      {/* Extra padding for bottom nav */}
      <div className="h-24"></div>
    </div>
  );
}

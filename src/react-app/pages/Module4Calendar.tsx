import { Link } from "react-router-dom";


export default function Module4Calendar() {
  return (
    <div className="relative flex h-full w-full max-w-md mx-auto flex-col bg-background-light dark:bg-background-dark overflow-hidden shadow-xl min-h-screen text-text-main-light dark:text-text-main-dark font-display">
      {/* TopAppBar */}
      <div className="flex items-center bg-surface-light dark:bg-surface-dark px-4 py-3 justify-between sticky top-0 z-20 border-b border-border-light dark:border-border-dark">
        <Link to="/module/4" className="text-text-main-light dark:text-text-main-dark hover:bg-background-light dark:hover:bg-background-dark p-2 rounded-full transition-colors flex items-center justify-center">
          <span className="material-symbols-outlined" style={{ fontSize: "24px" }}>arrow_back</span>
        </Link>
        <h2 className="text-text-main-light dark:text-text-main-dark text-base font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10">
          Módulo 04: Conteúdo
        </h2>
      </div>

      <main className="flex-1 flex flex-col pb-24 overflow-y-auto no-scrollbar">
        {/* HeadlineText */}
        <div className="bg-surface-light dark:bg-surface-dark px-6 pt-6 pb-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 text-xs font-bold mb-3 uppercase tracking-wider">
            Aula Prática
          </div>
          <h1 className="text-text-main-light dark:text-text-main-dark text-2xl font-bold leading-tight tracking-tight">
            Calendário Editorial <br /><span className="text-text-secondary-light dark:text-text-secondary-dark text-lg font-medium">Semana Exemplo</span>
          </h1>
        </div>

        {/* Intro */}
        <div className="bg-surface-light dark:bg-surface-dark px-6 pb-6 pt-2 mb-2">
            <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-normal leading-relaxed">
                Um planejamento equilibrado entre conteúdo educativo, autoridade e conexão pessoal.
            </p>
        </div>

        {/* Days List */}
        <div className="flex flex-col px-4 pt-4 gap-3">

          {/* Segunda-feira */}
          <div className="group rounded-xl bg-surface-light dark:bg-surface-dark border border-transparent hover:border-orange-200 dark:hover:border-orange-800 shadow-sm overflow-hidden transition-all duration-200">
            <div className="flex items-start p-4 gap-3">
              <div className="pt-0.5 flex flex-col items-center gap-1 w-12">
                <span className="text-xs font-bold uppercase text-gray-400">SEG</span>
                <span className="text-lg font-bold text-text-main-light dark:text-white">01</span>
              </div>
              <details className="w-full group/details" open>
                <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
                  <div className="flex flex-col">
                    <span className="text-text-main-light dark:text-text-main-dark text-base font-bold leading-normal select-none">Mito ou Verdade</span>
                    <span className="text-xs text-orange-600 dark:text-orange-400 font-medium">Educativo • Feed</span>
                  </div>
                  <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark transition-transform group-open/details:rotate-180" style={{ fontSize: "24px" }}>expand_more</span>
                </summary>
                <div className="pt-3 pb-1 pl-0">
                  <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm leading-relaxed mb-3">
                    Desmistifique uma crença comum sobre sua especialidade. Ex: "Estalar os dedos causa artrite?"
                  </p>
                  <div className="flex gap-2">
                    <span className="text-[10px] bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-gray-600 dark:text-gray-300">Carrossel</span>
                    <span className="text-[10px] bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-gray-600 dark:text-gray-300">Engajamento</span>
                  </div>
                </div>
              </details>
            </div>
          </div>

          {/* Terça-feira */}
          <div className="group rounded-xl bg-surface-light dark:bg-surface-dark border border-transparent hover:border-orange-200 dark:hover:border-orange-800 shadow-sm overflow-hidden transition-all duration-200">
            <div className="flex items-start p-4 gap-3">
              <div className="pt-0.5 flex flex-col items-center gap-1 w-12">
                <span className="text-xs font-bold uppercase text-gray-400">TER</span>
                <span className="text-lg font-bold text-text-main-light dark:text-white">02</span>
              </div>
              <details className="w-full group/details">
                <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
                  <div className="flex flex-col">
                    <span className="text-text-main-light dark:text-text-main-dark text-base font-bold leading-normal select-none">Bastidores</span>
                    <span className="text-xs text-purple-600 dark:text-purple-400 font-medium">Conexão • Stories</span>
                  </div>
                  <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark transition-transform group-open/details:rotate-180" style={{ fontSize: "24px" }}>expand_more</span>
                </summary>
                <div className="pt-3 pb-1 pl-0">
                  <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm leading-relaxed mb-3">
                    Mostre sua rotina, o café da manhã ou preparando o consultório. Humaniza a marca.
                  </p>
                </div>
              </details>
            </div>
          </div>

          {/* Quarta-feira */}
          <div className="group rounded-xl bg-surface-light dark:bg-surface-dark border border-transparent hover:border-orange-200 dark:hover:border-orange-800 shadow-sm overflow-hidden transition-all duration-200">
            <div className="flex items-start p-4 gap-3">
              <div className="pt-0.5 flex flex-col items-center gap-1 w-12">
                <span className="text-xs font-bold uppercase text-gray-400">QUA</span>
                <span className="text-lg font-bold text-text-main-light dark:text-white">03</span>
              </div>
              <details className="w-full group/details">
                <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
                  <div className="flex flex-col">
                    <span className="text-text-main-light dark:text-text-main-dark text-base font-bold leading-normal select-none">Prova Social</span>
                    <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">Autoridade • Feed/Reels</span>
                  </div>
                  <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark transition-transform group-open/details:rotate-180" style={{ fontSize: "24px" }}>expand_more</span>
                </summary>
                <div className="pt-3 pb-1 pl-0">
                  <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm leading-relaxed mb-3">
                    Compartilhe um depoimento (anônimo se necessário) ou um caso de sucesso (antes/depois com consentimento).
                  </p>
                </div>
              </details>
            </div>
          </div>

          {/* Quinta-feira */}
          <div className="group rounded-xl bg-surface-light dark:bg-surface-dark border border-transparent hover:border-orange-200 dark:hover:border-orange-800 shadow-sm overflow-hidden transition-all duration-200">
            <div className="flex items-start p-4 gap-3">
              <div className="pt-0.5 flex flex-col items-center gap-1 w-12">
                <span className="text-xs font-bold uppercase text-gray-400">QUI</span>
                <span className="text-lg font-bold text-text-main-light dark:text-white">04</span>
              </div>
              <details className="w-full group/details">
                <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
                  <div className="flex flex-col">
                    <span className="text-text-main-light dark:text-text-main-dark text-base font-bold leading-normal select-none">TBT / História</span>
                    <span className="text-xs text-purple-600 dark:text-purple-400 font-medium">Conexão • Feed</span>
                  </div>
                  <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark transition-transform group-open/details:rotate-180" style={{ fontSize: "24px" }}>expand_more</span>
                </summary>
                <div className="pt-3 pb-1 pl-0">
                  <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm leading-relaxed mb-3">
                    Conte sobre sua formação, um congresso antigo ou por que escolheu a medicina.
                  </p>
                </div>
              </details>
            </div>
          </div>

          {/* Sexta-feira */}
          <div className="group rounded-xl bg-surface-light dark:bg-surface-dark border border-transparent hover:border-orange-200 dark:hover:border-orange-800 shadow-sm overflow-hidden transition-all duration-200">
            <div className="flex items-start p-4 gap-3">
              <div className="pt-0.5 flex flex-col items-center gap-1 w-12">
                <span className="text-xs font-bold uppercase text-gray-400">SEX</span>
                <span className="text-lg font-bold text-text-main-light dark:text-white">05</span>
              </div>
              <details className="w-full group/details">
                <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
                  <div className="flex flex-col">
                    <span className="text-text-main-light dark:text-text-main-dark text-base font-bold leading-normal select-none">Dúvida da Caixinha</span>
                    <span className="text-xs text-green-600 dark:text-green-400 font-medium">Interação • Stories</span>
                  </div>
                  <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark transition-transform group-open/details:rotate-180" style={{ fontSize: "24px" }}>expand_more</span>
                </summary>
                <div className="pt-3 pb-1 pl-0">
                  <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm leading-relaxed mb-3">
                    Abra uma caixinha de perguntas pela manhã e responda as principais dúvidas ao longo do dia.
                  </p>
                </div>
              </details>
            </div>
          </div>

        </div>
        {/* Spacer for floating button */}
        <div className="h-8"></div>
      </main>

      {/* Fixed Footer Button */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur-md border-t border-border-light dark:border-border-dark z-30">
        <button className="w-full flex items-center justify-center gap-2 rounded-xl h-14 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] shadow-lg hover:bg-blue-700 active:scale-[0.98] transition-all">
          <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>download</span>
          <span>Baixar PDF Completo</span>
        </button>
      </div>
    </div>
  );
}

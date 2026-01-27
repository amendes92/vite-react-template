import { Link } from "react-router-dom";


export default function Module5Structure() {
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto bg-background-light dark:bg-background-dark border-x border-border-light dark:border-border-dark shadow-2xl font-display text-text-main-light dark:text-text-main-dark transition-colors duration-200">
      {/* TopAppBar */}
      <div className="sticky top-0 z-50 flex items-center bg-surface-light dark:bg-surface-dark p-4 pb-2 justify-between border-b border-border-light dark:border-border-dark shadow-sm">
        <Link to="/module/5" className="text-text-main-light dark:text-text-main-dark flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <span className="material-symbols-outlined" style={{ fontSize: "24px" }}>arrow_back</span>
        </Link>
        <h2 className="text-text-main-light dark:text-text-main-dark text-base font-semibold leading-tight tracking-[-0.015em] flex-1 text-center pr-10">Módulo 05: Tráfego Pago</h2>
      </div>

      {/* Hero / Headline */}
      <div className="flex flex-col px-5 pt-6 pb-2">
        <h1 className="text-text-main-light dark:text-text-main-dark tracking-tight text-[28px] font-bold leading-tight text-left">
          Estrutura de Campanhas
        </h1>
        <p className="text-text-sec-light dark:text-text-sec-dark text-base font-normal leading-normal pt-3">
          Para um consultório de ortopedia, recomendamos dividir sua conta em 3 pilares estratégicos.
        </p>
      </div>

      {/* Illustration Area (Abstract Pattern) */}
      <div className="px-5 py-4 w-full">
        <div className="relative w-full h-32 rounded-xl overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg flex items-center justify-center">
          {/* Abstract Design Overlay */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
          <div className="z-10 text-white flex flex-col items-center">
            <span className="material-symbols-outlined text-4xl mb-1">hub</span>
            <span className="text-xs font-medium uppercase tracking-wider opacity-90">Google Ads Blueprint</span>
          </div>
        </div>
      </div>

      {/* Accordions List */}
      <div className="flex flex-col p-5 gap-4">
        {/* Accordion 1: Institucional */}
        <details className="group flex flex-col rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark overflow-hidden transition-all duration-300 open:ring-2 open:ring-primary/20 open:border-primary">
          <summary className="flex cursor-pointer items-center justify-between gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-primary">
                <span className="material-symbols-outlined">badge</span>
              </div>
              <div className="flex flex-col">
                <p className="text-text-main-light dark:text-text-main-dark text-base font-semibold leading-tight">1. Institucional</p>
                <span className="text-xs text-text-sec-light dark:text-text-sec-dark">Defesa de marca</span>
              </div>
            </div>
            <span className="material-symbols-outlined text-text-sec-light dark:text-text-sec-dark group-open:rotate-180 transition-transform duration-300">expand_more</span>
          </summary>
          <div className="px-4 pb-5 pt-1">
            <div className="w-full h-px bg-border-light dark:bg-border-dark mb-4"></div>
            <div className="space-y-4">
              {/* Objective */}
              <div>
                <p className="text-xs uppercase tracking-wider font-bold text-text-sec-light dark:text-text-sec-dark mb-1">Objetivo</p>
                <p className="text-sm text-text-main-light dark:text-text-main-dark leading-relaxed">
                  Capturar quem já procura por você pelo nome. Garante que concorrentes não apareçam quando buscam sua clínica.
                </p>
              </div>
              {/* Keywords */}
              <div>
                <p className="text-xs uppercase tracking-wider font-bold text-text-sec-light dark:text-text-sec-dark mb-2">Palavras-chave</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-xs font-medium text-text-main-light dark:text-text-main-dark border border-border-light dark:border-border-dark border-dashed">"Dr. [Seu Nome]"</span>
                  <span className="px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-xs font-medium text-text-main-light dark:text-text-main-dark border border-border-light dark:border-border-dark border-dashed">"Clínica [Nome]"</span>
                </div>
              </div>
              {/* Chips */}
              <div className="flex gap-3 flex-wrap">
                <div className="flex h-7 shrink-0 items-center justify-center gap-x-1.5 rounded-full bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/50 px-3">
                  <span className="material-symbols-outlined text-green-700 dark:text-green-400" style={{ fontSize: "16px" }}>attach_money</span>
                  <p className="text-green-700 dark:text-green-400 text-xs font-semibold">Custo Baixo</p>
                </div>
                <div className="flex h-7 shrink-0 items-center justify-center gap-x-1.5 rounded-full bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800/50 px-3">
                  <span className="material-symbols-outlined text-orange-700 dark:text-orange-400" style={{ fontSize: "16px" }}>local_fire_department</span>
                  <p className="text-orange-700 dark:text-orange-400 text-xs font-semibold">Público Quente</p>
                </div>
              </div>
            </div>
          </div>
        </details>

        {/* Accordion 2: Especialidade */}
        <details className="group flex flex-col rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark overflow-hidden transition-all duration-300 open:ring-2 open:ring-primary/20 open:border-primary" open>
          <summary className="flex cursor-pointer items-center justify-between gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                <span className="material-symbols-outlined">medical_services</span>
              </div>
              <div className="flex flex-col">
                <p className="text-text-main-light dark:text-text-main-dark text-base font-semibold leading-tight">2. Especialidade</p>
                <span className="text-xs text-text-sec-light dark:text-text-sec-dark">Tratamentos focados</span>
              </div>
            </div>
            <span className="material-symbols-outlined text-text-sec-light dark:text-text-sec-dark group-open:rotate-180 transition-transform duration-300">expand_more</span>
          </summary>
          <div className="px-4 pb-5 pt-1">
            <div className="w-full h-px bg-border-light dark:bg-border-dark mb-4"></div>
            <div className="space-y-4">
              {/* Objective */}
              <div>
                <p className="text-xs uppercase tracking-wider font-bold text-text-sec-light dark:text-text-sec-dark mb-1">Objetivo</p>
                <p className="text-sm text-text-main-light dark:text-text-main-dark leading-relaxed">
                  Atrair pacientes que já sabem o que precisam e buscam um especialista na área.
                </p>
              </div>
              {/* Keywords */}
              <div>
                <p className="text-xs uppercase tracking-wider font-bold text-text-sec-light dark:text-text-sec-dark mb-2">Palavras-chave</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-xs font-medium text-text-main-light dark:text-text-main-dark border border-border-light dark:border-border-dark border-dashed">"Ortopedista Joelho"</span>
                  <span className="px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-xs font-medium text-text-main-light dark:text-text-main-dark border border-border-light dark:border-border-dark border-dashed">"Cirurgia de Quadril"</span>
                </div>
              </div>
              {/* Chips */}
              <div className="flex gap-3 flex-wrap">
                <div className="flex h-7 shrink-0 items-center justify-center gap-x-1.5 rounded-full bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800/50 px-3">
                  <span className="material-symbols-outlined text-yellow-700 dark:text-yellow-500" style={{ fontSize: "16px" }}>trending_up</span>
                  <p className="text-yellow-700 dark:text-yellow-500 text-xs font-semibold">Custo Médio</p>
                </div>
                <div className="flex h-7 shrink-0 items-center justify-center gap-x-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/50 px-3">
                  <span className="material-symbols-outlined text-blue-700 dark:text-blue-400" style={{ fontSize: "16px" }}>target</span>
                  <p className="text-blue-700 dark:text-blue-400 text-xs font-semibold">Intencional</p>
                </div>
              </div>
            </div>
          </div>
        </details>

        {/* Accordion 3: Sintomas */}
        <details className="group flex flex-col rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark overflow-hidden transition-all duration-300 open:ring-2 open:ring-primary/20 open:border-primary">
          <summary className="flex cursor-pointer items-center justify-between gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400">
                <span className="material-symbols-outlined">healing</span>
              </div>
              <div className="flex flex-col">
                <p className="text-text-main-light dark:text-text-main-dark text-base font-semibold leading-tight">3. Sintomas/Dor</p>
                <span className="text-xs text-text-sec-light dark:text-text-sec-dark">Topo de funil</span>
              </div>
            </div>
            <span className="material-symbols-outlined text-text-sec-light dark:text-text-sec-dark group-open:rotate-180 transition-transform duration-300">expand_more</span>
          </summary>
          <div className="px-4 pb-5 pt-1">
            <div className="w-full h-px bg-border-light dark:bg-border-dark mb-4"></div>
            <div className="space-y-4">
              {/* Objective */}
              <div>
                <p className="text-xs uppercase tracking-wider font-bold text-text-sec-light dark:text-text-sec-dark mb-1">Objetivo</p>
                <p className="text-sm text-text-main-light dark:text-text-main-dark leading-relaxed">
                  Alcançar pacientes que estão sentindo dor mas ainda não sabem qual o tratamento ideal.
                </p>
              </div>
              {/* Keywords */}
              <div>
                <p className="text-xs uppercase tracking-wider font-bold text-text-sec-light dark:text-text-sec-dark mb-2">Palavras-chave</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-xs font-medium text-text-main-light dark:text-text-main-dark border border-border-light dark:border-border-dark border-dashed">"Dor nas costas"</span>
                  <span className="px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-xs font-medium text-text-main-light dark:text-text-main-dark border border-border-light dark:border-border-dark border-dashed">"Joelho estalando"</span>
                </div>
              </div>
              {/* Chips */}
              <div className="flex gap-3 flex-wrap">
                <div className="flex h-7 shrink-0 items-center justify-center gap-x-1.5 rounded-full bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/50 px-3">
                  <span className="material-symbols-outlined text-red-700 dark:text-red-400" style={{ fontSize: "16px" }}>payments</span>
                  <p className="text-red-700 dark:text-red-400 text-xs font-semibold">Custo Alto</p>
                </div>
                <div className="flex h-7 shrink-0 items-center justify-center gap-x-1.5 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-3">
                  <span className="material-symbols-outlined text-gray-700 dark:text-gray-400" style={{ fontSize: "16px" }}>groups</span>
                  <p className="text-gray-700 dark:text-gray-400 text-xs font-semibold">Público Amplo</p>
                </div>
              </div>
            </div>
          </div>
        </details>
      </div>

      {/* Spacer */}
      <div className="flex-1"></div>

      {/* Bottom Action */}
      <div className="p-5 pb-8 bg-surface-light dark:bg-surface-dark border-t border-border-light dark:border-border-dark">
        <Link to="/module/5/negative-keywords" className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3.5 transition-transform active:scale-[0.98]">
          <p className="text-white text-base font-bold tracking-tight">Próxima Aula</p>
          <span className="material-symbols-outlined text-white" style={{ fontSize: "20px" }}>arrow_forward</span>
        </Link>
        <p className="text-center text-xs text-text-sec-light dark:text-text-sec-dark mt-3">Módulo 05 • Aula 02 de 10</p>
      </div>
    </div>
  );
}

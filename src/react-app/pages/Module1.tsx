import { Link } from "react-router-dom";


export default function Module1() {
  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root max-w-md mx-auto bg-background-light dark:bg-background-dark shadow-xl font-display">
      {/* Header */}
      <div className="sticky top-0 z-50 flex items-center bg-surface-light dark:bg-surface-dark p-4 pb-2 justify-between border-b border-gray-200 dark:border-gray-800 transition-colors">
        <Link to="/" className="text-[#111418] dark:text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </Link>
        <h2 className="text-[#111418] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
          Módulo 01
        </h2>
        <div className="size-10"></div>
      </div>

      <main className="flex-1 pb-24">
        <div className="px-5 pt-4">
          <p className="text-[#617589] dark:text-gray-400 text-xs font-medium leading-normal flex items-center gap-1">
            <Link to="/" className="hover:text-module1-primary cursor-pointer">Início</Link>
            <span className="material-symbols-outlined text-[10px]">chevron_right</span>
            <span className="text-module1-primary font-semibold">Módulo 01</span>
          </p>
        </div>
        <div className="px-5 pt-4 pb-2">
          <h1 className="text-[#111418] dark:text-white tracking-tight text-[26px] font-bold leading-tight mb-2">
            Definição de Avatar e Persona
          </h1>
          <p className="text-[#617589] dark:text-gray-400 text-sm font-normal leading-relaxed">
            Aula: Entendendo seu paciente ideal para construir uma marca mais forte.
          </p>
        </div>

        <section className="mt-4">
          <h3 className="text-[#111418] dark:text-white text-lg font-bold leading-tight px-5 pb-3 flex items-center gap-2">
            <span className="material-symbols-outlined text-module1-primary">assignment</span>
            Worksheet Interativa
          </h3>
          <div className="px-5 flex flex-col gap-4">
            <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700 ring-1 ring-module1-primary/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="size-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-module1-primary">
                  <span className="material-symbols-outlined">person</span>
                </div>
                <h4 className="font-bold text-base text-[#111418] dark:text-white">Dados Demográficos</h4>
              </div>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Faixa Etária</label>
                  <input className="w-full bg-background-light dark:bg-background-dark border-none rounded-lg text-sm px-3 py-2.5 text-[#111418] dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-module1-primary/50 outline-none" placeholder="ex: 45-65 anos" type="text" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Localização</label>
                    <input className="w-full bg-background-light dark:bg-background-dark border-none rounded-lg text-sm px-3 py-2.5 text-[#111418] dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-module1-primary/50 outline-none" placeholder="Cidade/Região" type="text" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Ocupação</label>
                    <input className="w-full bg-background-light dark:bg-background-dark border-none rounded-lg text-sm px-3 py-2.5 text-[#111418] dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-module1-primary/50 outline-none" placeholder="Cargo/Profissão" type="text" />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-red-500">
                    <span className="material-symbols-outlined">healing</span>
                  </div>
                  <h4 className="font-bold text-base text-[#111418] dark:text-white">Dores e Necessidades</h4>
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Qual é a queixa principal?</label>
                <textarea className="w-full bg-background-light dark:bg-background-dark border-none rounded-lg text-sm px-3 py-2.5 text-[#111418] dark:text-white placeholder-gray-400 resize-none focus:ring-2 focus:ring-module1-primary/50 outline-none" placeholder="Descreva as dores e sintomas..." rows={2}></textarea>
              </div>
            </div>

            <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-orange-500">
                    <span className="material-symbols-outlined">shield</span>
                  </div>
                  <h4 className="font-bold text-base text-[#111418] dark:text-white">Objeções</h4>
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Por que eles hesitam?</label>
                <textarea className="w-full bg-background-light dark:bg-background-dark border-none rounded-lg text-sm px-3 py-2.5 text-[#111418] dark:text-white placeholder-gray-400 resize-none focus:ring-2 focus:ring-module1-primary/50 outline-none" placeholder="Custo, medo da cirurgia, tempo..." rows={2}></textarea>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 px-5">
          <h3 className="text-[#111418] dark:text-white text-lg font-bold leading-tight pb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-module1-primary">timeline</span>
            Jornada do Paciente
          </h3>
          <div className="relative pl-2">
            <div className="absolute left-[19px] top-2 bottom-4 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
            <div className="relative flex gap-4 mb-6 group">
              <div className="relative z-10 size-10 rounded-full bg-surface-light dark:bg-surface-dark border-2 border-module1-primary flex items-center justify-center shrink-0 shadow-sm">
                <span className="material-symbols-outlined text-module1-primary text-sm">visibility</span>
              </div>
              <div className="bg-surface-light dark:bg-surface-dark p-3 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm w-full">
                <h5 className="font-bold text-[#111418] dark:text-white text-sm">Consciência</h5>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Diagnosticando o problema. O paciente percebe que tem um sintoma.</p>
              </div>
            </div>
            <div className="relative flex gap-4 mb-6 group">
              <div className="relative z-10 size-10 rounded-full bg-surface-light dark:bg-surface-dark border-2 border-module1-primary/40 flex items-center justify-center shrink-0 shadow-sm">
                <span className="material-symbols-outlined text-module1-primary/70 text-sm">manage_search</span>
              </div>
              <div className="bg-surface-light dark:bg-surface-dark p-3 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm w-full">
                <h5 className="font-bold text-[#111418] dark:text-white text-sm">Consideração</h5>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Avaliando opções de tratamento e pesquisando especialistas.</p>
              </div>
            </div>
            <div className="relative flex gap-4 group">
              <div className="relative z-10 size-10 rounded-full bg-surface-light dark:bg-surface-dark border-2 border-module1-primary/20 flex items-center justify-center shrink-0 shadow-sm">
                <span className="material-symbols-outlined text-module1-primary/50 text-sm">check_circle</span>
              </div>
              <div className="bg-surface-light dark:bg-surface-dark p-3 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm w-full">
                <h5 className="font-bold text-[#111418] dark:text-white text-sm">Decisão</h5>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Escolhendo você como especialista e agendando a consulta.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 px-5 pb-6">
          <div className="bg-blue-50 dark:bg-module1-primary/10 rounded-xl p-5 border border-blue-100 dark:border-module1-primary/20">
            <h3 className="text-[#111418] dark:text-white text-lg font-bold leading-tight pb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-module1-primary">edit_note</span>
              Tarefa Prática
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Escreva um breve parágrafo descrevendo seu paciente foco com base nos dados acima.</p>
            <textarea className="w-full rounded-lg border-gray-200 dark:border-gray-600 bg-white dark:bg-surface-dark p-3 text-sm text-[#111418] dark:text-white placeholder-gray-400 focus:border-module1-primary focus:ring-module1-primary shadow-sm outline-none" placeholder="Meu paciente ideal é um atleta de 45 anos que sofre de dores crônicas no joelho..." rows={5}></textarea>
          </div>
        </section>
      </main>

      <div className="fixed bottom-0 left-0 right-0 z-50 bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800 p-4 max-w-md mx-auto">
        <button className="w-full rounded-xl bg-module1-primary px-4 py-3.5 text-sm font-bold text-white shadow-lg shadow-module1-primary/30 transition-all hover:bg-module1-primary/90 hover:shadow-module1-primary/40 focus:outline-none focus:ring-2 focus:ring-module1-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900 flex items-center justify-center gap-2">
          <span>Salvar e Continuar</span>
          <span className="material-symbols-outlined text-lg">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}

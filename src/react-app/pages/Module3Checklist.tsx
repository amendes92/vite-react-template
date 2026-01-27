import { Link } from "react-router-dom";


export default function Module3Checklist() {
  return (
    <div className="relative flex h-full w-full max-w-md mx-auto flex-col bg-background-light dark:bg-background-dark overflow-hidden shadow-xl min-h-screen text-text-main-light dark:text-text-main-dark font-display">
      {/* TopAppBar */}
      <div className="flex items-center bg-surface-light dark:bg-surface-dark px-4 py-3 justify-between sticky top-0 z-20 border-b border-border-light dark:border-border-dark">
        <Link to="/module/3" className="text-text-main-light dark:text-text-main-dark hover:bg-background-light dark:hover:bg-background-dark p-2 rounded-full transition-colors flex items-center justify-center">
          <span className="material-symbols-outlined" style={{ fontSize: "24px" }}>arrow_back</span>
        </Link>
        <h2 className="text-text-main-light dark:text-text-main-dark text-base font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10">
          Módulo 3: Presença Digital
        </h2>
      </div>

      <main className="flex-1 flex flex-col pb-24 overflow-y-auto no-scrollbar">
        {/* HeadlineText */}
        <div className="bg-surface-light dark:bg-surface-dark px-6 pt-6 pb-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-xs font-bold mb-3 uppercase tracking-wider">
            Aula 2
          </div>
          <h1 className="text-text-main-light dark:text-text-main-dark text-2xl font-bold leading-tight tracking-tight">
            Google Meu Negócio <br /><span className="text-text-secondary-light dark:text-text-secondary-dark text-lg font-medium">(Perfil da Empresa)</span>
          </h1>
        </div>

        {/* ProgressBar */}
        <div className="bg-surface-light dark:bg-surface-dark px-6 pb-6 pt-2 mb-2">
          <div className="flex flex-col gap-2">
            <div className="flex gap-6 justify-between items-end">
              <p className="text-text-main-light dark:text-text-main-dark text-sm font-semibold leading-normal">Seu progresso</p>
              <p className="text-primary text-sm font-bold leading-normal">2 de 5</p>
            </div>
            <div className="rounded-full bg-background-light dark:bg-background-dark h-2.5 overflow-hidden">
              <div className="h-full rounded-full bg-primary transition-all duration-500 ease-out" style={{ width: "40%" }}></div>
            </div>
            <p className="text-text-secondary-light dark:text-text-secondary-dark text-xs font-normal leading-normal mt-1">Complete a lista para otimizar seu perfil médico.</p>
          </div>
        </div>

        {/* Accordions / Checklist */}
        <div className="flex flex-col px-4 pt-4 gap-3">
          {/* Item 1: Checked */}
          <div className="group rounded-xl bg-surface-light dark:bg-surface-dark border border-primary/20 shadow-sm overflow-hidden transition-all duration-200">
            <div className="flex items-start p-4 gap-3">
              <div className="pt-0.5">
                <input defaultChecked className="h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer transition-all" type="checkbox" />
              </div>
              <details className="w-full group/details" open>
                <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
                  <span className="text-text-main-light dark:text-text-main-dark text-base font-bold leading-normal select-none">Configurações NAP</span>
                  <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark transition-transform group-open/details:rotate-180" style={{ fontSize: "24px" }}>expand_more</span>
                </summary>
                <div className="pt-3 pb-1 pl-0">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-text-secondary-light dark:text-text-secondary-dark text-sm leading-relaxed bg-primary-light dark:bg-primary/10 p-3 rounded-lg">
                      <span className="material-symbols-outlined text-primary shrink-0" style={{ fontSize: "18px", marginTop: "2px" }}>check_circle</span>
                      <span><strong>Consistência:</strong> Nome, Endereço e Telefone devem ser idênticos em todas as redes sociais e no site.</span>
                    </li>
                    <li className="flex items-start gap-3 text-text-secondary-light dark:text-text-secondary-dark text-sm leading-relaxed p-2">
                      <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark shrink-0" style={{ fontSize: "18px", marginTop: "2px" }}>schedule</span>
                      <span>Horário de funcionamento atualizado, incluindo feriados.</span>
                    </li>
                  </ul>
                </div>
              </details>
            </div>
          </div>

          {/* Item 2: Checked */}
          <div className="group rounded-xl bg-surface-light dark:bg-surface-dark border border-primary/20 shadow-sm overflow-hidden transition-all duration-200">
            <div className="flex items-start p-4 gap-3">
              <div className="pt-0.5">
                <input defaultChecked className="h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer transition-all" type="checkbox" />
              </div>
              <details className="w-full group/details">
                <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
                  <span className="text-text-main-light dark:text-text-main-dark text-base font-bold leading-normal select-none">Fotos Profissionais</span>
                  <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark transition-transform group-open/details:rotate-180" style={{ fontSize: "24px" }}>expand_more</span>
                </summary>
                <div className="pt-3 pb-1 pl-0">
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="h-20 bg-gray-200 dark:bg-gray-700 rounded-lg relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-tr from-gray-300 to-gray-100 dark:from-gray-600 dark:to-gray-800 flex items-center justify-center text-xs text-gray-500 font-medium">Fachada</div>
                    </div>
                    <div className="h-20 bg-gray-200 dark:bg-gray-700 rounded-lg relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-tr from-gray-300 to-gray-100 dark:from-gray-600 dark:to-gray-800 flex items-center justify-center text-xs text-gray-500 font-medium">Equipe</div>
                    </div>
                  </div>
                  <ul className="space-y-2 pl-2 border-l-2 border-primary/20">
                    <li className="text-text-secondary-light dark:text-text-secondary-dark text-sm">Foto da fachada do consultório (fácil identificação).</li>
                    <li className="text-text-secondary-light dark:text-text-secondary-dark text-sm">Fotos da equipe e sala de espera (humanização).</li>
                  </ul>
                </div>
              </details>
            </div>
          </div>

          {/* Item 3: Unchecked */}
          <div className="group rounded-xl bg-surface-light dark:bg-surface-dark border border-transparent hover:border-border-light dark:hover:border-border-dark shadow-sm overflow-hidden transition-all duration-200">
            <div className="flex items-start p-4 gap-3">
              <div className="pt-0.5">
                <input className="h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer transition-all" type="checkbox" />
              </div>
              <details className="w-full group/details">
                <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
                  <span className="text-text-main-light dark:text-text-main-dark text-base font-bold leading-normal select-none">Produtos e Serviços</span>
                  <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark transition-transform group-open/details:rotate-180" style={{ fontSize: "24px" }}>expand_more</span>
                </summary>
                <div className="pt-3 pb-1 pl-0">
                  <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm leading-relaxed mb-3">
                    Não deixe em branco. Liste seus tratamentos principais para ser encontrado nas buscas específicas.
                  </p>
                  <div className="bg-background-light dark:bg-background-dark p-3 rounded-lg border border-border-light dark:border-border-dark">
                    <p className="text-xs font-bold text-text-secondary-light dark:text-text-secondary-dark uppercase tracking-wide mb-2">Exemplos para Ortopedia:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-white dark:bg-surface-dark px-2 py-1 rounded border border-gray-200 dark:border-gray-700 text-text-main-light dark:text-text-main-dark">Cirurgia de Joelho</span>
                      <span className="text-xs bg-white dark:bg-surface-dark px-2 py-1 rounded border border-gray-200 dark:border-gray-700 text-text-main-light dark:text-text-main-dark">Artroscopia</span>
                      <span className="text-xs bg-white dark:bg-surface-dark px-2 py-1 rounded border border-gray-200 dark:border-gray-700 text-text-main-light dark:text-text-main-dark">Prótese de Quadril</span>
                    </div>
                  </div>
                </div>
              </details>
            </div>
          </div>

          {/* Item 4: Unchecked */}
          <div className="group rounded-xl bg-surface-light dark:bg-surface-dark border border-transparent hover:border-border-light dark:hover:border-border-dark shadow-sm overflow-hidden transition-all duration-200">
            <div className="flex items-start p-4 gap-3">
              <div className="pt-0.5">
                <input className="h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer transition-all" type="checkbox" />
              </div>
              <details className="w-full group/details">
                <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
                  <span className="text-text-main-light dark:text-text-main-dark text-base font-bold leading-normal select-none">Gestão de Avaliações</span>
                  <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark transition-transform group-open/details:rotate-180" style={{ fontSize: "24px" }}>expand_more</span>
                </summary>
                <div className="pt-3 pb-1 pl-0">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-text-secondary-light dark:text-text-secondary-dark text-sm leading-relaxed">
                      <span className="material-symbols-outlined text-primary shrink-0" style={{ fontSize: "20px" }}>link</span>
                      <span>Crie um <strong>link direto</strong> para enviar pelo WhatsApp solicitando avaliações de pacientes satisfeitos.</span>
                    </li>
                    <li className="flex items-start gap-3 text-text-secondary-light dark:text-text-secondary-dark text-sm leading-relaxed">
                      <span className="material-symbols-outlined text-primary shrink-0" style={{ fontSize: "20px" }}>forum</span>
                      <span>Responda a <strong>todas</strong> as avaliações (positivas e negativas) com ética e profissionalismo.</span>
                    </li>
                  </ul>
                </div>
              </details>
            </div>
          </div>

          {/* Item 5: Unchecked */}
          <div className="group rounded-xl bg-surface-light dark:bg-surface-dark border border-transparent hover:border-border-light dark:hover:border-border-dark shadow-sm overflow-hidden transition-all duration-200">
            <div className="flex items-start p-4 gap-3">
              <div className="pt-0.5">
                <input className="h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer transition-all" type="checkbox" />
              </div>
              <details className="w-full group/details">
                <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
                  <span className="text-text-main-light dark:text-text-main-dark text-base font-bold leading-normal select-none">Perguntas e Respostas (Q&amp;A)</span>
                  <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark transition-transform group-open/details:rotate-180" style={{ fontSize: "24px" }}>expand_more</span>
                </summary>
                <div className="pt-3 pb-1 pl-0">
                  <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm leading-relaxed mb-2">
                    Antecipe as dúvidas dos seus pacientes. Você mesmo pode cadastrar perguntas comuns.
                  </p>
                  <div className="bg-primary/5 dark:bg-primary/10 p-3 rounded-lg border-l-4 border-primary">
                    <p className="text-sm italic text-text-main-light dark:text-text-main-dark">"Aceita convênio X?", "Tem estacionamento?", "Atende urgência?"</p>
                  </div>
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
        <Link to="/module/3/anatomy" className="w-full flex items-center justify-center gap-2 rounded-xl h-14 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] shadow-lg hover:bg-blue-700 active:scale-[0.98] transition-all">
          <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>save</span>
          <span>Salvar Progresso</span>
        </Link>
      </div>
    </div>
  );
}

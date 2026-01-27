import { Link } from "react-router-dom";


export default function Module3Intro() {
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden pb-20 max-w-md mx-auto bg-white dark:bg-[#101622] shadow-xl text-[#111318] dark:text-white transition-colors duration-200 font-display">
      {/* Top App Bar */}
      <div className="flex items-center p-4 pb-2 justify-between sticky top-0 z-10 bg-white/90 dark:bg-[#101622]/90 backdrop-blur-md">
        <Link to="/" className="text-[#111318] dark:text-white flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </Link>
        <h2 className="text-[#111318] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Módulo 03</h2>
      </div>

      {/* Header Content */}
      <div className="px-5 pt-4 pb-2">
        <span className="text-primary dark:text-blue-400 text-sm font-semibold tracking-wide uppercase">Marketing para Ortopedistas</span>
        <h1 className="text-[#111318] dark:text-white tracking-tight text-[32px] font-bold leading-tight mt-1 mb-2">Presença Digital</h1>
        <p className="text-[#616f89] dark:text-gray-400 text-base font-normal leading-normal">
          Aprenda a dominar o Google Meu Negócio e crie sites que convertem pacientes.
        </p>
      </div>

      {/* Progress Overview */}
      <div className="px-5 py-4">
        <div className="flex justify-between items-end mb-2">
          <span className="text-sm font-medium text-[#111318] dark:text-white">Progresso do Módulo</span>
          <span className="text-xs font-bold text-primary dark:text-blue-400">15%</span>
        </div>
        <div className="w-full bg-[#dbdfe6] dark:bg-gray-700 rounded-full h-2">
          <div className="bg-primary h-2 rounded-full" style={{ width: "15%" }}></div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col gap-4 px-4 pb-4">
        {/* Card 1: Google Meu Negócio */}
        <div className="flex flex-col gap-3 rounded-xl bg-white dark:bg-[#1e2736] p-4 shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-gray-100 dark:border-gray-800">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-900/30 text-primary dark:text-blue-300">
              <span className="material-symbols-outlined text-[28px]">storefront</span>
            </div>
            <div className="flex flex-1 flex-col justify-center">
              <h3 className="text-[#111318] dark:text-white text-lg font-bold leading-tight mb-1">Google Meu Negócio</h3>
              <p className="text-[#616f89] dark:text-gray-400 text-sm font-normal leading-normal line-clamp-2">
                Otimize seu perfil para aparecer nas buscas locais de pacientes.
              </p>
            </div>
          </div>
          <div className="mt-2">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-[#616f89] dark:text-gray-400 font-medium">3 de 10 Aulas</span>
              <span className="text-xs font-bold text-[#111318] dark:text-white">30%</span>
            </div>
            <div className="rounded-full bg-[#f0f2f4] dark:bg-gray-700 h-1.5 w-full overflow-hidden">
              <div className="h-full rounded-full bg-primary transition-all duration-300" style={{ width: "30%" }}></div>
            </div>
          </div>
          <Link to="/module/3/checklist" className="mt-2 w-full cursor-pointer flex items-center justify-center rounded-lg h-10 bg-primary hover:bg-blue-700 text-white text-sm font-medium leading-normal transition-colors">
            Continuar Aula
          </Link>
        </div>

        {/* Card 2: Site de Alta Conversão */}
        <div className="flex flex-col gap-3 rounded-xl bg-white dark:bg-[#1e2736] p-4 shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-gray-100 dark:border-gray-800 opacity-90">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-300">
              <span className="material-symbols-outlined text-[28px]">language</span>
            </div>
            <div className="flex flex-1 flex-col justify-center">
              <h3 className="text-[#111318] dark:text-white text-lg font-bold leading-tight mb-1">Site de Alta Conversão</h3>
              <p className="text-[#616f89] dark:text-gray-400 text-sm font-normal leading-normal line-clamp-2">
                Estrutura ideal de site médico para agendamento de consultas.
              </p>
            </div>
          </div>
          <div className="mt-2">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-[#616f89] dark:text-gray-400 font-medium">Não iniciado</span>
              <span className="text-xs font-bold text-[#111318] dark:text-white">0%</span>
            </div>
            <div className="rounded-full bg-[#f0f2f4] dark:bg-gray-700 h-1.5 w-full overflow-hidden">
              <div className="h-full rounded-full bg-primary transition-all duration-300" style={{ width: "0%" }}></div>
            </div>
          </div>
          <Link to="/module/3/anatomy" className="mt-2 w-full cursor-pointer flex items-center justify-center rounded-lg h-10 bg-white dark:bg-transparent border border-[#dbdfe6] dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-[#111318] dark:text-white text-sm font-medium leading-normal transition-colors">
            Iniciar
          </Link>
        </div>

        {/* Upcoming Module Teaser */}
        <div className="mt-4 px-2">
          <h4 className="text-sm font-semibold text-[#616f89] dark:text-gray-400 uppercase tracking-wider mb-3 ml-1">Próximos passos</h4>
          <div className="flex items-center gap-4 rounded-lg p-3 border border-dashed border-gray-300 dark:border-gray-700 opacity-60">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-400">
              <span className="material-symbols-outlined text-[20px]">lock</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#111318] dark:text-white font-medium text-sm">Módulo 04: Redes Sociais</span>
              <span className="text-xs text-gray-500 dark:text-gray-500">Disponível após conclusão</span>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for Bottom Nav */}
      <div className="h-20"></div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex max-w-md mx-auto h-16 w-full items-center justify-around border-t border-[#f0f2f4] dark:border-gray-800 bg-white dark:bg-[#101622]">
        <Link className="flex flex-col items-center justify-center gap-1 text-[#616f89] dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" to="/">
          <span className="material-symbols-outlined text-[24px]">home</span>
          <span className="text-[10px] font-medium">Início</span>
        </Link>
        <Link className="flex flex-col items-center justify-center gap-1 text-primary dark:text-blue-400" to="/module/3">
          <span className="material-symbols-outlined text-[24px] filled">view_module</span>
          <span className="text-[10px] font-medium">Módulos</span>
        </Link>
        <a className="flex flex-col items-center justify-center gap-1 text-[#616f89] dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" href="#">
          <span className="material-symbols-outlined text-[24px]">folder_open</span>
          <span className="text-[10px] font-medium">Recursos</span>
        </a>
        <a className="flex flex-col items-center justify-center gap-1 text-[#616f89] dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" href="#">
          <span className="material-symbols-outlined text-[24px]">support_agent</span>
          <span className="text-[10px] font-medium">Suporte</span>
        </a>
      </div>
    </div>
  );
}

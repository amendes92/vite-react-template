import { Link } from "react-router-dom";
import BottomNav from "../components/BottomNav";

export default function Module4() {
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden pb-20 max-w-md mx-auto bg-white dark:bg-[#101622] shadow-xl text-[#111318] dark:text-white transition-colors duration-200 font-display">
      {/* Top App Bar */}
      <div className="flex items-center p-4 pb-2 justify-between sticky top-0 z-10 bg-white/90 dark:bg-[#101622]/90 backdrop-blur-md">
        <Link to="/" className="text-[#111318] dark:text-white flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </Link>
        <h2 className="text-[#111318] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Módulo 04</h2>
      </div>

      {/* Header Content */}
      <div className="px-5 pt-4 pb-2">
        <span className="text-primary dark:text-blue-400 text-sm font-semibold tracking-wide uppercase">Redes Sociais</span>
        <h1 className="text-[#111318] dark:text-white tracking-tight text-[32px] font-bold leading-tight mt-1 mb-2">Marketing de Conteúdo</h1>
        <p className="text-[#616f89] dark:text-gray-400 text-base font-normal leading-normal">
          Transforme seguidores em pacientes com postagens estratégicas e educativas.
        </p>
      </div>

      {/* Progress Overview */}
      <div className="px-5 py-4">
        <div className="flex justify-between items-end mb-2">
          <span className="text-sm font-medium text-[#111318] dark:text-white">Progresso do Módulo</span>
          <span className="text-xs font-bold text-primary dark:text-blue-400">0%</span>
        </div>
        <div className="w-full bg-[#dbdfe6] dark:bg-gray-700 rounded-full h-2">
          <div className="bg-primary h-2 rounded-full" style={{ width: "0%" }}></div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col gap-4 px-4 pb-4">
        {/* Card 1: Calendário Editorial */}
        <div className="flex flex-col gap-3 rounded-xl bg-white dark:bg-[#1e2736] p-4 shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-gray-100 dark:border-gray-800">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300">
              <span className="material-symbols-outlined text-[28px]">calendar_month</span>
            </div>
            <div className="flex flex-1 flex-col justify-center">
              <h3 className="text-[#111318] dark:text-white text-lg font-bold leading-tight mb-1">Calendário Editorial</h3>
              <p className="text-[#616f89] dark:text-gray-400 text-sm font-normal leading-normal line-clamp-2">
                O que postar em cada dia da semana para engajar seu público.
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
          <Link to="/module/4/calendar" className="mt-2 w-full cursor-pointer flex items-center justify-center rounded-lg h-10 bg-primary hover:bg-blue-700 text-white text-sm font-medium leading-normal transition-colors">
            Iniciar Aula
          </Link>
        </div>

        {/* Card 2: Copywriting Médico */}
        <div className="flex flex-col gap-3 rounded-xl bg-white dark:bg-[#1e2736] p-4 shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-gray-100 dark:border-gray-800 opacity-90">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-300">
              <span className="material-symbols-outlined text-[28px]">edit_note</span>
            </div>
            <div className="flex flex-1 flex-col justify-center">
              <h3 className="text-[#111318] dark:text-white text-lg font-bold leading-tight mb-1">Copywriting Médico</h3>
              <p className="text-[#616f89] dark:text-gray-400 text-sm font-normal leading-normal line-clamp-2">
                Escreva legendas que conectam e convertem sem ferir a ética.
              </p>
            </div>
          </div>
          <div className="mt-2">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-[#616f89] dark:text-gray-400 font-medium">Bloqueado</span>
              <span className="text-xs font-bold text-[#111318] dark:text-white">0%</span>
            </div>
            <div className="rounded-full bg-[#f0f2f4] dark:bg-gray-700 h-1.5 w-full overflow-hidden">
              <div className="h-full rounded-full bg-primary transition-all duration-300" style={{ width: "0%" }}></div>
            </div>
          </div>
          <button className="mt-2 w-full flex items-center justify-center rounded-lg h-10 bg-white dark:bg-transparent border border-[#dbdfe6] dark:border-gray-600 text-gray-400 cursor-not-allowed">
            <span className="material-symbols-outlined text-sm mr-2">lock</span> Em Breve
          </button>
        </div>
      </div>

      {/* Spacer for Bottom Nav */}
      <div className="h-20"></div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}

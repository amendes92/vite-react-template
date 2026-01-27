import { Link } from "react-router-dom";

interface HomeProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Home({ toggleTheme }: HomeProps) {
  return (
    <div className="relative flex h-full min-h-screen w-full max-w-[450px] mx-auto flex-col overflow-x-hidden bg-background-light dark:bg-background-dark pb-24 shadow-2xl transition-colors duration-200">
      {/* Header */}
      <header className="flex items-center justify-between px-6 pt-8 pb-4 bg-surface-light dark:bg-surface-dark sticky top-0 z-10 shadow-sm transition-colors duration-200">
        <div className="flex flex-col justify-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal mb-1">
            Bem-vindo ao Marketing Ortopédico
          </p>
          <h1 className="text-text-main-light dark:text-white text-2xl font-bold leading-tight tracking-tight">
            Olá, Dr. Ricardo
          </h1>
        </div>
        <div className="relative group cursor-pointer" onClick={toggleTheme}>
          <div
            className="bg-center bg-no-repeat bg-cover rounded-full h-12 w-12 ring-2 ring-primary/20"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCEk2Y7akVFfpghG2h-4jEvBQL14usOgCutkgRMz0K2d5mp_-Srtu-gzDa3HU03EeXWfXQLrFAU1yrOpzBIvRYYQaDXqwJPA5XTBrCf7-snjaPGLA4BHMoEyRxtS7UbN6jfbjiTTfrCYwVGDhWUoqjCOJO0SukYEdFH01Qdvvc-vNRBAVnEDnrbDfg_HFX8Qre5NiXuUdIy7zuAdM8RBHbJi_zSsxQwAXoymDE6y3Got1vr_gdoD0GU7c-b9wKvLlStVLWcwJZq46QE")',
            }}
          ></div>
          <div className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full border-2 border-white dark:border-surface-dark"></div>
        </div>
      </header>

      {/* Continue Playing Hero Section */}
      <div className="px-6 py-6">
        <h2 className="text-text-main-light dark:text-white tracking-tight text-lg font-bold leading-tight mb-4">
          Continue de onde parou
        </h2>
        <Link to="/module/3" className="block">
          <div className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-4 active:scale-[0.98] transition-all duration-200 cursor-pointer group hover:shadow-md">
            <div className="flex items-start gap-4">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                <div
                  className="absolute inset-0 bg-center bg-no-repeat bg-cover transition-transform group-hover:scale-110 duration-500"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDIi-7CXyvdkfBps5fAkr6GIS5UyrPyqIvx7dVvSV9VcRzy2Nc2DsswJWP5h90jEK2qTIF1dBjU87x5wDF31fKqnVONPezLIvHbm2Ljp5MoCuslIi7z7thE5HXKzk2a-hFjkdQ671zTKTkEaG8LdGPYFj2nvFHPX4ZpFnFO-8LDw_DVC9KsQOuoAwxeBAqaDyl0zZy3PRhECNF8HBbbjMWgXv-VuABtjs9F1YBps_nWKd_qJSlu3OxdI8QfFC5eWFrCuysZF4nPvB4g")',
                  }}
                ></div>
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-3xl drop-shadow-lg">
                    play_circle
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-between h-20">
                <div>
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-primary/10 text-primary uppercase tracking-wide mb-1">
                    Módulo 3
                  </span>
                  <h3 className="text-text-main-light dark:text-white text-base font-bold leading-snug line-clamp-2">
                    Configurando o Business Manager
                  </h3>
                </div>
                <div className="flex items-center gap-3 w-full">
                  <div className="flex-1 h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    75%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Modules Grid */}
      <div className="px-6 pb-6">
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-text-main-light dark:text-white tracking-tight text-lg font-bold leading-tight">
            Módulos do Curso
          </h2>
          <button className="text-primary text-sm font-medium hover:text-primary/80">
            Ver todos
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {/* Strategy (Module 1 - mapped to Persona for now) */}
          <Link to="/module/1">
            <div className="flex flex-col gap-3 rounded-2xl bg-surface-light dark:bg-surface-dark p-4 border border-transparent hover:border-primary/20 hover:shadow-md transition-all cursor-pointer h-full">
              <div className="h-10 w-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">lightbulb</span>
              </div>
              <div>
                <h3 className="text-text-main-light dark:text-white text-sm font-bold leading-tight">
                  Módulo 01
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
                  Persona & Avatar
                </p>
              </div>
            </div>
          </Link>

          {/* Branding (Module 2) */}
          <Link to="/module/2">
            <div className="flex flex-col gap-3 rounded-2xl bg-surface-light dark:bg-surface-dark p-4 border border-transparent hover:border-primary/20 hover:shadow-md transition-all cursor-pointer h-full">
              <div className="h-10 w-10 rounded-full bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
                <span className="material-symbols-outlined">diamond</span>
              </div>
              <div>
                <h3 className="text-text-main-light dark:text-white text-sm font-bold leading-tight">
                  Branding
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
                  12 aulas
                </p>
              </div>
            </div>
          </Link>

          {/* Digital Presence (Module 3) */}
          <Link to="/module/3">
            <div className="flex flex-col gap-3 rounded-2xl bg-surface-light dark:bg-surface-dark p-4 border border-transparent hover:border-primary/20 hover:shadow-md transition-all cursor-pointer h-full">
              <div className="h-10 w-10 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-600 dark:text-green-400">
                <span className="material-symbols-outlined">devices</span>
              </div>
              <div>
                <h3 className="text-text-main-light dark:text-white text-sm font-bold leading-tight">
                  Presença Digital
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
                  8 aulas
                </p>
              </div>
            </div>
          </Link>

          {/* Content (Placeholder) */}
          <div className="flex flex-col gap-3 rounded-2xl bg-surface-light dark:bg-surface-dark p-4 border border-transparent hover:border-primary/20 hover:shadow-md transition-all cursor-pointer h-full opacity-60">
            <div className="h-10 w-10 rounded-full bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-orange-600 dark:text-orange-400">
              <span className="material-symbols-outlined">post_add</span>
            </div>
            <div>
              <h3 className="text-text-main-light dark:text-white text-sm font-bold leading-tight">
                Conteúdo
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
                Em breve
              </p>
            </div>
          </div>

          {/* Paid Traffic (Module 5) */}
          <Link to="/module/5">
            <div className="flex flex-col gap-3 rounded-2xl bg-surface-light dark:bg-surface-dark p-4 border border-transparent hover:border-primary/20 hover:shadow-md transition-all cursor-pointer h-full">
              <div className="h-10 w-10 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-red-600 dark:text-red-400">
                <span className="material-symbols-outlined">monitoring</span>
              </div>
              <div>
                <h3 className="text-text-main-light dark:text-white text-sm font-bold leading-tight">
                  Tráfego Pago
                </h3>
                <p className="text-primary text-xs font-medium mt-1">
                  Em andamento
                </p>
              </div>
            </div>
          </Link>

          {/* Ethics (Locked) */}
          <div className="flex flex-col gap-3 rounded-2xl bg-surface-light dark:bg-surface-dark p-4 border border-transparent hover:border-primary/20 hover:shadow-md transition-all cursor-pointer relative overflow-hidden opacity-60">
            <div className="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500">
              <span className="material-symbols-outlined">
                health_and_safety
              </span>
            </div>
            <div>
              <h3 className="text-text-main-light dark:text-white text-sm font-bold leading-tight">
                Ética Médica
              </h3>
              <p className="text-gray-400 text-xs mt-1">Bloqueado</p>
            </div>
            <div className="absolute right-2 top-2 text-gray-300 dark:text-gray-700">
              <span className="material-symbols-outlined text-lg">lock</span>
            </div>
          </div>
        </div>
      </div>

      {/* Exclusive Resources */}
      <div className="px-6 pb-6">
        <h2 className="text-text-main-light dark:text-white tracking-tight text-lg font-bold leading-tight mb-4">
          Recursos Exclusivos
        </h2>
        <div className="flex flex-col gap-3">
          {/* Resource 1 */}
          <Link to="/module/3/anatomy">
            <div className="flex items-center gap-4 bg-surface-light dark:bg-surface-dark p-4 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/80 transition-colors">
              <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-xl text-primary">
                <span className="material-symbols-outlined">query_stats</span>
              </div>
              <div className="flex-1">
                <h3 className="text-text-main-light dark:text-white text-base font-bold">
                  Analisador de Site
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs">
                  Avalie a performance da sua clínica
                </p>
              </div>
              <span className="material-symbols-outlined text-gray-400">
                chevron_right
              </span>
            </div>
          </Link>
          {/* Resource 2 */}
          <Link to="/module/3/checklist">
            <div className="flex items-center gap-4 bg-surface-light dark:bg-surface-dark p-4 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/80 transition-colors">
              <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-xl text-primary">
                <span className="material-symbols-outlined">checklist</span>
              </div>
              <div className="flex-1">
                <h3 className="text-text-main-light dark:text-white text-base font-bold">
                  Checklists
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs">
                  Protocolos de atendimento e pós
                </p>
              </div>
              <span className="material-symbols-outlined text-gray-400">
                chevron_right
              </span>
            </div>
          </Link>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full max-w-[450px] bg-surface-light/90 dark:bg-surface-dark/95 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800 pb-safe pt-2 px-2 z-50 transition-colors duration-200">
        <div className="flex justify-around items-center h-16">
          {/* Home (Active) */}
          <button className="flex flex-col items-center justify-center gap-1 w-full text-primary">
            <span className="material-symbols-outlined text-2xl filled">
              home
            </span>
            <span className="text-[10px] font-medium">Início</span>
          </button>
          {/* Modules */}
          <Link to="/module/1" className="flex flex-col items-center justify-center gap-1 w-full text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
            <span className="material-symbols-outlined text-2xl">
              view_module
            </span>
            <span className="text-[10px] font-medium">Módulos</span>
          </Link>
          {/* Reports */}
          <button className="flex flex-col items-center justify-center gap-1 w-full text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
            <span className="material-symbols-outlined text-2xl">
              bar_chart
            </span>
            <span className="text-[10px] font-medium">Relatórios</span>
          </button>
          {/* Profile */}
          <button className="flex flex-col items-center justify-center gap-1 w-full text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
            <span className="material-symbols-outlined text-2xl">person</span>
            <span className="text-[10px] font-medium">Perfil</span>
          </button>
        </div>
        {/* iOS Safe Area Spacer */}
        <div className="h-4 w-full"></div>
      </nav>
    </div>
  );
}

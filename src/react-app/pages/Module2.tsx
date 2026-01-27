import { Link } from "react-router-dom";


export default function Module2() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden pb-24 bg-background-light dark:bg-background-dark text-[#181411] dark:text-white font-display max-w-md mx-auto shadow-xl">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white dark:bg-[#1a120b] border-b border-gray-100 dark:border-gray-800 px-4 py-3 flex items-center justify-between shadow-sm transition-colors">
        <Link to="/" className="flex items-center justify-center size-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <span className="material-symbols-outlined text-[#181411] dark:text-white">arrow_back</span>
        </Link>
        <h2 className="text-[#181411] dark:text-white text-base font-bold leading-tight">Módulo 02</h2>
        <div className="flex items-center gap-2">
          <div className="w-16 h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-module2-primary w-1/2"></div>
          </div>
          <p className="text-[#8a7560] dark:text-[#a89078] text-xs font-bold">50%</p>
        </div>
      </header>

      {/* Breadcrumb & Title */}
      <div className="px-5 pt-6 pb-2">
        <p className="text-[#8a7560] dark:text-[#a89078] text-xs font-medium mb-2 uppercase tracking-wider">Início &gt; Módulo 02</p>
        <h1 className="text-[#181411] dark:text-white text-3xl font-bold leading-tight">Branding &amp; Identidade Visual</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 leading-relaxed">Construindo uma marca médica forte, consistente e confiável.</p>
      </div>

      {/* Color Palette Section */}
      <div className="mt-6">
        <div className="flex items-center justify-between px-5 mb-3">
          <h3 className="text-[#181411] dark:text-white text-lg font-bold">Paleta de Cores Sugerida</h3>
          <span className="material-symbols-outlined text-gray-400 text-xl">palette</span>
        </div>
        <div className="grid grid-cols-2 gap-3 px-5">
          {/* Azul Navy */}
          <div className="bg-white dark:bg-[#2c241b] p-3 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col gap-2 group hover:shadow-md transition-shadow">
            <div className="h-14 w-full rounded-lg bg-navy shadow-inner flex items-center justify-center">
              <span className="text-white/20 material-symbols-outlined text-3xl">shield</span>
            </div>
            <div>
              <p className="font-bold text-sm text-[#181411] dark:text-white">Azul Navy</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Confiança e Autoridade</p>
            </div>
          </div>
          {/* Verde Petróleo */}
          <div className="bg-white dark:bg-[#2c241b] p-3 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col gap-2 group hover:shadow-md transition-shadow">
            <div className="h-14 w-full rounded-lg bg-teal shadow-inner flex items-center justify-center">
              <span className="text-white/20 material-symbols-outlined text-3xl">ecg_heart</span>
            </div>
            <div>
              <p className="font-bold text-sm text-[#181411] dark:text-white">Verde Petróleo</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Serenidade e Saúde</p>
            </div>
          </div>
          {/* Cinza */}
          <div className="bg-white dark:bg-[#2c241b] p-3 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col gap-2 group hover:shadow-md transition-shadow">
            <div className="h-14 w-full rounded-lg bg-grey-brand shadow-inner flex items-center justify-center">
              <span className="text-white/20 material-symbols-outlined text-3xl">balance</span>
            </div>
            <div>
              <p className="font-bold text-sm text-[#181411] dark:text-white">Cinza Neutro</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Modernidade e Equilíbrio</p>
            </div>
          </div>
          {/* Laranja */}
          <div className="bg-white dark:bg-[#2c241b] p-3 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col gap-2 group hover:shadow-md transition-shadow">
            <div className="h-14 w-full rounded-lg bg-module2-primary shadow-inner flex items-center justify-center">
              <span className="text-white/20 material-symbols-outlined text-3xl">bolt</span>
            </div>
            <div>
              <p className="font-bold text-sm text-[#181411] dark:text-white">Laranja</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Energia e Acessibilidade</p>
            </div>
          </div>
        </div>
      </div>

      {/* Typography Section */}
      <div className="mt-8 px-5">
        <h3 className="text-[#181411] dark:text-white text-lg font-bold mb-3">Tipografia</h3>
        <div className="bg-white dark:bg-[#2c241b] rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
          <div className="p-5 border-b border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-[10px] font-bold uppercase tracking-wide rounded text-gray-600 dark:text-gray-300">Títulos</span>
              <span className="text-xs text-gray-400">Montserrat Bold</span>
            </div>
            <p className="font-montserrat font-bold text-2xl text-[#181411] dark:text-white">Ortopedia Avançada</p>
            <p className="font-montserrat font-semibold text-lg text-[#181411] dark:text-white opacity-80 mt-1">Tratamentos modernos</p>
          </div>
          <div className="p-5 bg-gray-50 dark:bg-[#261e16]">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-1 bg-white dark:bg-gray-700 text-[10px] font-bold uppercase tracking-wide rounded text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600">Corpo</span>
              <span className="text-xs text-gray-400">Open Sans Regular</span>
            </div>
            <p className="font-opensans text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              O uso de uma tipografia limpa como a Open Sans garante que seus pacientes consigam ler as informações com clareza em qualquer dispositivo móvel.
            </p>
          </div>
        </div>
      </div>

      {/* Photography Checklist */}
      <div className="mt-8 px-5">
        <h3 className="text-[#181411] dark:text-white text-lg font-bold mb-4">Checklist: Sessão de Fotos</h3>
        <div className="space-y-3">
          {/* Item 1 */}
          <div className="flex items-center bg-white dark:bg-[#2c241b] p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="flex items-center justify-center size-6 rounded border-2 border-module2-primary bg-module2-primary text-white mr-4">
              <span className="material-symbols-outlined text-sm font-bold">check</span>
            </div>
            <div className="flex-1">
              <p className="text-[#181411] dark:text-white font-medium text-sm">Foto de Perfil</p>
              <p className="text-xs text-gray-500">Rosto iluminado, com jaleco</p>
            </div>
            <button className="text-gray-400 hover:text-module2-primary transition-colors">
              <span className="material-symbols-outlined">info</span>
            </button>
          </div>
          {/* Item 2 */}
          <div className="flex items-center bg-white dark:bg-[#2c241b] p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="flex items-center justify-center size-6 rounded border-2 border-gray-300 dark:border-gray-600 mr-4">
            </div>
            <div className="flex-1">
              <p className="text-[#181411] dark:text-white font-medium text-sm">Foto em Ação</p>
              <p className="text-xs text-gray-500">Examinando exames ou modelo</p>
            </div>
            <button className="text-gray-400 hover:text-module2-primary transition-colors">
              <span className="material-symbols-outlined">info</span>
            </button>
          </div>
          {/* Item 3 */}
          <div className="flex items-center bg-white dark:bg-[#2c241b] p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="flex items-center justify-center size-6 rounded border-2 border-gray-300 dark:border-gray-600 mr-4">
            </div>
            <div className="flex-1">
              <p className="text-[#181411] dark:text-white font-medium text-sm">Ambiente</p>
              <p className="text-xs text-gray-500">Recepção e Consultório limpos</p>
            </div>
            <button className="text-gray-400 hover:text-module2-primary transition-colors">
              <span className="material-symbols-outlined">info</span>
            </button>
          </div>
          {/* Item 4 */}
          <div className="flex items-center bg-white dark:bg-[#2c241b] p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="flex items-center justify-center size-6 rounded border-2 border-gray-300 dark:border-gray-600 mr-4">
            </div>
            <div className="flex-1">
              <p className="text-[#181411] dark:text-white font-medium text-sm">Lifestyle</p>
              <p className="text-xs text-gray-500">Casual profissional, sem jaleco</p>
            </div>
            <button className="text-gray-400 hover:text-module2-primary transition-colors">
              <span className="material-symbols-outlined">info</span>
            </button>
          </div>
        </div>
      </div>

      {/* Logo Tips */}
      <div className="mt-8 px-5 mb-8">
        <h3 className="text-[#181411] dark:text-white text-lg font-bold mb-3">Dicas para Logotipo</h3>
        <div className="grid grid-cols-2 gap-4">
          {/* Don't */}
          <div className="flex flex-col gap-3">
            <div className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-lg p-2 text-center">
              <span className="text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wide">Clichês a Evitar</span>
            </div>
            <div className="bg-white dark:bg-[#2c241b] p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col items-center gap-2">
              <div className="relative size-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-400">
                <span className="material-symbols-outlined text-3xl">medical_services</span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-0.5 bg-red-500 rotate-45 rounded-full"></div>
                </div>
              </div>
              <p className="text-center text-xs text-gray-500">Cruz Genérica</p>
            </div>
            <div className="bg-white dark:bg-[#2c241b] p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col items-center gap-2">
              <div className="relative size-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-400">
                <span className="material-symbols-outlined text-3xl">skeleton</span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-0.5 bg-red-500 rotate-45 rounded-full"></div>
                </div>
              </div>
              <p className="text-center text-xs text-gray-500">Ossos Realistas</p>
            </div>
          </div>
          {/* Do */}
          <div className="flex flex-col gap-3">
            <div className="bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/30 rounded-lg p-2 text-center">
              <span className="text-green-600 dark:text-green-400 text-xs font-bold uppercase tracking-wide">Tendências</span>
            </div>
            <div className="bg-white dark:bg-[#2c241b] p-4 rounded-xl border border-green-100 dark:border-green-900/30 ring-1 ring-green-100 dark:ring-green-900/30 shadow-sm flex flex-col items-center gap-2">
              <div className="size-12 bg-green-50 dark:bg-green-900/20 rounded-full flex items-center justify-center text-green-600 dark:text-green-400">
                <span className="material-symbols-outlined text-3xl">all_inclusive</span>
              </div>
              <p className="text-center text-xs text-gray-500">Formas Abstratas</p>
            </div>
            <div className="bg-white dark:bg-[#2c241b] p-4 rounded-xl border border-green-100 dark:border-green-900/30 ring-1 ring-green-100 dark:ring-green-900/30 shadow-sm flex flex-col items-center gap-2">
              <div className="size-12 bg-green-50 dark:bg-green-900/20 rounded-full flex items-center justify-center text-green-600 dark:text-green-400">
                <span className="material-symbols-outlined text-3xl">font_download</span>
              </div>
              <p className="text-center text-xs text-gray-500">Iniciais Minimalistas</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Footer Action */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-white/90 dark:bg-[#1a120b]/90 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 z-50">
        <Link to="/module/3" className="w-full bg-module2-primary hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 transition-all active:scale-[0.98]">
          <span>Próximo Módulo</span>
          <span className="material-symbols-outlined text-xl">arrow_forward</span>
        </Link>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";


export default function Module3Anatomy() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden pb-24 bg-background-light dark:bg-background-dark font-display text-[#111318] dark:text-white transition-colors duration-200">
      {/* TopAppBar */}
      <div className="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 p-4 pb-2 flex items-center justify-between">
        <Link to="/module/3" aria-label="Voltar" className="text-primary hover:bg-primary/10 rounded-full p-2 -ml-2 transition-colors cursor-pointer flex shrink-0 items-center justify-center">
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </Link>
        <h2 className="text-[#111318] dark:text-white text-base font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10">Módulo 3: Presença Digital</h2>
      </div>

      {/* ProgressBar */}
      <div className="flex flex-col gap-3 px-6 pt-4">
        <div className="flex gap-6 justify-between">
          <p className="text-[#111318] dark:text-gray-200 text-sm font-medium leading-normal">Aula 3 de 10</p>
          <p className="text-primary text-sm font-bold">30%</p>
        </div>
        <div className="rounded-full bg-[#dbdfe6] dark:bg-gray-700 h-2 overflow-hidden">
          <div className="h-full rounded-full bg-primary transition-all duration-500" style={{ width: "30%" }}></div>
        </div>
      </div>

      {/* Header Text */}
      <div className="px-6 pt-6 pb-2">
        <h1 className="text-[#111318] dark:text-white tracking-tight text-[28px] font-bold leading-tight text-left mb-2">Anatomia da Landing Page</h1>
        <p className="text-[#616f89] dark:text-gray-400 text-base font-normal leading-relaxed">
          A estrutura validada para converter visitantes em pacientes particulares.
        </p>
      </div>

      {/* Infographic Container */}
      <div className="flex flex-row gap-4 px-4 py-8 justify-center items-start w-full max-w-md mx-auto">
        {/* Left Column: Phone Mockup */}
        <div className="sticky top-24 shrink-0">
          <div className="w-[160px] bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl border-4 border-gray-800 relative z-10">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-5 bg-gray-900 rounded-b-xl z-20"></div>
            {/* Screen */}
            <div className="bg-white w-full h-full rounded-[2rem] overflow-hidden flex flex-col relative aspect-[9/19.5]">
              {/* Floating WhatsApp Button */}
              <div className="absolute bottom-4 right-3 z-30 bg-[#25D366] w-8 h-8 rounded-full shadow-lg flex items-center justify-center animate-bounce">
                <span className="material-symbols-outlined text-white text-sm">chat</span>
              </div>

              {/* 1. Hero Section */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-3 pt-8 pb-4 flex flex-col gap-1 relative">
                {/* Badge */}
                <div className="absolute -left-1 top-8 bg-primary text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-r-md shadow-md z-20 border border-white">1</div>
                <div className="w-2/3 h-2 bg-white/20 rounded mb-1"></div>
                <div className="w-full h-3 bg-white rounded mb-1"></div>
                <div className="w-3/4 h-3 bg-white rounded mb-2"></div>
                <div className="w-1/2 h-5 bg-green-400 rounded-lg shadow-sm"></div>
                {/* Doctor Image Placeholder */}
                <div className="absolute right-0 bottom-0 w-16 h-20 bg-blue-900/30 rounded-tl-xl overflow-hidden">
                    <div className="w-full h-full bg-cover bg-center opacity-50" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA-weR6ocokG_2MqEm2h24ABEEG6FA1EImxevTdTHW38K7_90fZlfW-rCuLR6eHTRrl1MZgyyfNOWYhtQ86zW2KUQdRjZmx3fzDrp3o3s0zcA9bZ9QhqQfUkUeNAUpikbNMJ65AUrTIz-vmro8jwBLBWgEJgzL_0urwXJjkPqmZeqAYyNJWv_lrIa9g-ju7-Fl1USgV4oJyd0PfxQwKO2H_MwlZuOsq4tQ6w-KdC0ZfIoOxeRDjCzbv6rBy1TdrYHIJj6YdaRZw9bxg")' }}></div>
                </div>
              </div>

              {/* 2. About Section */}
              <div className="bg-white p-3 flex flex-col gap-2 relative border-b border-gray-100">
                {/* Badge */}
                <div className="absolute -left-1 top-3 bg-primary text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-r-md shadow-md z-20 border border-white">2</div>
                <div className="flex gap-2 items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden shrink-0">
                      <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAXxRzZYAyxsp8kLTUhOXZpowgThNyYa2QLRvUiMXGkMt04vuMDIChgEovNEt9ABesicSx9_45g26mqylNfs4puEBomPs2lJ5qw265pyXduSirfwxZu0FBb_Qtss_XQ8xnS1j3oFGkm_PHwjaKBKQeU3RR4zlTmiPAnTE5BoEzB5Ss03uQuUpGo_AzsJ9FzVvGRiZyKII7tq6A266oc9SDYBmCYYns5a9hbgckNYOfBGnCLp4qLtKDbDhgf6wY6z20SqWEn98t_BJeC")' }}></div>
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <div className="w-full h-1.5 bg-gray-800 rounded"></div>
                    <div className="w-3/4 h-1.5 bg-gray-300 rounded"></div>
                  </div>
                </div>
                <div className="w-full h-1 bg-gray-100 rounded"></div>
                <div className="w-full h-1 bg-gray-100 rounded"></div>
              </div>

              {/* 3. Treatments */}
              <div className="bg-slate-50 p-3 flex flex-col gap-2 relative">
                {/* Badge */}
                <div className="absolute -left-1 top-3 bg-primary text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-r-md shadow-md z-20 border border-white">3</div>
                <div className="w-1/2 h-2 bg-gray-800 rounded mx-auto mb-1"></div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white p-1 rounded shadow-sm h-8 flex items-center justify-center"><div className="w-3 h-3 bg-blue-100 rounded-full"></div></div>
                  <div className="bg-white p-1 rounded shadow-sm h-8 flex items-center justify-center"><div className="w-3 h-3 bg-blue-100 rounded-full"></div></div>
                  <div className="bg-white p-1 rounded shadow-sm h-8 flex items-center justify-center"><div className="w-3 h-3 bg-blue-100 rounded-full"></div></div>
                  <div className="bg-white p-1 rounded shadow-sm h-8 flex items-center justify-center"><div className="w-3 h-3 bg-blue-100 rounded-full"></div></div>
                </div>
              </div>

              {/* 4. Social Proof */}
              <div className="bg-white p-3 flex flex-col gap-2 relative">
                {/* Badge */}
                <div className="absolute -left-1 top-3 bg-primary text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-r-md shadow-md z-20 border border-white">4</div>
                <div className="w-1/3 h-2 bg-gray-800 rounded mb-1"></div>
                <div className="flex gap-2 overflow-hidden">
                  <div className="w-20 bg-gray-50 border border-gray-100 rounded p-1 shrink-0">
                    <div className="flex gap-1 mb-1">
                      <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                      <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                      <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                    </div>
                    <div className="w-full h-1 bg-gray-200 rounded mb-1"></div>
                    <div className="w-2/3 h-1 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>

              {/* 5. FAQ */}
              <div className="bg-slate-50 p-3 flex flex-col gap-1 relative">
                {/* Badge */}
                <div className="absolute -left-1 top-3 bg-primary text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-r-md shadow-md z-20 border border-white">5</div>
                <div className="w-1/4 h-2 bg-gray-800 rounded mb-1"></div>
                <div className="w-full h-4 bg-white border border-gray-200 rounded flex items-center px-1"><div className="w-3/4 h-1 bg-gray-300 rounded"></div></div>
                <div className="w-full h-4 bg-white border border-gray-200 rounded flex items-center px-1"><div className="w-1/2 h-1 bg-gray-300 rounded"></div></div>
              </div>

              {/* 6. Footer */}
              <div className="bg-gray-900 p-3 pt-4 pb-8 flex flex-col gap-1 relative text-center">
                {/* Badge */}
                <div className="absolute -left-1 top-3 bg-primary text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-r-md shadow-md z-20 border border-white">6</div>
                <div className="w-1/3 h-1.5 bg-gray-600 rounded mx-auto mb-1"></div>
                <div className="w-1/2 h-1 bg-gray-700 rounded mx-auto"></div>
                <div className="w-full h-10 mt-1 bg-gray-800 rounded opacity-50 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[10px] text-gray-500">location_on</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Explanatory Labels */}
        <div className="flex flex-col flex-1 gap-2 pt-2">
          {/* Label 1 */}
          <div className="flex gap-3 p-2 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-colors cursor-pointer group">
            <div className="flex flex-col pt-1">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20 shrink-0">1</span>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#111318] dark:text-white group-hover:text-primary transition-colors">Hero (Dobra)</h3>
              <p className="text-xs text-[#616f89] dark:text-gray-400 mt-1">A primeira impressão. Manchete forte, foto profissional e botão de ação claro.</p>
            </div>
          </div>
          {/* Label 2 */}
          <div className="flex gap-3 p-2 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-colors cursor-pointer group">
            <div className="flex flex-col pt-1">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20 shrink-0">2</span>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#111318] dark:text-white group-hover:text-primary transition-colors">Sobre o Médico</h3>
              <p className="text-xs text-[#616f89] dark:text-gray-400 mt-1">Gere autoridade e empatia. Mostre quem cuida do paciente.</p>
            </div>
          </div>
          {/* Label 3 */}
          <div className="flex gap-3 p-2 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-colors cursor-pointer group">
            <div className="flex flex-col pt-1">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20 shrink-0">3</span>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#111318] dark:text-white group-hover:text-primary transition-colors">Tratamentos</h3>
              <p className="text-xs text-[#616f89] dark:text-gray-400 mt-1">Liste o que você resolve de forma clara e direta.</p>
            </div>
          </div>
          {/* Label 4 */}
          <div className="flex gap-3 p-2 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-colors cursor-pointer group">
            <div className="flex flex-col pt-1">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20 shrink-0">4</span>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#111318] dark:text-white group-hover:text-primary transition-colors">Prova Social</h3>
              <p className="text-xs text-[#616f89] dark:text-gray-400 mt-1">Depoimentos reais que constroem confiança imediata.</p>
            </div>
          </div>
          {/* Label 5 */}
          <div className="flex gap-3 p-2 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-colors cursor-pointer group">
            <div className="flex flex-col pt-1">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20 shrink-0">5</span>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#111318] dark:text-white group-hover:text-primary transition-colors">FAQ</h3>
              <p className="text-xs text-[#616f89] dark:text-gray-400 mt-1">Quebre objeções respondendo as dúvidas frequentes.</p>
            </div>
          </div>
          {/* Label 6 */}
          <div className="flex gap-3 p-2 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-colors cursor-pointer group">
            <div className="flex flex-col pt-1">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20 shrink-0">6</span>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#111318] dark:text-white group-hover:text-primary transition-colors">Rodapé</h3>
              <p className="text-xs text-[#616f89] dark:text-gray-400 mt-1">Endereço, mapa, CRM e contatos oficiais.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky CTA */}
      <div className="fixed bottom-0 left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 p-4 z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <Link to="/module/5" className="w-full bg-primary text-white font-bold h-12 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 active:scale-[0.98] transition-all shadow-md shadow-blue-500/20">
          <span className="material-symbols-outlined text-[20px]">visibility</span>
          Ver Detalhes de Cada Seção
        </Link>
      </div>
    </div>
  );
}

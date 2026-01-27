import { Link } from "react-router-dom";


export default function Module5NegativeKeywords() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#111318] dark:text-white antialiased overflow-x-hidden pb-24 min-h-screen max-w-md mx-auto shadow-xl">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between bg-surface-light dark:bg-surface-dark px-4 py-3 shadow-sm transition-colors border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <Link to="/module/5/structure" className="flex size-10 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
        </div>
        <h1 className="text-base font-bold leading-tight tracking-tight text-slate-900 dark:text-white">Módulo 05: Tráfego</h1>
        <div className="flex w-10 justify-end">
          <button className="text-slate-500 hover:text-primary dark:text-slate-400">
            <span className="material-symbols-outlined">help</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col gap-6 px-4 py-6 w-full">
        {/* Hero / Concept Section */}
        <section className="flex flex-col items-center text-center gap-4 py-4">
          <div className="relative flex items-center justify-center">
            {/* Abstract background glow */}
            <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl"></div>
            <div className="relative flex size-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-lg shadow-primary/25">
              <span className="material-symbols-outlined" style={{ fontSize: "40px" }}>shield_lock</span>
            </div>
            {/* Floating "Prohibited" badge */}
            <div className="absolute -right-2 -top-2 flex size-8 items-center justify-center rounded-full bg-surface-light dark:bg-surface-dark p-0.5 shadow-md">
              <span className="material-symbols-outlined text-danger filled" style={{ fontSize: "24px" }}>block</span>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
              Blindagem de Verba
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-[280px] mx-auto">
              Não pague por cliques inúteis. Adicione estas palavras à lista negativa para evitar pacientes que buscam atendimento gratuito.
            </p>
          </div>
        </section>

        {/* Stats/Info Card */}
        <div className="rounded-xl border border-slate-200 bg-surface-light p-4 shadow-sm dark:border-slate-800 dark:bg-surface-dark">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
              <span className="material-symbols-outlined">savings</span>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white">Economia de Orçamento</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Negativar termos irrelevantes pode aumentar a eficiência da sua campanha em até 40%.
              </p>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="flex items-center gap-2 pt-2">
          <span className="material-symbols-outlined text-danger text-lg filled">warning</span>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Palavras a Negativar</h3>
        </div>

        {/* Negative Keywords List (Chips) */}
        <div className="flex flex-wrap gap-2.5">
          {["SUS", "Grátis", "Emprego", "Barato", "Popular", "Público", "De graça", "Estágio"].map((keyword) => (
            <div key={keyword} className="group flex cursor-default select-none items-center gap-2 rounded-lg border border-danger/20 bg-danger-light px-3 py-2 transition-all hover:border-danger/40 dark:bg-red-900/10 dark:border-red-500/20">
              <span className="material-symbols-outlined text-danger text-[18px]">close</span>
              <span className="text-sm font-semibold text-danger-900 dark:text-red-200">{keyword}</span>
            </div>
          ))}
        </div>
      </main>

      {/* Bottom Action Panel (Sticky) */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-slate-200 bg-surface-light p-4 dark:border-slate-800 dark:bg-surface-dark/95 backdrop-blur-sm z-40">
        <div className="mx-auto flex max-w-md flex-col gap-3">
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
            <span>Total: 8 palavras</span>
            <span className="flex items-center gap-1"><span className="size-2 rounded-full bg-green-500"></span>Pronto para copiar</span>
          </div>
          <button
            onClick={() => {
              const keywords = ["SUS", "Grátis", "Emprego", "Barato", "Popular", "Público", "De graça", "Estágio"];
              navigator.clipboard.writeText(keywords.join(", "));
              alert("Lista copiada para a área de transferência!");
            }}
            className="relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-primary px-6 py-3.5 text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark active:scale-[0.98]"
          >
            <span className="material-symbols-outlined text-[20px]">content_copy</span>
            <span className="font-bold tracking-wide">Copiar Lista para o Ads</span>
          </button>
        </div>
      </div>
    </div>
  );
}

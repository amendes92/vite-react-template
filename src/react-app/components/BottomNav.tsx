import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

export default function BottomNav() {
  const location = useLocation();
  const path = location.pathname;

  const isActive = (route: string) => {
    if (route === "/") {
      return path === "/";
    }
    return path.startsWith(route);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 w-full max-w-[450px] mx-auto bg-surface-light/90 dark:bg-surface-dark/95 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800 pb-safe pt-2 px-2 z-50 transition-colors duration-200">
      <div className="flex justify-around items-center h-16">
        {/* Home */}
        <Link
          to="/"
          className={clsx(
            "flex flex-col items-center justify-center gap-1 w-full transition-colors",
            isActive("/") ? "text-primary" : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          )}
        >
          <span className={clsx("material-symbols-outlined text-2xl", isActive("/") && "filled")}>
            home
          </span>
          <span className="text-[10px] font-medium">Início</span>
        </Link>

        {/* Modules */}
        <Link
          to="/" // Currently pointing to home as there is no dedicated modules list page, effectively scrolls to modules or just shows home
          className={clsx(
            "flex flex-col items-center justify-center gap-1 w-full transition-colors",
            isActive("/module") ? "text-primary" : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          )}
          onClick={(e) => {
             // Optional: Handle scroll to modules if on home page
             if (path === "/") {
                e.preventDefault();
                const modulesSection = document.getElementById("modules-section");
                modulesSection?.scrollIntoView({ behavior: "smooth" });
             }
          }}
        >
          <span className={clsx("material-symbols-outlined text-2xl", isActive("/module") && "filled")}>
            view_module
          </span>
          <span className="text-[10px] font-medium">Módulos</span>
        </Link>

        {/* Reports */}
        <button
          className="flex flex-col items-center justify-center gap-1 w-full text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
        >
          <span className="material-symbols-outlined text-2xl">
            bar_chart
          </span>
          <span className="text-[10px] font-medium">Relatórios</span>
        </button>

        {/* Profile */}
        <button
          className="flex flex-col items-center justify-center gap-1 w-full text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
        >
          <span className="material-symbols-outlined text-2xl">person</span>
          <span className="text-[10px] font-medium">Perfil</span>
        </button>
      </div>
      {/* iOS Safe Area Spacer */}
      <div className="h-4 w-full"></div>
    </nav>
  );
}

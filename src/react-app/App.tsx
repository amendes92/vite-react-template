import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Module1 from "./pages/Module1";
import Module2 from "./pages/Module2";
import Module3Intro from "./pages/Module3Intro";
import Module3Checklist from "./pages/Module3Checklist";
import Module3Anatomy from "./pages/Module3Anatomy";
import Module5 from "./pages/Module5";
import Module5Structure from "./pages/Module5Structure";
import Module5NegativeKeywords from "./pages/Module5NegativeKeywords";
import "./App.css";

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <BrowserRouter>
      <div className="bg-background-light dark:bg-background-dark min-h-screen text-text-main-light dark:text-text-main-dark font-display transition-colors duration-200">
        <Routes>
          <Route path="/" element={<Home isDark={isDark} toggleTheme={toggleTheme} />} />
          <Route path="/module/1" element={<Module1 />} />
          <Route path="/module/2" element={<Module2 />} />
          <Route path="/module/3" element={<Module3Intro />} />
          <Route path="/module/3/checklist" element={<Module3Checklist />} />
          <Route path="/module/3/anatomy" element={<Module3Anatomy />} />
          <Route path="/module/5" element={<Module5 />} />
          <Route path="/module/5/structure" element={<Module5Structure />} />
          <Route path="/module/5/negative-keywords" element={<Module5NegativeKeywords />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

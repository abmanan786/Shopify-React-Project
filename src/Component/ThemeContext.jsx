import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className={darkMode ? "bg-black text-white min-h-screen transition-all duration-300" : "bg-white text-black min-h-screen transition-all duration-300"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

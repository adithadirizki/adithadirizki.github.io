import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  return (
    <ThemeContext.Provider
      value={{
        mode,
        setMode: () => setMode(mode === "dark" ?? "light"),
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

import { createContext, useContext, useState } from "react";
import { THEMES } from "../config";

type ThemeContextType = {
  currentTheme: boolean; // true = dark, false = light
  changeTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const useThemeContext = () =>
  useContext(ThemeContext) as ThemeContextType;

type Props = {
  children?: React.ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
  const [currentTheme, setCurrentTheme] = useState(true);

  const changeTheme = () => {
    let themeLink = document.getElementById("app-theme") as HTMLAnchorElement;
    if (!themeLink) return;

    if (currentTheme) themeLink.href = THEMES.light;
    else themeLink.href = THEMES.dark;

    setCurrentTheme(!currentTheme);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

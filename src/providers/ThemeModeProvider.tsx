import * as React from "react";
import { ThemeModeEnum } from "../utils/enums.ts";
import { ThemeModeContext } from "../contexts/ThemeModeContext.tsx";

const metaThemePropertyName = "ariana-ocando-dark-theme";

function ThemeModeProvider({ children }: { children: React.ReactNode }) {
  const [isThemeDarkMode, setIsThemeDarMode] = React.useState<boolean>(false);

  const setThemeMode = () => {
    setIsThemeDarMode(
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  };

  const changeThemeMode = () => {
    const documentThemeIsDark = document.body.getAttribute(
      metaThemePropertyName
    );
    if (documentThemeIsDark === ThemeModeEnum.DARK) {
      document.body.setAttribute(metaThemePropertyName, ThemeModeEnum.LIGHT);
      setIsThemeDarMode(false);
    } else {
      document.body.setAttribute(metaThemePropertyName, ThemeModeEnum.DARK);
      setIsThemeDarMode(true);
    }
  };

  return (
    <ThemeModeContext.Provider
      value={{ isThemeDarkMode, changeThemeMode, setThemeMode }}
    >
      {children}
    </ThemeModeContext.Provider>
  );
}

export default ThemeModeProvider;

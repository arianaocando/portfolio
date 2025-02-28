import React from "react";
import "@styles/Layout.scss";
import splash1 from "@assets/splash_1.svg";
import splash2 from "@assets/splash_2.svg";
import splash3 from "@assets/splash_3.svg";
import splash4 from "@assets/splash_4.svg";
import splashDark1 from "@assets/dark-theme-image/splash_1_dark.svg";
import splashDark2 from "@assets/dark-theme-image/splash_2_dark.svg";
import splashDark3 from "@assets/dark-theme-image/splash_3_dark.svg";
import splashDark4 from "@assets/dark-theme-image/splash_4_dark.svg";
import { ThemeModeContext } from "../../contexts/ThemeModeContext.tsx";
import { ThemeModeContextType } from "../../contexts/types.themeMode.ts";

function Layout({ children }: React.PropsWithChildren) {
  const { isThemeDarkMode, setThemeMode } = React.useContext(
    ThemeModeContext
  ) as ThemeModeContextType;

  React.useEffect(() => {
    setThemeMode();
  }, []);

  return (
    <div className="page-wrapper">
      <img
        src={isThemeDarkMode ? splashDark1 : splash1}
        className="splash first-section"
      />
      <img
        src={isThemeDarkMode ? splashDark2 : splash2}
        className="splash second-section"
      />
      <img
        src={isThemeDarkMode ? splashDark3 : splash3}
        className="splash third-section"
      />
      <img
        src={isThemeDarkMode ? splashDark4 : splash4}
        className="splash footer-section"
      />
      <div className="page-container">{children}</div>
    </div>
  );
}

export default Layout;

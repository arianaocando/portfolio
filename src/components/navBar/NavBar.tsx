import React from "react";
import { useTranslation } from "react-i18next";
import "@styles/navbar.scss";
import { ThemeModeContext } from "../../contexts/ThemeModeContext.tsx";
import { ThemeModeContextType } from "../../contexts/types.themeMode.ts";
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher.tsx";
import ToggleButton from "../themeButton/ThemeButton.tsx";
import { HEADER_SECTIONS } from "../../config/constants.tsx";

function NavBar() {
  const { t } = useTranslation();
  const { isThemeDarkMode, changeThemeMode } = React.useContext(
    ThemeModeContext
  ) as ThemeModeContextType;

  return (
    <div className="navbar-content">
      <div className="navbar-content__item-container">
        {HEADER_SECTIONS.map((section, index) => (
          <a aria-current="page" href={section.url} key={index}>
            {t(section.code)}
          </a>
        ))}
      </div>
      <div className="navbar-content__button-container">
        <ToggleButton
          isDark={isThemeDarkMode as boolean}
          onChange={changeThemeMode}
        />
        <LanguageSwitcher />
      </div>
    </div>
  );
}

export default NavBar;

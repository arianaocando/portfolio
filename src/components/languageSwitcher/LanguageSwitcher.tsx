import "@styles/LanguageSwitcher.scss";
import React from "react";
import { useTranslation } from "react-i18next";
import arrowSVG from "@/assets/icon/Vector.svg";
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from "../../config/languages";
import { Language } from "../../types/language";

/**
 * Language switcher component that displays a dropdown with available languages
 * @component
 */
function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [currentLanguage, setCurrentLanguage] =
    React.useState<Language>(DEFAULT_LANGUAGE);
  const nextLanguage =
    SUPPORTED_LANGUAGES.find(
      (language: Language) => language.code !== currentLanguage.code
    ) || DEFAULT_LANGUAGE;

  const toggleDropdown: () => void = () => setIsOpen((prevState) => !prevState);

  const handleLanguageChange: (language: Language) => void = (language: Language) => {
    i18n.changeLanguage(language.code);
    setCurrentLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container" aria-expanded={isOpen}>
      <button
        onClick={toggleDropdown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        type="button"
      >
        <p>{currentLanguage.name}</p>
        <p>{currentLanguage.flag}</p>
        <img src={arrowSVG} alt="Arrow" />
      </button>

      {isOpen && (
        <ul className="dropdown-list" role="listbox">
          <li
            key={nextLanguage.code}
            onClick={() => handleLanguageChange(nextLanguage)}
            className={
              i18n.language.startsWith(nextLanguage.code) ? "active" : ""
            }
            aria-selected={i18n.language.startsWith(nextLanguage.code)}
          >
            <p>{nextLanguage.name}</p>
            <p>{nextLanguage.flag}</p>
          </li>
        </ul>
      )}
    </div>
  );
}

export default LanguageSwitcher;

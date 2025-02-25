import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Language } from "@/types/language";
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from "@/config/languages";
import arrowSVG from "@/assets/Vector.svg";
/**
 * Language switcher component that displays a dropdown with available languages
 * @component
 */
function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] =
    useState<Language>(DEFAULT_LANGUAGE);
  const nextLanguage =
    SUPPORTED_LANGUAGES.find(
      (language: Language) => language.code !== currentLanguage.code
    ) || DEFAULT_LANGUAGE;

  /**
   * Alterna el estado abierto/cerrado del dropdown
   * @function toggleDropdown
   */
  const toggleDropdown = () => setIsOpen((prevState) => !prevState);

  /**
   * Handles language change
   * @param {Language} language - The selected language object
   */
  const handleLanguageChange = (language: Language) => {
    console.log(`Changing language to: ${language.code}`);
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
        {`${currentLanguage.name} ${currentLanguage.flag}`}
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
            {nextLanguage.name} {nextLanguage.flag}
          </li>
        </ul>
      )}
    </div>
  );
}

export default LanguageSwitcher;

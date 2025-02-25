import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";
import { HEADER_SECTIONS } from "../../config/constants";

function NavBar() {
   const { t } = useTranslation();
  return (
    <div className="navbar-content">
      <div className="navbar-content__item-container">
        {HEADER_SECTIONS.map((section, index) => (
          <a aria-current="page" href={section.url} key={index}>
            {t(section.code)}
          </a>
        ))}
      </div>
      <LanguageSwitcher />
    </div>
  );
}

export default NavBar;

import React from "react";
import { useTranslation } from "react-i18next";
import heroBanner from "@assets/hero-banner.svg";
import heroBannerDark from "@assets/dark-theme-image/banner_dark.svg";
import { ThemeModeContext } from "../../contexts/ThemeModeContext.tsx";
import { ThemeModeContextType } from "../../contexts/types.themeMode.ts";
import "@styles/BannerSection.scss";

function BannerSection() {
  const { t } = useTranslation();
  const { isThemeDarkMode } = React.useContext(
    ThemeModeContext
  ) as ThemeModeContextType;

  return (
    <section
      id="banner"
      className="banner-section position-relative d-flex flex-column justify-content-end"
    >
      <img
        src={isThemeDarkMode ? heroBannerDark : heroBanner}
        className="img-fluid"
      />
      <div className="banner-section__content">
        <h1>{t("banner.name")}</h1>
        <h1 className="lastname">Ocando</h1>
      </div>
    </section>
  );
}

export default BannerSection;

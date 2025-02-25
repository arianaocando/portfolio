import { useTranslation } from "react-i18next";
import heroBanner from "@assets/hero-banner.svg";

function BannerSection() {
  const { t } = useTranslation();
  return (
    <section id="banner" className="banner-section position-relative mt-4 d-flex flex-column justify-content-end">
      <img src={heroBanner} className="img-fluid"></img>
      <div className="banner-section__content">
        <h1>{t("banner.name")}</h1>
        <h1 className="lastname">Ocando</h1>
      </div>
    </section>
  );
}

export default BannerSection;
import React from "react";
import { useTranslation } from "react-i18next";
import "@styles/BackgroundSection.scss";
import image from "../../assets/jpg/company_logo_placeholder.jpg";
import BackgroundCard from "@components/backgroundCard/BackgroundCard.tsx";
import TimelineItem from "@components/timeLineItem/TimeLineItem.tsx";
import { timelineData } from "../../config/constants.ts";

function BackgroundSection() {
  const [selectedItem, setSelectedItem] = React.useState(timelineData[0]);
  const { t } = useTranslation();

  return (
    <section id="background" className="timeline-section">
      <div className="featured-container">
        <BackgroundCard
          title={selectedItem.title}
          subtitle={selectedItem.subtitle}
          description={selectedItem.description}
          image={image}
        />
        <p className="timeline-title">{t("navbar.sections.background")}</p>
      </div>
      <div className="line" />
      <div className="timeline-cards">
        {timelineData.map((item, index) => (
          <TimelineItem
            key={index}
            year={item.year}
            title={item.title}
            subtitle={item.subtitle}
            isSelected={selectedItem.year === item.year}
            onSelect={() => setSelectedItem(item)}
          />
        ))}
      </div>
    </section>
  );
}
export default BackgroundSection;

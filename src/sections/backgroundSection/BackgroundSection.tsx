import { useEffect, useRef, useState } from 'react';
import image from "@assets/imagen.svg";

import CardLarge from '@components/cardLarge/CardLarge';
import TimelineItem from "@components/timeLineItem/TimeLineItem";
import { timelineData } from '../../config/constants';
import { useTranslation } from 'react-i18next';

function BackgroundSection() {
  const [selectedItem, setSelectedItem] = useState(timelineData[0]);
  const { t } = useTranslation();
   const timelineRef = useRef(null);
   const titleRef = useRef(null);

   useEffect(() => {
     if (timelineRef.current && titleRef.current) {
       const timelineBottom =
         timelineRef.current.getBoundingClientRect().bottom;
       const titleTop = titleRef.current.getBoundingClientRect().top;
       const newHeight = titleTop - timelineBottom + 660;

      
       document.documentElement.style.setProperty(
         "--line-height",
         `${newHeight}px`
       );
     }
   }, [selectedItem]);

  return (
    <section id="background" className="mb-5 timeline-section">
      <div className="timeline-container">
        <div className="featured-container">
          <CardLarge
            title={selectedItem.title}
            subtitle={selectedItem.subtitle}
            description={selectedItem.description}
            imge={image}
          />
        </div>
        <div className='timeline-cards'>

        <div className="line"></div>
        <div className="timeline" ref={timelineRef}>
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
      </div>
        </div>
      <p className="timeline-title" ref={titleRef}>
        {t('navbar.sections.background')}
      </p>
    </section>
  );
}
export default BackgroundSection;
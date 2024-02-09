import clsx from "clsx";
import { useState } from "react";
import "swiper/css";
import "swiper/css/a11y";
import { A11y, Mousewheel } from "swiper/modules";
import { Swiper, type SwiperClass, SwiperSlide } from "swiper/react";

import ProjectCard from "./ProjectCard";
import ProjectWindow from "./ProjectWindow";

type ProjectSwiperProps = {
  title: string;
};

const ProjectSwiper = ({ title }: ProjectSwiperProps) => {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const [index, setIndex] = useState(0);

  return (
    <div>
      <Swiper
        grabCursor
        mousewheel={{ thresholdTime: 200, forceToAxis: true }}
        onSwiper={swiper => setSwiper(swiper)}
        onSlideChange={() => setIndex(swiper?.activeIndex || 0)}
        wrapperClass="w-screen px-4 sm:px-9vw "
        modules={[A11y, Mousewheel]}
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
          769: {
            slidesPerView: 1.25,
          },
        }}
      >
        <SwiperSlide>
          <ProjectWindow
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
            alt="Project 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard />
        </SwiperSlide>
      </Swiper>
      <div className="px-9vw mt-6 flex items-center gap-4">
        <p className="text-accent font-serif">** {title}</p>
        <div className="flex gap-2">
          <ActiveButton
            onClick={() => {
              swiper?.slideTo(0);
              console.log(swiper?.activeIndex);
            }}
            active={index === 0}
          />
          <ActiveButton
            onClick={() => {
              swiper?.slideTo(1);
              console.log(swiper?.activeIndex);
            }}
            active={index === 1}
          />
        </div>
      </div>
    </div>
  );
};

const ActiveButton = ({
  onClick,
  active,
}: {
  onClick: () => void;
  active: boolean;
}) => {
  return (
    <button
      className={clsx(
        active ? "bg-accent" : "border-accent border",
        "hover:bg-accent-light size-3 cursor-pointer transition-all duration-500",
      )}
      onClick={onClick}
    />
  );
};

export default ProjectSwiper;

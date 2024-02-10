import ProjectCard from "@components/widgets/ProjectSwiper/ProjectCard";
import ProjectWindow from "@components/widgets/ProjectSwiper/ProjectWindow";
import clsx from "clsx";
import { type ReactElement, type ReactNode, useState } from "react";
import "swiper/css";
import "swiper/css/a11y";
import { A11y, Mousewheel, Parallax } from "swiper/modules";
import { Swiper, type SwiperClass, SwiperSlide } from "swiper/react";

type ProjectSwiperProps = {
  websiteTitle: string;
  websiteHref: string;
  caseTitle: ReactNode;
  children: ReactElement;
  caseHref: string;
};

const ProjectSwiper = ({
  websiteTitle,
  caseTitle,
  children,
  websiteHref,
  caseHref,
}: ProjectSwiperProps) => {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const [index, setIndex] = useState(0);

  return (
    <div>
      <Swiper
        grabCursor
        mousewheel={{ thresholdTime: 200, forceToAxis: true }}
        resistanceRatio={0.95}
        speed={750}
        parallax={{ enabled: true }}
        onSwiper={swiper => setSwiper(swiper)}
        onSlideChange={() => setIndex(swiper?.activeIndex || 0)}
        modules={[A11y, Mousewheel, Parallax]}
        slidesPerView={1}
        spaceBetween={16}
        breakpoints={{
          768: {
            spaceBetween: 48,
            slidesPerView: 1.15,
          },
        }}
      >
        <SwiperSlide>
          <ProjectWindow
            href={websiteHref}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
            alt={websiteTitle}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard title={caseTitle} href={caseHref}>
            {children}
          </ProjectCard>
        </SwiperSlide>
      </Swiper>
      <div className="mt-6 flex items-center gap-4 px-4 md:px-9vw">
        <p className="font-serif text-accent">** {websiteTitle}</p>
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
        active ? "bg-accent" : "border border-accent",
        "size-3 cursor-pointer transition-all duration-500 hover:bg-accent-light",
      )}
      onClick={onClick}
    />
  );
};

export default ProjectSwiper;

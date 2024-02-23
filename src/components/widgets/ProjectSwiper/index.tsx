import clsx from "clsx";
import { type ReactNode, useState } from "react";
import "swiper/css";
import "swiper/css/a11y";
import { A11y, Mousewheel, Parallax } from "swiper/modules";
import { Swiper, type SwiperClass, SwiperSlide } from "swiper/react";

import ProjectCard from "@components/widgets/ProjectSwiper/ProjectCard";
import ProjectWindow from "@components/widgets/ProjectSwiper/ProjectWindow";

export type ProjectSwiperProps = {
  content: {
    title: ReactNode;
    href: string;
  };
  website: {
    title: string;
    href: string;
  };
  projectImage: {
    src: string;
    alt: string;
  };
  children: astroHTML.JSX.Element;
};

const ProjectSwiper = ({
  website,
  content,
  children,
  projectImage,
}: ProjectSwiperProps) => {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const [index, setIndex] = useState(0);

  return (
    <div>
      <Swiper
        className="[&_img]:grayscale [&_img]:transition-all [&_img]:duration-1000 [&_img]:hover:grayscale-0"
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
            href={website.href}
            src={projectImage.src}
            alt={projectImage.alt}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard title={content.title} href={content.href}>
            {children}
          </ProjectCard>
        </SwiperSlide>
      </Swiper>
      <div className="mt-6 flex items-center gap-4 px-4 md:px-9vw">
        <p className="font-serif text-accent">** {website.title}</p>
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

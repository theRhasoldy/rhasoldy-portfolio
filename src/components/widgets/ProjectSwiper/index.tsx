import "swiper/css";
import "swiper/css/a11y";
import { A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import ProjectCard from "./ProjectCard";
import ProjectWindow from "./ProjectWindow";

const ProjectSwiper = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1.25}
      wrapperClass="px-4 sm:px-9vw"
      modules={[A11y]}
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
  );
};

export default ProjectSwiper;

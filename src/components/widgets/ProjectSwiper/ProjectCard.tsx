import { useMediaQuery } from "@uidotdev/usehooks";
import { useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

const ProjectCard = () => {
  const [ref, animate] = useAnimate();
  const isInView = useInView(ref);

  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    if (isMobile) return;

    animate(
      ref.current,
      { x: [100, 0], opacity: [0.25, 1] },
      {
        type: "tween",
        autoplay: isInView,
        duration: 1.25,
        ease: "easeOut",
      },
    );
  }, [isInView, animate, ref]);

  return (
    <div
      ref={ref}
      className="border-primary h-card ml-4 mr-8 w-full border pr-8 sm:ml-8"
    >
      <h3>Hello World</h3>
    </div>
  );
};

export default ProjectCard;

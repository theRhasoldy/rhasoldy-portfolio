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
  }, [isInView, animate, ref, isMobile]);

  return (
    <div className="md:pr-9vw px-4 md:pl-0">
      <div
        ref={ref}
        className="border-primary-dark h-card grid w-full border p-3 font-serif md:p-6"
      >
        <h3 className="font-sans text-4xl font-bold uppercase md:text-5xl">
          Hello World
        </h3>
        <p className="self-start text-sm md:text-base">
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
          exercitation amet. Nisi anim cupidatat excepteur officia.
          Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
          voluptate dolor minim nulla est proident. Nostrud officia pariatur ut
          officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
          commodo officia dolor Lorem duis laboris cupidatat officia voluptate.
          Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis
          officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis
          sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea
          consectetur et est culpa et culpa duis.
        </p>
        <a
          className="border-secondary text-secondary hover:bg-secondary hover:text-background w-fit self-end border px-4 py-2"
          href="/"
        >
          read case study
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

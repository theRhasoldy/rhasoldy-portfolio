import { useMediaQuery } from "@uidotdev/usehooks";
import { useAnimate, useInView } from "framer-motion";
import { type ReactElement, type ReactNode, useEffect } from "react";

type ProjectCardProps = {
  title: ReactNode;
  children: ReactElement;
  href: string;
};

const ProjectCard = ({ title, href, children }: ProjectCardProps) => {
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
      <article
        ref={ref}
        className="border-primary-dark h-card grid w-full grid-rows-[min-content_auto] border p-3 font-serif md:p-6"
      >
        <h3 className="max-w-[25ch] font-sans text-4xl font-bold uppercase sm:text-5xl xl:text-7xl">
          {title}
        </h3>
        {children}
        <a
          className="border-secondary text-secondary hover:bg-secondary hover:text-background w-fit self-end border px-4 py-2"
          href={href}
        >
          read case study
        </a>
      </article>
    </div>
  );
};

export default ProjectCard;

import WindowControls from "@components/icons/window-controls.svg";

const ProjectWindow = ({
  src,
  alt,
  href,
}: {
  src: string;
  alt: string;
  href: string;
}) => {
  return (
    <div className="px-4 md:px-0 md:pl-9vw">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="block border border-primary-dark text-end"
      >
        <img
          src={WindowControls.src}
          className="inline-block w-1/3 px-6 py-3 sm:w-fit"
          alt=""
        />
        <img
          className="h-window w-full border-t border-primary-dark object-cover"
          src={src}
          alt={alt}
        />
      </a>
    </div>
  );
};

export default ProjectWindow;

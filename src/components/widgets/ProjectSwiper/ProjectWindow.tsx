import WindowControls from "../../icons/window-controls.svg";

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
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="border-primary block border text-end"
    >
      <img
        src={WindowControls.src}
        className="inline-block w-1/3 px-6 py-3 sm:w-fit"
        alt=""
      />
      <img
        className="h-window border-primary w-full border-t object-cover"
        src={src}
        alt={alt}
      />
    </a>
  );
};

export default ProjectWindow;

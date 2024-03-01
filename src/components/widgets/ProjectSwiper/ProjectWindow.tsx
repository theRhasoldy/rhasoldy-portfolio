import WindowControls from "@components/icons/window-controls.svg";

const ProjectWindow = ({
  src,
  alt,
  href,
  linkColor,
}: {
  src: string;
  alt: string;
  href: string;
  linkColor: string;
}) => {
  return (
    <div className="px-4 md:px-0 md:pl-9vw">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="block border border-primary-dark text-end [&_svg]:translate-y-9 [&_svg]:opacity-0 [&_svg]:hover:translate-y-0 [&_svg]:hover:opacity-100"
      >
        <img
          src={WindowControls.src}
          className="inline-block w-1/3 px-6 py-3 sm:w-fit"
          alt=""
        />
        <div className="flex items-end justify-end overflow-hidden">
          <svg
            className="absolute z-10 m-10 transition-all duration-500"
            width="95"
            height="95"
            viewBox="0 0 95 95"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.15 94.25L79.75 24.65V87H94.25V0H7.24999V14.5H69.6L-6.19888e-06 84.1L10.15 94.25Z"
              fill={linkColor}
            />
          </svg>
          <img
            className="h-window w-full border-t border-primary-dark object-cover duration-100 hover:scale-[1.025]"
            src={src}
            alt={alt}
          />
        </div>
      </a>
    </div>
  );
};

export default ProjectWindow;

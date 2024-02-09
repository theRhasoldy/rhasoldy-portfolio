import WindowControls from "../../icons/window-controls.svg";

const ProjectWindow = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="border-primary border text-end">
      <img src={WindowControls.src} className="inline-block px-6 py-3" alt="" />
      <img
        className="h-card border-primary w-full border-t object-cover"
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default ProjectWindow;

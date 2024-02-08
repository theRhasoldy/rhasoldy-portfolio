const ProjectWindow = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <img
      className="max-h-[48rem] min-h-4 w-full object-cover"
      src={src}
      alt={alt}
    />
  );
};

export default ProjectWindow;

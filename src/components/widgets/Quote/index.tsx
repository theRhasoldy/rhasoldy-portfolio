import clsx from "clsx";
import type { ReactNode } from "react";

const Quote = ({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) => {
  return (
    <p className={clsx("px-9vw font-serif md:text-xl", className)}>
      <span className="text-primary-dark block">{"/**"}</span>
      {children}
      <span className="text-primary-dark block">{"*/"}</span>
    </p>
  );
};

export default Quote;

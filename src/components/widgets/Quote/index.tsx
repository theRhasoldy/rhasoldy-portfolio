import clsx from "clsx";
import type { ReactNode } from "react";

import Blinker from "./Blinker";

const Quote = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <p className={clsx("px-9vw font-serif md:text-xl", className)}>
      <span className="text-primary-dark block">{"/**"}</span>
      <span>
        {children}
        <Blinker />
      </span>
      <span className="text-primary-dark block">{"*/"}</span>
    </p>
  );
};

export default Quote;

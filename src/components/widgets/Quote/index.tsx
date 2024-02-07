import type { ReactNode } from "react";

const Quote = ({ children }: { children: ReactNode }) => {
  return (
    <p className="px-9vw font-serif md:text-xl">
      <span className="text-primary-dark block">{"/**"}</span>
      {children}
      <span className="text-primary-dark block">{"*/"}</span>
    </p>
  );
};

export default Quote;

import type { ReactNode } from "react";

const Quote = ({ children }: { children: ReactNode }) => {
  return (
    <p className="px-9vw font-serif text-xl">
      <span className="block">{"/**"}</span>
      {children}
      <span className="block">{"*/"}</span>
    </p>
  );
};

export default Quote;

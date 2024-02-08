import ReactLenis, {
  type ReactLenisOptions,
} from "@studio-freight/react-lenis";
import type { ReactNode } from "react";

const SmoothScroll = ({ children }: { children: ReactNode }) => {
  const options: ReactLenisOptions = {
    lerp: 0.1,
    syncTouch: true,
  };

  return (
    <ReactLenis root options={options}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;

import ReactLenis, {
  type ReactLenisOptions,
} from "@studio-freight/react-lenis";
import type { ReactNode } from "react";

const SmoothScroll = ({ children }: { children: ReactNode }) => {
  const options: ReactLenisOptions = {
    duration: 5,
    lerp: 0.075,
    syncTouch: true,
  };

  return (
    <ReactLenis root options={options}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;

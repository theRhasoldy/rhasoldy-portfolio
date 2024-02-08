import ReactLenis from "@studio-freight/react-lenis";
import type { ReactNode } from "react";

const SmoothScroll = ({ children }: { children: ReactNode }) => {
  return (
    <ReactLenis root options={{ duration: 5, lerp: 0.075, syncTouch: true }}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;

import clsx from "clsx";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

import Blinker from "./Blinker";

const Quote = ({ className, quote }: { className?: string; quote: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => Math.round(latest));

  const displayText = useTransform(rounded, (latest: number) =>
    quote.slice(0, latest),
  );

  useEffect(() => {
    animate(count, quote.length, {
      type: "tween",
      duration: 3,
      ease: "easeOut",
      autoplay: isInView,
    });
  }, [count, quote.length, isInView]);

  return (
    <div className="h-20">
      <p
        ref={ref}
        className={clsx("md:px-9vw px-4 font-serif md:text-xl", className)}
      >
        <span aria-hidden className="text-primary-dark block">
          {"/**"}
        </span>
        <motion.span>{displayText}</motion.span>
        <Blinker />
        <span aria-hidden className="text-primary-dark block">
          {"*/"}
        </span>
      </p>
    </div>
  );
};

export default Quote;

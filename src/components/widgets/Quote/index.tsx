import Blinker from "@components/widgets/Quote/Blinker";
import clsx from "clsx";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

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
    <p
      ref={ref}
      className={clsx("px-4 font-serif md:px-9vw md:text-xl", className)}
    >
      <span aria-hidden className="block text-primary-dark">
        {"/**"}
      </span>
      <motion.span>{displayText}</motion.span>
      <Blinker />
      <span aria-hidden className="block text-primary-dark">
        {"*/"}
      </span>
    </p>
  );
};

export default Quote;

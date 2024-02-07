import { type Variants, motion } from "framer-motion";

const blinkerVariants: Variants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 0.5, 1],
    },
  },
};

const Blinker = () => {
  return (
    <motion.div
      animate="blinking"
      variants={blinkerVariants}
      className="bg-accent inline-block h-5 w-[3px] translate-y-1"
    />
  );
};

export default Blinker;

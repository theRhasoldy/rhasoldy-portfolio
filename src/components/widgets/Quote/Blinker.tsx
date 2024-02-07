import { type Variants, motion } from "framer-motion";

const blinkerVariants: Variants = {
  blinking: {
    opacity: [1, 1, 0, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "easeInOut",
      times: [0, 0.5, 0.5, 1],
      delay: 3,
    },
  },
};

const Blinker = () => {
  return (
    <motion.div
      animate="blinking"
      variants={blinkerVariants}
      className="bg-accent ml-1 inline-block h-5 w-[2px] translate-y-1 md:w-[3px]"
    />
  );
};

export default Blinker;

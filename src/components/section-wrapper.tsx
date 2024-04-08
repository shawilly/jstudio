import * as React from "react";
import { motion } from "framer-motion";

type WrapperProps = {
  component: React.ComponentType<any>;
  nameId?: string;
};

const SectionWrapper: React.FC<WrapperProps> = ({
  nameId,
  component: Component,
}) => {
  return (
    <motion.section
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0,
            delayChildren: 0,
          },
        },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="max-w-7xl` relative z-0 mx-auto px-6 py-10 sm:px-16 sm:py-16"
    >
      <span className="hash-span" id={nameId}>
        &nbsp;
      </span>

      <Component />
    </motion.section>
  );
};

export default SectionWrapper;

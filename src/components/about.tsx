"use client";
import hairDresser from "@public/hairdresser.json";
import { motion } from "framer-motion";
import { useLottie } from "lottie-react";

export const About = () => {
  const { View } = useLottie({
    animationData: hairDresser,
    loop: true,
    autoplay: true,
  });

  return (
    <motion.section
      id="about"
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
      className="flex h-screen w-full justify-center bg-gradient-to-b from-pink-100 to-[#f9f9f9] p-2 font-sans lg:p-5"
    >
      <div className="flex flex-col-reverse items-center lg:flex-row-reverse lg:justify-between">
        <div className="justify-center lg:order-1 lg:mr-8 lg:w-1/2 lg:justify-normal">
          {View}
        </div>
        <motion.div
          className="max-h-[30%] w-[100%] lg:w-[40%] lg:pr-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h1 className="mb-2 text-2xl font-semibold text-secondary lg:mb-5 lg:text-4xl">
              About us
            </h1>
          </div>
          <p>
            Joanne, Shelley, and Umna together possess countless years of
            experience and a shared love for hair design as an artistic
            expression.
          </p>
          <br></br>
          <p className="mb-7 lg:mb-0">
            Whether it's timeless hairstyles or the latest color innovations,
            we're committed to creating tailor-made looks that mirror the
            individual preferences of every customer.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

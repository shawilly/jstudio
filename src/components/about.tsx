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
    <section
      id="about"
      className="flex w-full h-screen p-2 lg:p-5 font-sans justify-center bg-gradient-to-b from-pink-100 to-white"
    >
      <div className="flex flex-col-reverse lg:flex-row-reverse lg:justify-between items-center">
        <div className="justify-center lg:justify-normal lg:w-1/2 lg:mr-8 lg:order-1">
          {View}
        </div>
        <motion.div
          className="w-[100%] lg:w-[40%] max-h-[30%] lg:pr-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h1 className="text-2xl mb-2 lg:text-4xl lg:mb-5 text-secondary ">
              About us
            </h1>
          </div>
          <p>
            Joanne, Shelley, and Umna together possess countless years of
            experience and a shared love for hair design as an artistic
            expression.
          </p>
          <br></br>
          <p>
            Whether it's timeless hairstyles or the latest color innovations,
            we're committed to creating tailor-made looks that mirror the
            individual preferences of every customer.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

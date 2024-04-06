"use client";
import Image, { StaticImageData } from "next/image";
import joicoLogo from "@public/joico-logo.png";
import bainDeTerreLogo from "@public/bain-de-terre-logo.png";
import { motion } from "framer-motion";

export const Products = () => {
  return (
    <section
      id="products"
      className="flex flex-col lg:flex-row justify-center items-center h-screen w-screen bg-gradient-to-b from-pink-100 to-purple-300 gap-5 lg:gap-6 lg:pr-10"
    >
      <div className="relative flex justify-start pl-5 items-center h-1/5 basis-1/6 lg:basis-1/2">
        <h1 className="text-4xl lg:text-5xl text-[#282b2d]">
          Products we like (and use)
        </h1>
      </div>
      <motion.div
        className="bg-slate-100 h-1/5 w-4/5 lg:basis-2/5 rounded-l-xl rounded-r-xl drop-shadow-2xl"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex justify-center items-center h-full w-full">
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Image
              src={joicoLogo as StaticImageData}
              alt="Joico Logo"
              layout="fixed"
              width={200}
              height={200}
            />
          </motion.button>
        </div>
      </motion.div>
      <motion.div
        className="bg-slate-100 h-1/5 w-4/5 lg:basis-2/5 rounded-l-xl rounded-r-xl drop-shadow-2xl"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex justify-center items-center h-full w-full">
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Image
              src={bainDeTerreLogo as StaticImageData}
              alt="Bain De Terre Logo"
              layout="fixed"
              width={200}
              height={200}
            />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

"use client";
import Image, { StaticImageData } from "next/image";
import joicoLogo from "@public/joico-logo.png";
import bainDeTerreLogo from "@public/bain-de-terre-logo.png";
import { motion } from "framer-motion";

export const Products = () => {
  return (
    <section
      id="products"
      className="flex h-screen w-screen flex-col items-center justify-center gap-5 bg-gradient-to-b from-pink-100 to-purple-300 lg:flex-row lg:gap-6 lg:pr-10"
    >
      <div className="relative flex h-1/5 basis-1/6 items-center justify-start pl-5 lg:basis-1/2">
        <h1 className="text-4xl font-semibold">
          Products we like, use, and recommend
        </h1>
      </div>
      <motion.div
        className="h-1/5 w-4/5 rounded-l-xl rounded-r-xl bg-slate-100 drop-shadow-2xl lg:basis-2/5"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex h-full w-full items-center justify-center">
          <motion.button
            className="absolute"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <a
              target="_blank"
              href="http://www.joico.com/joico-products/all/"
              rel="noopener noreferrer"
            >
              <Image
                src={joicoLogo as StaticImageData}
                alt="Joico Logo"
                layout="fixed"
                width={200}
                height={200}
              />
            </a>
          </motion.button>
        </div>
      </motion.div>
      <motion.div
        className="h-1/5 w-4/5 rounded-l-xl rounded-r-xl bg-slate-100 drop-shadow-2xl lg:basis-2/5"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex h-full w-full items-center justify-center">
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a
              target="_blank"
              href="https://www.baindeterre.ca/"
              rel="noopener noreferrer"
            >
              <Image
                src={bainDeTerreLogo as StaticImageData}
                alt="Bain De Terre Logo"
                layout="fixed"
                width={200}
                height={200}
              />
            </a>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

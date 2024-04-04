"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { navLinks } from "./nav-links";
import Link from "next/link";

export const NavButton = () => {
  const [isToggled, setToggle] = useState(false);

  const navContainer = {
    visible: {
      //x: 0,
      opacity: 1,
      transition: {
        x: { velocity: 100 },
        duration: 0.3,
      },
    },
    hidden: {
      //x: -250,
      opacity: 0,
      transition: {
        x: { velocity: 100 },
        duration: 0.3,
      },
    },
  };

  return (
    <div className="fixed top-1 left-2">
      <button
        className="w-[40px] h-[40px] rounded-[50%] border-none cursor-pointer z-1"
        onClick={() => setToggle(!isToggled)}
      >
        {!isToggled ? (
          <IoMenu size={30} className="text-black-100" />
        ) : (
          <IoCloseSharp size={30} />
        )}
      </button>

      <AnimatePresence>
        {isToggled && (
          <motion.div
            className="pt-20 z-50 flex-col-reverse w-[250px] h-screen rounded-[16px] bg-gradient-to-t from-black to-slate-800"
            initial="hidden"
            animate={isToggled ? "visible" : "hidden"}
            exit="hidden"
            variants={navContainer}
          >
            <NavbarItems setToggle={setToggle} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const navList = {
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.07,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const navItem = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  hidden: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
};

const NavbarItems = ({
  setToggle,
}: {
  setToggle: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <>
      <motion.ul
        className="pt-12"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={navList}
      >
        {[...Array.from(navLinks), ["Contact", ""]].map(
          ([label, href], index) => (
            <motion.li key={index} variants={navItem}>
              <Link href={href} className="">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setToggle(false)}
                  className="text-white font-bold cursor-pointer text-40 pl-[30%] pt-2"
                >
                  {label}
                </motion.button>
              </Link>
            </motion.li>
          )
        )}
      </motion.ul>
    </>
  );
};

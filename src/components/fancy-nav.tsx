"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { navLinks } from "./nav-links";
import Link from "next/link";

// html {
//     font-family: "Inter";
//     width: 550px;
//     height: 750px;
//   }

//   .navbar {
//     width: 250px;
//     height: 700px;
//     margin: none;
//     border-radius: 16px;
//     /*background-color: turquoise;*/
//     background: linear-gradient(to top, #8e2de2, #4a00e0);
//   }

//   .navList {
//     padding: 100px 70px 200px 70px;
//   }

//   .nav-item {
//     font-size: 20px;
//     list-style: none;
//     color: white;
//     cursor: pointer;
//   }

//   h4 {
//     margin-block-start: 1px;
//     margin-block-end: 1px;
//   }

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
            className="z-50 flex-col-reverse w-[250px] h-[200px] rounded-[16px] bg-gradient-to-t from-white to-slate-800"
            initial="hidden"
            animate={isToggled ? "visible" : "hidden"}
            exit="hidden"
            variants={navContainer}
          >
            <NavbarItems isToggled={isToggled} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const NavbarItems = ({ isToggled }: any) => {
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

  return (
    <>
      <motion.ul
        className="p-100 p-t-200 p-r-70 p-b-200 p-l-70"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={navList}
      >
        {[...Array.from(navLinks), ["Contact", "#contact"]].map(
          ([label, href], index) => (
            <motion.li
              className="text-white cursor-pointer text-20 z-50"
              variants={navItem}
              key={index}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link className="w-[40px]" key={label} href={href}>
                  {label}
                </Link>
              </motion.button>
            </motion.li>
          )
        )}
      </motion.ul>
    </>
  );
};

"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { IconType } from "react-icons";
import {
  FaFacebook,
  FaInstagramSquare,
  FaPhoneSquareAlt,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { SiGooglemaps } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";
import { Scissors } from "./scissors";
import {
  facebook_url,
  phone_number,
  instagram_url,
  email,
} from "@/lib/constants";
import { useEffect, useState } from "react";
import { useMediaQuery, STD_SIZE } from "@/lib/use-media-query";

const SocialsMap = ({ className }: { className: string }) =>
  new Map<string, { href: string; Icon: IconType; className: string }>([
    [
      "Facebook",
      {
        href: facebook_url,
        Icon: FaFacebook,
        className: "text-[#3a5998] hover:text-blue-600 " + className,
      },
    ],
    [
      "Phone",
      {
        href: `tel:+${phone_number.number}`,
        Icon: FaPhoneSquareAlt,
        className: "text-[#03bf00] hover:text-green-600 " + className,
      },
    ],
    [
      "Instagram",
      {
        href: instagram_url,
        Icon: FaInstagramSquare,
        className: "text-[#e94375] hover:text-red-600 " + className,
      },
    ],
    [
      "Email",
      {
        href: `mailto:${email}`,
        Icon: IoIosMail,
        className: "hover:text-blue-600 " + className,
      },
    ],
    [
      "Google Maps",
      {
        href: "#contact",
        Icon: SiGooglemaps,
        className: "text-green-600 hover:text-green-500 " + className,
      },
    ],
  ]);

export const Hero = () => {
  const [scrolled, setScrolled] = useState(false);
  const isTablet = useMediaQuery(STD_SIZE.TABLET);

  const handleScroll = () => {
    if (window.scrollY > 400) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="mt-[85px] grid justify-center sm:mx-auto p-5">
      <div className="">
        <h1 className="absolute text-6xl text-primary-foreground">
          {isTablet ? (
            <b>RHS.</b>
          ) : (
            <TypeAnimation
              sequence={[
                "Timeless Beauty",
                1000,
                "Established 1923",
                1000,
                "Richmond Hair Studio.",
                50000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          )}
        </h1>
      </div>
      <Scissors className="max-w-[500px]" />
      <div className="mb-[25px]">
        <motion.div
          className="flex-row flex items-stretch justify-center space-x-4"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {Array.from(
            SocialsMap({
              className:
                "border-6 drop-shadow-lg hover:drop-shadow-sm duration-300 p-5",
            })
          ).map(([label, { Icon, href, className }]) => {
            return (
              <div className={className} key={label}>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link key={label} href={href}>
                    <Icon className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16" />
                  </Link>
                </motion.button>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* <div className="absolute xs:bottom-10 bottom-[60px] w-full flex justify-center items-center h-10">
        <a href="#about">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-[35px] h-[64px] sm:h-[80px] rounded-3xl border-4 border-red-300 flex justify-center items-start p-2"
              exit="hidden"
              hidden={scrolled}
            >
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                initial="hidden"
                exit="hidden"
                transition={{
                  repeatType: "loop",
                  repeat: Infinity,
                  duration: 1.5,
                }}
                className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-red-800 mb-1"
                hidden={scrolled}
              />
            </motion.div>
          </AnimatePresence>
        </a>
      </div> */}
    </section>
  );
};

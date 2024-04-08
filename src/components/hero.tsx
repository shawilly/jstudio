"use client";
import {
  email,
  facebook_url,
  instagram_url,
  phone_number,
} from "@/lib/constants";
import { motion } from "framer-motion";
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

const commonSocialsClass =
  "hidden lg:flex border-6 drop-shadow-lg hover:drop-shadow-sm duration-300 p-5";

const SocialsMap = new Map<
  string,
  { href: string; Icon: IconType; className: string }
>([
  [
    "Facebook",
    {
      href: facebook_url,
      Icon: FaFacebook,
      className: "text-[#3a5998] hover:text-blue-600 " + commonSocialsClass,
    },
  ],
  [
    "Phone",
    {
      href: `tel:+${phone_number.number}`,
      Icon: FaPhoneSquareAlt,
      className: "text-[#03bf00D0] hover:text-green-600 " + commonSocialsClass,
    },
  ],
  [
    "Instagram",
    {
      href: instagram_url,
      Icon: FaInstagramSquare,
      className: "text-[#e94375D0] hover:text-red-600 " + commonSocialsClass,
    },
  ],
  [
    "Email",
    {
      href: `mailto:${email}`,
      Icon: IoIosMail,
      className: "text-blue-400 hover:text-blue-600 " + commonSocialsClass,
    },
  ],
  [
    "Google Maps",
    {
      href: "#contact",
      Icon: SiGooglemaps,
      className: "text-[#0F9D58DD] hover:text-green-500 " + commonSocialsClass,
    },
  ],
]);

const Title = () => (
  <h1 className="text-6xl text-[#282b2d]">
    <b className="lg:hidden">RHS.</b>
    <TypeAnimation
      className="hidden lg:block"
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
  </h1>
);

export const SocialButtons = () => (
  <motion.div
    className="flex flex-row items-stretch justify-center space-x-4"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    {Array.from(SocialsMap).map(([label, { Icon, href, className }]) => {
      return (
        <div className={className} key={label}>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link key={label} href={href}>
              <Icon className="h-10 w-10 sm:h-14 sm:w-14 lg:h-16 lg:w-16" />
            </Link>
          </motion.button>
        </div>
      );
    })}
  </motion.div>
);

export const Hero = () => {
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
      className="bg-opacity-1 relative mt-[30px] flex h-screen w-[100%] flex-col items-center justify-center bg-gradient-to-b from-purple-200  to-pink-100 p-5 sm:mx-auto lg:mt-0 lg:flex-row lg:justify-between"
    >
      <div className="order-0">
        <Title />
      </div>
      <Scissors className="max-w-[500px] lg:hidden" />
      <div className="mb-[25px] mt-[100px] lg:mt-5">
        <SocialButtons />
      </div>
    </motion.section>
  );
};

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

const SocialButtons = () => (
  <motion.div
    className="flex-row flex items-stretch justify-center space-x-4"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    {Array.from(SocialsMap).map(([label, { Icon, href, className }]) => {
      return (
        <div className={className} key={label}>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link key={label} href={href}>
              <Icon className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16" />
            </Link>
          </motion.button>
        </div>
      );
    })}
  </motion.div>
);

export const Hero = () => {
  return (
    <section className="relative items-center bg-gradient-to-b from-purple-200 to-pink-100 bg-opacity-1 flex justify-center flex-col lg:flex-row lg:justify-between  mt-[30px] lg:mt-0 h-screen w-[100%] sm:mx-auto p-5">
      <div className="order-0">
        <Title />
      </div>
      <Scissors className="max-w-[500px] lg:hidden" />
      <div className="mb-[25px] mt-[100px] lg:mt-5">
        <SocialButtons />
      </div>
    </section>
  );
};

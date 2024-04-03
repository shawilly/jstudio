"use client";
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
import {
  facebook_url,
  phone_number,
  instagram_url,
  email,
} from "@/lib/constants";

const SocialsMap = ({ className }: { className: string }) =>
  new Map<string, { href: string; Icon: IconType; className: string }>([
    [
      "Facebook",
      {
        href: facebook_url,
        Icon: FaFacebook,
        className: "text-[#3a5998] hover:text-blue-600" + className,
      },
    ],
    [
      "Phone",
      {
        href: `tel:+${phone_number.number}`,
        Icon: FaPhoneSquareAlt,
        className: "text-[#03bf00] hover:text-green-600" + className,
      },
    ],
    [
      "Instagram",
      {
        href: instagram_url,
        Icon: FaInstagramSquare,
        className: "text-[#e94375] hover:text-red-600" + className,
      },
    ],
    [
      "Email",
      {
        href: `mailto:${email}`,
        Icon: IoIosMail,
        className: "hover:text-blue-600" + className,
      },
    ],
    [
      "Google Maps",
      {
        href: "#contact",
        Icon: SiGooglemaps,
        className: "text-green-600 hover:text-green-500" + className,
      },
    ],
  ]);

export const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-start h-screen bg-primary">
      <Scissors />
      <div className="mb-[25px]">
        <motion.div
          className="flex flex-wrap-reverse justify-center space-x-10 m-6"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {Array.from(
            SocialsMap({
              className:
                "border-6 drop-shadow-lg rounded-[70%] hover:drop-shadow-sm duration-300",
            })
          ).map(([label, { Icon, href, className }]) => {
            return (
              <div className={className} key={label}>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link className="w-[40px]" key={label} href={href}>
                    <Icon size={70} />
                  </Link>
                </motion.button>
              </div>
            );
          })}
        </motion.div>
      </div>
      <h1 className="text-6xl text-primary-foreground justify-center">
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
      </h1>
    </div>
  );
};

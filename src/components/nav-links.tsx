"use client";
import { STD_SIZE, useMediaQuery } from "@/lib/use-media-query";
import Link from "next/link";
import { JSX, SVGProps, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { NavButton } from "./nav-button";

enum NAV_LINKS {
  ABOUT = "About",
  SERVICES = "Services",
  PRODUCTS = "Products",
  TESTIMONIALS = "Testimonials",
  CONTACT = "Contact",
  NONE = "",
}

export const navLinks = new Map<NAV_LINKS, string>([
  [NAV_LINKS.ABOUT, "#about"],
  [NAV_LINKS.SERVICES, "#services"],
  [NAV_LINKS.PRODUCTS, "#products"],
  [NAV_LINKS.TESTIMONIALS, "#testimonials"],
]);

export const NavLinks = () => {
  const [selected, setSelected] = useState<NAV_LINKS>(NAV_LINKS.NONE);
  const isTablet = useMediaQuery(STD_SIZE.TABLET);

  const handleSelect = (key: NAV_LINKS) => {
    setSelected(key);
  };

  return isTablet ? (
    <div className="flex justify-start items-center">
      <NavButton />
    </div>
  ) : (
    <div className="flex justify-start items-center">
      <div className="pr-1 hover:text-yellow-400">
        <Link
          className="flex pl-[25px]"
          href=""
          onClick={() => handleSelect(NAV_LINKS.NONE)}
        >
          <MountainIcon className="w-8 h-8" />
          <span className="ml-2 font-bold text-2xl min-w-[260px]">
            Richmond Hair Studio
          </span>
        </Link>
      </div>
      <div className="pl-[20px] hidden md:flex justify-evenly items-center space-x-4 w-[60%]">
        {Array.from(navLinks).map(([key, href]) => (
          <Link
            key={key}
            href={href}
            className={`hover:text-yellow-400 transition ease-in-out delay-150 hover:scale-110 hover:drop-shadow-2xl duration-300 ${
              selected === key ? "text-yellow-400" : ""
            }`}
            onClick={() => handleSelect(key)}
          >
            {key}
          </Link>
        ))}
      </div>
      <div className="pl-[60px] justify-right h-[50%]">
        <Button
          className="text-primary h-[30px] w-[100px] hover:text-yellow-400"
          variant="outline"
        >
          <Link href="#/contact">Contact</Link>
        </Button>
      </div>
    </div>
  );
};

function MountainIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="44"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4.432 4.442a3 3 0 1 0 4.114 4.146" />
      <path d="M6 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M8.6 15.4l3.4 -3.4m2 -2l5 -5" />
      <path d="M3 3l18 18" />
    </svg>
  );
}

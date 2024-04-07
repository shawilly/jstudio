"use client";
import Link from "next/link";
import { JSX, SVGProps, useState } from "react";
import { NavButton } from "./nav-button";
import { Button } from "./ui/button";

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

  const handleSelect = (key: NAV_LINKS) => {
    setSelected(key);
  };

  return (
    <div className="flex w-auto items-center justify-start">
      <NavButton />
      <div className="hidden hover:text-yellow-400 lg:block lg:pr-1">
        <Link
          className="flex lg:pl-[25px]"
          href=""
          onClick={() => handleSelect(NAV_LINKS.NONE)}
        >
          <MountainIcon className="h-8 w-8" />
          <span className="ml-2 text-2xl font-bold lg:min-w-[260px]">
            Richmond Hair Studio
          </span>
        </Link>
      </div>
      <div className="hidden w-[60%] items-center justify-evenly space-x-4 lg:flex lg:pl-[20px]">
        {Array.from(navLinks).map(([key, href]) => (
          <Link
            key={key}
            href={href}
            className={`transition delay-150 duration-300 ease-in-out hover:scale-110 hover:text-yellow-400 hover:drop-shadow-2xl ${
              selected === key ? "text-yellow-400" : ""
            }`}
            onClick={() => handleSelect(key)}
          >
            {key}
          </Link>
        ))}
      </div>
      <div className="justify-right hidden h-[50%] lg:flex">
        <Button
          className="text-primary hover:text-yellow-400 lg:h-[30px] lg:w-[100px]"
          variant="outline"
        >
          <Link href="#contact">Contact</Link>
        </Button>
      </div>
    </div>
  );
};

function MountainIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
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

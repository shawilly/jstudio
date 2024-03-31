"use client";
import { Button } from "@/components/ui/button";
import { STD_SIZE, useMediaQuery } from "@/lib/use-media-query";
import Link from "next/link";
import { JSX, SVGProps, useState } from "react";

export const navLinks = new Map<string, string>([
  ["About", "#about"],
  ["Services", "#services"],
  ["Products", "#products"],
  ["Testimonials", "#testimonials"],
]);

export const NavBar = () => {
  const isTablet = useMediaQuery(STD_SIZE.TABLET);
  const [active, setActive] = useState("");

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-primary shadow-sm justify-evenly">
      <div className="w-full max-w-7xl mx-auto px-4 text-secondary">
        <div className="flex flex-auto justify-between  h-14 items-center text-secondary text-xl">
          <Link className="flex" href="">
            <MountainIcon className="w-6 h-6" />
            <span className="ml-2 font-bold text-2xl">
              Richmond Hair Studio
            </span>
          </Link>
          {Array.from(navLinks).map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className={`text-lg${isTablet ? " hidden" : ""}${
                active === label ? " text-white" : " text-muted-foreground"
              }`}
              onClick={() => setActive(label)}
            >
              {label}
            </Link>
          ))}
          <div>
            {isTablet ? (
              <></>
            ) : (
              <Button
                className="text-primary h-[30px] w-[100px]"
                variant="outline"
              >
                <Link href="#/contact">Contact</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

function MountainIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

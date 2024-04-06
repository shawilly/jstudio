"use client";
import scissors from "@public/scissors.json";
import { useLottie } from "lottie-react";
import dynamic from "next/dynamic";

export const Scissors = dynamic(
  () =>
    Promise.resolve(({ className }: { className?: string }) => {
      const styling = `pb-[22px] rotate-45 ${className ? ` ${className}` : ""}`;
      const { View } = useLottie({
        animationData: scissors,
        loop: false,
        autoplay: true,
      });

      return <div className={styling}>{View}</div>;
    }),
  { ssr: false }
);

"use client";
import scissors from "@public/scissors.json";
import { useLottie } from "lottie-react";
import dynamic from "next/dynamic";

export const Scissors = dynamic(
  () =>
    Promise.resolve(() => {
      const { View } = useLottie({
        animationData: scissors,
        loop: false,
        autoplay: true,
      });

      return <div className="pb-[22px]">{View}</div>;
    }),
  { ssr: false }
);

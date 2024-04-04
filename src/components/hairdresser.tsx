"use client";
import hairDresser from "@public/hairdresser.json";
import { useLottie } from "lottie-react";
import dynamic from "next/dynamic";

export const HairDresser = () => {
  const { View } = useLottie({
    animationData: hairDresser,
    loop: true,
    autoplay: true,
  });

  return View;
};

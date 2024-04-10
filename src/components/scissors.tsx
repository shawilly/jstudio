"use client";
import scissors from "@public/scissors.json";
import { useLottie } from "lottie-react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

export const Scissors = dynamic(
  () =>
    Promise.resolve(({ className }: { className?: string }) => {
      const styling = `pb-[22px] rotate-70 ${className ? ` ${className}` : ""}`;
      const { View, setSpeed, play, stop } = useLottie({
        animationData: scissors,
        loop: true,
        autoplay: true,
      });

      setSpeed(0.5);

      const [playing, setPlaying] = useState(true);

      useEffect(() => {
        const interval = setInterval(() => {
          if (playing) {
            stop();
          } else {
            play();
          }
          setPlaying((prevPlaying) => !prevPlaying);
        }, 800);

        return () => clearInterval(interval);
        // We only want to change this when playing changes
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [playing]);

      return <div className={styling}>{View}</div>;
    }),
  { ssr: false },
);

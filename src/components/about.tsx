"use client";
import hairDresser from "@public/hairdresser.json";
import { useLottie } from "lottie-react";

export const About = () => {
  const { View } = useLottie({
    animationData: hairDresser,
    loop: true,
    autoplay: true,
  });

  return (
    <section
      id="about"
      className="flex w-full h-screen p-5 font-sans justify-center "
    >
      <div className="container flex flex-row justify-between items-center">
        <div className="w-1/2 mr-8">{View}</div>
        <div className="w-1/2">
          <div>
            <h1 className="text-4xl text-secondary mb-5">About us</h1>
          </div>
          <p>
            Joanne, Shelley, and Umna together possess countless years of
            experience and a shared love for hair design as an artistic
            expression.
          </p>
          <p>
            Whether it's timeless hairstyles or the latest color innovations,
            we're committed to creating tailor-made looks that mirror the
            individual preferences of every customer.
          </p>
        </div>
      </div>
    </section>
  );
};

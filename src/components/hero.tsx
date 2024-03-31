import Lottie, { LottieOptions, useLottie } from "lottie-react";
import { TypeAnimation } from "react-type-animation";
import scissors from "@public/scissors.json";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const options: LottieOptions = {
    animationData: scissors,
    loop: true,
    autoplay: !isHovered,
  };

  const { View, play, stop } = useLottie(options);

  useEffect(() => {
    if (isHovered) {
      play();
    } else {
      stop();
    }
  }, [isHovered, play, stop]);

  return (
    <div
      className="flex flex-col items-center justify-start h-screen bg-primary"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="pb-[100px]">{View}</div>
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

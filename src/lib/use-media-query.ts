import { useState, useEffect } from "react";

export enum STD_SIZE {
  MOBILE = "(max-width: 768px)",
  TABLET = "(max-width: 1150px)",
}

export const useMediaQuery = (query: STD_SIZE): boolean => {
  const getMatches = (query: string): boolean => {
    // Prevents SSR issues
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState<boolean>(getMatches(query));

  const handleChange = () => {
    setMatches(getMatches(query));
  };

  useEffect(() => {
    const mediaQuery: MediaQueryList = window.matchMedia(query);

    setMatches(mediaQuery.matches);

    // Triggered at the first client-side load and if query changes
    handleChange();

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
};

export const useAllMediaQuery = (): Record<STD_SIZE, boolean> => {
  return {
    [STD_SIZE.MOBILE]: useMediaQuery(STD_SIZE.MOBILE),
    [STD_SIZE.TABLET]: useMediaQuery(STD_SIZE.TABLET),
  };
};

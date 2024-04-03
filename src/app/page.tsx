import { About } from "@/components/about";
import { Hero } from "@/components/hero";
import { LoadingScreen } from "@/components/loading-screen";
import { Products } from "@/components/products";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";
import { Suspense } from "react";
import { NavBar } from "../components/nav-bar";
import { NavButton } from "@/components/nav-button";

export default function Home() {
  return (
    <main
      id="main-app"
      className="flex min-h-screen flex-col items-center justify-between p-24 bg-primary"
    >
      <Suspense fallback={<LoadingScreen />}>
        <NavBar />
        <Hero />
        <About />
        <Services />
        <Products />
        <Testimonials />
      </Suspense>
    </main>
  );
}

import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { LoadingScreen } from "@/components/loading-screen";
import { NavBar } from "@/components/nav-bar";
import { Products } from "@/components/products";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="relative z-0 h-full w-full overflow-hidden">
      <NavBar />
      <Suspense fallback={<LoadingScreen />}>
        <Hero />
        <About />
        <Services />
        <Products />
        <Testimonials />
        <Contact />
      </Suspense>
    </div>
  );
}

"use client";
import { About } from "@/components/about";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { NavBar } from "../components/nav-bar";
import { Testimonials } from "@/components/testimonials";
import { Products } from "@/components/products";

export default function Home() {
  return (
    <div id="main-app-container">
      <main
        id="main-app"
        className="flex min-h-screen flex-col items-center justify-between p-24 bg-primary"
      >
        <NavBar />
        <Hero />
        <About />
        <Services />
        <Products />
        <Testimonials />
      </main>
    </div>
  );
}

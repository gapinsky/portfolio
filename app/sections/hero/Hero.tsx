"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { Nav } from "./Nav";
import ButtonHero from "./ButtonHero";
import ButtonGlow from "./ButtonGlow";
import { FloatingDockComponent } from "./FloatingDock";

export function Hero() {
  return (
    <section
      id="/"
      className=" h-screen w-full  flex items-center justify-center  antialiased bg-grid-white/[0.02] relative overflow-hidden"
    >
      <div className="magicpattern absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15 "></div>
      <Nav />
      <Spotlight />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-2xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Hello, I'm Antoni Gapiński <br />{" "}
          <p className="mt-2 bg-gradient-to-tr from-emerald-300/50 via-emerald-500 to-emerald-900/50 bg-clip-text">
            Frontend Developer
          </p>
        </h1>
        <p className="mt-2 font-normal text-sm text-neutral-300 max-w-xs md:mt-4 md:max-w-xl md:text-lg lg:max-w-3xl text-center mx-auto">
          I combine creativity with technology to deliver innovative web
          solutions.
        </p>
        <div className="flex items-center justify-center mt-4 gap-4 lg:gap-10 lg:mt-6">
          <ButtonHero>Projects</ButtonHero>
          <ButtonGlow>Meet me</ButtonGlow>
        </div>
      </div>
      <FloatingDockComponent />
    </section>
  );
}

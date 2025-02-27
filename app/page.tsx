"use client";
import { TracingBeam } from "@/components/ui/tracing-beam";
import AboutMe from "./sections/aboutMe/AboutMe";
import { Hero } from "./sections/hero/Hero";
import Projects from "./sections/projects/Projects";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";
export default function Home() {
  return (
    <>
      <Hero />
      <TracingBeam>
        <AboutMe />
        <Projects />
        <Contact />
        <Footer />
      </TracingBeam>
    </>
  );
}

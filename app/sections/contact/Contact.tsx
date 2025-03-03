"use client";
import Form from "./Form";
import PaperPlane from "./PaperPlane";
import React from "react";
import { motion } from "motion/react";
import SectionHeader from "@/components/ui/SectionHeader";
import { Toaster } from "sonner";
const Contact = () => {
  return (
    <section
      id="/contact"
      className="relative py-10  flex flex-col items-center justify-evenly md:px-10  lg:px-10  min-h-svh "
    >
      <SectionHeader>let's keep in touch</SectionHeader>
      <div className=" w-full flex flex-col items-center justify-center gap-16 md:flex-row md:items-start md:gap-8 lg:justify-evenly xl:justify-center  xl:gap-36">
        <div className="  px-5 text-6xl  font-bold uppercase  w-[90%] space-y-2 md:w-fit md:text-7xl md:px-0 lg:text-8xl md:space-y-4  xl:text-9xl">
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, type: "spring", bounce: 0.3 },
            }}
            viewport={{ once: true, amount: 0.5 }}
            className=" tracking-tight bg-gradient-to-br from-neutral-400 via-neutral-400 to-neutral-800 bg-clip-text text-transparent lg:pr-4"
          >
            Write
          </motion.p>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 1,
                type: "spring",
                bounce: 0.3,
                delay: 0.3,
              },
            }}
            viewport={{ once: true, amount: 0.5 }}
            className=" tracking-tighter bg-gradient-to-br from-neutral-400 via-neutral-400 to-neutral-800 bg-clip-text text-transparent lg:pr-4"
          >
            Refactor
          </motion.p>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 1,
                type: "spring",
                bounce: 0.3,
                delay: 0.6,
              },
            }}
            viewport={{ once: true, amount: 0.5 }}
            className=" tracking-tighter bg-gradient-to-br from-neutral-400 via-neutral-400 to-neutral-800 bg-clip-text text-transparent lg:pr-4"
          >
            Repeat
          </motion.p>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 1,
                type: "spring",
                bounce: 0.3,
                delay: 0.9,
              },
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-3xl text-emerald-600 xl:pl-2"
          >
            Let's collaborate!
          </motion.p>
        </div>
        <Form />
      </div>
      <PaperPlane />
      <div className="absolute w-[30%] aspect-square bg-white/5 rounded-full blur-3xl lg:right-24 xl:right-0 xl:bottom-0 -z-10"></div>
      <Toaster />
    </section>
  );
};

export default Contact;

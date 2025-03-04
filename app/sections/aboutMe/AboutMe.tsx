import Image from "next/image";
import { FileUser, MapPin, Send } from "lucide-react";
import Carousel from "./Carousel";
import SectionHeader from "@/components/ui/SectionHeader";
import Shadow from "./Shadow";
import { motion } from "motion/react";

export const animationVariants = {
  initial: { scale: 0.5, opacity: 0, y: "20%" },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, type: "spring", bounce: 0.3 },
  },
  viewport: { once: true, amount: 0.8 },
};

const AboutMe = () => {
  return (
    <section
      id="/about"
      className="relative overflow-hidden text-neutral-300 flex flex-col justify-evenly min-h-svh py-5  px-8 gap-16 md:gap-0 md:px-16 xl:px-32"
    >
      <Shadow />
      <SectionHeader>Get to know me</SectionHeader>
      <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 xl:grid-cols-12 xl:grid-rows-1">
        <motion.div
          className=" p-3 order-2  md:order-1 md:col-span-7 xl:order-2 xl:col-span-4  xl:pl-6 xl:pt-5 "
          variants={animationVariants}
          initial="initial"
          whileInView="visible"
          viewport={{ ...animationVariants.viewport }}
        >
          <p className="mb-1 text-xl xl:text-2xl">About me</p>
          <p className="p-1 xl:text-xl ">
            I love learning new technologies and testing them in practice. My
            specialty is React, TypeScript, and Tailwind, but I enjoy exploring
            other frontend tools and libraries. I value well-written code,
            application performance, and intuitive interfaces. I&apos;m not
            afraid of challenges and constantly improve my skills to deliver the
            best possible solutions.
          </p>
        </motion.div>
        <motion.div
          className=" p-3 order-4 md:order-3 md:col-span-7  xl:col-span-3  xl:px-8 xl:order-4 xl:pt-5"
          variants={animationVariants}
          initial="initial"
          whileInView="visible"
          viewport={{ ...animationVariants.viewport }}
        >
          <p className="text-xl mb-1 xl:text-2xl">Soft Skills </p>
          <ul className=" ml-1 space-y-2 tracking-tight xl:text-xl">
            <li>English - B2</li>
            <li>Problem solving and logical thinking</li>
            <li>
              Ability to work with technical <br /> documentation
            </li>
            <li>Willingness to learn and self-reliance</li>
            <li>Communication and teamwork</li>
            <li>Well-developed interpersonal skills</li>
          </ul>
        </motion.div>
        <motion.div
          className=" p-3 order-3 md:order-4  md:col-span-5 xl:px-8 xl:col-span-2 xl:order-3 xl:pt-5 "
          variants={animationVariants}
          initial="initial"
          whileInView="visible"
          viewport={{ ...animationVariants.viewport }}
        >
          <p className="text-emerald-500 mb-1 text-xl xl:text-2xl">
            Technical skills
          </p>
          <ul className=" ml-1 space-y-2 xl:text-xl ">
            <li className="flex items-center ">
              <Image
                src="/icons/react.png"
                alt="react.js icon"
                width={20}
                height={20}
                className="mr-2"
              />
              React.js
            </li>
            <li className="flex items-center ">
              <Image
                src="/icons/ts.png"
                alt="react.js icon"
                width={20}
                height={20}
                className="mr-2 "
              />
              Typescript
            </li>
            <li className="flex items-center ">
              <Image
                src="/icons/router.png"
                alt="react.js icon"
                width={20}
                height={20}
                className="mr-2 bg-white rounded-sm"
              />
              React Router
            </li>
            <li className="flex items-center ">
              <Image
                src="/icons/redux.png"
                alt="react.js icon"
                width={20}
                height={20}
                className="mr-2 "
              />
              Redux
            </li>
            <li className="flex items-center ">
              <Image
                src="/icons/tailwind.png"
                alt="react.js icon"
                width={20}
                height={20}
                className="mr-2 "
              />
              Tailwind
            </li>
            <li className="flex items-center ">
              <Image
                src="/icons/js.png"
                alt="react.js icon"
                width={20}
                height={20}
                className="mr-2 "
              />
              Javascript
            </li>
            <li className="flex items-center ">
              <Image
                src="/icons/css.png"
                alt="react.js icon"
                width={20}
                height={20}
                className="mr-2 "
              />
              CSS
            </li>
            <li className="flex items-center ">
              <Image
                src="/icons/html.png"
                alt="react.js icon"
                width={20}
                height={20}
                className="mr-2 "
              />
              HTML
            </li>
          </ul>
        </motion.div>
        <motion.div
          className=" p-3 order-1 md:order-2 md:col-span-5 xl:order-1 xl:col-span-3 "
          variants={animationVariants}
          initial="initial"
          whileInView="visible"
          viewport={{ ...animationVariants.viewport }}
        >
          <Image
            src="/images/portrait.webp"
            width={250}
            height={300}
            alt="My portrait picture"
            className="mx-auto rounded-md mb-5 "
          />
          <div className="mx-auto  w-fit xl:text-lg">
            <p className="flex items-center my-3 ">
              <MapPin className="mr-2 text-emerald-500" /> Koszalin, Poland
            </p>
            <p className="flex items-center mb-3 ">
              <Send className="mr-2 text-emerald-500" /> gapinski02@gmail.com
            </p>
            <p className="flex items-center mb-3 ">
              <FileUser className="mr-2 text-emerald-500" />{" "}
              <a href="/pdf/antoni_gapinski_resume.pdf" download>
                Download resume
              </a>
            </p>
          </div>
        </motion.div>
      </div>
      <Carousel />
    </section>
  );
};

export default AboutMe;

import Image from "next/image";
import profileImg from "../../../public/noImage.png";
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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
            suscipit autem saepe incidunt labore dignissimos cumque illum ullam
            possimus doloremque, quisquam obcaecati debitis veritatis beatae,
            nisi molestias minus ex rem magnam nesciunt. Saepe eius voluptatem
            quo in consequatur molestiae sequi quaerat iure quibusdam facilis,
            autem architecto asperiores nulla doloribus maiores porro sapiente
            quae quidem incidunt nobis neque fugiat veritatis? Mollitia, numquam
          </p>
        </motion.div>
        <motion.div
          className=" p-3 order-4 md:order-3 md:col-span-7  xl:col-span-3 xl:px-8 xl:order-4 xl:pt-5"
          variants={animationVariants}
          initial="initial"
          whileInView="visible"
          viewport={{ ...animationVariants.viewport }}
        >
          <p className="text-xl mb-1 xl:text-2xl">Soft Skills: </p>
          <ul className=" ml-1 space-y-2 tracking-tight xl:text-xl">
            <li>English - B2</li>
            <li>Well-developed interpersonal skills</li>
            <li>
              Ability to work with technical <br /> documentation
            </li>
            <li>Willingness to learn and self-reliance</li>
            <li>Problem solving and logical thinking</li>
          </ul>
        </motion.div>
        <motion.div
          className=" p-3 order-3 md:order-4  md:col-span-5 xl:px-8 xl:col-span-2  xl:order-3 xl:pt-5 "
          variants={animationVariants}
          initial="initial"
          whileInView="visible"
          viewport={{ ...animationVariants.viewport }}
        >
          <p className="text-emerald-500 mb-1 text-xl xl:text-2xl">
            Technical skills:
          </p>
          <ul className=" ml-1 space-y-2 xl:text-xl">
            <li>React.js</li>
            <li>React Router</li>
            <li>React Query</li>
            <li>Redux</li>
            <li>Jest</li>
            <li>Typescript</li>
            <li>Rest API</li>
            <li>Tailwind</li>
            <li>HTML/CSS/JS</li>
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
            src={profileImg}
            alt="My portrait picture"
            className="mx-auto rounded-md mb-5"
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
              <a href="" download className="cursor-pointer">
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

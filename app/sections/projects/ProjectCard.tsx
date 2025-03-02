import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

type Props = {
  title: string;
  image: string;
  description: string;
  tools: string[];
  link: string;
};

const ProjectCard = ({ title, image, description, tools, link }: Props) => {
  const [isExpand, setIsExpand] = useState(false);
  let text = isExpand ? description : `${description.slice(0, 183)}...`;
  const handleExpand = () => {
    setIsExpand((prevState) => !prevState);
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0, scale: 0.9 }}
      whileInView={{
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
          duration: 1, 
          type: "spring",
          bounce: 0.3,
          delay: 0.3,
        },
      }}
      viewport={{ once: true, amount: 0.5 }}
      className=" flex flex-col  h-fit    bg-neutral-800 overflow-hidden rounded-lg  md:max-w-lg  xl:max-w-xl "
    >
      <div className="relative  xl:h-72 overflow-hidden   ">
        <Image
          src={image}
          height={50}
          width={300}
          layout="responsive"
          alt={`${title} website thumbnail`}
          className="hover:scale-110 object-contain transition-transform duration-300 "
        />
      </div>
      <div className="text-neutral-300  p-5  flex-1">
        <p className="text-lg  xl:text-2xl">{title.toLocaleUpperCase()}</p>
        <p className="mb-2 xl:text-lg xl:my-2">
          {text}{" "}
          <button
            className="text-emerald-500 cursor-pointer xl:ml-2 px-1"
            onClick={handleExpand}
          >
            {isExpand ? "show less" : "show more"}
          </button>
        </p>
        <p className="mb-1">Tools:</p>
        <div className=" flex flex-wrap items-start  px-1 gap-2 min-h-16 ">
          {tools.map((tool, id) => (
            <span
              key={id}
              className="whitespace-nowrap border border-neutral-500 rounded-lg  px-1 select-none hover:text-emerald-500 hover:border-emerald-500"
            >
              {tool}
            </span>
          ))}
        </div>
        <a
          href={link}
          target="blank"
          className="flex w-fit ml-auto bg-gradient-to-tr text-neutral-300 from-emerald-400 via-emerald-400/50 to-emerald-400/30 px-2 py-0.5 rounded-md xl:text-lg"
        >
          Visit
          <ExternalLink className="ml-1 scale-90" />
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

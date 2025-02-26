import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

type Props = {
  title: string;
  image: string;
  description: string;
  tools: string[];
  link: string;
};

const ProjectCard = ({ title, image, description, tools, link }: Props) => {
  const [isExpand, setIsExpand] = useState(false);
  let text = isExpand ? description : `${description.slice(0, 200)}...`;
  const handleExpand = () => {
    setIsExpand((prevState) => !prevState);
  };

  return (
    <div className="h-fit flex flex-col border-neutral-900 mt-20 px-5 pb-3  bg-neutral-800  rounded-2xl max-w-sm md:max-w-lg xl:pb-5 xl:max-w-xl">
      <div className="relative h-56 -mt-16 xl:mx-5  ">
        <Image
          src={image}
          fill
          alt={`${title} website thumbnail`}
          className=" rounded-2xl "
        />
      </div>
      <div className="text-neutral-300 min-h-64 my-5 xl:m-5 flex-1">
        <p className="text-lg xl:text-xl">{title.toLocaleUpperCase()}</p>
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
        <div className=" flex flex-wrap  px-1 gap-2 ">
          {tools.map((tool, id) => (
            <span
              key={id}
              className="whitespace-nowrap border border-neutral-500 rounded-lg  px-1 select-none hover:text-emerald-500 hover:border-emerald-500"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
      <a
        href={link}
        target="blank"
        className="flex ml-auto bg-gradient-to-tr text-neutral-300 from-emerald-400 via-emerald-400/50 to-emerald-400/30 px-2 py-0.5 rounded-md xl:text-lg"
      >
        Visit
        <ExternalLink className="ml-1 scale-90" />
      </a>
    </div>
  );
};

export default ProjectCard;

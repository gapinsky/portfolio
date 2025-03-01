import Image from "next/image";

const Carousel = () => {
  const items = [
    {
      title: "CSS",
      source: "/icons/css.png",
    },
    {
      title: "HTML",
      source: "/icons/html.png",
    },
    {
      title: "Javascript",
      source: "/icons/js.png",
    },
    {
      title: "Typescript",
      source: "/icons/ts.png",
    },
    {
      title: "React",
      source: "/icons/react.png",
    },
    {
      title: "Redux",
      source: "/icons/redux.png",
    },
    {
      title: "React Router",
      source: "/icons/router.png",
    },
    {
      title: "Tailwind",
      source: "/icons/tailwind.png",
    },
  ];
  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full z-10 blur-lg bg-neutral-900 h-[200%] w-[10%]"></div>
      <div className="absolute top-1/2 -translate-y-1/2 right-0 rounded-full z-10 blur-lg translate-x-1/2 bg-neutral-900 h-[200%] w-[10%]"></div>
      <div className="overflow-hidden  pointer-events-none flex   text-neutral-200 gap-12 py-2  xl:gap-24">
        <ul className="flex justify-between items-center min-w-full shrink-0 gap-12 carousel select-none ">
          {items.map((item, id) => (
            <li key={id} className="flex items-center text-lg lg:text-xl ">
              <Image
                className="mr-2"
                src={item.source}
                width={40}
                height={40}
                alt={`${item.title} icon`}
              />{" "}
              {item.title}
            </li>
          ))}
        </ul>
        <ul className="flex justify-between items-center min-w-full shrink-0 gap-12 carousel select-none ">
          {items.map((item, id) => (
            <li key={id} className="flex items-center text-lg lg:text-xl">
              <Image
                className="mr-2"
                src={item.source}
                width={40}
                height={40}
                alt={`${item.title} icon`}
              />{" "}
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Carousel;

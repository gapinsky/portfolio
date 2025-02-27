import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const SectionHeader = ({ children }: Props) => {
  return (
    <div className=" mx-auto font-bold uppercase tracking-tighter   mb-10 text-2xl md:text-3xl  xl:text-4xl">
      <p className="bg-gradient-to-tr from-neutral-300  to-neutral-400/70 bg-clip-text text-transparent">
        {children}
      </p>
    </div>
  );
};

export default SectionHeader;

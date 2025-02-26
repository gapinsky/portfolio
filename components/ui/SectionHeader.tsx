import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const SectionHeader = ({ children }: Props) => {
  return (
    <div className="mx-auto font-semibold text-neutral-200 text-2xl md:text-3xl  xl:text-4xl">
      <p>{children}</p>
    </div>
  );
};

export default SectionHeader;

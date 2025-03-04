import { ReactNode } from "react";
import { scrollToSection } from "@/components/ui/floating-navbar";
interface Props {
  children: ReactNode;
}
const ButtonNoGlow = ({ children }: Props) => {
  return (
    <button
      onClick={() => scrollToSection("/about")}
      className="bg-neutral-800 no-underline group cursor-pointer relative shadow-xl shadow-neutral-800 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block md:text-base lg:text-lg"
    >
      <div className="relative flex bg-gradient-to-tr from-emerald-400 via-emerald-400/50 to-emerald-400/30 space-x-2 items-center z-10 rounded-full  py-0.5 px-4 ring-1 ring-white/10 md:py-1 md:px-5 lg:py-2 lg:px-6 hover:bg-emerald-500/50 transition duration-500">
        <span className="font-normal">{children}</span>
      </div>
    </button>
  );
};

export default ButtonNoGlow;

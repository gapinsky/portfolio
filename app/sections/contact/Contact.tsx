import SectionHeader from "@/components/ui/SectionHeader";
import Form from "./Form";
import PaperPlane from "./PaperPlane";

const Contact = () => {
  return (
    <section
      id="/contact"
      className="relative py-10  flex flex-col items-center justify-center md:px-5  lg:px-10  min-h-svh "
    >
      <div className=" w-full flex flex-col items-center justify-center gap-16 md:flex-row md:items-start md:gap-8 lg:justify-evenly xl:justify-center xl:gap-24">
        <div className=" px-5 text-6xl bg-gradient-to-br from-neutral-400 via-neutral-400 to-neutral-800 bg-clip-text text-transparent font-bold uppercase text-start w-[90%] space-y-2 md:w-fit md:text-7xl md:px-0 lg:text-8xl md:space-y-4 xl:px-2 xl:text-9xl">
          <p className=" tracking-tight ">Write</p>
          <p className=" tracking-tighter">Refactor</p>
          <p className=" tracking-tighter">Repeat</p>
          <p className="text-3xl text-emerald-600">Let's collaborate!</p>
        </div>
        <Form />
      </div>
      <PaperPlane />
      <div className="absolute w-[30%] aspect-square bg-white/5 rounded-full blur-3xl lg:right-24 xl:right-0 xl:bottom-0 -z-10"></div>
    </section>
  );
};

export default Contact;

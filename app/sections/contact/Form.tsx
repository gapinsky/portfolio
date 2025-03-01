// "use client";
// import React from "react";
import { motion } from "motion/react";
const Form = () => {
  return (
    <motion.form
      initial={{ y: 100, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 1,
          type: "spring",
          bounce: 0.3,
          delay: 0.5,
        },
      }}
      viewport={{ once: true, amount: 0.3 }}
      action=""
      className=" rounded-lg p-5 text-neutral-300 bg-neutral-800 w-[85%] shadow-lg shadow-neutral-900 md:w-[45%]  lg:w-[40%] xl:w-[25%] xl:text-xl xl:p-5 "
    >
      <p className="flex flex-col mb-5 md:mb-7 xl:mb-10">
        <label htmlFor="" className="mb-1">
          Name:
        </label>
        <input
          type="text"
          className="rounded-sm p-2 bg-neutral-600 shadow-sm shadow-neutral-900  "
        />
        <span>huj</span>
      </p>
      <p className="flex flex-col mb-5 md:mb-7 xl:mb-10">
        <label htmlFor="" className="mb-1">
          E-mail:
        </label>
        <input
          type="text"
          className="rounded-sm p-2 bg-neutral-600 shadow-sm shadow-neutral-900 "
        />
      </p>
      <div className="flex flex-col mb-5">
        <label htmlFor="" className="mb-1">
          Message:
        </label>
        <textarea
          name=""
          id=""
          className="rounded-sm p-2 bg-neutral-600 resize-none min-h-[120px] shadow-sm shadow-neutral-900 "
        ></textarea>
      </div>
      <p className="text-end">
        <button className="bg-gradient-to-tr from-emerald-400 via-emerald-400/50 to-emerald-400/30 px-3 py-1 shadow-md shadow-black/50 rounded-md xl:text-lg hover:bg-emerald-900">
          Submit
        </button>
      </p>
    </motion.form>
  );
};

export default Form;

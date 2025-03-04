import { motion } from "motion/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { toast } from "sonner";
const schema = z.object({
  name: z
    .string()
    .min(1, "Full name is required.")
    .min(6, "Full name must be at least 6 characters long.")
    .max(50, "Full name cannot be longer than 50 characters.")
    .regex(
      /^[A-Za-z ]+$/,
      "This field cannot contains numbers or special characters."
    ),
  email: z
    .string()
    .min(1, "E-mail is required.")
    .email("Invalid e-mail address."),
  message: z
    .string()
    .min(1, "Message is required.")
    .min(30, "Message must be at least 30 characters long.")
    .max(500, "Message cannot me longer than 500 characters."),
});

type Inputs = z.infer<typeof schema>;
const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setIsLoading(true);
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
    };

    emailjs
      .send(
        "portfolio",
        `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`,
        templateParams,
        process.env.NEXT_PUBLIC_USER_ID ?? ""
      )
      .then(
        function () {
          reset();
          setIsLoading(false);
          toast(
            "✅ Thanks for reaching me out. I will get back to You as soon as possible!"
          );
        },
        function (error) {
          setIsLoading(false);
          toast("⚠️ Something went wrong, Your message was not sent.");
        }
      );
  };

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
      onSubmit={handleSubmit(onSubmit)}
      className=" rounded-lg p-5 text-neutral-300 bg-neutral-800 w-[85%] shadow-lg shadow-neutral-900 md:w-[45%]  lg:w-[40%] xl:w-[30%] xl:text-xl xl:p-5 "
    >
      <p className="flex flex-col mb-5 md:mb-7 xl:mb-10">
        <label htmlFor="" className="mb-1">
          Full name:
        </label>
        <input
          {...register("name")}
          className="rounded-sm p-2 bg-neutral-600 shadow-sm shadow-neutral-900  "
        />
        <span className="text-sm text-red-600 mt-1">
          {errors.name?.message}
        </span>
      </p>
      <p className="flex flex-col mb-5 md:mb-7 xl:mb-10">
        <label className="mb-1">E-mail:</label>
        <input
          {...register("email")}
          className="rounded-sm p-2 bg-neutral-600 shadow-sm shadow-neutral-900 "
        />
        <span className="text-sm text-red-600 mt-1">
          {errors.email?.message}
        </span>
      </p>
      <div className="flex flex-col mb-5">
        <label className="mb-1">Message:</label>
        <textarea
          {...register("message")}
          className="rounded-sm p-2 bg-neutral-600 resize-none min-h-[140px] shadow-sm shadow-neutral-900 "
        />
        <span className="text-sm text-red-600 mt-1">
          {errors.message?.message}
        </span>
      </div>
      <p className="text-end">
        <input
          disabled={isLoading}
          type="submit"
          value={isLoading ? "Sending" : "Submit"}
          className="bg-gradient-to-tr from-emerald-400 via-emerald-400/50 to-emerald-400/30 px-3 py-1 shadow-md shadow-black/50 rounded-md xl:text-lg hover:bg-emerald-900"
        />
      </p>
    </motion.form>
  );
};

export default Form;

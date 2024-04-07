"use client";
import { email } from "@/lib/constants";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FormInput } from "lucide-react";
import React, { useRef, useState } from "react";
import { config } from "../lib/config";

interface FormInput {
  name: string;
  email: string;
  message: string;
}

enum FORM_ELEMENTS {
  INPUT = "input",
  TEXTAREA = "textarea",
}

const { emailJs, googleMapsApiKey } = config;

const nullForm: FormInput = {
  name: "",
  email: "",
  message: "",
};

const contact = {
  to_name: "Joanne",
  to_email: email,
} as const;

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<FormInput>(nullForm);
  const [loading, setLoading] = useState(false);

  const formSetter = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const {
      target: { name, value },
    } = e;
    setForm((form) => ({ ...form, [name]: value }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
    formSetter(e);

  const handleTextAreaChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ): void => formSetter(e);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const { service, template, options } = emailJs();

    try {
      await emailjs.send(
        service,
        template,
        {
          ...contact,
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        options,
      );
      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible");
      setForm(nullForm);
    } catch (error) {
      setLoading(false);
      console.error(error);
      alert(
        `Something went wrong. Please try again or reach out to me directly at ${contact.to_email}`,
      );
    }
  };

  const createFormFields = (
    fields: { name: keyof FormInput; value: string }[],
  ) =>
    fields.map((field) => {
      const { name, value } = field;
      const isTextArea = name === "message";
      const type = isTextArea ? FORM_ELEMENTS.TEXTAREA : FORM_ELEMENTS.INPUT;
      const specificProps = isTextArea
        ? { rows: 7, onChange: handleTextAreaChange }
        : { type, onChange: handleInputChange };

      const components: JSX.IntrinsicElements[FORM_ELEMENTS] = {
        key: `form-${type}-${name}`,
        name,
        value,
        placeholder: `...`,
        className:
          "bg-[#f9f9f9] text-[#282b2d] py-4 px-6 placeholder:text-secondary text-[#f9f9f9] rounded-lg outlined-none border-none font-medium",
        ...specificProps,
      };

      const formElement = React.createElement(type, {
        ...components,
        onChange: handleInputChange,
      });

      return (
        <label key={`form-label-${name}`} className="flex flex-col">
          <span className="mb-4 font-semibold text-[#f9f9f9]">{`Your ${name}`}</span>
          {formElement}
        </label>
      );
    });

  return (
    <section
      className="flex h-full w-full flex-col bg-purple-300 p-5 lg:flex-row"
      id="contact"
    >
      <div className="m-5 flex-col-reverse overflow-hidden rounded-l-3xl rounded-r-3xl bg-[#282b2d]  text-[#f9f9f9] lg:h-[60%] lg:w-2/5 lg:flex-row">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-black-100 h-screen flex-[0.75] rounded-2xl p-8 lg:h-[80%]"
        >
          <h1 className="m-0 text-3xl font-bold">Let's talk.</h1>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 lg:mt-12"
          >
            {createFormFields([
              { name: "name", value: form.name },
              { name: "email", value: form.email },
              { name: "message", value: form.message },
            ])}
            <button
              type="submit"
              className="mt-5 w-fit rounded-xl bg-purple-100 px-8 py-3 font-bold text-[#f9f9f9] shadow-md shadow-primary outline-none"
            >
              <span className="text-[#282b2d]">
                {loading ? "Sending..." : "Send"}
              </span>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

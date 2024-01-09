import React from "react";
import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="flex items-center max-lg:flex-col gap-10 max-container justify-between"
    >
      <h3 className="text-4xl font-bold font-palanquin lg:max-w-md leading-[64px]">
        Sign Up from <span className="text-coral-red">Updates </span> &
        Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input
          type="text"
          placeholder="subscribe@nike.com"
          className="input "
        ></input>
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button fullWidth label="Sign Up"></Button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;

import React from "react";

import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    formData.append("access_key", "ad729ead-5814-4aa6-8737-d50104ee0e65");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
      form.reset();
    }
  };
  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center gap-16 mt-20 px-4 sm:px-8 md:px-12 lg:px-24 w-full"
    >
      <div className="relative text-center">
        <h1 className="px-[30px] text-6xl font-semibold whitespace-nowrap">
          Get in touch
        </h1>
        <img
          src={theme_pattern}
          alt=""
          className="absolute bottom-0 right-2 -z-10 w-25 h-12 top-5"
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-10 sm:gap-20 w-full">
        <div className="flex flex-col gap-8 w-full lg:w-1/2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#df8908] to-[#b415ff] text-transparent bg-clip-text">
            Let's talk
          </h1>
          <p className="text-[#d8d8d8] text-base sm:text-lg md:text-xl leading-relaxed">
            I'm currently available to take on new projects, so feel free to
            contact me.
          </p>
          <div className="flex flex-col gap-4 text-[#d8d8d8] text-base sm:text-lg">
            <div className="flex items-center gap-4">
              <img src={mail_icon} alt="mail" className="w-6 h-6" />
              <p>emmanueloladejiolabode@gmail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <img src={call_icon} alt="phone" className="w-6 h-6" />
              <p>+2347065273312</p>
            </div>
            <div className="flex items-center gap-4">
              <img src={location_icon} alt="location" className="w-6 h-6" />
              <p>Ibadan, Nigeria.</p>
            </div>
          </div>
        </div>
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-6 w-full lg:w-1/2"
        >
          {/* Name */}
          <div className="flex flex-col gap-2 w-full">
            <label className="text-[#d8d8d8] text-base sm:text-lg font-medium">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="w-full h-[50px] sm:h-[60px] px-4 rounded-md bg-[#32323c] text-[#a0a0a0] text-sm sm:text-base outline-none"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-[#d8d8d8] text-base sm:text-lg font-medium">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full h-[50px] sm:h-[60px] px-4 rounded-md bg-[#32323c] text-[#a0a0a0] text-sm sm:text-base outline-none"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-[#d8d8d8] text-base sm:text-lg font-medium">
              Write your message here
            </label>
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Enter your message"
              className="w-full px-4 py-3 rounded-md bg-[#32323c] text-[#a0a0a0] text-sm sm:text-base outline-none"
            />
          </div>
          <button
            type="submit"
            className="self-start bg-gradient-to-r from-[#df8908] to-[#b415ff] text-white text-sm sm:text-base px-6 sm:px-10 py-2.5 sm:py-3 rounded-full transition-transform duration-300 hover:scale-110"
          >
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

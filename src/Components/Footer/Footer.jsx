import React, { useRef } from "react";
import "./Footer.css";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  const formRef = useRef(null);

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
      alert("Subscribed successfully!");
      form.reset();
    } else {
      alert("Subscription failed. Please try again.");
    }
  };
  return (
    <>
      <div className="mx-auto sm:mx-6 md:mx-6 lg:mx-12 xl:mx-auto my-8 sm:my-10 md:my-12 w-full max-w-screen-lg flex flex-col gap-6 sm:gap-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          <div className="ml-2 sm:ml-0 max-w-sm sm:max-w-md lg:max-w-lg">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Emman
              <span className="bg-gradient-to-r from-[#df8908] to-[#b415ff] text-transparent bg-clip-text">
                uel
              </span>
            </h1>
            <p className="text-[#d8d8d8] text-sm sm:text-base lg:text-lg mt-2 sm:mt-3">
              I'm a front-end developer with a passion for building engaging and
              intuitive web experiences.
            </p>
          </div>
          <form
            ref={formRef}
            onSubmit={onSubmit}
            className="ml-2 sm:ml-0 w-full max-w-full md:max-w-[22rem] lg:max-w-[24rem] flex flex-row items-center gap-2 sm:gap-2"
          >
            <div className="flex items-center gap-2 px-3 py-2 bg-[#32323b] rounded-full w-[10rem] sm:w-full sm:max-w-[12rem] flex-shrink-0 hover:border hover:border-white transition-colors duration-200">
              <img
                src={user_icon}
                alt="User icon"
                className="w-5 h-5 md:w-6 md:h-6 object-contain flex-shrink-0"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="bg-transparent outline-none border-none text-[#a0a0a0] text-sm md:text-base w-full"
              />
            </div>
            <button
              type="submit"
              className="text-white text-sm md:text-base px-3 py-2 rounded-full bg-gradient-to-r from-[#df8908] to-[#b415ff] hover:scale-110 transition-transform duration-300 w-[5.5rem] sm:w-[6rem] md:w-[7rem]"
              aria-label="Subscribe to newsletter"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-0 max-w-screen-lg mx-auto my-6">
        <hr className="border-gray-600 mb-6" />

        <div className="flex flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-between text-sm sm:text-base gap-4 sm:gap-6 flex-wrap w-full text-center sm:text-left">
          <p className="w-full sm:w-auto">
            © 2025 Emmanuel Oladeji. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
            <a
              href="#terms"
              className="hover:text-[#b415ff] transition-colors duration-200 whitespace-nowrap"
            >
              Terms of Service
            </a>
            <a
              href="#privacy"
              className="hover:text-[#b415ff] transition-colors duration-200 whitespace-nowrap"
            >
              Privacy Policy
            </a>
            <a
              href="#connect"
              className="hover:text-[#b415ff] transition-colors duration-200 whitespace-nowrap"
            >
              Connect with me
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;

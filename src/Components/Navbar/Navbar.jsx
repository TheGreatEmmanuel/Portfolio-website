import React, { useRef, useState } from "react";
import "./Navbar.css";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "0";
    }
  };

  const closeMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "-100%";
    }
  };

  return (
    <div className="flex items-center justify-between px-4 py-4 lg:mx-3 sm:px-6 sm:py-6 ">
      <h1 className="text-[28px] font-bold -mx-4 -mt-5 md:-ml-3  ">
        Emman
        <span className="bg-gradient-to-r from-[#df8908] to-[#b415ff] bg-clip-text text-transparent">
          uel
        </span>
      </h1>
      <img
        src={menu_open}
        onClick={openMenu}
        alt="Open menu"
        className="block md:hidden cursor-pointer  -mt-2.5 -mr-3.5"
      />
      <ul
        ref={menuRef}
        className="fixed top-0 right-[-100%] w-[60%] h-screen flex flex-col items-center justify-center gap-[60px] lg:gap-[60px] lg:text-[20px] lg:mx-13 bg-[#1f0016] transition-all duration-500 z-10 md:static md:flex md:flex-row md:items-center md:justify-end md:h-auto md:w-auto md:gap-[30px] md:bg-transparent md:text-[17px] md:ml-8 "
      >
        <img
          src={menu_close}
          onClick={closeMenu}
          alt="Close menu"
          className="block md:hidden absolute top-5 right-5 cursor-pointer"
        />
        <li className="flex flex-col gap-[5px] cursor-pointer">
          <AnchorLink className="no-underline text-white" href="#home">
            <p
              onClick={() => {
                setMenu("home");
                closeMenu();
              }}
            >
              Home
            </p>
          </AnchorLink>
          {menu === "home" && (
            <img src={underline} alt="" className="mx-auto flex" />
          )}
        </li>
        <li className="flex flex-col gap-[5px] cursor-pointer whitespace-nowrap">
          <AnchorLink
            className="no-underline text-white"
            offset={50}
            href="#about"
          >
            <p
              onClick={() => {
                setMenu("about");
                closeMenu();
              }}
            >
              About Me
            </p>
          </AnchorLink>
          {menu === "about" && (
            <img src={underline} alt="" className="mx-auto flex" />
          )}
        </li>
        <li className="flex flex-col gap-[5px] cursor-pointer">
          <AnchorLink
            className="no-underline text-white"
            offset={50}
            href="#services"
          >
            <p
              onClick={() => {
                setMenu("services");
                closeMenu();
              }}
            >
              Services
            </p>
          </AnchorLink>
          {menu === "services" && (
            <img src={underline} alt="" className="mx-auto flex" />
          )}
        </li>
        <li className="flex flex-col gap-[5px] cursor-pointer">
          <AnchorLink
            className="no-underline text-white"
            offset={50}
            href="#work"
          >
            <p
              onClick={() => {
                setMenu("work");
                closeMenu();
              }}
            >
              Portfolio
            </p>
          </AnchorLink>
          {menu === "work" && (
            <img src={underline} alt="" className="mx-auto flex" />
          )}
        </li>
        <li className="flex flex-col gap-[5px] cursor-pointer">
          <AnchorLink
            className="no-underline text-white"
            offset={50}
            href="#contact"
          >
            <p
              onClick={() => {
                setMenu("contact");
                closeMenu();
              }}
            >
              Contact
            </p>
          </AnchorLink>
          {menu === "contact" && (
            <img src={underline} alt="" className="mx-auto flex" />
          )}
        </li>
        <div className="md:hidden mt-5">
          <AnchorLink
            className="text-white no-underline px-[30px] py-[15px] text-[18px]  rounded-full bg-gradient-to-r from-[#da7c25] to-[#b923e1] inline-block whitespace-nowrap transition-transform duration-500 hover:scale-105"
            offset={50}
            href="#contact"
            onClick={closeMenu}
          >
            Connect With Me
          </AnchorLink>
        </div>
      </ul>
      <div className="hidden md:inline-block whitespace-nowrap cursor-pointer px-4 py-3 text-sm md:max-w-[180px] md:p-3 md:ml-3 lg:max-w-[220px] lg:p-5 lg:ml-8 rounded-full bg-gradient-to-r from-[#da7c25] to-[#b923e1] transition-transform duration-500 hover:scale-105 overflow-hidden">
        <AnchorLink
          className="text-white no-underline"
          offset={50}
          href="#contact"
        >
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;


import React from "react";
import { useState } from "react";
import "./Hero.css";
import resume from "../../assets/resume.jpg";
import profile_img from "../../assets/profile_img.jpg"
import AnchorLink from "react-anchor-link-smooth-scroll";


const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div id="home" className="flex flex-col items-center justify-center gap-9 px-4 mt-18">
      <img src={profile_img} alt="" className="rounded-full h-[250px] w-[250px] object-fill mt-12 block
                   md:h-[250px] md:w-[260px]
                   sm:h-[180px] sm:w-[180px]" />
      <h1 className="text-center font-semibold text-[29px] lg:text-[64px] xl:text-[60px] max-w-[90%]">
        <span className="bg-gradient-to-r from-[#df8908] to-[#b415ff] bg-clip-text text-transparent">I'm Emmanuel Oladeji,</span> <br />front-end developer based in Nigeria.
      </h1>

      <p className="text-center text-[18px] leading-[40px] -mt-4 max-w-2xl w-full px-4  
             md:text-[20px] md:leading-[28px] sm:text-[22px] xl:text-[22px] lg:text-[22px]">
        A dedicated front-end developer from Ibadan, Nigeria, with over a year
        of experience creating responsive and user-friendly websites and
        applications.
      </p>
      <div className="flex flex-col md:flex-row items-center gap-4 text-[24px] font-medium mb-12 md:text-[18px] sm:text-[16px]">
      <div className="w-full md:w-auto px-6 py-4 rounded-full bg-gradient-to-r from-[#da7c25] to-[#b923e1]
                    hover:border hover:border-white cursor-pointer text-center">
          {" "}
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="w-full md:w-auto px-11 py-3.5 rounded-full border-2 border-white hover:border-[#b415ff] cursor-pointer text-center"
         onClick={openModal}>
          My resume
        </div>
       
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
          <div className="relative">         
              <img src={resume} alt=""className="max-w-[90vw] max-h-[90vh] w-auto h-auto"/>
              <button className="absolute top-2 right-5 text-white text-[18px] hover:text-red-500" onClick={closeModal}>
                X
              </button>
          </div>
     
        </div>
     
      )}
    </div>
        
  );
};

export default Hero;

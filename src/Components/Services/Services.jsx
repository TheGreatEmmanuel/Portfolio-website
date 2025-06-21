import React from "react";
import "./Services.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Services_Data from "../../assets/services_data";

const Services = () => {
  return (
    <div
      id="services"
      className="flex flex-col items-center justify-center gap-16 mt-20 px-4 sm:px-8  md:px-16 lg:px-[170px]"
    >
      <div className="relative text-center">
        <h1 className="px-[30px] text-6xl font-semibold whitespace-nowrap">
          My Services
        </h1>
        <img
          src={theme_pattern}
          alt=""
          className="absolute bottom-0 right-2 -z-10 w-25 h-12 top-5"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] mb-[80px]">
        {Services_Data.map((service, index) => {
          return (
            <div
              key={index}
              className="flex flex-col  justify-start items-center gap-[20px]  p-5 rounded-[10px] border-2 border-white transition-transform duration-400 cursor-pointer hover:scale-105 hover:border-[#ff00ff] hover:bg-gradient-to-br from-[#3f0028] to-[#582300] w-full h-full max-w-[350px] mx-auto"
            >
              <h3 className="text-[16px] text-center font-semibold mt-2">
                {service.s_no}
              </h3>

              <div className="flex flex-col items-center text-center  gap-3 ">
                <h2 className="text-[32px] font-extrabold bg-gradient-to-r from-[#df8908] to-[#b415ff] bg-clip-text text-transparent lg:text-[27px]">
                  {service.s_name}
                </h2>
                <p className="text-[#d4d4d4] text-[18px] leading-[28px] max-w-[260px] text-wrap ">
                  {service.s_desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;

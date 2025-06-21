import React from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const MyWork = () => {
  const handleClick = () => {
    alert("No other works available for now!");
  };
  return (
    <div
      id="work"
      className="flex flex-col items-center justify-center gap-16 mt-20 px-4 sm:px-10 md:px-16 lg:px-20 xl:px-[170px]"
    >
      <div className="relative text-center">
        <h1 className="px-[30px] text-5xl font-semibold whitespace-nowrap">
          My latest work
        </h1>
        <img
          src={theme_pattern}
          alt=""
          className="absolute bottom-0 right-2 -z-10 w-25 h-12 top-3"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
        {mywork_data.map((work, index) => (
          <div key={index} className="flex flex-col items-center w-full">
            <div className="w-full max-w-[405px] h-[370px] overflow-hidden rounded-[10px]">
              <img
                src={work.w_img}
                alt="project preview"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-130 hover:border-[4px] hover:border-[#ff00ff]"
              />
            </div>
            <p className="text-[#d4cece] mt-5 mb-5 text-center text-base sm:text-[18px] leading-relaxed max-w-[405px] px-2">
              {work.description}
            </p>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-3 sm:gap-4 md:gap-5 border-2 border-white px-6 py-3 sm:px-10 sm:py-5 rounded-full text-base sm:text-lg md:text-xl font-medium mb-20 transition-all duration-300 hover:gap-6 cursor-pointer">
        <p onClick={handleClick}>Show More</p>
        <img src={arrow_icon} alt="" className="w-4 sm:w-5 md:w-6" />
      </div>
    </div>
  );
};

export default MyWork;

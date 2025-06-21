import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center gap-[45px] mt-[80px] lg:ml-8"
    >
      <div className="relative text-center">
        <h1 className="text-6xl font-bold whitespace-nowrap">About me</h1>
        <img
          src={theme_pattern}
          alt=""
          className="absolute bottom-0 -right-6 -z-10 w-25 h-12 top-5"
        />
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex justify-center">
          <img
            src={profile_img}
            alt=""
            className="hidden object-fill lg:block h-[400px] w-[800px] rounded-[25px]  "
          />
        </div>
        <div className="flex flex-col gap-[50px] xl:gap-[70px] lg:gap-[30px] md:gap-[70px] sm:gap-[40px]">
          <div className="flex flex-col gap-[20px] text-[16px] md:text-[20px] sm:text-[17px] font-medium lg:ml-11  sm:ml-4 mr-3 ml-6 ">
            <p>
              I'm a front-end developer with a passion for building engaging and
              intuitive web experiences. With a strong focus on clean design and
              responsive functionality, I strive to bring ideas to life through
              code.
            </p>
            <p>
              I specialize in HTML, CSS, JavaScript, and modern front-end
              frameworks, always focusing on delivering seamless user
              experiences. Driven by a love for problem-solving and continuous
              learning, I aim to create intuitive and visually appealing
              interfaces that meet both client and user needs.
            </p>
          </div>
          <div className="flex flex-col gap-[20px]  mr-6 lg:ml-10 xl:mr-9 sm:ml-4  ml-6">
            <div className="flex items-center gap-[50px] transition-transform duration-300 hover:scale-105">
              <p className="min-w-[150px] text-[24px] font-medium">
                HTML & CSS
              </p>
              <hr className="h-[8px] w-[80%] rounded-full border-none outline-none bg-gradient-to-r from-[#df8908] to-[#b415ff]" />
            </div>
            <div className="flex items-center gap-[50px] transition-transform duration-300 hover:scale-105">
              <p className="min-w-[150px] text-[24px] font-medium">
                Javascript
              </p>
              <hr className="h-[8px] w-[68%] rounded-full border-none outline-none bg-gradient-to-r from-[#df8908] to-[#b415ff]" />
            </div>
            <div className="flex items-center gap-[50px] transition-transform duration-300 hover:scale-105">
              <p className="min-w-[150px] text-[24px] font-medium">React JS</p>
              <hr className="h-[8px] w-[63%] rounded-full border-none outline-none bg-gradient-to-r from-[#df8908] to-[#b415ff]" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-4 sm:px-6 my-16 mx-auto max-w-screen-sm">
        <div className="flex items-center justify-between flex-wrap gap-y-6 sm:gap-y-8">
          <div className="flex flex-col items-center w-[90px] sm:w-[100px] md:w-[110px] gap-1 lg:gap-y-3 text-center transition-transform duration-500 hover:scale-105">
            <h1 className="text-[22px] sm:text-[28px] md:text-[34px] font-bold bg-gradient-to-r from-[#df8908] to-[#b415ff] bg-clip-text text-transparent">
              1+
            </h1>
            <p className="text-[9.5px] sm:text-[10px] md:text-xs font-medium lg:text-[18px] leading-tight whitespace-nowrap">
              YEAR OF EXPERIENCE
            </p>
          </div>
          <div className="h-[50px] sm:h-[70px] w-[1px] lg:h-[90px] bg-gray-300" />
          <div className="flex flex-col items-center w-[90px] sm:w-[100px] md:w-[110px] gap-1 lg:gap-y-3 text-center   transition-transform duration-500 hover:scale-105">
            <h1 className="text-[22px] sm:text-[28px] md:text-[34px] font-bold bg-gradient-to-r from-[#df8908] to-[#b415ff] bg-clip-text text-transparent">
              6+
            </h1>
            <p className="text-[9.5px] sm:text-[10px] md:text-xs font-medium lg:text-[18px] leading-tight whitespace-nowrap">
              PROJECTS COMPLETED
            </p>
          </div>
          <div className="h-[50px] sm:h-[70px] w-[1px] lg:h-[90px]  bg-gray-300" />
          <div className="flex flex-col  items-center w-[65px] sm:w-[65px] md:w-[65px] lg:w-[65px]  gap-1 lg:gap-y-3 text-center transition-transform duration-500 hover:scale-105">
            <h1 className="text-[22px] sm:text-[28px] md:text-[34px] font-bold bg-gradient-to-r from-[#df8908] to-[#b415ff] bg-clip-text text-transparent">
              1+
            </h1>
            <p className="text-[9.5px] sm:text-[10px] md:text-xs font-medium lg:text-[18px] leading-tight whitespace-nowrap">
              HAPPY CLIENTS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

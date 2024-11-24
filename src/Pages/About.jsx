import React from "react";
import jsLogo from "../assets/jsLogo.png";
import htmlLogo from "../assets/htmlLogo.png";
import cssLogo from "../assets/cssLogo.png";
import reactLogo from "../assets/reactLogo.png";
import reduxLogo from "../assets/reduxLogo.png";
import nextLogo from "../assets/nextLogo.png";
import winLogo from "../assets/winLogo.png";
import vscodeLogo from "../assets/vscodeLogo.png";
import tailwindLogo from "../assets/tailwindLogo.png";
import shader1 from "../assets/shader_1.png";
import shader2 from "../assets/shader_2.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../Components/ui/carousel";
import {
    Card,
    CardContent,
  } from "../Components/ui/card"
import { MY_PRJECTS } from "../Constants";
function About() {

  return (
    <section
      id="About"
      className={`relative w-screen py-24 px-24 max-lg:px-12 max-md:px-6 max-sm:px-1 flex flex-col justify-between gap-12 bg-[#E1EBED] overflow-y-hidden`}
    >
      <span className="w-[60rem] absolute -top-24 max-lg:-top-16 left-24 max-md:hidden">
        <img src={shader1} alt="Shader" className="w-full h-full z-0" />
        <div className="w-full h-full absolute bg-gradient-to-l from-transparent to-[#E1EBED] z-[1] top-0 left-0"></div>
      </span>
      <span className="w-[60rem] absolute top-[27rem] max-lg:top-[28rem] right-0 max-md:hidden">
        <img src={shader2} alt="Shader" className="w-full h-full z-0" />
        <div className="w-full h-full absolute bg-gradient-to-l from-transparent to-[#E1EBED] z-[1] top-0 left-0"></div>
      </span>

      <div className="w-full flex items-start z-10">
        <div className="flex flex-col gap-4 w-1/3 max-lg:w-1/2 max-md:w-full">
          <div className="text-2xl text-[#331C52] font-bold">About me</div>
          <div className="text-[#331C52]">
            As a Web Developer, I Am Responsible For Design And Developing Web
            Pages. <br />
            My Primary Focus Is To Create Responsive,User-Friendly Experience
            That Meet The Needs Of A Diverse Online Audience
          </div>
          <a href="../../public/CV/cv.pdf" download>
          <button className="bg-[#331C52] text-white w-1/2 rounded-md py-1 px-4">Download my CV</button>
          </a>
        </div>
      </div>
      <div className="w-full flex justify-end max-md:justify-start z-10">
        <div className="flex flex-col gap-4">
          <div id="Skills" className="text-2xl text-[#331C52] font-bold">
            My Skills
          </div>
          <div className="text-[#331C52]">
            Tehnologies I've been working with recently
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="h-12 w-12 flex justify-center items-center bg-[#331C52] rounded-md">
                <img src={jsLogo} alt="JavaScript_Logo" className="h-10" />
              </div>
              <div className="h-12 w-12 flex justify-center items-center bg-[#331C52] rounded-md">
                <img src={htmlLogo} alt="JavaScript_Logo" className="h-10" />
              </div>
              <div className="h-12 w-12 flex justify-center items-center bg-[#331C52] rounded-md">
                <img src={cssLogo} alt="JavaScript_Logo" className="h-10" />
              </div>
              <div className="h-12 w-12 flex justify-center items-center bg-[#331C52] rounded-md">
                <img src={reactLogo} alt="JavaScript_Logo" className="h-10" />
              </div>
              <div className="h-12 w-12 flex justify-center items-center bg-[#331C52] rounded-md">
                <img src={reduxLogo} alt="JavaScript_Logo" className="h-10" />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="h-12 w-12 flex justify-center items-center bg-[#331C52] rounded-md">
                <img src={nextLogo} alt="JavaScript_Logo" className="h-10" />
              </div>
              <div className="h-12 w-12 flex justify-center items-center bg-[#331C52] rounded-md">
                <img src={vscodeLogo} alt="JavaScript_Logo" className="h-10" />
              </div>
              <div className="h-12 w-12 flex justify-center items-center bg-[#331C52] rounded-md">
                <img src={winLogo} alt="JavaScript_Logo" className="h-10" />
              </div>
              <div className="h-12 w-12 flex justify-center items-center bg-[#331C52] rounded-md">
                <img src={vscodeLogo} alt="JavaScript_Logo" className="h-10" />
              </div>
              <div className="h-12 w-12 flex justify-center items-center bg-[#331C52] rounded-md">
                <img
                  src={tailwindLogo}
                  alt="JavaScript_Logo"
                  className="w-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-4 z-10 relative pb-24 max-md:pb-0">
        <div id="Projects" className="text-2xl text-[#331C52] font-bold">
          My Projects
        </div>
        <div className="text-[#331C52]">Some Thing I've built so far</div>
        <Carousel className="w-full max-sm:w-2/3 max-sm:translate-x-12 max-w-sm scale-150 max-md:scale-100 translate-y-14 max-lg:translate-y-20 translate-x-24 max-md:translate-y-0 max-lg:translate-x-32 max-md:translate-x-6">
      <CarouselContent className="-ml-1 w-full">
        {MY_PRJECTS.map((item) => (
          <CarouselItem key={item.project} className="pl-1 md:basis-1/2 lg:basis-1/3 w-full">
            <div className="p-1 w-full">
              <Card className="h-52 max-lg:h-60 max-md:h-full w-full">
                <CardContent className="flex aspect-square items-center justify-between px-0.5 pt-0.5 rounded-lg w-full h-full">
                    <div className="w-full h-full flex flex-col justify-between">
                        <div className="w-full h-2/3 overflow-hidden"><img src={item.imgSrc} alt="PRoject_img" className="w-full h-full rounded-t-lg" /></div>
                        <div className="text-[#331C52] text-sm font-bold scale-75 max-md:scale-100 ">{(item.title.length>12)?item.title.slice(0,12)+"...":item.title}</div>
                        <div className="text-[#331C52] text-xs scale-75 max-md:scale-100" title={item.description}>{(item.description.length>45)?item.description.slice(0,45)+"...":item.description}</div>
                        <a href={item.href} target="_blank" className="w-full">
                        <button className="text-white bg-[#331C52] rounded-md py-0.5 text-sm font-light tracking-wide w-full scale-75">VISIT</button>
                        </a>
                    </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
      </div>
    </section>
  );
}

export default About;

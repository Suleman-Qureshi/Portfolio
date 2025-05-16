import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { AiFillInstagram } from "react-icons/ai";
import jsLogo from '../assets/jsLogo.png'
import htmlLogo from '../assets/htmlLogo.png'
import cssLogo from '../assets/cssLogo.png'
import reactLogo from '../assets/reactLogo.png'
import reduxLogo from '../assets/reduxLogo.png'
import nextLogo from '../assets/nextLogo.png'
import winLogo from '../assets/winLogo.png'
import vscodeLogo from '../assets/vscodeLogo.png'
import tailwindLogo from '../assets/tailwindLogo.png'
import { BiLogoGmail } from 'react-icons/bi';
function Hero() {
  return (
   <section id='Home' className="w-screen h-screen bg-gradient-to-r from-[#331C52] to-[#291C3A] max-lg:before:h-screen heroSection max-md:before:bottom-0 max-md:before:translate-x-1/2 max-md:before:right-1/2 max-md:before:h-80 max-md:before:w-1/2 relative overflow-x-hidden pt-16 pb-28 max-lg:py-16 px-24 max-lg:px-12 max-md:px-6 max-sm:px-1 max-sm:before:w-2/3"> 
    <div className='w-full h-full flex flex-col gap-3 justify-center max-md:flex-col max-md:items-center'>
    <div className='h-full flex flex-col gap-4 py-4 max-md:text-center justify-center'>
      <div className='text-3xl font-bold text-white'>Hello &#128075; </div>
      <div className='text-8xl max-lg:text-7xl text-[#8121D0] font-extrabold tracking-tight'>I'm a web <br />Developer</div>
      <div className='text-white text-xl font-medium tracking-wider'>I build things for web</div>
      </div>
      <div className='flex gap-4 px-2 max-lg:flex-col max-md:flex-row max-lg:h-full max-lg:py-8 max-md:py-0 max-lg:gap-6'>
        <a href="https://www.instagram.com/dezignspectrum?igsh=MXF0Zm9mMWlvcWtuNQ==" target='_blank'>
      <TbBrandGithubFilled className='text-[#331C52] bg-[#8121D0] hover:text-[#DCCFED] duration-200 w-9 h-9 p-1.5 rounded-full cursor-pointer' />
        </a>
        <a href="https://github.com/Suleman-Qureshi/" target='_blank'>
      <FaLinkedinIn  className='text-[#331C52] bg-[#8121D0] hover:text-[#DCCFED] duration-200 w-9 h-9 p-1.5 rounded-full cursor-pointer' />
        </a>
        <a href="https://www.linkedin.com/in/suleman-qureshi-733051289/" target='_blank'>
      <AiFillInstagram className='text-[#331C52] bg-[#8121D0] hover:text-[#DCCFED] duration-200 w-9 h-9 p-1.5 rounded-full cursor-pointer' />
        </a>
        <a href="https://mail.google.com/mail/u/0/#search/99sulemanqureshi99%40gmail.com" target='_blank'>
      <BiLogoGmail className='text-[#331C52] bg-[#8121D0] hover:text-[#DCCFED] duration-200 w-9 h-9 p-1.5 rounded-full cursor-pointer' />
        </a>
      </div>
    </div>
    <div className='absolute max-md:hidden bottom-0 w-full px-24 max-lg:px-12 max-md:px-6 max-sm:px-1 py-2 bg-[#291C3A] left-0 z-40 flex gap-4 text-white justify-between'>
     <div className='flex gap-1 text-sm items-center'>
      <div className='text-5xl'>3</div>
      <div>YEARS OF <br/>EXPERIENCE</div>
     </div>
     <div className='flex gap-1 text-sm items-center'>
      <div className='text-5xl'>6</div>
      <div>PROJECTS COMPLETED<br/>AROUND THE WORLD</div>
     </div>
     <div className='flex gap-4 items-center max-lg:w-[485px] '>
      <img src={jsLogo} alt="JavaScript_Logo" className='h-10 max-lg:h-8 max-md:h-6 max-sm:h-5' />
      <img src={htmlLogo} alt="JavaScript_Logo" className='h-10 max-lg:h-8 max-md:h-6 max-sm:h-5' />
      <img src={cssLogo} alt="JavaScript_Logo" className='h-10 max-lg:h-8 max-md:h-6 max-sm:h-5' />
      <img src={reactLogo} alt="JavaScript_Logo" className='h-10 max-lg:h-8 max-md:h-6 max-sm:h-5' />
      <img src={reduxLogo} alt="JavaScript_Logo" className='h-10 max-lg:h-8 max-md:h-6 max-sm:h-5' />
      <img src={nextLogo} alt="JavaScript_Logo" className='h-10 max-lg:h-8 max-md:h-6 max-sm:h-5' />
      <img src={winLogo} alt="JavaScript_Logo" className='h-10 max-lg:h-8 max-md:h-6 max-sm:h-5' />
      <img src={vscodeLogo} alt="JavaScript_Logo" className='h-10 max-lg:h-8 max-md:h-6 max-sm:h-5' />
      <img src={tailwindLogo} alt="JavaScript_Logo" className='h-10 max-lg:h-8 max-md:h-6 max-sm:h-5' />
     </div>
    </div>
    </section>
  )
}

export default Hero

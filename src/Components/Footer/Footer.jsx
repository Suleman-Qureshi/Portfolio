import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
function Footer() {
  return (
    <footer className='w-screen px-24 max-lg:px-12 max-md:px-6 max-sm:px-1 py-6 bg-[#331C52] text-[#DCCFED] flex flex-col justify-center items-center text-center gap-4'>
        <div className='text-3xl font-bold'>SQ.</div>
       <div className=''>Designed and buid by <span className='text-[#8121D0]'>SulemanQureshi</span></div>
       <div className='flex gap-4 px-2'>
       <div className='flex gap-4 px-2'>
        <a href="https://www.instagram.com/dezignspectrum?igsh=MXF0Zm9mMWlvcWtuNQ==" target='_blank'>
      <AiFillInstagram className='text-[#331C52] bg-[#DCCFED] hover:bg-[#8121D0] duration-200 w-9 h-9 p-1.5 rounded-full cursor-pointer' />
        </a>
        <a href="https://github.com/Suleman-Qureshi/" target='_blank'>
      <TbBrandGithubFilled  className='text-[#331C52] bg-[#DCCFED] hover:bg-[#8121D0] duration-200 w-9 h-9 p-1.5 rounded-full cursor-pointer' />
        </a>
        <a href="https://www.linkedin.com/in/suleman-qureshi-733051289/" target='_blank'>
      <FaLinkedinIn  className='text-[#331C52] bg-[#DCCFED] hover:bg-[#8121D0] duration-200 w-9 h-9 p-1.5 rounded-full cursor-pointer' />
        </a>
        <a href="https://mail.google.com/mail/u/0/#search/99sulemanqureshi99%40gmail.com" target='_blank'>
      <BiLogoGmail className='text-[#331C52] bg-[#DCCFED] hover:bg-[#8121D0] duration-200 w-9 h-9 p-1.5 rounded-full cursor-pointer' />
        </a>
      </div>
      </div>
      
    </footer>
  )
}

export default Footer

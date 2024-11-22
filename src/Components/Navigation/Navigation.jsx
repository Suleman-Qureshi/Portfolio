import { NAV_LINKS } from '../../Constants';
import React from 'react'
import { GiEnvelope } from "react-icons/gi";

function Navigation() {
  return (
    <nav className='w-screen px-24 max-lg:px-12 max-md:px-6 max-sm:px-1 py-4 max-lg:py-3 bg-gradient-to-r from-[#8121D0] to-[#291C3A] text-white shadow-2xl shadow-black fixed z-30 bricolage-grotesque'>
      <div className='w-1/2 max-lg:w-full flex justify-between items-center'>
      <div className='text-2xl max-lg:text-3xl font-bold'>SQ.</div>
      <div className='flex gap-5 max-lg:gap-12 max-sm:gap-4 max-sm:text-sm max-lg:text-base items-center text-sm'>
      {NAV_LINKS.map(item=><a key={item.href} href={item.href} className='relative before:absolute before:w-0 before:h-0.5 before:bg-white before:rounded-full before:-bottom-0.5 hover:before:w-full duration-200 hover:duration-200 hover:before:duration-200 before:duration-200'>{item.title}</a>)}
      </div>
      <a href='https://mail.google.com/mail/u/0/#search/99sulemanqureshi99%40gmail.com' target='_blank' className='py-1.5 px-3 bg-white rounded-md text-xs font-bold text-[#291C3A] flex gap-1 item-center'>
      <GiEnvelope className='text-base' />
      <div>Hire me</div>
      </a>
      </div>
    </nav>
  )
}

export default Navigation

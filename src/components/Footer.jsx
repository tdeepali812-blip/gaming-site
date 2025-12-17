import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Twitter, Youtube, Linkedin } from 'lucide-react'

const Footer = () => { const year = new Date().getFullYear();
  return (
   <footer className='flex items-center justify-between lg:mt-[15%] mt-[25%] py-8 lg:px-32 md:px-16 px-8 border-t-[0.3px] border-[#babaff]'>
    <img className='h-10' src="/images/illu-text.png" alt="Illu-text"/>
<img  className='h-16 md:inline hidden' src="/images/illu-logo.png" alt="logo illu"/>
   <div className='flex gap-4'>
    <a aria-label="Twitter" className='md:text-3xl text-2xl hover:text-violet-600 transform hover:scale-110 transition duration-300' href="#">
        <i class='bx bx1-twitter'></i>
    </a>
    <a aria-label="YouTube" className='md:text-3xl text-2xl hover:text-violet-600 transform hover:scale-110 transition duration-300' href="#">
        <i class='bx bx1-youtube'></i>
    </a>
        <a aria-label="Discord" className='md:text-3xl text-2xl hover:text-violet-600 transform hover:scale-110 transition duration-300' href="#">
        <i class='bx bx1-discord'></i>
    </a>
        <a aria-label="LinkedIn" className='md:text-3xl text-2xl hover:text-violet-600 transform hover:scale-110 transition duration-300' href="#">
        <i class='bx bx1-linkedin-square'></i>
    </a>
   </div>

   <div className='w-full text-center mt-6 text-sm text-gray-600'>© {year} Gaming Site. All rights reserved.</div>

   </footer>
  )
}

export default Footer
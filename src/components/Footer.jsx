import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Twitter, Youtube, Linkedin } from 'lucide-react'

const Footer = () => { const year = new Date().getFullYear();
  return (
   <motion.footer initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className='flex items-center justify-between lg:mt-[15%] mt-[25%] py-8 lg:px-32 md:px-16 px-8 border-t-[0.3px] border-[#babaff]'>
    <img className='h-10' src="/images/illu-text.png" alt="Illu-text"/>
<img  className='h-16 md:inline hidden' src="/images/illu-logo.png" alt="logo illu"/>
   <div className='flex gap-4'>
    <motion.a aria-label="Twitter" whileHover={{ scale: 1.12 }} className='md:text-3xl text-2xl hover:text-violet-600 transform transition duration-200' href="#">
        <Twitter />
    </motion.a>
    <motion.a aria-label="YouTube" whileHover={{ scale: 1.12 }} className='md:text-3xl text-2xl hover:text-violet-600 transform transition duration-200' href="#">
        <Youtube />
    </motion.a>
        <motion.a aria-label="Discord" whileHover={{ scale: 1.12 }} className='md:text-3xl text-2xl hover:text-violet-600 transform transition duration-200' href="#">
        <i className='bx bxl-discord'></i>
    </motion.a>
        <motion.a aria-label="LinkedIn" whileHover={{ scale: 1.12 }} className='md:text-3xl text-2xl hover:text-violet-600 transform transition duration-200' href="#">
        <Linkedin />
    </motion.a>
   </div>

   <div className='w-full text-center mt-6 text-sm text-gray-600'>© {year} Gaming Site. All rights reserved.</div>

   </motion.footer>
  )
}

export default Footer
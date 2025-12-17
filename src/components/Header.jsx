import { useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import 'boxicons/css/boxicons.min.css'

const navItems = [
  { label: 'Avatar', href: '#', icon: 'bx bx-user-circle' },
  { label: 'Arena', href: '#arena', icon: 'bx bx-diamond' },
  { label: 'Beyond', href: '#', icon: 'bx bx-chevrons-up' },
  { label: 'Shop', href: '#shop', icon: 'bx bx-store' }
]

export default function Header(){
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark')
  const reduce = useReducedMotion()

  useEffect(() => {
    if (dark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <motion.header initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.45 } }} className="sticky top-0 z-50 w-full backdrop-blur-sm bg-white/40 dark:bg-black/40 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <motion.img whileHover={reduce ? {} : { scale: 1.06 }} transition={{ type: 'spring', stiffness: 300 }} src="/images/logo.png" alt="logo" className="h-10 w-auto" />
          <div className="hidden md:flex gap-3">
            <button className="h-9 px-4 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow hover:scale-105 transition">Play Now</button>
            <button className="h-9 px-4 rounded-full bg-gray-800/10 dark:bg-white/10 text-gray-800 dark:text-white shadow hover:scale-105 transition">NFT Store</button>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((n, i) => (
            <motion.a key={n.label} href={n.href} className="relative text-sm md:text-base text-gray-800 dark:text-gray-200 hover:text-violet-500 transition"
              whileHover={reduce ? {} : { y: -3 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <i className={n.icon + ' mr-2'} aria-hidden></i>
              <span className="underline-animation">{n.label}</span>
            </motion.a>
          ))}

          <button onClick={() => setDark(d => !d)} aria-label="Toggle theme" className="p-2 rounded text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/5 transition">
            {dark ? <i className="bx bx-sun"/> : <i className="bx bx-moon"/>}
          </button>
        </nav>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <button onClick={() => setDark(d => !d)} aria-label="Toggle theme" className="p-2 rounded text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/5 transition">
            {dark ? <i className="bx bx-sun"/> : <i className="bx bx-moon"/>}
          </button>

          <button onClick={() => setOpen(o => !o)} aria-expanded={open} aria-controls="mobileMenu" className="p-2 rounded text-2xl text-gray-700 dark:text-gray-200">
            <i className={`bx ${open ? 'bx-x' : 'bx-menu'}`}></i>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div id="mobileMenu" className="absolute right-4 left-4 top-16 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 md:hidden">
            <nav className="flex flex-col gap-3">
              {navItems.map(n => (
                <a key={n.label} href={n.href} className="text-gray-800 dark:text-gray-200 hover:text-violet-500">{n.label}</a>
              ))}
              <div className="mt-3 flex gap-2">
                <button className="flex-1 py-2 rounded bg-gradient-to-r from-purple-500 to-indigo-600 text-white">Play Now</button>
                <button className="flex-1 py-2 rounded bg-gray-800/10 dark:bg-white/10">NFT Store</button>
              </div>
            </nav>
          </div>
        )}
      </div>

      <style>{`.underline-animation::after{ content:''; position:absolute; left:0; bottom:-4px; height:2px; width:0; background:linear-gradient(90deg,#8b5cf6,#7c3aed); transition: width .25s ease } .underline-animation:hover::after{ width:100% }`}</style>
    </motion.header>
  )
}
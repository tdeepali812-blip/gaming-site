import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const words = ['Explore', 'Capture', 'Conquer']

const Hero = () => {
  const [index, setIndex] = useState(0)
  const [sub, setSub] = useState('')
  const reduce = useReducedMotion()

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setSub((w) => {
        i++
        if (i >= words[index].length) {
          clearInterval(interval)
          return words[index]
        }
        return words[index].slice(0, i)
      })
    }, 80)
    const rot = setTimeout(() => setIndex((idx) => (idx + 1) % words.length), 1800)
    return () => {
      clearInterval(interval)
      clearTimeout(rot)
    }
  }, [index])

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* animated gradient background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-violet-700 via-purple-600 to-indigo-500 animate-gradient-xy opacity-80" />

      {/* soft blobs */}
      <div className="absolute -left-24 -top-24 w-80 h-80 rounded-full bg-indigo-500 blur-3xl opacity-30 animate-pulse-slow -z-10" />
      <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-purple-500 blur-3xl opacity-25 animate-pulse-slower -z-10" />

      {/* optional large video on desktop (lazy) */}
      <video
        src="/videos/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        className="hidden lg:block absolute inset-0 w-full h-full object-cover opacity-30"
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center px-6 py-28">
        <motion.img
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          src="/images/illu-text.png"
          alt="Gaming Site"
          className="mx-auto h-20 md:h-36"
        />

        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="mt-6 text-3xl md:text-5xl font-extrabold text-white leading-tight"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/90 to-violet-200">{sub}</span>
          <span className="ml-2 text-xl md:text-3xl text-white/80">— The next-gen gaming experience</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="mt-4 max-w-2xl mx-auto text-sm md:text-base text-white/80"
        >
          Play with friends, show off characters, and experience immersive scenes — ready for launch.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <motion.a
            href="#"
            whileHover={reduce ? {} : { y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="px-6 py-3 rounded-full bg-white text-violet-700 font-semibold shadow-lg hover:shadow-2xl transition transform"
          >
            Play Now
          </motion.a>
          <motion.a whileHover={reduce ? {} : { scale: 1.02 }} whileTap={{ scale: 0.98 }} href="#" className="px-5 py-3 rounded-full border border-white/30 text-white/90 hover:bg-white/10 transition">Watch Trailer</motion.a>
        </motion.div>

        <motion.div className="mt-10 opacity-80 text-sm text-white/80"> 
          <strong className="text-white">ZERO</strong> — demo characters & features
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-white/70 animate-bounce">Scroll</div>

      <style>{`
        @keyframes gradient-xy { 0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%} }
        .animate-gradient-xy{ background-size:200% 200%; animation: gradient-xy 8s ease infinite; }
        .animate-pulse-slow{ animation: pulse 6s ease-in-out infinite; }
        .animate-pulse-slower{ animation: pulse 8s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .animate-gradient-xy, .animate-pulse-slow, .animate-pulse-slower, .animate-bounce { animation: none !important }
        }
      `}</style>
    </section>
  )
}

export default Hero
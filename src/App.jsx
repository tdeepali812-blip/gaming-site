import Arena from "./components/Arena";
import Characters from "./components/Characters";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { motion, useReducedMotion } from 'framer-motion'

const App = () => {
  const reduce = useReducedMotion()
  const initial = reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }
  const animate = { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }

  return (
    <motion.div className='min-h-screen bg-gradient-to-b from-white/50 to-transparent dark:from-black/60' initial={initial} animate={animate}>
      <motion.div initial={initial} animate={animate} transition={{ delay: 0.05 }}>
        <Header />
      </motion.div>

      <motion.div initial={initial} animate={animate} transition={{ delay: 0.12 }}>
        <Hero />
      </motion.div>

      <motion.div initial={initial} animate={animate} transition={{ delay: 0.18 }}>
        <Characters />
      </motion.div>

      <motion.div initial={initial} animate={animate} transition={{ delay: 0.22 }}>
        <Arena />
      </motion.div>

      <motion.div initial={initial} animate={animate} transition={{ delay: 0.28 }}>
        <Footer />
      </motion.div>
    </motion.div>
  )
}

export default App
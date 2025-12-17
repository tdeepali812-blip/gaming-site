import 'boxicons/css/boxicons.min.css'
import { motion } from 'framer-motion'

const cards = {
  left: [
    { id: 'store', type: 'image', src: '/images/bento-card1.png', label: 'NFT Store', cta: 'NFT STORE' },
    { id: 'showcase-1', type: 'video', src: '/videos/bento-card2.mp4', label: 'Showcase' }
  ],
  rightTop: [
    { id: 'scoriox', type: 'video', src: '/videos/bento-card3.mp4', label: 'Scoriox' },
    { id: 'floralynx', type: 'video', src: '/videos/bento-card4.mp4', label: 'Floralynx' },
    { id: 'titanor', type: 'video', src: '/videos/bento-card5.mp4', label: 'Titanor' }
  ],
  rightBottom: { id: 'buy', type: 'image', src: '/images/bento-card5.png', label: 'Featured', cta: 'Buy Now' }
}

const container = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.12 } }
}
const item = {
  hidden: { opacity: 0, y: 12, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 120, damping: 16 } }
}

const Card = ({ data }) => {
  return (
    <motion.div
      variants={item}
      whileHover={{ scale: 1.04, y: -6, boxShadow: '0 15px 40px rgba(99,102,241,0.15)' }}
      whileTap={{ scale: 0.99 }}
      className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-gradient-to-tr from-white/5 to-white/1"
      style={{ minHeight: 160 }}
      aria-label={data.label}
    >
      {data.type === 'image' ? (
        <img loading="lazy" src={data.src} alt={data.label} className="w-full h-full object-cover block" />
      ) : (
        <video className="w-full h-full object-cover hidden lg:block" src={data.src} autoPlay loop muted playsInline />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />

      {data.cta && (
        <button className="absolute bottom-3 left-3 right-3 py-2 rounded-md bg-violet-600 text-white font-semibold hover:bg-violet-700 transition" aria-label={data.cta}>
          {data.cta}
        </button>
      )}

      {data.label && (
        <div className="absolute bottom-3 right-3 text-sm font-bold text-white/90 backdrop-blur-sm px-3 py-1 rounded">
          {data.label}
        </div>
      )}
    </motion.div>
  )
}

const Arena = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center text-4xl md:text-5xl font-extrabold tracking-tight mb-12 text-gray-900 dark:text-white">
          Arena
        </motion.h2>

        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left column */}
          <div className="space-y-6">
            {cards.left.map(c => (
              <Card key={c.id} data={c} />
            ))}
          </div>

          {/* Right column */}
          <div className="md:col-span-2 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {cards.rightTop.map(c => (
                <Card key={c.id} data={c} />
              ))}
            </div>

            <Card key={cards.rightBottom.id} data={cards.rightBottom} />
          </div>
        </motion.div>

        <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Tap or hover the cards to see interactions. Videos are lazy-loaded and only autoplay on large screens to improve performance.
        </p>
      </div>
    </section>
  )
}

export default Arena


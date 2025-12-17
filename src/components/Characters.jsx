import React, { useEffect, useState } from 'react'
import { Star } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function CustomCursor({ active }) {
  const [pos, setPos] = useState({ x: -100, y: -100 })

  useEffect(() => {
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <motion.div className="fixed pointer-events-none z-50" style={{ left: pos.x - 12, top: pos.y - 12 }}>
      <div className={`w-6 h-6 rounded-full ${active ? 'bg-violet-500' : 'bg-white'} shadow-lg`} />
    </motion.div>
  )
}

const Characters = () => {

//track which avatar is currently selected
const [selectedAvatar, setSelectedAvatar] = useState('VIKI');
const [cursorInModelArea, setCursorInModelArea] = useState(false);





// avatars list and helpers
const avatars = [
  {
    id: 'VIKI',
    name: 'VIKI',
    img: '/images/VIKI.png',
    power: 75,
    stable: 90,
    penetrate: 75,
    portable: 60,
    stars: 3,
    scene: 'https://prod.spline.design/ZzPUlJkXPC-8AXMt/scene.splinecode'
  },
  {
    id: 'EVA',
    name: 'EVA',
    img: '/images/EVA.png',
    power: 80,
    stable: 85,
    penetrate: 70,
    portable: 75,
    stars: 3,
    scene: 'https://prod.spline.design/1PgSUTO1c0oZT522/scene.splinecode'
  },
  {
    id: 'LEXA',
    name: 'LEXA',
    img: '/images/VIKI.png',
    power: 85,
    stable: 80,
    penetrate: 70,
    portable: 65,
    stars: 4,
    scene: ''
  }
]

const currentAvatar = avatars.find((a) => a.id === selectedAvatar)

const handle3DAreaMouseEnter = () => setCursorInModelArea(true)
const handle3DAreaMouseLeave = () => setCursorInModelArea(false)



  return (
    <motion.section initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.7 }} className='relative w-full h-screen overflow-hidden mb-[10%]'>

<CustomCursor active={cursorInModelArea} />

{/*section title */}
<div className='relative z-10 pt-6 text-center'>
    <h1 className='text-5xl font-bold tracking-widest md:-mb-14 mb-8' style={{textShadow: '0 0 10px rgba(255,255,255,0.7)'}}>
         FIGHTERS </h1>
</div>
{/*Main content area */}
<div className='relative z-10 flex md:flex-row flex-col items-center w-full h-full p-4'>
{/* left side -avatar info and selection */}
<div className='w-full md:w-2/4 flex flex-col md:ml-10'>

{/* Selected Avatar info*/}
<div className='bg-gray-900/80 backdrop-blur-sm rounded-lg p-4 mb-4 border border-gray-800 shadow-[0_0_15px_rgba(167,139,250,0.2)]'>
<h1 className='text-2xl font-semibold mb-2'>
    {currentAvatar.name}
</h1>





{/* Avatar statistics */}
        <div className='space-y-3 mb-6'>
          {[['Power', currentAvatar.power], ['Stable', currentAvatar.stable], ['Penetrate', currentAvatar.penetrate], ['Portable', currentAvatar.portable]].map(([label, value]) => (
            <div className='flex items-center' key={label}>
              <span className='w-24 text-gray-400'>{label}</span>
              <div className='flex-1 h-4 bg-gray-800 rounded-full overflow-hidden'>
                <div className='h-full rounded-full bg-gradient-to-r from-violet-600 via-purple-500 to-white' style={{ width: `${value}%` }} />
              </div>
              <span className='ml-2'>{value}</span>
            </div>
          ))}
        </div>
{/* Action buttons */}
<div className='flex gap-3'>
    <button className='px-4 py-1 bg-violet-900 text-white rounded-md font-semibold hover:opacity-70 transition-all duration-300'>
        Proficient
    </button>



    <button className='px-4 py-1 bg-violet-900 text-white rounded-md font-semibold hover:opacity-70 transition-all duration-300'>
        Redeption
    </button>
</div>


</div>
{/* Avatar selection cards */}
                <div className='grid grid-cols-2 gap-4'>
                  {avatars.map((a) => (
                    <div
                      key={a.id}
                      onClick={() => setSelectedAvatar(a.id)}
                      className={`relative bg-gray-900/70 backdrop-blur-sm rounded-lg p-6 border flex flex-col items-center text-center cursor-pointer transition-transform transform ${
                        selectedAvatar === a.id ? 'ring-2 ring-violet-500 scale-105' : 'hover:-translate-y-1'
                      }`}
                    >
                      <div className='text-lg mb-3 text-white font-medium'>{a.name}</div>

                      <div className='w-20 h-20 bg-gray-800/50 flex items-center justify-center mb-3 rounded-md'>
                        <img src={a.img} alt={a.name} className='w-16 h-16 object-cover rounded-md' />
                      </div>

                      <div className='flex items-center gap-2'>
                        {[...Array(a.stars)].map((_, i) => (
                          <Star key={i} size={18} />
                        ))}
                      </div>

                      {selectedAvatar === a.id && (
                        <div className='absolute inset-0 border-4 border-violet-500 rounded-lg pointer-events-none'></div>
                      )}
                    </div>
                  ))}
                </div>


</div>
{/* right side - 3d model */}

<div className='relative md:w-2/4 w-full md:h-full h-[500px] flex items-center justify-center overflow-hidden'
onMouseEnter={handle3DAreaMouseEnter}
onMouseLeave={handle3DAreaMouseLeave}>
  <AnimatePresence mode="wait">
    <motion.div
      key={currentAvatar.id}
      className="absolute inset-0"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.5 }}
    >
      {currentAvatar.scene ? (
        <Spline scene={currentAvatar.scene} className="w-full h-full" />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-tr from-violet-600 to-indigo-500">
          <div className="text-white font-bold text-xl">Model coming soon</div>
        </div>
      )}
    </motion.div>
  </AnimatePresence>
</div>

</div>
    </motion.section>
  )
}


export default Characters
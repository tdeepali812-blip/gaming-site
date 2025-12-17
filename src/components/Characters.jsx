import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import {motion, AnimatePresence} from 'framer-motion';
import Spline from'@splinetool/react-spline';

//the custom cursor component to accept ishovwering3d prop
function customCursor(ishovering3d){
    const[postion, setPosition]=useState({x:0,y:0});
    const cursorRef=React.useRef(null);

    useEffect(()=>{
        const mouseMoveHandler=(e)=>{
            setPosition({x:e.clientX,y:e.clientY});
        };
        document.addEventListener('mousemove',mouseMoveHandler);
        return()=>{
            document.removeEventListener('mousemove',mouseMoveHandler);
        }
    })
    return(
       <motion.div 
       ref={cursorRef}
       className="fixed top-0 left-0 z-50 pointer-events-none mix-blend-difference"
       animate={{
        x:postion.x- (ishovering3d ? 12 : 15),
        y:postion.y- (ishovering3d ? 12 : 15),
        scale: ishovering3d ? 1.5 : 1,
       }}
       transition={{
        type:'spring',
        stiffness:500,
        damping:28,
        mass:0.5,
       }}
       >
        <motion.div  
        className={`rounded-full ${isHovering3D ? "bg-violet-500" :"bg-white"}`}
       animate={{
        width: ishovering3d ? "24px" : "40px",
        height: ishovering3d ? "24px" : "40px",
       }}
       transition={{duration:0.2}}
       />
       {isHovering3D && (
        <motion.div
        className='absolute inset-0 rounded-full bg-tansition border border-violet-500'
        initial={{scale:0.5, opacity:0}}
        animate={{scale:2, opacity:0.5}}
        transition={{duration:1, repeat:Number, POSITIVE_INFINITY}}
      
    />
    )}

       </motion.div>
     
    )
}

const Characters = () => {

//track which avatar is currently selected
const [selectedAvatar, setSelectedAvatar] = useState('VIKI');
const [cursorInModelArea, setCursorInModelArea] = useState(false);





//simpilified avatar data
const Avatar={
    VIKI:{
        name:"VIKI",
        power:75,
        stable:90,
        penetrate:75,
        portable:60,
        stars:3,

},
    LEXA:{
        name:"LEXA",
        power:85,   
        stable:80,
        penetrate:70,
        portable:65,    
        stars:4,

},
    EVA: {
        name: 'EVA',
        power: 80,
        stable: 85,
        penetrate: 70,
        portable: 75,
        stars: 3,
    }
}
//get current avatar data
const currentAvatar = Avatar[selectedAvatar];

const handle3DAreaMouseEnter = () => {
    setCursorInModelArea(true);
};

const handle3DAreaMouseLeave = () => {
    setCursorInModelArea(false);
};



  return (
    <div className='relative w-full h-screen overflow-hidden mb-[10%]'>

< customCursor isHovering3D={cursorInModelArea}/>

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
        <div className='space-y-3 mb-16'>
            {/* Stat rows - label + full rounded background with gradient fill */}
            <div className='flex items-center '>
                <span className='w-24 text-gray-400 '>Power</span>
                <div className='flex-1 h-4 bg-gray-800 rounded-full overflow-hidden'>
                    <div className='h-full rounded-full bg-gradient-to-r from-violet-600 via-purple-500 to-white' style={{width:`${currentAvatar.power}%`}} />
                </div>
                <span className='ml-2'>{currentAvatar.power}</span>
            </div>
            
 {/*stable stat */}
            <div className='flex items-center '>
                <span className='w-24 text-gray-300 '>Stable</span>
                <div className='flex-1 h-4 bg-gray-700 rounded-full overflow-hidden'>
                    <div className='h-full rounded-full bg-gradient-to-r from-violet-600 via-purple-500 to-white' style={{width:`${currentAvatar.stable}%`}} />
                </div>
                <span className='ml-2'>{currentAvatar.stable}</span>
            </div>
 {/*penterate stat */}
            <div className='flex items-center '>
                <span className='w-24 text-gray-300 text-sm'>Penetrate</span>
                <div className='flex-1 h-4 bg-gray-700 rounded-full overflow-hidden'>
                    <div className='h-full rounded-full bg-gradient-to-r from-violet-600 via-purple-500 to-white' style={{width:`${currentAvatar.penetrate}%`}} />
                </div>
                <span className='ml-2'>{currentAvatar.penetrate}</span>
            </div>

            <div className='flex items-center '>
                <span className='w-24 text-gray-300 text-sm'>Portable</span>
                <div className='flex-1 h-4 bg-gray-700 rounded-full overflow-hidden'>
                    <div className='h-full rounded-full bg-gradient-to-r from-violet-600 via-purple-500 to-white' style={{width:`${currentAvatar.portable}%`}} />
                </div>
              <span className='ml-2'>{currentAvatar.portable}</span>
            </div>

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
                    {/* VIKI card */}
                    <div onClick={()=>setSelectedAvatar('VIKI')} className='relative bg-gray-900/70 backdrop-blur-sm rounded-lg p-6 border flex flex-col items-center text-center cursor-pointer transition-all duration-300'
                        onclick={()=>setSelectedAvatar('VIKI')}>
                        <div className='text-lg mb-3 text-white font-medium'>{Avatar.VIKI.name}</div>

                        {/* Avatar visual placeholder */}
                        <div className='w-20 h-20 bg-gray-800/50 flex items-center justify-center mb-3 rounded-md'>
                            <img src="public\images\VIKI.png" alt='Viki' className='w-16 h-16 object-cover rounded-md' />
                        </div>

                        {/* Star rating - outlined white stars */}
                        <div className='flex items-center gap-2'>
                            {[...Array(Avatar.VIKI.stars)].map((_, i) => (
                                <Star key={i} size={20} strokeWidth={1.8} className='text-white stroke-current fill-violet-500'  />
                            ))}
                        </div>
                        {/* highlight for selected avatar */}
                        {selectedAvatar === 'VIKI' && (
                            <div className='absolute inset-0 border-4 border-violet-500 rounded-lg pointer-events-none'></div>
                        )}
                    </div>

 {/* eva card */}
                    <div onClick={()=>setSelectedAvatar('EVA')} className='relative bg-gray-900/70 backdrop-blur-sm rounded-lg p-6 border flex flex-col items-center text-center cursor-pointer transition-all duration-300' onclick={()=>setSelectedAvatar('VIKI')}>
                        <div className='text-lg mb-3 text-white font-medium'>{Avatar.EVA.name}</div>

                        {/* Avatar visual placeholder */}
                        <div className='w-20 h-20 bg-gray-800/50 flex items-center justify-center mb-3 rounded-md'>
                            <img src="public\images\EVA.png" alt='EVA' className='w-16 h-16 object-cover rounded-md' />
                        </div>

                        {/* Star rating - outlined white stars */}
                        <div className='flex items-center gap-2'>
                            {[...Array(Avatar.EVA.stars)].map((_, i) => (
                                <Star key={i} size={20} strokeWidth={1.8} className='text-white stroke-current fill-violet-500'  />
                            ))}
                        </div>
                        {/* highlight for selected avatar */}
                        {selectedAvatar === 'EVA' && (
                            <div className='absolute inset-0 border-4 border-violet-500 rounded-lg pointer-events-none'></div>
                        )}
                    </div>
                    
                    
                </div>


</div>
{/* right side - 3d model */}

<div className='relative md:w-2/4 w-full md:h-full h-[500px] flex items-center justify-center overflow-hidden'
onMouseEnter={handle3DAreaMouseEnter}
onMouseLeave={handle3DAreaMouseLeave}>
  <AnimatePresence mode="wait">
    {selectedAvatar === "VIKI" ? (
      <motion.div
        key="VIKI"
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1.4 }}   
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.6 }}
      >
        <Spline 
          scene="https://prod.spline.design/ZzPUlJkXPC-8AXMt/scene.splinecode"
          className="w-full h-full"
        />
      </motion.div>
    ) : (
      <motion.div
        key="EVA"
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1.4 }}   
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.6 }}
      >
        <Spline 
          scene="https://prod.spline.design/1PgSUTO1c0oZT522/scene.splinecode"
          className="w-full h-full"
        />
      </motion.div>
    )}
  </AnimatePresence>
</div>

</div>
    </div>
  )
}


export default Characters
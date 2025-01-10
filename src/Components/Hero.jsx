import React from 'react'
import { hero, spray, test} from '../assets/images/index'
import { easeInOut, motion } from "motion/react"

import Button from './Button'



const Hero = () => {
    
     
  return (
    <motion.div className="hero-container w-full px-1 flex items-center  justify-center  relative "
    initial={{ opacity: 0, translateX:-100,  }}
    animate={{ opacity: 1, translateX:0}}
    transition={{
        duration: 1,
        
    }}
    
            >
        <div className='w-4/5 relative h-custom-calc-mobile md:h-custom-calc-desktop' >
            <img src={test} alt="" srcset="" className='w-full h-full rounded-[35px] object-cover' />
            <div className="hero-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 rounded-xl bg-white/30 md:px-0 backdrop-blur-md shadow-lg   flex flex-col items-center justify-center gap-3 sm:p-4  sm:w-4/5 lg:p-2  lg:w-1/2 md:w-4/6 xl:w-[50%] 2xl:top-[45%] 2xl:py-8">
                <div className='flex gap-2  items-center justify-between px-2'>
                <svg  className= 'w-6 md:w-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#050505" d="m9 7l1-2V4H9V2h6q.425 0 .713.288T16 3v1l-1 2h-3V5l-2 2zM8 22v-6.85q0-.275.088-.587T8.3 14L12 7h3q.35.35.675.938T16 9v13z"/></svg>
                <p className='sm:text-[12px]  md:text-[16px] font-[400] text-[10px] text-center'>GO-TO CLEANERS</p>
                </div>

                <div >
                    <h1 className='font-thin italic text-[60px] sm:text-[65px] md:text-[76px] xl:text-[95px] leading-none text-center p-1 tracking-wide'><span className='text-[60px] md:text-[76px] sm:text-[65px]  xl:text-[95px] font-[250] not-italic tracking-tight'>SPACE</span> <br/> CLEAN</h1>
                </div>

                <div className='  w-4/5 lg:w-1/2 xl:w-[60%]  md:w-3/5'>
                    <p className='text-xs text-center w-full m-auto leading-6 md:text-sm tracking-wide font-light xl:text-lg 2xl:text-xl'>Creating cleaner, healthier spaces so you can focus on what matters most and relax on the weekends.</p>
                </div>

                <div className='pb-2 mt-5' >
                 <Button label = 'Book an Appointment' className='md:px-10 2xl:py-2  hover:bg-primary'/>

               

                </div>

            </div>

            

        </div>

        
      

        
    </motion.div>
  )
}

export default Hero
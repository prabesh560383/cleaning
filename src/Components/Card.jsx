import React from 'react'
import { motion } from "motion/react"
const Card = ({label1, label2, img, align = 'left'}) => {
  return (
    <div className='w-[280px] lg:w-clamp-img-width'>
        <div className="img relative w-full">
            <img src={img} alt="" srcset="" className='w-full h-[340px] lg:min-h-[380px] rounded-[40px] aspect-auto' />

            <div className= {`absolute top-[10%] ${align === 'left' ? 'left-[-15%]' : 'right-[-15%]'} text-center py-5 px-5 rounded-3xl bg-white/30 backdrop-blur-lg shadow-lg`}>
                <h1 className='text-2xl tracking-wider'>{label1}</h1>
                <p className='font-light tracking-wide'>{label2}</p>
            </div>

        </div>


    </div>
  )
}

export default Card
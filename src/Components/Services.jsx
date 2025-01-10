import React from 'react'
import { useState } from 'react'
import { card1, card2, card3 } from '../assets/images'
import { Button } from "@material-tailwind/react";
import { use } from 'react'
import AccordionCustomAnimation from './Accordian';

const Services = () => {

    const [activeImg, setActiveImg] = useState(card3)
    function changeCard (card){
        setActiveImg(card)
    }
  return (
<div className='flex flex-col gap-8 items-center justify-center w-full bg-yellow-100 2xl:flex-row 2xl:p-5 2xl:pb-10 2xl:justify-center'>
    <div className='  gap-8 2xl:max-w-1/2  px-3 py-2 flex flex-col justify-center items-center text-center 2xl:text-left 2xl:items-start'>
        <div className='flex items-center gap-3 p'>
        <svg className='w-8 2xl:w-11' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#050505" d="M15 20q-3.35 0-5.675-2.325T7 12q0-3.325 2.325-5.663T15 4q3.325 0 5.663 2.338T23 12q0 3.35-2.337 5.675T15 20m1-8.4V9q0-.425-.288-.712T15 8t-.712.288T14 9v3.025q0 .2.088.388t.212.312L16.575 15q.3.3.713.3T18 15t.3-.712t-.3-.713zM3 9q-.425 0-.712-.288T2 8t.288-.712T3 7h2q.425 0 .713.288T6 8t-.288.713T5 9zm-1 4q-.425 0-.712-.288T1 12t.288-.712T2 11h3q.425 0 .713.288T6 12t-.288.713T5 13zm1 4q-.425 0-.712-.288T2 16t.288-.712T3 15h2q.425 0 .713.288T6 16t-.288.713T5 17z"/></svg>
        <p className=' lg:text-clamp-label text-[12px] 2xl:text-xl font-normal tracking-wider  leading-5'>EFFICIENT</p>
        </div>
        
        <div>
            <p className='lg:text-clamp-heading 2xl:text-clamp-heading-xtraLarge text-[40px] leading-[50px] tracking-wide lg:leading-[60px] 2xl:leading-[75px] font-light'>Professional Cleaning <br/>For Every Occasion</p>
        </div>

        <div className= 'max-w-[400px] lg:w-5/6 xl:w-full' >
            <p className='lg:text-[19px]  font-light leading-relaxed'>
            A clean space fuels a clear mind. Whether at home or work, we offer customized cleaning services to keep your environment fresh, healthy, and inspiring.
            </p>
        </div>

        <div className=' w-[380px] px-2'>
        <AccordionCustomAnimation clickHandler={changeCard}/>
        </div>

    </div>

    <div className='mt-10'>
        <div className='w-[375px] h-[450px] lg:w-[450px] 2xl:w-clamp-img 2xl:h-clamp-img-height'>
            <img className='  rounded-3xl w-full h-full ' src={activeImg} alt="" srcset="" />
        </div>
        
    </div>

    




</div>
  )
}

export default Services
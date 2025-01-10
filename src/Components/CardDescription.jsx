import React from 'react'
import { broom } from '../assets/images'
import Button from './Button'

const CardDescription = ({icon = 'happy', label, heading1, heading2, text}) => {
  return (
    <div className='max-w-full flex flex-col gap-4 lg:gap-8'>
        <div className='flex justify-start gap-2 items-center'>
        {icon === 'happy' ? (<svg className='w-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#050505" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2q.825 0 1.625.125t1.55.375q.575.2.725.588t.025.762t-.462.588t-.763.037q-.65-.225-1.312-.35T12 4Q8.675 4 6.337 6.338T4 12t2.338 5.663T12 20t5.663-2.337T20 12q0-.45-.05-.9t-.15-.875q-.125-.475.125-.775t.625-.375t.738.113t.487.712q.125.5.175 1.025T22 12q0 2.075-.787 3.9t-2.138 3.175t-3.175 2.138T12 22m8-17h-1q-.425 0-.712-.288T18 4t.288-.712T19 3h1V2q0-.425.288-.712T21 1t.713.288T22 2v1h1q.425 0 .713.288T24 4t-.288.713T23 5h-1v1q0 .425-.288.713T21 7t-.712-.288T20 6zm-4.5 6q.625 0 1.063-.437T17 9.5t-.437-1.062T15.5 8t-1.062.438T14 9.5t.438 1.063T15.5 11m-7 0q.625 0 1.063-.437T10 9.5t-.437-1.062T8.5 8t-1.062.438T7 9.5t.438 1.063T8.5 11m3.5 6.5q1.45 0 2.675-.7t1.975-1.9q.15-.3-.025-.6T16.1 14H7.9q-.35 0-.525.3t-.025.6q.75 1.2 1.988 1.9t2.662.7"/></svg>)
        : (<svg className = 'w-8'xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#050505" d="M3 23v-7q0-2.075 1.463-3.537T8 11h1V3q0-.825.588-1.412T11 1h2.825 0 1.413.588T15 3v8h1q2.075 0 3.538 1.463T21 16v7zm2-2h2v-3q0-.425.288-.712T8 17t.713.288T9 18v3h2v-3q0-.425.288-.712T12 17t.713.288T13 18v3h2v-3q0-.425.288-.712T16 17t.713.288T17 18v3h2v-5q0-1.25-.875-2.125T16 13H8q-1.25 0-2.125.875T5 16z"/></svg>)}
        
        
        <p className=' lg:text-clamp-label text-[12px] font-normal tracking-wide r leading-5'>{label}</p>
        </div>

        <div>
            <p className='lg:text-clamp-heading text-[40px] leading-[44px] tracking-wide'>{heading1} <span className='italic font-thin'>{heading2}</span></p>
        </div>

        <div className='max-w-[350px] xl:max-w-[550px]'>
            <p className='lg:text-clamp-paragraph text-sm font-light leading-relaxed'>
            {text}
            </p>
        </div>

        <div>
            <Button label='Explore' />
        </div>


    </div>
  )
}

export default CardDescription

import './App.css'
import Nav from './Components/Nav'
import Hero from './Components/Hero'
import Card from './Components/Card'
import Services from './Components/Services'
import NavBar from './Components/NavBar'
import CardDescription from './Components/CardDescription'
import { TestimonialCard } from './Components/Testimonial'
import ServicesCards from './Components/ServicesCards'
import { Carousel } from "@material-tailwind/react";
import { motion } from "motion/react"
import { card1, card2, officeCleaning, residentialCleaning, endOfLeaseCleaning, schoolCleaning, touchPointCleaning, constructionCleaning} from './assets/images'


function App() {
  

  return (
    <>
      <main className='relative w-full bg-light-gray  '>
       
        <NavBar/>
        <Hero />
        <section 
          className='w-[70%] mt-10 lg:mt-24  flex flex-col justify-center items-center gap-6 m-auto lg:flex-row lg:w-[80%] lg:m-auto lg:items-center lg:gap-28 '
        >

            <Card 
              img={card1} 
              label1='24X' 
              label2='Deep Cleaning' 
              align='right'
              />
            <CardDescription
              icon = 'broom' 
              label= 'REGULAR'
              heading1 = 'Office'
              heading2 = 'Cleaners'
              text = 'The cleaning team that cares — Experts in creating pristine homes and productive workspaces.'
              />
        </section>


         <section className='w-[70%] mt-20 lg:mt-40  flex flex-col justify-center items-center gap-6 m-auto  lg:w-[80%] lg:m-auto lg:items-center lg:gap-28  lg:flex-row-reverse'>
            <Card   
              img={card2}
               label1='24/7' 
               label2='Maintenance'
              align='left'/>
           
            <CardDescription 
              icon = 'happy'
              label = 'FRESH'
              heading1 = 'Home'
              heading2 = 'Refresh'
              text = 'Experience the ultimate expert cleaning — Creating spaces where comfort and productivity thrive.'
              />
              
        </section>

        <div className="mt-6 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fef9c3" fill-opacity="1" d="M0,160L48,144C96,128,192,96,288,112C384,128,480,192,576,202.7C672,213,768,171,864,144C960,117,1056,107,1152,128C1248,149,1344,203,1392,229.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>


        
      
      <Services />

    <section className=' mt-20 bg-light-gray '>

      <div className='mb-20 px-2 '>
            <p className='lg:text-clamp-heading 2xl:text-clamp-heading-xtraLarge text-[40px] leading-[50px] tracking-wide text-center lg:leading-[60px] 2xl:leading-[75px] font-light'>Our Services</p>
          
            <div className= 'w-[380px]  m-auto mt-10  lg:w-[840px] xl:max-w-[1350px] xl:w-4/5' >
              <p className='lg:text-[19px]  text-center  font-light leading-relaxed '>
              At Space Clean, we specialize in transforming your workspace into a spotless, productive environment. From routine office cleaning to deep sanitation and specialized services, our team is dedicated to providing tailored solutions that meet your unique needs. Let us handle the cleaning so you can focus on what matters most—running your business.
              </p>
            </div>
      </div>

      

          <div class="grid grid-cols-1 w-4/5 m-auto lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-4 mt-10 2xl:w-3/4 2xl:gap-8 mb-[220px]">
            <ServicesCards 
              service= 'Office Cleaning' 
              img = {officeCleaning}/>
            <ServicesCards 
              service='Residential Cleaning'
              img={residentialCleaning} />
            <ServicesCards 
              service='School Cleaning' 
              img={schoolCleaning}/>
            <ServicesCards 
              service='Touch-Point Cleaning'
              img={touchPointCleaning}/>
            <ServicesCards 
              service='End-Of-lease Cleaning'
              img={endOfLeaseCleaning} />
            <ServicesCards 
              service='Construction Cleaning' 
              img={constructionCleaning}/>
          </div>

      </section>

      <section className='w-full  lg:w-4/5  m-auto lg:flex lg:gap-10 xl:gap-3 xl:w-2/3'>
       <div className='mb-10 max-w-[500px] m-auto'>
          <p className='text-center lg:text-clamp-heading text-[40px] lg:leading-[55px] xl:leading-[70px] 2xl:leading-[90px] leading-[44px] tracking-wide font-medium lg:text-left'>Our Sydney Customer <span className='text-red-200'>Loves </span>Us</p>
        </div> 
        
      
        <Carousel   
            transition={{ duration: 1 }} 
            className="rounded-xl  w-[24rem] m-auto lg:w-[32rem] 2xl:w-[30rem]"
            autoplay = {true}
            loop= {true}
           
    
            
            >
     
          <TestimonialCard 
              
            />
          <TestimonialCard/>
          <TestimonialCard/>

        </Carousel>
        
      </section>




      </main>
    </>
  )
}

export default App

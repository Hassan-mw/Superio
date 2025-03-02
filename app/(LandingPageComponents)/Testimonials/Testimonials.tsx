import React from 'react'
import TestimonialsArray from './TestimonialsArray'


const Testimonials = () => {
  return (
    <div className='w-full flex items-center justify-center '>

    <div className='w-full h-full flex flex-col items-center space-y-14 p-7 max-w-screen-m-2xl'>
    <div className='flex flex-col items-center justify-center space-y-3'>
     <div className='text-2xl font-semibold text-[#202124]'>Testimonials From Our Customers
     </div>
     <div className='text-base text-[#798490]'>Lorem ipsum dolor sit amet elit, sed do eiusmod tempor</div>
    </div>
       <TestimonialsArray/>
 </div> 
 </div> 
  )
}

export default Testimonials
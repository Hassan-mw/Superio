import React from 'react'
import NewAticlesArray from './NewAritcalesArray'
import { Jost } from 'next/font/google'
// import NewAritcalesArray from './NewAritcalesArray'

const jost=Jost({
  weight:['400'],
  subsets:['latin']
})
const NewAritcales = () => {
  return (
    <div className='w-full flex items-center justify-center '>

    <div className='w-full h-full flex flex-col items-center space-y-12 py-20 max-w-screen-m-2xl'>
    <div className='flex flex-col items-center justify-center space-y-3 '>
     <div className={` ${jost.className}  text-2xl font-semibold text-[#202124]`}>Recent News Articles</div>
     <div className={` ${jost.className} text-base text-[#798490]`}>Fresh job related news content posted each day.</div>
    </div>
    <NewAticlesArray/>
 </div> 
 </div> 
  )
}

export default NewAritcales
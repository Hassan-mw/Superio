
import { Jost } from 'next/font/google'
import Link from 'next/link'

const jost=Jost({
  weight:['400'],
  subsets:['latin']
})



const Navigators = () => {

  return (
    <div className='flex items-center justify-center space-x-9 xl:space-x-15 xl-g:space-x-12 2xl:space-x-15  w-full h-full z-50'>  
        <Link href='/job-list' style={{fontWeight:300}} className={` ${jost.className} text-[#202124] hover:text-[#4181d9] bg-none text-xl tracking-wider`}>Find Jobs</Link>
        <Link href='/employers' className={` ${jost.className} text-[#202124] hover:text-[#4181d9] bg-none text-xl tracking-wider`}>Employers</Link>
        <Link href='/candidates' className={` ${jost.className} text-[#202124] hover:text-[#4181d9] bg-none text-xl tracking-wider`}>Canididates</Link>
        <Link href='/blog' className={` ${jost.className} text-[#202124] hover:text-[#4181d9] bg-none text-xl tracking-wider`}>Blog</Link>
        <Link href='/faq' className={` ${jost.className} text-[#202124] hover:text-[#4181d9] bg-none text-xl tracking-wider`}>FAG</Link>
  </div>
  )
}

export default Navigators
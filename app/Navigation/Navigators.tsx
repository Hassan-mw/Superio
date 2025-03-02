import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
import HomeOptions from './Optons/HomeOptions'
import FindJobOptions from './Optons/FindJobOptions'
import EmployersOptions from './Optons/EmployersOptions'
import CandidatesOptions from './Optons/CandidatesOptions'
import BlogOptions from './Optons/BlogOptions'
import PagesOptions from './Optons/PagesOptions'
import { Jost } from 'next/font/google'
import Link from 'next/link'


const jost=Jost({
  weight:['400'],
  subsets:['latin']
})


  const navigatorIconArray=[
    {id:1,iconName:'Home',iconData:['Home 1','Home 2','Home 3','Home 4',]},
    {id:2,iconName:'Find jobs',iconData:['Home 1','Home 2','Home 3','Home 4',]},
    {id:3,iconName:'Employers',iconData:['Home 1','Home 2','Home 3','Home 4',]},
    {id:4,iconName:'Canidates',iconData:['Home 1','Home 2','Home 3','Home 4',]},
    {id:5,iconName:'BLog',iconData:['Home 1','Home 2','Home 3','Home 4',]},
    {id:5,iconName:'Pages',iconData:['Shop','Pricing ','About','Contact','FAQ','Terms']},
  ]
const Navigators = () => {
  return (
    <div className='flex items-center justify-center space-x-9 xl:space-x-15 xl-g:space-x-12 2xl:space-x-15  w-full h-full z-50'>  
        {/* <Link href='/' className={` ${jost.className} text-[#202124] hover:text-[#4181d9] bg-none `}>Home</Link> */}
        <Link href='/job-list' className={` ${jost.className} text-[#202124] hover:text-[#4181d9] bg-none `}>Find Jobs</Link>
        <Link href='/employers' className={` ${jost.className} text-[#202124] hover:text-[#4181d9] bg-none `}>Employers</Link>
        <Link href='/candidates' className={` ${jost.className} text-[#202124] hover:text-[#4181d9] bg-none `}>Canididates</Link>
        <Link href='/blog' className={` ${jost.className} text-[#202124] hover:text-[#4181d9] bg-none `}>Blog</Link>
        <Link href='/faq' className={` ${jost.className} text-[#202124] hover:text-[#4181d9] bg-none `}>FAG</Link>

       
    {/* //!  1 */}
        {/* <NavigationMenu >
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger className={` ${jost.className} text-[#202124] hover:text-[#4181d9] bg-none `}>Home</NavigationMenuTrigger>
        <NavigationMenuContent  className='z-50'>
          
        <NavigationMenuLink>
            <HomeOptions/>
        </NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
  */}
    {/* //!  2 */}
        {/* <NavigationMenu >
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger  className={` ${jost.className} text-[#202124] hover:text-[#4181d9]  bg-none `}>Find Jobs</NavigationMenuTrigger>
        <NavigationMenuContent >
          
        <NavigationMenuLink className='z-40'>
            <FindJobOptions/>
        </NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu> */}
 
    {/* //!  3 */}
        {/* <NavigationMenu >
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger  className={` ${jost.className} text-[#202124] hover:text-[#4181d9]  bg-none `}>Employers</NavigationMenuTrigger>
        <NavigationMenuContent>
          
        <NavigationMenuLink >
            <EmployersOptions/>
        </NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu> */}
 
    {/* //!  4 */}
        {/* <NavigationMenu >
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger  className={` ${jost.className} text-[#202124] hover:text-[#4181d9]  bg-none `}>Canididates</NavigationMenuTrigger>
        <NavigationMenuContent>
          
        <NavigationMenuLink >
            <CandidatesOptions/>
        </NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu> */}
 
    {/* //!  5 */}
        {/* <NavigationMenu >
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger  className={` ${jost.className} text-[#202124] hover:text-[#4181d9]  bg-none `}>Blog</NavigationMenuTrigger>
        <NavigationMenuContent>
          
        <NavigationMenuLink >
            <PagesOptions/>
        </NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu> */}
 
    {/* //!  6*/}
        {/* <NavigationMenu >
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger  className={` ${jost.className} text-[#202124] hover:text-[#4181d9]  bg-none `}>Pages</NavigationMenuTrigger>
        <NavigationMenuContent>
          
        <NavigationMenuLink >
            <PagesOptions/>
        </NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu> */}
 
  </div>
  )
}

export default Navigators
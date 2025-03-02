'use client'

import { useState } from "react"

const Test = () => {
    const [currentHoverIcon,setCurrentHoverIcon]=useState(null)
    const  numbers=[
        '1','2','3','4','5'
    ]
console.log(currentHoverIcon)
    function handleMouseEnter(data:number){
       setCurrentHoverIcon(data)
    }
    function handleMouseLeave(data:number){
      setCurrentHoverIcon(null)

    }
  return (
    <div className="w-full">
       
        <div className="flex items-center justify-center  space-x-10 w-full">
        {
            numbers.map((data,index)=>
                <div className={` text-3xl ${data===currentHoverIcon ? 'scale-150 text-4xl' :'-scale-150 text-2xl'}`} onMouseEnter={()=>handleMouseEnter(data)} onMouseLeave={()=>handleMouseLeave(data)} key={index}>Hassan</div>
            )
        }
        </div>
        {currentHoverIcon }
    </div>
  )
}

export default Test
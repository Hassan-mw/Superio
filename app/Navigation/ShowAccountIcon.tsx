'use client'

import { useEffect, useState } from "react"

const ShowAccountIcon = () => {
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        setLoading(false)
    },[])
  return (
    <div>  
{loading ? 
<div>loadin</div>
:
         <div className='size-12 hover:cursor-pointer rounded-full text-white bg-green-500 flex items-center justify-center text-xl'>A</div>
}
</div>
  )
}

export default ShowAccountIcon
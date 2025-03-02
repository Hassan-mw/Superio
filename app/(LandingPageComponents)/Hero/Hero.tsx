'use client'
import React, { useState, useEffect } from 'react'
import { CiSearch } from 'react-icons/ci'
import { IoLocationOutline } from 'react-icons/io5'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Image from 'next/image'
import ShowSmall from './ShowSmall'
import ShowLarge from './ShowLarge'


const Hero = () => {
    const [jobSearch, setJobSearch] = useState('')
    const [locationSearch, setLocationSearch] = useState('')
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
    <div className='w-full flex items-center justify-center '>

        <div className='w-full  h-full   max-w-screen-xl'>
          {/*//!        Hide at large      */}
         <ShowSmall/>
        {/* //!  Jobs section  */}
        <ShowLarge/>
        </div>
        </div>
    )
}

export default Hero

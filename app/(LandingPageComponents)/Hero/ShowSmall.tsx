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
import HomeData from './HomeData'

export default function ShowSmall() {
      const [jobSearch, setJobSearch] = useState('')
        const [locationSearch, setLocationSearch] = useState('')
        const [isClient, setIsClient] = useState(false)
    
        useEffect(() => {
            setIsClient(true)
        }, [])
    
  return (
    
    <div className='w-full h-full bg-[#e5ebf5] lg:hidden px-4 py-9'>
   <HomeData/>
    </div>
  )
}

import { imageDataType } from '@/Types/type'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LogoImage = ({height,width}:imageDataType) => {
  return (
    <Link href='/'><Image alt='Home-Logo' src="/logo.svg" height={height} width={width} /></Link>
  )
}

export default LogoImage
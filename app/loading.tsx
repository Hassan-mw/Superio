import { Jost } from 'next/font/google'
import React from 'react'

const jost=Jost({
    weight:['500'],
    subsets:['latin']
})

const loading = () => {
  return (
    <div className={`${jost.className} w-full h-full flex items-center justify-center`}>loading data please wait</div>
  )
}

export default loading
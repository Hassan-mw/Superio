'use client';
import React from 'react'
import FeatureJob from './(LandingPageComponents)/(FeaturedJobComponent)/FeatureJob'
import Testimonials from './(LandingPageComponents)/Testimonials/Testimonials'
import JobNumbers from './(LandingPageComponents)/JobNumbers/JobNumbers'
import Download from './(LandingPageComponents)/Download.tsx/Download'
import Footer from './(LandingPageComponents)/Footer/Footer'
import NewAritcales from './(LandingPageComponents)/NewsArticles/NewsArticles'
import  Test  from '@/Test/Test'
import Company from './(LandingPageComponents)/Company/Company'
import PopularJob from './(LandingPageComponents)/JobPage/PopularJob'
import Hero from './(LandingPageComponents)/Hero/Hero'
import ScrollElement from '@/components/ui/scroll-element';
import HBO from './hbo/HBO';

const page = () => {

  
  return (


    <div className='w-full flex flex-col items-center justify-center bg-[#f2f5fb]'>

        {/*   Hero */}
        {/* <ScrollElement
          direction='up'
          viewport={{ amount: 0.9, margin: '0px 0px 0px 0px' }}
          className='w-full flex items-center'
        > */}
         <Hero/>
        {/* </ScrollElement> */}

         {/*   popular Job */}
        {/* <ScrollElement
          direction='right'
          viewport={{ amount: 0.5, margin: '0px 0px 0px 0px' }}
          className='w-full flex items-center '
        > */}
         <PopularJob/>
        {/* </ScrollElement> */}

        {/*   Featured job */}
        {/* <ScrollElement
          direction='left'
          viewport={{ amount: 0.5, margin: '0px 0px 0px 0px' }}
          className='w-full flex items-center'
        > */}
         <FeatureJob/>
        {/* </ScrollElement> */}

      
        {/* <ScrollElement
          direction='left'
          viewport={{ amount: 0.5, margin: '0px 0px 0px 0px' }}
          className='w-full flex items-center'
        > */}
         <Company/>
        {/* </ScrollElement> */}

        {/*   Job Number */}
        {/* <ScrollElement
          direction='left'
          viewport={{ amount: 0.5, margin: '0px 0px 0px 0px' }}
          className='w-full flex items-center'
        > */}
         <JobNumbers/>
        {/* </ScrollElement> */}

        {/*   New Article*/}
        {/* <ScrollElement
          direction='right'
          viewport={{ amount: 0.5, margin: '0px 0px 0px 0px' }}
          className='w-full flex items-center'
        > */}
         <NewAritcales/>
        {/* </ScrollElement> */}

       {/*   Download */}  
        {/* <ScrollElement
          viewport={{ amount: 0.5, margin: '0px 0px 0px 0px' }}
          className='w-full flex items-center bg-green-700'

        > */}
         <Download/>
        {/* </ScrollElement> */}
      </div>









  )
}

export default page
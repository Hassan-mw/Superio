
import SideBar from '@/app/(components)/SideBar/SideBar'
import  { Suspense, useContext } from 'react'
import { Jost } from 'next/font/google'

import { Metadata } from 'next'

export const metadata: Metadata= {
  title: "FAQ - Superio ",
  description:"Find Jobs, Employment & Career Opportunities",
};

    import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

const page =async () => {



  return (
    <div className='w-full  flex flex-col items-center bg-white  text-[#202124]'>
      <div className='flex flex-col items-center justify-center space-y-2 py-16 bg-[#f2f5fc] w-full'>
      <div className={`${jost.className} text-xl md:text-2xl lg:text-3xl  text-[#202124]`}>FAQ</div>
      <div style={{fontWeight:300}} className={`${jost.className} flex items-center space-x-1 text-[#7f6b69]  `}><span>Home</span><span className={`${jost.className} text-[#202124]`}> / FAQ</span></div>
      </div>
    <div className='w-full max-w-screen-md flex flex-col items-center py-8 space-y-16 px-5'>

      <div className='w-full space-y-6'>
    <div className={`${jost.className} w-full flex items-start justify-start text-3xl`}>Payments</div>    
    <Accordion type="single" collapsible className="w-full space-y-4">
      <AccordionItem value="item-1" className='border rounded-md p-4'>
        <AccordionTrigger className={`${jost.className} text-2xl font-medium hover:text-blue-600 duration-500 `}>Why won't my payment go through?</AccordionTrigger>
        <AccordionContent className='p-3 border-t'>
        Pharetra nulla ullamcorper sit lectus. Fermentum mauris pellentesque nec nibh sed et, vel diam, massa. Placerat quis vel fames interdum urna lobortis sagittis sed pretium. Aliquam eget posuere sit enim elementum nulla vulputate magna. Morbi sed arcu proin quis tortor non risus.
Elementum lectus a porta commodo suspendisse arcu, aliquam lectus faucibus. Nisl malesuada tortor, ligula aliquet felis vitae enim. Mi augue aliquet mauris non elementum tincidunt eget facilisi. Pellentesque massa ipsum tempus vel aliquam massa eu pulvinar eget.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2"  className='border rounded-md p-4'>
        <AccordionTrigger  className={`${jost.className} text-2xl font-medium hover:text-blue-600 duration-500 `}>How do I get a refund?</AccordionTrigger>
        <AccordionContent  className='p-3 border-t'>
        Pharetra nulla ullamcorper sit lectus. Fermentum mauris pellentesque nec nibh sed et, vel diam, massa. Placerat quis vel fames interdum urna lobortis sagittis sed pretium. Aliquam eget posuere sit enim elementum nulla vulputate magna. Morbi sed arcu proin quis tortor non risus.
Elementum lectus a porta commodo suspendisse arcu, aliquam lectus faucibus. Nisl malesuada tortor, ligula aliquet felis vitae enim. Mi augue aliquet mauris non elementum tincidunt eget facilisi. Pellentesque massa ipsum tempus vel aliquam massa eu pulvinar eget.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3"  className='border rounded-md p-4'>
        <AccordionTrigger  className={`${jost.className} text-2xl font-medium hover:text-blue-600 duration-500 `}>Changing account name</AccordionTrigger>
        <AccordionContent  className='p-3 border-t'>
        Pharetra nulla ullamcorper sit lectus. Fermentum mauris pellentesque nec nibh sed et, vel diam, massa. Placerat quis vel fames interdum urna lobortis sagittis sed pretium. Aliquam eget posuere sit enim elementum nulla vulputate magna. Morbi sed arcu proin quis tortor non risus.
   Elementum lectus a porta commodo suspendisse arcu, aliquam lectus faucibus. Nisl malesuada tortor, ligula aliquet felis vitae enim. Mi augue aliquet mauris non elementum tincidunt eget facilisi. Pellentesque massa ipsum tempus vel aliquam massa eu pulvinar eget.
        </AccordionContent>
      </AccordionItem>
    </Accordion>

     </div>
      <div className='w-full space-y-6'>
    <div className={`${jost.className} w-full flex items-start justify-start text-3xl`}>Suggestions</div>    
    <Accordion type="single" collapsible className="w-full space-y-4">
      <AccordionItem value="item-1" className='border rounded-md p-4'>
        <AccordionTrigger className={`${jost.className} text-2xl font-medium hover:text-blue-600 duration-500 `}>Why won't my payment go through?</AccordionTrigger>
        <AccordionContent className='p-3 border-t'>
        Pharetra nulla ullamcorper sit lectus. Fermentum mauris pellentesque nec nibh sed et, vel diam, massa. Placerat quis vel fames interdum urna lobortis sagittis sed pretium. Aliquam eget posuere sit enim elementum nulla vulputate magna. Morbi sed arcu proin quis tortor non risus.
Elementum lectus a porta commodo suspendisse arcu, aliquam lectus faucibus. Nisl malesuada tortor, ligula aliquet felis vitae enim. Mi augue aliquet mauris non elementum tincidunt eget facilisi. Pellentesque massa ipsum tempus vel aliquam massa eu pulvinar eget.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2"  className='border rounded-md p-4'>
        <AccordionTrigger  className={`${jost.className} text-2xl font-medium hover:text-blue-600 duration-500 `}>How do I get a refund?</AccordionTrigger>
        <AccordionContent  className='p-3 border-t'>
        Pharetra nulla ullamcorper sit lectus. Fermentum mauris pellentesque nec nibh sed et, vel diam, massa. Placerat quis vel fames interdum urna lobortis sagittis sed pretium. Aliquam eget posuere sit enim elementum nulla vulputate magna. Morbi sed arcu proin quis tortor non risus.
Elementum lectus a porta commodo suspendisse arcu, aliquam lectus faucibus. Nisl malesuada tortor, ligula aliquet felis vitae enim. Mi augue aliquet mauris non elementum tincidunt eget facilisi. Pellentesque massa ipsum tempus vel aliquam massa eu pulvinar eget.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3"  className='border rounded-md p-4'>
        <AccordionTrigger  className={`${jost.className} text-2xl font-medium hover:text-blue-600 duration-500 `}>Changing account name</AccordionTrigger>
        <AccordionContent  className='p-3 border-t'>
        Pharetra nulla ullamcorper sit lectus. Fermentum mauris pellentesque nec nibh sed et, vel diam, massa. Placerat quis vel fames interdum urna lobortis sagittis sed pretium. Aliquam eget posuere sit enim elementum nulla vulputate magna. Morbi sed arcu proin quis tortor non risus.
   Elementum lectus a porta commodo suspendisse arcu, aliquam lectus faucibus. Nisl malesuada tortor, ligula aliquet felis vitae enim. Mi augue aliquet mauris non elementum tincidunt eget facilisi. Pellentesque massa ipsum tempus vel aliquam massa eu pulvinar eget.
        </AccordionContent>
      </AccordionItem>
    </Accordion>

     </div>

   
    </div>

     </div>
  )
}

export default page
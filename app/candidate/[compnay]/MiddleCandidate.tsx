import { Jost } from 'next/font/google'

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})
import { FaCalendar } from "react-icons/fa";
import { FaMoneyBills } from "react-icons/fa6";
import { MdWorkspacePremium } from "react-icons/md";
import { MdLocationSearching } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { FaCoins } from "react-icons/fa6";
import { MdEqualizer } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import EmployListData from '@/app/employers/EmployListData';
import MiddleJobListData from './MiddleJobListData';


const data=[
    {name:"Udamy",location:'New York',icon:'Logo1'},
    {name:"Udamy",location:'New York',icon:'Logo2'},
    {name:"Udamy",location:'New York',icon:'Logo3'},
  ]


const MiddleCandidate = () => {
// const MiddleCandidate = ({salary,experience,gender,age,qualification,language,phone,email}:filteredCandidate) => {
  return (
    <div className='w-full h-full flex items-center justify-center space-y-3 '>
    <div className='w-full     '>

    

        {/*Job Overview  */}
    <div className='w-full    flex flex-col space-y-5   p-3'>
    <div className={`${jost.className} text-xl w-full flex items-start`}>About Candidate</div>
    <div style={{fontWeight:400}} className={`${jost.className} text-[#77838f] flex flex-col space-y-3 text-md`}>
       <span>Hello my name is Nicole Wells and web developer from Portland. In pharetra orci dignissim, blandit mi semper, ultricies diam. Suspendisse malesuada suscipit nunc non volutpat. Sed porta nulla id orci laoreet tempor non consequat enim. Sed vitae aliquam velit. Aliquam ante erat, blandit at pretium et, accumsan ac est. Integer vehicula rhoncus molestie. Morbi ornare ipsum sed sem condimentum, et pulvinar tortor luctus. Suspendisse condimentum lorem ut elementum aliquam.</span> 
       <span>Mauris nec erat ut libero vulputate pulvinar. Aliquam ante erat, blandit at pretium et, accumsan ac est. Integer vehicula rhoncus molestie. Morbi ornare ipsum sed sem condimentum, et pulvinar tortor luctus. Suspendisse condimentum lorem ut elementum aliquam. Mauris nec erat ut libero vulputate pulvinar.</span> 
    </div>
    </div>


        {/*Job Overview  */}
    <div className='w-full  flex flex-col lg:flex-row lg:space-x-2 lg:space-y-0 lg:items-center lg:justify-center  space-y-2   p-3 '>
    <div className={`${jost.className} text-lg w-full flex items-start`}>Share this post :</div>
    <div className='w-full  flex items-center justify-start space-x-3    '>
    
   <div className='flex items-center justify-center space-x-4'>
    <div className='flex items-center justify-center space-x-1 bg-[#1967d2] text-white rounded-lg p-2 hover:cursor-pointer '>
        <div className='text-white'><FaFacebookF /></div>
        <div  className={`${jost.className} text-md `}>Facebook</div>
    </div>
   </div>
   <div className='flex items-center justify-center space-x-4'>
    <div className='flex items-center justify-center space-x-3 bg-[#bc91e8] text-white rounded-lg p-2 hover:cursor-pointer '>
        <div className='text-white'><FaTwitter /></div>
        <div  className={`${jost.className} text-md `}>Twitter</div>
    </div>
   </div>
   <div className='flex items-center justify-center space-x-4'>
    <div className='flex items-center justify-center space-x-1 bg-[#d93025] text-white rounded-lg p-2 hover:cursor-pointer '>
        <div className='text-white'><FaPinterestP /></div>
        <div  className={`${jost.className} text-md `}>pinterest</div>
    </div>
   </div>
    </div>
    </div>
  {/* Education */}
    <div className='w-full    flex flex-col space-y-5   p-3'>
    <div className={`${jost.className} text-xl w-full flex items-start`}>Education</div>
    <div style={{fontWeight:400}} className={`${jost.className} text-[#77838f] flex flex-col space-y-3 text-md`}>
      <div className='w-full flex items-start justify-start space-x-3'>
       <div className='bg-red-300 rounded-full px-3 py-1 text-red-700'>A</div>
       <div className='w-full flex flex-col items-start justify-start space-y-3'>
        <div className='flex items-center justify-center space-x-3'><div className='text-black text-xl font-medium'>Bachlors in Fine Arts</div><div className='text-sm text-red-500'>2013-2015</div> </div>
     <div className='text-red-500'>Modern Collage</div>    
       <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</div>
       </div>
      </div>
    </div>
    <div style={{fontWeight:400}} className={`${jost.className} text-[#77838f] flex flex-col space-y-3 text-md`}>
      <div className='w-full flex items-start justify-start space-x-3'>
       <div className='bg-red-300 rounded-full px-3 py-1 text-red-700'>B</div>
       <div className='w-full flex flex-col items-start justify-start space-y-3'>
        <div className='flex items-center justify-center space-x-3'><div className='text-black text-xl font-medium'>Computer Science</div><div className='text-sm text-red-500'>2016-2018</div> </div>
     <div className='text-red-500'>Harvard University</div>    
       <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</div>
       </div>
      </div>
    </div>
    </div>
  {/* Work and Experience */}
    <div className='w-full    flex flex-col space-y-5   p-3'>
    <div className={`${jost.className} text-xl w-full flex items-start`}>Work & Experience</div>
    {/* A */}
    <div style={{fontWeight:400}} className={`${jost.className} text-[#77838f] flex flex-col space-y-3 text-md`}>
      <div className='w-full flex items-start justify-start space-x-3'>
       <div className='bg-green-300 rounded-full px-3 py-1 text-green-700'>A</div>
       <div className='w-full flex flex-col items-start justify-start space-y-3'>
        <div className='flex items-center justify-center space-x-3'><div className='text-black text-xl font-medium'>Product Designer </div><div className='text-sm text-green-500'>2020-2021</div> </div>
     <div className='text-green-500'>Spotify Inc.</div>    
       <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</div>
       </div>
      </div>
    
    </div>
    {/* B */}
    <div style={{fontWeight:400}} className={`${jost.className} text-[#77838f] flex flex-col space-y-3 text-md`}>
      <div className='w-full flex items-start justify-start space-x-3'>
       <div className='bg-green-300 rounded-full px-3 py-1 text-green-700'>B</div>
       <div className='w-full flex flex-col items-start justify-start space-y-3'>
        <div className='flex items-center justify-center space-x-3'><div className='text-black text-xl font-medium'>CEO Founder  </div><div className='text-sm text-green-500'>2020-2021</div> </div>
     <div className='text-green-500'>ACB Company</div>    
       <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</div>
       </div>
      </div>
    </div>
   
    </div>

   

    {/* Portfolio */}
    <div className='w-full  flex flex-col items-start justify-start  space-y-5   p-3 border-y'>
    <div className={`${jost.className} text-2xl w-full flex items-center justify-center`}>Portfolio </div>
    <div className='w-full  flex items-start justify-start space-x-3 md:px-10    '>
  <div><img className='rounded-xl' src="/Portfolio1.jpg"/></div>   
  <div><img  className='rounded-xl'src="/Portfolio2.jpg"/></div>   
  <div><img  className='rounded-xl' src="/Portfolio3.jpg"/></div>   
  <div><img  className='rounded-xl' src="/Portfolio4.jpg"/></div>   
 
    </div>
    </div>
        {/*Job Overview  */}
    <div className='w-full   flex flex-col   space-y-2   p-3'>
    <div className={`${jost.className}w-full text-2xl  flex items-start`}>Vedio</div>
    <div className='w-full    '>
   <video controls className='w-full rounded-md' src='/vedio.mp4'/>
    </div>
    </div>
    </div>   </div>
  )
}

export default MiddleCandidate
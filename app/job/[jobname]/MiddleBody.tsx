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

interface filteredFeatureJobType {
    id:number,
   icon:string,
   name:string, 
   field:string,
   location:string,
   salery:string,
   time:string,
   urgent:boolean,
   expirationDate:String,
   maxSalary:String,
   minSalary:String,
   date:String,
   careerLevel:String,
   experience:String,
   qualification:String,
   icon:string

}

const MiddleBody = ({date, maxSalary, minSalary, icon, location, careerLevel,expirationDate, experience , qualification}:filteredFeatureJobType) => {
  return (
    <div className='w-full h-full flex items-center justify-center space-y-3 '>
    <div className='w-full     '>

    
        {/*Job Overview  */}
    <div className='w-full  flex flex-col items-center space-y-5  p-3'>
    <div className={`${jost.className} text-xl w-full flex items-start`}>Job Overview</div>
    <div className='w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-11 items-center justify-center '>
   <div className='flex items-start justify-start space-x-3'>
    <div className='bg-[#eff4fc] rounded-full text-[#1967d2] p-2 flex items-start'><FaCalendar /></div>
    <div className='flex flex-col space-y-1 items-start'>
        <div  className={`${jost.className}`}>Date Posted</div>
        <div className='${jost.className} text-[#77838f] text-sm '>{date}</div>
    </div>
   </div>
   <div className='flex items-start justify-start space-x-3'>
    <div className='bg-[#eff4fc] rounded-full text-[#1967d2] p-2 flex items-start'><CiLocationOn /></div>
    <div className='flex flex-col space-y-1 items-start'>
        <div  className={`${jost.className}`}>Location</div>
        <div className='${jost.className} text-[#77838f] text-sm '>{location}</div>
    </div>
   </div>
   <div className='flex items-start justify-start space-x-3'>
    <div className='bg-[#eff4fc] rounded-full text-[#1967d2] p-2 flex items-start'><FaMoneyBills /></div>
    <div className='flex flex-col space-y-1 items-start'>
        <div  className={`${jost.className}`}>offer Salary</div>
        <div className='${jost.className} text-[#77838f] text-sm '>{`${minSalary} $ - $ ${maxSalary}`}</div>
    </div>
   </div>
   <div className='flex items-start justify-start space-x-3'>
    <div className='bg-[#eff4fc] rounded-full text-[#1967d2] p-2 flex items-start'><MdLocationSearching /></div>
    <div className='flex flex-col space-y-1 items-start'>
        <div  className={`${jost.className}`}>Experience</div>
        <div className='${jost.className} text-[#77838f] text-sm '>{experience}</div>
    </div>
   </div>
   <div className='flex items-start justify-start space-x-3'>
    <div className='bg-[#eff4fc] rounded-full text-[#1967d2] p-2 flex items-start'><CiLocationOn /></div>
    <div className='flex flex-col space-y-1 items-start'>
        <div  className={`${jost.className}`}>Gender</div>
        <div className='${jost.className} text-[#77838f] text-sm '>Male</div>
    </div>
   </div>
   <div className='flex items-start justify-start space-x-3'>
    <div className='bg-[#eff4fc] rounded-full text-[#1967d2] p-2 flex items-start'><IoPersonOutline /></div>
    <div className='flex flex-col space-y-1 items-start'>
        <div  className={`${jost.className}`}>Last Date</div>
        <div className='${jost.className} text-[#77838f] text-sm '>{expirationDate}</div>
    </div>
   </div>
   <div className='flex items-start justify-start space-x-3'>
    <div className='bg-[#eff4fc] rounded-full text-[#1967d2] p-2 flex items-start'><MdEqualizer /></div>
    <div className='flex flex-col space-y-1 items-start'>
        <div  className={`${jost.className}`}>Qualification</div>
        <div className='${jost.className} text-[#77838f] text-sm '>{qualification}</div>
    </div>
   </div>
   <div className='flex items-start justify-start space-x-3'>
    <div className='bg-[#eff4fc] rounded-full text-[#1967d2] p-2 flex items-start'><FaCoins /></div>
    <div className='flex flex-col space-y-1 items-start'>
        <div  className={`${jost.className}`}>Carrer level</div>
        <div className='${jost.className} text-[#77838f] text-sm '>{careerLevel}</div>
    </div>
   </div>
    </div>
    </div>
        {/*Job Overview  */}
    <div className='w-full    flex flex-col space-y-5   p-3'>
    <div className={`${jost.className} text-xl w-full flex items-start`}>Job Description</div>
    <div style={{fontWeight:400}} className={`${jost.className} text-[#77838f] text-md`}>As a Product Designer, you will work within a Product Delivery Team fused with UX,
         engineering, product and data talent. You will help the team design beautiful 
         interfaces that solve business challenges for our clients. We work with a number
          of Tier 1 banks on building web-based applications for AML, KYC and Sanctions 
          List management workflows. This role is ideal if you are looking to segue your
           career into the FinTech or Big Data arenas.</div>
    </div>
        {/*Key Responsibilities */}
    <div className='w-full  flex flex-col items-start justify-start space-y-5   p-3'>
    <div className={`${jost.className} text-xl w-full flex items-start`}>Key Responsibilities</div>
   <div className='flex items-start justify-center space-x-2'>
    <div className='p-1'><GoDotFill size={15} />
     </div>
     <div style={{fontWeight:400}} className={`${jost.className} text-[#77838f] text-md`}>Be involved in every step of the product design cycle from discovery to developer handoff and user acceptance testing.</div>
   
    </div>
   <div className='flex items-start justify-center space-x-2'>
    <div className='p-1'><GoDotFill size={15} /></div>
     <div style={{fontWeight:400}} className={`${jost.className} text-[#77838f] text-md`}>Work with BAs, product managers and tech teams to lead the Product Design</div>
   
    </div>
   <div className='flex items-start justify-center space-x-2'>
    <div className='p-1'><GoDotFill size={15} /></div>
     <div style={{fontWeight:400}} className={`${jost.className} text-[#77838f] text-md`}>Maintain quality of the design process and ensure that when designs are translated into code they accurately reflect the design specifications.</div>
    </div>
   <div className='flex items-start justify-center space-x-2'>
    <div className='p-1'><GoDotFill size={15} /></div>
     <div style={{fontWeight:400}} className={`${jost.className} text-[#77838f] text-md`}>Accurately estimate design tickets during planning sessions.</div>
    </div>
   <div className='flex items-start justify-center space-x-2'>
    <div className='p-1'><GoDotFill size={15} /></div>
     <div style={{fontWeight:400}} className={`${jost.className} text-[#77838f] text-md`}>Contribute to sketching sessions involving non-designersCreate, iterate and maintain UI deliverables including sketch files, style guides, high fidelity prototypes, micro interaction specifications and pattern libraries.</div>
    </div>
   <div className='flex items-start justify-center space-x-2'>
    <div className='p-1'><GoDotFill size={15} /></div>
     <div style={{fontWeight:400}} className={`${jost.className} text-[#77838f] text-md`}>Design pixel perfect responsive UI’s and understand that adopting common interface patterns is better for UX than reinventing the wheel</div>
    </div>
   <div className='flex items-start justify-center space-x-2'>
    <div className='p-1'><GoDotFill size={15} /></div>
     <div style={{fontWeight:400}} className={`${jost.className} text-[#77838f] text-md`}>Design pixel perfect responsive UI’s and understand that adopting common interface patterns is better for UX than reinventing the wheel</div>
    </div>
   <div className='flex items-start justify-center space-x-2'>
    <div className='p-1'><GoDotFill size={15} /></div>
     <div style={{fontWeight:400}} className={`${jost.className} text-[#77838f] text-md`}>Present your work to the wider business at Show & Tell sessions.</div>

    </div>
   
    
    </div>
        {/*Skill & Experience */}
    <div className='w-full  flex flex-col  items-start justify-start  space-y-5   p-3'>
    <div className={`${jost.className} text-xl w-full flex items-start`}>Skill & Experience</div>
   <div className='flex items-start justify-center space-x-2'>
    <div className='p-1'><GoDotFill size={15} />
     </div>
     <div style={{fontWeight:400}} className={`${jost.className} text-[#77838f] text-md`}>You have at least 3 years’ experience working as a Product Designer.</div>
   
    </div>
   <div className='flex items-start justify-center space-x-2'>
    <div className='p-1'><GoDotFill size={15} /></div>
     <div style={{fontWeight:400}} className={`${jost.className} text-[#77838f] text-md`}>You have experience using Sketch and InVision or Framer X</div>
   
    </div>
   <div className='flex items-start justify-center space-x-2'>
    <div className='p-1'><GoDotFill size={15} /></div>
     <div style={{fontWeight:400}} className={`${jost.className} text-[#77838f] text-md`}>You have some previous experience working in an agile environment – Think two-week sprints.</div>
    </div>
   <div className='flex items-start justify-center space-x-2'>
    <div className='p-1'><GoDotFill size={15} /></div>
     <div style={{fontWeight:400}} className={`${jost.className} text-[#77838f] text-md`}>You are familiar using Jira and Confluence in your workflow</div>
    </div>

 
   
    
    </div>
        {/*Job Overview  */}
    <div className='w-full  flex flex-col lg:flex-row lg:space-x-2 lg:space-y-0 lg:items-center lg:justify-center  space-y-2   p-3 border-y'>
    <div className={`${jost.className} text-lg w-full flex items-start`}>Share this post</div>
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
        {/*Job Overview  */}
    <div className='w-full  flex flex-col   space-y-2   p-3'>
    <div className={`${jost.className} text-2xl w-full flex items-start`}>Vedio</div>
    <div className='w-full    '>
   <video controls className=' rounded-md' src='/vedio.mp4'/>
    </div>
    </div>
    </div>
    </div>
  )
}

export default MiddleBody
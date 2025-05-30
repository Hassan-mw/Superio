
import { Jost } from "next/font/google";
import JobListData from "./JobListData";
import Spinner from "@/components/ui/Spinner";
import { getAllJob } from "../API/ApiCall";
import JobListSidebarData from "./JobListSidebarData";
import { Suspense } from "react";


const jost = Jost({
  weight: ["500"],
  subsets: ["latin"],
});

const Page = async({ searchParams }:{searchParams:URLSearchParams}) => {

  const params=await searchParams
  const data=await getAllJob({filter:params}) || []

const loading=false;


  return (
    <div className="w-full flex flex-col items-center bg-white">
          <div className="flex flex-col items-center justify-center space-y-2 py-14 bg-[#f2f5fc] w-full">
        <p className={`${jost.className} text-xl md:text-2xl lg:text-3xl text-[#202124]`}>
          Job List
        </p>
        <div className={`${jost.className} flex items-center space-x-1 text-[#7f6b69]`}>
          <span>Home</span>
          <span className="text-[#202124]"> / Job List</span>
        </div>
      </div>

      {/* <Suspense fallback={<Spinner/>}> */}
      <div className="w-full h-full flex flex-col lg:flex-row lg:space-x-5 py-7 p-3 max-w-screen-xl">
          <div className="w-[40%] hidden lg:block">
            <JobListSidebarData />
          </div>
    
         <div className="w-full lg:w-full p-2">
          <div className="w-full flex flex-col items-center space-y-5">
              <div className="w-full flex-1">
                 <JobListData jobData={data.job} />
              </div>
            </div>
          </div>
      </div>
      {/* </Suspense> */}
    </div>
  );
};

export default Page;


import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose,
    SheetFooter
  } from "@/components/ui/sheet"
  
  import Link from "next/link";
  import { MdMenu } from "react-icons/md";
  import { IoMdClose } from "react-icons/io";
  import { IoPersonOutline } from "react-icons/io5";
//   import SideBarFooter from "./SideBarFooter";
  import dynamic from "next/dynamic";
import { Jost } from "next/font/google";
import CandidatesListSidebarData from "./CandidatesListSidebarData";




//   import SideBarBody from "./SideBarBody";
  const jost=Jost({
    weight:['500'],
    subsets:['latin']
  })





const JobListSidebar = () => {
  return (
    <Sheet>
    <SheetTrigger className="text-blue-600 flex items-center space-x-3"><MdMenu size={20} /> <span className={`  ${jost.className} border-b border-white hover:border-slate-400 font-bold`}>Show Sidebar</span></SheetTrigger>
    <SheetContent className="w-[360px] h-full overflow-y-auto bg-white p-0">
      <SheetHeader className="w-full flex flex-col">
        <SheetTitle className=" w-full p-3">
           <div className="flex items-center justify-center  border-b py-3 ">
           <SheetClose className={` ${jost.className} hover:cursor-pointer  flex items-center justify-center text-sm text-red-600 `}><div><IoMdClose  size={20} /> </div>Close</SheetClose>
           </div>
   
        </SheetTitle>
        <SheetDescription>

        </SheetDescription>
      </SheetHeader>
      <SheetFooter>
        {/* Data */}
        <CandidatesListSidebarData/>
  
          </SheetFooter>
    </SheetContent>
  </Sheet>
  )
}

export default JobListSidebar
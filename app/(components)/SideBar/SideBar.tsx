
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
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import SideBarFooter from "./SideBarFooter";
import dynamic from "next/dynamic";
import SideBarBody from "./SideBarBody";

const SideBar = () => {
  return (
<Sheet>
  <SheetTrigger><CiMenuBurger size={25} /></SheetTrigger>
  <SheetContent className="w-[360px] h-full overflow-y-auto bg-[#202124] p-0">
    <SheetHeader>
      <SheetTitle className=" w-full ">
      <div className="flex items-center justify-between bg-white min-w-full px-5 py-4">
         <div  className="hover:cursor-pointer"><img className="w-28 " src="/logo.svg" /></div> 
         <div className="flex items-center justify-center space-x-3">
         <div className="hover:cursor-pointer"><IoPersonOutline size={25} /></div>
         <SheetClose><div><IoMdClose  size={25} /></div></SheetClose>
         </div>
      </div>
     
      </SheetTitle>
      <SheetDescription>




 
 
      </SheetDescription>
    </SheetHeader>
    <SheetFooter>
       <div className="w-full min-h-full flex flex-col justify-between  px-5 pt-3">

      
      {/* //! Main Data */}
        <SideBarBody/>

       {/*// ! Footer */}
        <SideBarFooter/>

         </div>
          {/* <SheetClose asChild> */}
            {/* <Button type="submit">Save changes</Button> */}
          {/* </SheetClose> */}
        </SheetFooter>
  </SheetContent>
</Sheet>



  )
}

export default SideBar

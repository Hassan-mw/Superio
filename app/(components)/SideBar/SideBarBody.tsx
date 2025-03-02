import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
const SideBarBody=()=>{
    return(
    <div className="min-h-full  ">

   
    <Accordion type="single" collapsible>
        {/* //!  1 */}
    <AccordionItem className=" border-none "  value="item-1">
      <AccordionTrigger className="text-white text-[#656667] hover:text-white">Home</AccordionTrigger>
      <AccordionContent>
        <div className="flex flex-col space-y-2   hover:cursor-pointer text-sm">
         <div  className="text-white text-[#656667]   duration-300 hover:text-white">Home 1</div>
         <div  className="text-white text-[#656667]   duration-300 hover:text-white">Home 2</div>
         <div  className="text-white text-[#656667]   duration-300 hover:text-white">Home 3</div>
         <div  className="text-white text-[#656667]   duration-300 hover:text-white">Home 4</div>
         <div  className="text-white text-[#656667]   duration-300 hover:text-white">Home 5</div>
         <div  className="text-white text-[#656667]   duration-300 hover:text-white">Home 6</div>
         <div  className="text-white text-[#656667]   duration-300 hover:text-white">Home 7</div>
         <div  className="text-white text-[#656667]   duration-300 hover:text-white">Home 8</div>
         <div  className="text-white text-[#656667]   duration-300 hover:text-white">Home 9</div>
         <div  className="text-white text-[#656667]   duration-300 hover:text-white">Home 10</div>

        </div>
      </AccordionContent>
    </AccordionItem>
        {/* //!  2*/}
    <AccordionItem className=" border-none "  value="item-2">
      <AccordionTrigger className="text-white text-[#656667]  hover:text-white text-md">jobs</AccordionTrigger>
      <AccordionContent>
        <div className="flex flex-col space-y-2 text-sm  hover:cursor-pointer">
         <div  className="text-white text-[#656667]  duration-300 hover:text-white">job List 1</div>
         <div  className="text-white text-[#656667]  duration-300    hover:text-white">job List 2</div>
         <div  className="text-white text-[#656667]  duration-300   hover:text-white">job List 3</div>
         <div  className="text-white text-[#656667]  duration-300   hover:text-white">job List 4</div>
         <div  className="text-white text-[#656667]  duration-300   hover:text-white">job List 5</div>
         <div  className="text-white text-[#656667]  duration-300  hover:text-white">job List 6</div>
         <div  className="text-white text-[#656667]  duration-300  hover:text-white">job List 7</div>
         <div  className="text-white text-[#656667]  duration-300   hover:text-white">job List 8</div>
         <div  className="text-white text-[#656667]  duration-300  hover:text-white">job List 9</div>
         <div  className="text-white text-[#656667]  duration-300  hover:text-white">job List 10</div>

        </div>
      </AccordionContent>
    </AccordionItem>
 
        {/* //!  3*/}
    <AccordionItem className=" border-none "  value="item-3">
      <AccordionTrigger className="text-white text-[#656667]  hover:text-white">Employers</AccordionTrigger>
      <AccordionContent>
        <div className="flex flex-col space-y-2 text-sm  hover:cursor-pointer">
         <div  className="text-white text-[#656667]  duration-300 hover:text-white">Employers 1</div>
         <div  className="text-white text-[#656667]  duration-300    hover:text-white">Employers v2</div>
         <div  className="text-white text-[#656667]  duration-300   hover:text-white">Employers v3</div>
         <div  className="text-white text-[#656667]  duration-300   hover:text-white">Employers v4</div>
         <div  className="text-white text-[#656667]  duration-300   hover:text-white">Employers v5</div>

      

        </div>
      </AccordionContent>
    </AccordionItem>
 
        {/* //!  4*/}
    <AccordionItem className=" border-none "  value="item-4">
      <AccordionTrigger className="text-white text-[#656667]  hover:text-white">Canidates</AccordionTrigger>
      <AccordionContent>
        <div className="flex flex-col space-y-2 text-sm  hover:cursor-pointer">
         <div  className="text-white text-[#656667]  duration-300 hover:text-white">Canidates 1</div>
         <div  className="text-white text-[#656667]  duration-300    hover:text-white">Canidates v2</div>
         <div  className="text-white text-[#656667]  duration-300   hover:text-white">Canidates v3</div>
         <div  className="text-white text-[#656667]  duration-300   hover:text-white">Canidates v4</div>
         <div  className="text-white text-[#656667]  duration-300   hover:text-white">Canidates v5</div>

      

        </div>
      </AccordionContent>
    </AccordionItem>
 
        {/* //!  5*/}
    <AccordionItem className=" border-none "  value="item-5">
      <AccordionTrigger className="text-white text-[#656667]  hover:text-white">Pages</AccordionTrigger>
      <AccordionContent>
        <div className="flex flex-col space-y-2 text-sm  hover:cursor-pointer">
         <div  className="text-white text-[#656667]  duration-300 hover:text-white">About </div>
         <div  className="text-white text-[#656667]  duration-300    hover:text-white">Contact </div>
         <div  className="text-white text-[#656667]  duration-300   hover:text-white">FAQ </div>
         <div  className="text-white text-[#656667]  duration-300   hover:text-white">Pricing </div>
         <div  className="text-white text-[#656667]  duration-300   hover:text-white">Terms </div>

      

        </div>
      </AccordionContent>
    </AccordionItem>
 
  
  </Accordion>
  </div>)
}

export default SideBarBody;
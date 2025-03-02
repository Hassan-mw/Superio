import { Jost } from 'next/font/google';
import React from 'react';


const jost=Jost({
  weight:['400'],
  subsets:['latin']
})

const homeOptionsArray = [
  "Home1"
];

const HomeOptions = () => {
 const homeArray=[
  'Home 1','Home 2','Home 3','Home 4','Home 5','Home 6','Home 7','Home 8','Home 9','Home 10',
  'Home 11','Home 12','Home 13','Home 14','Home 15','Home 16','Home 17','Home 18','Home 19','Home 20',
  'Home 21','Home 22'
 ]

  return (
    <div className="min-w-[450px] z-50  grid grid-rows-6 p-3 grid-flow-col place-content-center gap-y-2 gap-x-12 border-t-2 border-blue-700 ">
    {homeArray.map((data, index) => (
      <div key={index} className={`${jost.className} p-0  text-[#656667] hover:text-[#4181d9] text-base hover:cursor-pointer`}>
        <span>{data}</span>
      </div>
    ))}
  </div>
  );
};

export default HomeOptions;

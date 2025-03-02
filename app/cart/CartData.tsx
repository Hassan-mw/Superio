import { Jost } from 'next/font/google'
import React from 'react'
const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

import { FaTruck } from "react-icons/fa";

const CartData = () => {
  return (
    <div className=' w-full flex flex-col space-y-28'>
    <div className='w-full flex flex-col space-y-3 p-3 '>
    <div className='flex flex-col space-y-3 border p-3 rounded-lg'>
        <div className={`${jost.className} w-full flex items-center justify-between   py-2`}><div className='text-[#77838f]'>Product:</div><div>Your Life in London</div></div>
        <div className={`${jost.className} w-full flex items-center justify-between  border-t py-2`}><div className='text-[#77838f]'>Price:</div><div style={{fontWeight:300}} className=' text-[#77838f]'>$90.00</div></div>
        <div className={`${jost.className} w-full flex items-center justify-between  border-t py-2`}><div className='text-[#77838f]'>Quantity:</div><div className='flex items-center justify-end '><input style={{fontWeight:300}} className='focus:outline-none w-1/3 py-2 px-1 rounded-lg text-[#77838f]' type='number' /></div></div>
        <div className={`${jost.className} w-full flex items-center justify-between border-y py-2`}><div>Total:</div><div style={{fontWeight:300}}>$120.00</div></div>
        <div className={`${jost.className} w-full flex items-center justify-end   `}><div style={{fontWeight:100}}>X</div></div>

    </div>
    </div>
    {/* Related pricing */}
    <div className='flex flex-col space-y-8'>
        {/* Coupon */}
    <div className='border-t flex flex-col space-y-5'>
        <div className='w-full flex flex-col'>
    <div className='w-full grid grid-cols-2 p-4 gap-x-5'>
        <div className='w-full flex flex-col items-start justify-start space-y-1'>
            <div className={`${jost.className}`}>Coupon Code</div>
            <div className='w-full border rounded-lg p-3'>
                <input type='text' className='focus:outline-none w-full ' placeholder='Coupon code' />
            </div>
        </div>
        <div className='flex flex-col items-start justify-start space-y-1'>
            <div className={`${jost.className}`}>Apply Code</div>
            <div className='w-full flex items-center justify-center hover:cursor-pointer duration-700 hover:bg-blue-700 py-3 bg-[#1967d2] rounded-lg texxt-sm text-white'>
               Apply coupon
            </div>
        </div>
    </div>
    <div className={`${jost.className} rounded-lg bg-[#eff4fc] text-blue-600 hover:cursor-pointer hover:bg-[#1967d2]  hover:text-white duration-500 w-full flex items-center justify-center py-3 `}>Update cart</div>
    </div>
    </div>
    {/* Totals */}
    <div className={`${jost.className} bg-[#f5f7fc] flex flex-col space-y-3 rounded-md p-3`}>
     <div >Cart totals</div>
     <div className='w-full flex items-center justify-between border-b py-3'><div   className='text-[#77838f] text-md'>Subtotal:</div><div style={{fontWeight:300}}>$370.00</div></div>
     <div className='w-full flex items-center justify-between'>
        <div  className='text-[#77838f] text-md'>Shipping</div>
        <div className='flex flex-col items-end justify-end space-y-2'>
            <div className='flex items-center justify-center gap-x-2 text-sm'><input type='radio'/> Flat rate</div>
            <div className='flex items-center justify-center gap-x-2 text-sm'><input type='radio'/> Free shipping</div>
            <div className='flex items-center justify-center gap-x-2 text-sm'><input type='radio'/> local pickup</div>
            <div>Shipping to NY.</div>
            <div className='flex items-center justify-center gap-x-2 hover:cursor-pointer duration-500 hover:text-blue-500'><div>Change address</div><FaTruck /></div>
             </div>
     </div>
     <div className='w-full flex items-center justify-between border-t py-3'><div   className='text-[#77838f] text-md'>Total:</div><div style={{fontWeight:300}}>$370.00</div></div>
    <div className={`${jost.className} rounded-lg  hover:bg-blue-700 hover:cursor-pointer bg-[#1967d2]  text-white duration-500 w-full flex items-center justify-center py-3 `}>Proceed to Checkout</div>
      
    </div>
    </div>
    </div>
  )
}

export default CartData
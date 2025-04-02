'use client'
import React from 'react'
import axios from 'axios'

import Cookies from "js-cookie";

const HBO = () => {
            console.log("Sun Page:", Cookies.get("haa"))

  

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
                const response = await axios.post(
                    "http://localhost:8000/api/user/abc",{},{ withCredentials: true})
                    console.log(response)
                    
        }catch(err){
            console.error(err)
        }
      }
    

          
  return (
    <>
        <div>Sun Page</div>
        <form className="w-full space-y-6" onSubmit={handleSubmit}>

        <button type="submit">Click</button>
    </form>
    </>

  )
}

export default HBO
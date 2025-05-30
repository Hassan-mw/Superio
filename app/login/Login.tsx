'use client';
import { Jost } from 'next/font/google'
import React, { SetStateAction, useState } from 'react'
import axios from 'axios'
import Cookies from "js-cookie";
// import { Toaster } from 'react-hot-toast';

interface ErrorDatatype{
    error:unknown;
    status:number;
    message:string;
}
import toast, { Toaster } from 'react-hot-toast';
const jost = Jost({
    weight: ['500'],
    subsets: ['latin']
});

const Login = () => {
    const [email,setEmail] =useState<SetStateAction<string>>('');
    const [password,setPassword]=useState<SetStateAction<string>>('')

    


    const handleSubmit = async () => {
      
        try {
            const response = await axios.post(
                "http://localhost:8000/api/user/login",
                {
                    email ,
                    password
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true 
                }
               
            )
            console.log(response)
            if(response.status===201){
                toast.success('Login Succesfully!')
            setEmail(''),
            setPassword('')
            }
           
        } catch (error) {
            console.log(error)
            if(error.status===400){
                toast.error("Invalid email or password!")
                
            }

        }
    };

    return (
        <div className="w-full min-w-screen-xl   flex flex-col items-center justify-center  space-y-7">
           <Toaster position="top-center" reverseOrder={false} />
           {/* <div  className={`${jost.className} text-2xl w-full flex items-start justify-start`}></div> */}
           <div className='flex flex-col space-y-1 items-start justify-start p-5 rounded-lg bg-[#b6f3ea] w-full'>
            <div style={{fontWeight:200}} className={`${jost.className} text-md text-[#788892]`}>Username:   <span style={{fontWeight:200}}  className={` text-[#36ceb4] ${jost.className} text-lg`}>    candidate</span> or <span style={{fontWeight:200}}  className={` text-[#36ceb4] text-md ${jost.className}`}>employer</span></div>
            <div style={{fontWeight:200}}  className={`${jost.className} text-md text-[#788892]`}>Password:   <span style={{fontWeight:200}}  className={`text-[#36ceb4]  ${jost.className} text-lg`}>    demo</span> </div>
           </div>
            <div className="w-full space-y-6" >
                <div className="w-full flex flex-col space-y-3">
                    <div className={`${jost.className} text-sm text-[#202124]`}>Email</div>
                    <input
                        required
                       type='email'
                        onChange={(e)=>setEmail(e.target.value)}
                        placeholder="Email"
                        className="bg-[#f0f5f7] border focus:outline-none focus:border-blue-300 focus:bg-white border-[#f0f5f7] min-w-full p-2 rounded-md"
                    />
                </div>

                <div className="w-full flex flex-col space-y-3">
                    <div className={`${jost.className} text-sm text-[#202124]`}>Password</div>
                    <input
                        required
                        name="password"
                        type="password"
                        onChange={(e)=>setPassword(e.target.value)}
                        placeholder="Password"
                        className="bg-[#f0f5f7] border focus:outline-none focus:border-blue-300 focus:bg-white border-[#f0f5f7] min-w-full p-2 rounded-md"
                    />
                </div>
                <div className="w-full flex items-center justify-between">
                  <div style={{fontWeight:200}}   className='flex items-center  justify-center space-x-4'><input type='checkbox'/><span style={{fontWeight:200}} className={`${jost.className} text-sm`}>Keep me signed in</span></div>
                  <div style={{fontWeight:200}}  className={`${jost.className} text-sm`} >Forgotten password?</div>
                </div>
                <button
                   onClick={()=>handleSubmit()}
                    className="text-white bg-[#1967d2] w-full flex items-center justify-center p-3 rounded-lg hover:bg-blue-700 duration-700 cursor-pointer"
                >
                    Login
                </button>
            </div>
        </div>
    );
};

export default Login;

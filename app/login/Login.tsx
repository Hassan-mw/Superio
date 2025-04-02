'use client';
import { Jost } from 'next/font/google'
import React, { useState } from 'react'
import axios from 'axios'
import Cookies from "js-cookie";
import toast, { Toaster } from 'react-hot-toast';
const jost = Jost({
    weight: ['500'],
    subsets: ['latin']
});

const Login = () => {
    console.log("Token stored in cookie 🥼🥼:", Cookies.get("jwt"))
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:8000/api/user/login",
                {
                    email: formData.email,
                    password: formData.password
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
                formData.email=''
                formData.password=''
            }
           
        } catch (error) {
            console.log(error)
            if(error.status===400){
                toast.error("Invalid email or password!")
                
            }
            console.error("Error signing up:", error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className="w-full max-w-xl bg-white flex flex-col items-start justify-start p-4 space-y-7">
           <Toaster position="top-center" reverseOrder={false} />
            <form className="w-full space-y-6" onSubmit={handleSubmit}>
                <div className="w-full flex flex-col space-y-3">
                    <label className={`${jost.className} text-sm text-[#202124]`}>Email</label>
                    <input
                        required
                        name="email"
                        onChange={handleChange}
                        placeholder="Email"
                        className="bg-[#f0f5f7] border focus:outline-none focus:border-blue-300 focus:bg-white border-[#f0f5f7] min-w-full p-2 rounded-md"
                    />
                </div>

                <div className="w-full flex flex-col space-y-3">
                    <label className={`${jost.className} text-sm text-[#202124]`}>Password</label>
                    <input
                        required
                        name="password"
                        type="password"
                        onChange={handleChange}
                        placeholder="Password"
                        className="bg-[#f0f5f7] border focus:outline-none focus:border-blue-300 focus:bg-white border-[#f0f5f7] min-w-full p-2 rounded-md"
                    />
                </div>
                <button
                    type="submit"
                    className="text-white bg-[#1967d2] w-full flex items-center justify-center p-3 rounded-lg hover:bg-blue-700 duration-700 cursor-pointer"
                >
                    Signup
                </button>
            </form>
        </div>
    );
};

export default Login;

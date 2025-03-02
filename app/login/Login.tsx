'use client';
import { Jost } from 'next/font/google'
import React, { useState } from 'react'
import axios from 'axios'

const jost = Jost({
    weight: ['500'],
    subsets: ['latin']
});

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        ConfirmPassword: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:8000/api/user/signup",
                {
                    email: formData.email,
                    password: formData.password,
                    ConfirmPassword: formData.ConfirmPassword,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            console.log("Success:", response.data);
        } catch (error) {
            console.error("Error signing up:", error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className="w-full max-w-xl bg-white flex flex-col items-start justify-start p-4 space-y-7">
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

                <div className="w-full flex flex-col space-y-3">
                    <label className={`${jost.className} text-sm text-[#202124]`}>Confirm Password</label>
                    <input
                        required
                        name="ConfirmPassword"
                        type="password"
                        onChange={handleChange}
                        placeholder="Confirm Password"
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

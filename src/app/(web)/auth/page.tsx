'use client'

import { ChangeEvent, FormEvent, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const Auth = () => {
    const defaultFormDate={
        email:'',
        name:'',
        password:''
    }
    const [formData,setFormData]=useState(defaultFormDate);
    const inputStyles="border border-gray-3-- sm:text-sm text-black rounded-lg block w-full p-2.5 focus:outlined-none"
    const handleInputChange=(event:ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=event.target;
        setFormData({...formData,[name]:value})
    }
    const handleSubmit=async(event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        try{
            console.log(formData)
        }catch(error){
            console.log(error)
        }finally{
            setFormData(defaultFormDate)
        }
    }
  
  
  
  
    return (
    <section className="container mx-auto">
      <div className="p-6 mx-auto space-y-4 md:space-y-6 sm:p-8 w-80 md:w-[70%]">
        <div className="flex mb-8 flex-col md:flex-row items-center justify-between">
            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">Create an Account</h1>
            <p>OR</p>
            <span className="inline-flex items-center">
                <AiFillGithub className="mr-3 text-4xl cursor-pointer text-black dark:text-white"/>
                <FcGoogle className="ml-3 text-4xl cursor-pointer text-black dark:text-white"/>
            </span>
        </div>
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder="name@company.com"
            required
            className={inputStyles}
            value={formData.email}
            onChange={handleInputChange}
            />
             <input 
            type="text" 
            name="name" 
            placeholder="John Doe"
            required
            className={inputStyles}
            value={formData.name}
            onChange={handleInputChange}
            />
            <input 
            type="password" 
            name="password" 
            id="password" 
            placeholder="*****"
            required
            minLength={6}
            className={inputStyles}
            value={formData.password}
            onChange={handleInputChange}
            />

            <button type="submit" className="w-full bg-tertiary-dark focus:outline-none font-medium rounded-lg text-center">
                    Sign Up
            </button>
            <button className="text-green-400">Login</button>
           
        </form>
      </div>
    </section>
  );
};

export default Auth;

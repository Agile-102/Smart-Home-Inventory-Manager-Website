import React from 'react'

import { FaTelegram } from "react-icons/fa";
import { MdDevices } from "react-icons/md";
import { FaAppStoreIos  } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";
import { PiCodesandboxLogoThin } from "react-icons/pi";
import { AiFillCodeSandboxCircle } from "react-icons/ai";
import { SiSpacy } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import { GrVmware } from "react-icons/gr";

export const BentoGrid = () => {
  return (
    <div className="grid-cols-10 grid-rows-10 gap-3 w-[80%] h-[60rem] lg:grid max-w-[1300px]">
            {/* TELEGRAM BOX */}
            <div className="flex items-center flex-col col-span-3 row-span-4 bg-blue-400 rounded-xl shadow-xl my-[2rem] lg:my-0">
              <FaTelegram className='text-[7rem] text-gray-200 pt-[2rem] drop-shadow-2xl'/> 
              <h1 className='text-white text-xl font-semibold py-[0.5rem]'>Telegram Integration</h1>
              <p className='text-white px-[2rem] text-[0.9rem] py-[0.5rem] text-center'>Our very own API allows us to integrate our functionalities into a Telegram Bot Which allows our app to be used <bold className='font-bold'>anytime, anywhere</bold>!</p>
              <p className='text-white px-[2rem] text-[0.9rem] py-[0.5rem] font-bold'>@SHIM-Bot</p>
              <a href='/' className='text-gray-800 font-semibold bg-white rounded-xl px-[1.7rem] text-[0.9rem] py-[0.5rem] mb-[1rem]'>Click here</a>
            </div>
            {/* APPLICATION BOX */}
            <div className="relative flex items-center flex-col col-span-3 row-span-4 col-start-8 row-start-1 bg-gray-400 rounded-xl shadow-xl overflow-hidden my-[2rem] lg:my-0">
              <h1 className='relative w-full text-gray-800 text-2xl text-left font-bold pb-[0.5rem] pt-[2rem] px-[2rem] flex items-center'><span><MdDevices className='text-[3rem] drop-shadow-md'/></span> &nbsp; SHIM App</h1>
              <p className='text-gray-800 px-[2rem] text-left font-semibold'>For those who prefer detail over simplicity</p>
              <AiFillCodeSandboxCircle className='text-[8rem] my-[1.5rem] text-gray-700 drop-shadow-lg'/>
              <div className='flex items-center flex-col text-sm font-semibold gap-[0.2rem] pb-[1rem]'>
                <h1 className='text-gray-500'>Coming soon on Apple & Android</h1>
                <div className='flex flex-row gap-[1rem]'>
                  <FaAppStoreIos className='text-4xl text-blue-600 drop-shadow-lg' />
                  <BiLogoPlayStore className='text-4xl drop-shadow-lg' />
                </div>
              </div>
            </div>
            {/* NLP BOX */}
            <div className="relative flex items-center flex-col col-span-4 row-span-2 col-start-4 row-start-1 bg-gray-900 rounded-xl shadow-xl border-[1px] border-gray-100 my-[2rem] lg:my-0 pb-[2rem]">
              <SiSpacy className='absolute text-gray-500 text-[3rem] bottom-[-5%] right-[2%]' />
              <h1 className='text-white font-semibold py-[0.5rem]'>NLP</h1>
              <div className='flex flex-row text-white justify-around'>
                <GiArtificialIntelligence className='text-[6rem]'/>
                <p className='w-[60%]'>Using spaCy, a NLP model which enables users to converse with the Telegram Bot without the need for commands.</p>
              </div>
            </div>
            {/* EASE OF ACCESS BOX */}
            <div className="flex flex-col col-span-2 row-span-2 col-start-4 row-start-3 bg-white rounded-xl shadow-xl justify-center items-center my-[2rem] lg:my-0 py-[2rem]">
              <GrVmware className='text-[7rem] drop-shadow-lg' /> 
            </div>
            {/* API BOX */}
            <div className="relative flex items-center flex-col col-span-2 row-span-2 col-start-6 row-start-3 bg-gray-900 rounded-xl shadow-xl overflow-hidden border-gray-400 border-[1px] my-[2rem] lg:my-0 pb-[1rem]">
              <PiCodesandboxLogoThin className='absolute blur-md bottom-[-50%] right-[-60%] text-[15rem] text-white'/>
              <div className='flex flex-col justify-center items-center'>
                <h1 className='text-white font-semibold py-[0.5rem]'>SHIM API</h1> 
                <h1 className='text-white text-center text-sm font-semibold p-[0.5rem] 2xl:px-[2rem]'>SHIM API allows interaction(s) between applications.</h1> 
                <a href='/docs' className='text-gray-800 font-semibold bg-white rounded-xl px-[1rem] text-[0.8rem] py-[0.3rem] mt-[1rem]'>Available here</a> 
              </div>
            </div>
        </div>
  )
}

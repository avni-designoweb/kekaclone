import React from 'react'
import add_1 from '../assets/add_1.png'

const Additional = () => {
  return (
    <div class="mt-[20px] mb-[20px] flex flex-col items-center mx-[70px]">
      <div>
        <h1 class="font-heading text-[30px] font-semibold text-black mb-10  text-teal-900">
        Additional Features to Enhance Efficiency

        </h1>
      </div>

     
      <div class="grid grid-cols-2 p-3 gap-10 w-full place-content-center items-stretch">
            
        <div class="flex items-center justify-center w-full">
          <img src={add_1} alt="Feature Image" class="w-full h-full object-cover rounded-3xl" />
        </div>



        <div class="flex flex-col w-full gap-[20px]">
    <div class="bg-white flex items-center  p-[20px] w-full cursor-pointer rounded-3xl gap-5 shadow-md shadow-green-600">
        <span class="text-white text-xl font-subHeading bg-teal-800 rounded-full grid grid-cols-1 place-items-center w-10 h-10">1</span>
        <div class="mt-3">
            <h1 class="text-xl font-bold">Agent Certification</h1>
            <p class="font-normal ">Boost credibility and ensure compliance with certified trained agents</p>
        </div>
    </div>
    <div class="bg-white flex items-center  p-[20px] w-full  cursor-pointer  rounded-3xl gap-5 shadow-md shadow-green-600">
        <span class="text-white text-xl font-subHeading bg-teal-800 rounded-full grid grid-cols-1 place-items-center w-10 h-10">2</span>
        <div class="mt-3">
            <h1 class="text-xl font-bold">Analytics and Insights</h1>
            <p class="font-normal ">Get advanced analytics and insights on training and performance</p>
        </div>
    </div>
    <div class="bg-white flex items-center  p-[20px] w-full cursor-pointer   rounded-3xl gap-5 shadow-md shadow-green-600">
        <span class="text-white text-xl font-subHeading bg-teal-800 rounded-full grid grid-cols-1 place-items-center w-10 h-10">3</span>
        <div class="mt-3">
            <h1 class="text-xl font-bold">High-performing Agents</h1>
            <p class="font-normal ">Access top-tier network of high-performing agents</p>
        </div>
    </div>
    </div>
      </div>
      <button class=" border px-10 py-2 bg-red-400 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-white hover:text-red-600">Book Demo</button>
    </div>
    
  )
}

export default Additional

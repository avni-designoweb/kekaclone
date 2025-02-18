import React from 'react'
import partners_1 from '../assets/partners_1.png'; 
import partners_2 from '../assets/partners_2.png'; 
import partners_3 from '../assets/partners_3.png'; 
import partners_4 from '../assets/partners_4.png'; 
import partners_5 from '../assets/partners_5.png'; 
import image_1 from '../assets/image_1.png';
import image_2 from '../assets/image_2.png';
import image_3 from '../assets/image_3.png';
import image_4 from '../assets/image_4.png';


const Partners = () => {
  return (
    <div>
      <div class="bg-teal-900 place-items-center relative w-full">    
          <div class="text-center text-white">
            <h1 class="underline font-bold text-2xl pt-10">Our Partners</h1>
          </div>
          <div class="text-center text-white">
            <h3 class="text-2xl pt-3 pb-30">Trusted by Leading Education Institutions Worldwide</h3>
          </div>
          <div>
          <div class=" absolute top-30 left-40 md:left-80 bg-white rounded-xl shadow-md p-5 grid grid-cols-1 md:grid-cols-5 place-items-center gap-10 mt-10">
            <span><img src={partners_1} alt="Partner 1" width="150" height="150" /></span>
            <span><img src={partners_2} alt="Partner 2" width="150" height="150" /></span>
            <span><img src={partners_3} alt="Partner 3" width="150" height="150" /></span>
            <span><img src={partners_4} alt="Partner 4" width="150" height="150" /></span>
            <span><img src={partners_5} alt="Partner 5" width="150" height="150" /></span>
          </div>
          </div>
        
        
      </div>
      
      <div class="flex justify-center mt-200 md:mt-40">
        <button class="border px-10 py-2 bg-red-400 text-white rounded-full hover:bg-white hover:text-red-600">Book Demo</button> 
      </div>
      
      <div class="space-y-2 mb-10 mt-6">
        <div class="font-heading text-center text-xl font-bold">Benefits for your Institution</div>
        <div class="text-xl text-center font-normal">
          Our tools cover the entire agent journey, from onboarding, engagement, and training activities.
          We ensure your agents are well equipped and stay compliant to your Institution and Industry compliance standards.
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="text-center">
          <img class="rounded-lg mx-auto" src={image_1} alt="Share all resources" />
          <h1 class="text-teal-900 font-normal">Share all resources in 1 place</h1>
          <p class="font-normal">Integrate PDFs, Multimedia files, Forms, and more</p>
        </div>
        <div class="text-center">
          <img class="rounded-lg mx-auto" src={image_2} alt="Interactive Certification" />
          <h1 class="text-teal-900 font-normal">Interactive Certification Tests</h1>
          <p class="font-normal">Align interactive success certification that gives visibility to you AND your agents</p>
        </div>
      </div>
      
      <div class="grid  grid-cols-1 md:grid-cols-3 gap-6 my-10 mx-10">
        <div class="text-center">
          <img class="rounded-lg mx-auto" src={image_3} alt="Chasing done for you" />
          <h1 class="text-teal-900 font-normal">Chasing done for you</h1>
          <p class="font-normal">Reduce back-and-forth communication through automated reminders for your agents to onboard, get trained, and certified.</p>
        </div>
        <div class="text-center">
          <img class="rounded-lg mx-auto" src={image_4} alt="Central Visibility" />
          <h1 class="text-teal-900 font-normal">Central Visibility</h1>
          <p class="font-normal">Get full visibility on active agents’ training and onboarding. Ensuring compliance throughout your network.</p>
        </div>
        <div class="text-center">
          <img class="rounded-lg mx-auto" src={image_4} alt="Collaboration" />
          <h1 class="text-teal-900 font-normal">Collaboration</h1>
          <p class="font-normal">The best way to collaborate with both future and existing agent networks.</p>
        </div>
      </div>
    </div>
  );
}

export default Partners;

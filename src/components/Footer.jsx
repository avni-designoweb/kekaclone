import React from 'react'
import logo1 from '../assets/logo1.png'

const Footer = () => {
  return (
    <div class="bg-teal-900 text-white">
      <div class="flex flex-col items-center">
        <div class="flex flex-col items-center">
          <div class="font-medium text-[20px] md:text-[40px] mt-10">JADE Can Transform Your Agent Partnerships Today</div>
          <div class="font-medium text-[15px] text-red-300 mb-5">Start building better agent relationships and reach students worldwide with JADE</div>
          <div class="font-normal mb-5">We’ll help you set it up too</div>
          <button class="border px-10 py-2 bg-red-400 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-white hover:text-red-600 mb-5">Book Demo</button>
        </div>
        <div class="flex justify-between items-start px-10 gap-[40px] w-full">
          <div class="flex flex-col gap-[30px]">
            <img src={logo1} alt="Jade Logo" width="200" height="120" class="hidden md:block"/>
          </div>
          <div class="flex justify-between gap-[5px] md:gap-[40px]">
            <div class="flex flex-col gap-[30px]">
              <div class="font-normal text-[20px]">Platform</div>
              <div class="flex flex-col gap-[8px]">
                <div class="font-normal text-white">For Training and Certificate</div>
                <div class="font-normal text-white">Onboarding and Resources</div>
                <div class="font-normal text-white">Pricing</div>
              </div>
            </div>
            <div class="flex flex-col gap-[30px]">
              <div class="font-normal text-[20px]">Company</div>
              <div class="flex flex-col gap-[8px]">
                <div class="font-normal text-white">About</div>
                <div class="font-normal text-white">Institutions</div>
                <div class="font-normal text-white">Jobs</div>
                <div class="font-normal text-white">Knowledge Base</div>
              </div>
            </div>
            <div class="flex flex-col gap-[30px]">
              <div class="font-normal text-[20px]">Legal</div>
              <div class="flex flex-col gap-[8px]">
                <a href="#" class="flex items-center gap-[4px] font-normal text-white">Help & Support</a>
                <a href="#" class="flex items-center gap-[4px] font-normal text-white">Privacy Policy</a>
                <a href="#" class="flex items-center gap-[4px] font-normal text-white">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-10 font-normal text-[14px] p-[20px] bg-teal-800 text-white text-center">
        © 2025 All rights reserved
      </div>
    </div>
  )
}

export default Footer

// import React from 'react';
// import logo1 from '../assets/logo1.png';

// const Footer = () => {
//   return (
//     <div className="bg-teal-900 text-white">
//       <div className="flex flex-col items-center px-4 sm:px-8 lg:px-16">
//         <div className="flex flex-col items-center text-center">
//           <div className="font-medium text-2xl md:text-4xl mt-8">JADE Can Transform Your Agent Partnerships Today</div>
//           <div className="font-medium text-sm md:text-base text-red-300 my-4">Start building better agent relationships and reach students worldwide with JADE</div>
//           <div className="font-normal mb-4">We’ll help you set it up too</div>
//           <button className="border px-6 py-2 bg-red-400 text-white rounded-full hover:bg-white hover:text-red-600 mb-6 transition">Book Demo</button>
//         </div>
        
//         <div className="flex flex-col md:flex-row justify-between items-start px-4 sm:px-8 lg:px-16 gap-6 w-full">
//           <div className="flex flex-col gap-6 items-center md:items-start">
//             <img src={logo1} alt="Jade Logo" className="w-32 md:w-48 h-auto" />
//           </div>
          
//           <div className="flex flex-wrap justify-center md:justify-between gap-6 md:gap-10 w-full">
//             <div className="flex flex-col gap-4 text-center md:text-left">
//               <div className="font-normal text-lg">Platform</div>
//               <div className="flex flex-col gap-2">
//                 <div>For Training and Certificate</div>
//                 <div>Onboarding and Resources</div>
//                 <div>Pricing</div>
//               </div>
//             </div>
            
//             <div className="flex flex-col gap-4 text-center md:text-left">
//               <div className="font-normal text-lg">Company</div>
//               <div className="flex flex-col gap-2">
//                 <div>About</div>
//                 <div>Institutions</div>
//                 <div>Jobs</div>
//                 <div>Knowledge Base</div>
//               </div>
//             </div>
            
//             <div className="flex flex-col gap-4 text-center md:text-left">
//               <div className="font-normal text-lg">Legal</div>
//               <div className="flex flex-col gap-2">
//                 <a href="#" className="hover:underline">Help & Support</a>
//                 <a href="#" className="hover:underline">Privacy Policy</a>
//                 <a href="#" className="hover:underline">Cookie Policy</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       <div className="mt-8 text-sm p-4 bg-teal-800 text-center">
//         © 2025 All rights reserved
//       </div>
//     </div>
//   );
// };

// export default Footer;

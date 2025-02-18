import React from 'react'
import why_1 from '../assets/why_1.png'; 
import why_2 from '../assets/why_2.png'; 
import why_3 from '../assets/why_3.png'; 

const Why = () => {
  return (
    <div class="bg-teal-950 py-16 px-8 mx-auto">
      <h2 class="text-3xl md:text-4xl font-semibold text-center text-white mb-24">
        Why Jade <span class="text-red-500">Only?</span>
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div class="bg-teal-800 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <img src={why_1} alt="Compliance" class="mb-4 w-35 h-25 mt-[-60px]" />
          <h3 class="text-xl font-medium text-white mb-2">Meet AQF UK, NACAC, AIRC, ACE Compliance</h3>
          <p class="text-gray-300">
            Become fully compliant with industry regulations, allowing you to manage your agents without any issues!
          </p>
        </div>

       
        <div class="bg-teal-800 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <img src={why_2} alt="Training" class="mb-4 w-35 h-25 mt-[-60px]" />
          <h3 class="text-xl font-medium text-white mb-2">Training & Setup Included!</h3>
          <p class="text-gray-300">
            We assist in setting up your account and provide comprehensive team training to help maximise engagement and efficiency!
          </p>
        </div>

        <div class="bg-teal-800 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <img src={why_3} alt="Insights" class="mb-4 w-35 h-25 mt-[-60px]" />
          <h3 class="text-xl font-medium text-white mb-2">Get Actionable Insights</h3>
          <p class="text-gray-300">
            Leverage detailed analytics to track agent activity, measure training effectiveness, and identify opportunities to enhance performance and engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Why;

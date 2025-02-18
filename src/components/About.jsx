import React from 'react'
import about_img from '../assets/about_img.png'

const About = () => {
  return (
    <div class="bg-white min-h-screen p-8">
      <div class="text-center max-w-5xl mx-auto">
        <h1 class="text-3xl md:text-4xl font-semibold mb-4">
          Onboard and Train Your Agents <span class="text-green-800 font-display">50% Faster</span>
        </h1>
        <p class="text-gray-600 mb-6">
          Drive your international student recruitment journey in a workspace that simplifies education institution-agent collaboration, speeds up training, onboarding and tracks engagement for compliance monitoring.
        </p>
        <button class="border px-10 py-2 bg-red-400 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-white hover:text-red-600 ">
          Book Demo
        </button>

        <img src={about_img} alt="Features" class="w-full h-auto mt-4 rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default About


import React, { useState } from 'react';
import feature_1 from '../assets/feature_1.png';
import feature_2 from '../assets/feature_2.png'; 
import feature_3 from '../assets/feature_3.png'; 

const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const handleFeatureClick = (featureId) => {
    setSelectedFeature(featureId);
  };

  return (
    <div className="mt-[20px] mb-[20px] flex flex-col items-center container px-4">
      <div>
        <h1 className="font-heading text-[30px] font-semibold text-teal-900 mb-10">
          Core Features to Simplify Your Workflow
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-10 w-full place-content-center items-stretch ml-[110px]">
        <div className="flex flex-col w-full gap-[20px]">
          <div
            className="bg-white flex items-center p-[20px] w-full cursor-pointer rounded-3xl gap-5 shadow-md shadow-green-600"
            onClick={() => handleFeatureClick(1)}
          >
            <span className="text-white text-xl font-subHeading bg-teal-800 rounded-full grid grid-cols-1 place-items-center w-10 h-10">
              1
            </span>
            <div className="mt-3">
              <h1 className="text-xl font-bold">Institution Profile</h1>
              <p className="font-normal">Showcase your institution's unique offerings</p>
            </div>
          </div>

          <div
            className="bg-white flex items-center p-[20px] w-full cursor-pointer rounded-3xl gap-5 shadow-md shadow-green-600"
            onClick={() => handleFeatureClick(2)}
          >
            <span className="text-white text-xl font-subHeading bg-teal-800 rounded-full grid grid-cols-1 place-items-center w-10 h-10">
              2
            </span>
            <div className="mt-3">
              <h1 className="text-xl font-bold">Training Hub</h1>
              <p className="font-normal">Deliver customisable, on-demand training for agents</p>
            </div>
          </div>

          <div
            className="bg-white flex items-center p-[20px] w-full cursor-pointer rounded-3xl gap-5 shadow-md shadow-green-600"
            onClick={() => handleFeatureClick(3)}
          >
            <span className="text-white text-xl font-subHeading bg-teal-800 rounded-full grid grid-cols-1 place-items-center w-10 h-10">
              3
            </span>
            <div className="mt-3">
              <h1 className="text-xl font-bold">Resource Centre</h1>
              <p className="font-normal">Equip agents with all the resources they need</p>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center items-center">
          {selectedFeature === 1 && (
            <img src={feature_1} alt="Feature 1" className="w-[500px] h-[300px]" />
          )}
          {selectedFeature === 2 && (
            <img src={feature_2} alt="Feature 2" className="w-[500px] h-[300px]" />
          )}
          {selectedFeature === 3 && (
            <img src={feature_3} alt="Feature 3" className="w-[500px] h-[300px]" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Features;

import React, { useState } from "react";
import profile from "../assets/profile.png";

const Employee = () => {
  
  const [employeeData] = useState({
    designation: "SD",
    department: "IT",
    location: "Noida",
    email: "avni@gmail.com",
  });

  const [companyData] = useState({
    name: "xyz company",
  });
  return (
    <div class="h-screen flex">
      
      <div class="bg-blue-300 w-30 p-4 h-full flex flex-col ">
        <h1 class="text-3xl text-white my-10">KEKA</h1>
        <a href="#" class="text-xl text-white mb-4">Home</a>
        <a href="#" class="text-xl text-white mb-4">About</a>
        <a href="#" class="text-xl text-white mb-4">Inbox</a>
        <a href="#" class="text-xl text-white mb-4">Team</a>
        <a href="#" class="text-xl text-white mb-4">Finances</a>
        <a href="#" class="text-xl text-white mb-4">Org</a>
        <a href="#" class="text-xl text-white mb-4">Engage</a>
      </div>
      <div class="flex-1">
      
        <div class="bg-sky-100">
          <h2 class="text-3xl font-bold p-4">{companyData.name}</h2>
        </div>
        <div class="flex flex-row items-center p-4">
          <div>
            <img src={profile} alt="profile" class="m-4 rounded-full" />
            <h4 class="ml-12 text-gray-700">Upload Picture</h4>
          </div>
          <div class="ml-6">
            <h1 class="text-3xl font-semibold">Avni Jain</h1>

           
            <div class="flex gap-10 mt-2 text-lg text-gray-700">
              <p>Designation: {employeeData.designation}</p>
              <p>Department: {employeeData.department}</p>
              <p>Location: {employeeData.location}</p>
              <p>Email: {employeeData.email}</p>
            </div>
          </div>
        </div>
        <div class=" flex flex-row bg-blue-200 gap-8">
          <a href="#" class="ml-5 p-2 text-2xl">About</a>
          <a href="#" class="ml-5 p-2 text-2xl">Profile</a>
          <a href="#" class="ml-5 p-2 text-2xl">Summary</a>
        </div>
      </div>
    </div>
  );
};

export default Employee;

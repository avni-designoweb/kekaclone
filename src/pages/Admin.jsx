import React, { useState } from "react";
import profile from "../assets/profile.png";

const Admin = () => {
  const [AdminData] = useState({
    designation: "Admin",
    industrytype: "IT",
    location: "Noida",
    email: "avni@gmail.com",
  });

  const [companyData] = useState({
    name: "XYZ Company",
  });

  const [user] = useState({
    fname: "Avni",
  });

  const [activeTab, setActiveTab] = useState("Employee Details");

  return (
    <div class="h-screen flex flex-col md:flex-row  bg-sky-100">
    
      <div class="bg-blue-600 w-full md:w-40 p-6 flex flex-col text-white shadow-lg md:min-h-screen">
        <h1 class="text-4xl font-bold mb-10">KEKA</h1>
        <nav class="flex flex-col gap-4">
          <a href="#" class="text-lg hover:text-sky-200">Home</a>
          <a href="#" class="text-lg hover:text-sky-200">About</a>
          <a href="#" class="text-lg hover:text-sky-200">Employee Details</a>
          <a href="#" class="text-lg hover:text-sky-200">Team</a>
        </nav>
      </div>

      
      <div class="flex-1 flex flex-col">
        
        <div class="bg-white shadow-md p-4 flex items-center justify-between">
          <h2 class="text-2xl font-bold text-sky-800">{companyData.name}</h2>
        </div>

        
        <div class="flex flex-col md:flex-row items-center p-6 bg-white shadow-md m-4 rounded-lg">
          <div class="flex flex-col items-center">
            <img src={profile} alt="Profile" class="w-32 h-32 rounded-full border-2 border-sky-300 shadow-sm" />
            <h4 class="text-sky-600 mt-2 cursor-pointer hover:underline">Upload Picture</h4>
          </div>
          <div class="ml-6 text-center md:text-left">
            <h1 class="text-3xl font-semibold text-sky-900">{user.fname}</h1>
            <div class="mt-2 text-lg text-sky-700 space-y-2">
              <p><span class="font-semibold">Designation:</span> {AdminData.designation}</p>
              <p><span class="font-semibold">Department:</span> {AdminData.industrytype}</p>
              <p><span class="font-semibold">Location:</span> {AdminData.location}</p>
              <p><span class="font-semibold">Email:</span> {AdminData.email}</p>
            </div>
          </div>
        </div>

        
        <div class="flex bg-blue-500 text-white p-4 gap-8 shadow-md rounded-lg mx-4">
          <button onClick={() => setActiveTab("Employee Details")} class={`text-lg font-semibold ${activeTab === "Employee Details" ? "border-b-2 border-white" : ""}`}>Employee Details</button>
          <button onClick={() => setActiveTab("Profile")} class={`text-lg font-semibold ${activeTab === "Profile" ? "border-b-2 border-white" : ""}`}>Profile</button>
          <button onClick={() => setActiveTab("Post")} class={`text-lg font-semibold ${activeTab === "Post" ? "border-b-2 border-white" : ""}`}>Post</button>
        </div>

  
        <div class="p-4 m-4 bg-white shadow-md rounded-lg">
          {activeTab === "Employee Details" && <p>Employee Details Content...</p>}
          {activeTab === "Profile" && <p>Profile Content...</p>}
          {activeTab === "Post" && <p>Post Content...</p>}
        </div>
      </div>
    </div>
  );
};

export default Admin;

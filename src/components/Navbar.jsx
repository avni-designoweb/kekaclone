import React from 'react'
import Logo from '../assets/Logo.png'

const Navbar = () => {
  return (
    <div className='sticky top-0 bg-white shadow-sm'>
      <nav class="flex justify-between items-center p-6 max-w-6xl mx-auto ">
        <img src={Logo} alt="Jade Logo" class="h-10 ml-[-180px]" />
        <div class="md:flex space-x-6 text-gray-700">
          <a href="#" class="hover:text-green-800">About Jade</a>
          <a href="#" class="hover:text-green-800">Why Choose Jade</a>
          <a href="#" class="hover:text-green-800">Our Partners</a>
          <a href="#" class="hover:text-green-800">Testimonials</a>
          <a href="#" class="hover:text-green-800">Pricing</a>
        </div>
        <div class="flex space-x-4 mr-[-180px]">
          <button class=" border px-10 py-2 rounded-full text-white bg-teal-600 cursor-pointer hover:bg-white hover:text-green-600">Login</button>
          <button class=" border px-10 py-2 bg-red-400 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-white hover:text-red-600">Book Demo</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

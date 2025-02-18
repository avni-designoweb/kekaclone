import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [number, setNumber] =useState('');
  const [fname , setFname] = useState('');
  const [lname, setLname] =useState('');
   const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ fname:'',lname:'', number: '', email: '', password: '' });
  
    const validateForm = () => {
      let formErrors = {  fname:'',lname:'',number:'',email: '', password: '' };

      if (!fname.trim()) {
        formErrors.fname = 'Name is required';
      } else if (!/^[a-zA-Z]+$/.test(fname)) {
        formErrors.fname = 'Name must contains only letter';
      }

      if (!lname.trim()) {
        formErrors.lname = 'Last Name is required';
      } else if (!/^[a-zA-Z]+$/.test(lname)) {
        formErrors.lname = 'Name must contains only letter';
      }
      
      if (!number.trim()) {
        formErrors.number = 'Number is required';
      } else if (!/^[7-9]\d{9}$/.test(number)) {
        formErrors.number = 'Invalid Number';
      }
  
      if (!email.trim()) {
        formErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        formErrors.email = 'Invalid email format';
      }
  
      if (!password.trim()) {
        formErrors.password = 'Password is required';
      } else if (password.length < 8) {
        formErrors.password = 'Password must be at least 8 characters';
      }
  
      setErrors(formErrors);
      return Object.values(formErrors).every((error) => error === '');
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
        console.log('Form submitted', { fname, lname, number, email, password });
      }
    };

  return (
    <div class="bg-white min-h-screen">
      <Link to="/" class="font-bold text-lg text-blue-400 p-4">
        Home
      </Link>
      <div class="flex min-h-screen items-center justify-center">
        <div class="bg-blue-50 p-8 rounded-lg shadow-lg w-100 flex flex-col items-center justify-center">
          <div class="mb-4 text-2xl font-bold text-blue-300">KEKA</div>
          <div>
            <form onSubmit={handleSubmit} class="w-80">
              <div class="flex flex-row justify-between mb-4 gap-4">
                {/* <label class="block text-black font-medium ">Name</label> */}
                <input
                  type="text"
                  placeholder="First Name"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                  class="mt-2 p-2 w-full border border-blue-700 rounded-lg hover:bg-white"
                />
                {errors.fname && <div class="text-red-500 text-sm mt-1">{errors.fname}</div>}
                {/* <label class="block text-black font-medium">Name</label> */}
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                  class="mt-2 p-2 w-full border border-blue-700 rounded-lg hover:bg-white"
                />
                {errors.lname && <div class="text-red-500 text-sm mt-1">{errors.lname}</div>}
              </div>
              <div class="mb-4">
                <label class="block text-black font-medium">Contact Number</label>
                <input
                  type="text"
                  placeholder="Enter your Number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  class="mt-2 p-2 w-full border border-blue-700 rounded-lg hover:bg-white"
                />
                {errors.number && <div class="text-red-500 text-sm mt-1">{errors.number}</div>}
              </div>
              <div class="mb-4">
                <label class="block text-black font-medium">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  class={`mt-2 p-2 w-full border ${
                    errors.email ? 'border-red-500' : 'border-blue-700'
                  } rounded-lg hover:bg-white`}
                />
                {errors.email && <div class="text-red-500 text-sm mt-1">{errors.email}</div>}
              </div>
              <div class="mb-4 relative">
                <label class="block text-black font-medium">Password</label>
                <div class="mt-2 relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your Password"
                    class={`p-2 w-full border ${
                      errors.password ? 'border-red-500' : 'border-blue-700'
                    } rounded-lg hover:bg-white pr-10`}
                  />
                  <button
                    type="button"
                    class="absolute inset-y-0 right-2 flex items-center text-black"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                  </button>
                </div>
                {errors.password && <div class="text-red-500 text-sm mt-1">{errors.password}</div>}
              </div>
              <div class="flex flex-col gap-2">
                <button class="py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-900 hover:text-white">
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;


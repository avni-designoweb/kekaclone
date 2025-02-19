import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('employee');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const validateForm = () => {
    let formErrors = { email: '', password: '' };

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
        console.log('Form submitted', { email,password, role }); 
        if (role === 'admin') { 
            navigate('/admin'); 
        } else { 
            navigate('/employee');
         } }
  };

  return (
    <div class="bg-white min-h-screen">
      <Link to="/" class="font-bold text-lg text-blue-400 p-2">
        Home
      </Link>
      <div class="flex items-center justify-center">
        <div class="bg-blue-50 p-8 rounded-lg shadow-lg w-100 flex flex-col items-center justify-center">
          <div class="mb-4 text-2xl font-bold text-blue-300">KEKA</div>
          <div class="flex">
            <Link to="/login">
              <button class={`border px-4 py-2 rounded-full text-blue ${ role === 'admin' ? 'bg-white text-blue-800' :' text-white bg-blue-500 border-blue-500' } 
              cursor-pointer hover:bg-white hover:text-blue-900 mr-2`} 
              onClick={() => setRole('admin')}>
                Admin
              </button>
            </Link>
            <button class={`border px-4 py-2 rounded-full text-blue ${ role === 'employee' ? 'bg-white  text-blue-800' : ' text-white bg-blue-500 border-blue-500' } 
              cursor-pointer hover:bg-white hover:text-blue-900 mr-2`} 
              onClick={() => setRole('employee')}>
              Employee
            </button>
          </div>
          <div>
            <form onSubmit={handleSubmit} class="w-80">
              <div class="mb-4">
                <label class="block text-black font-medium">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  class={`mt-2 p-2 w-full border ${
                    errors.email ? 'border-red-500' : 'border-blue-700'
                  } rounded-lg focus:bg-white  focus:ring-blue-300 outline-none pr-10`}
                />
                {errors.email && <div class="text-red-500 text-sm mt-1">{errors.email}</div>}
              </div>
              <div class="mb-4 relative">
                <label class="block text-black font-medium">Password</label>
                <div class="mt-2 relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your Password"
                    class={`p-2 w-full border ${
                      errors.password ? 'border-red-500' : 'border-blue-700'
                    } rounded-lg focus:bg-white  focus:ring-blue-300 outline-none  pr-10`}
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
                <button type="submit" class="py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-900 hover:text-white">
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

export default Login;

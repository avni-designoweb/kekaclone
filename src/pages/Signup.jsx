import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [number, setNumber] =useState('');
  const [fname , setFname] = useState('');
  const [lname, setLname] =useState('');
  const [role,setRole]=useState('admin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //admin fields
  const [companyname, setCompanyname]=useState('');
  const [industrytype, setIndustrytype]= useState('');
//   const [address,setAddress]=useState('');


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
        console.log('Form submitted', { email, number, password, role }); 
        if (role === 'admin') { 
            navigate('/admin'); 
        } else { 
            navigate('/employee');
         } }
    };

  return (
    <div class="bg-white min-h-screen">
      <Link to="/" class="font-bold text-lg text-blue-400 p-4">
        Home
      </Link>
      <div class="flex items-center justify-center">
        <div class="bg-blue-50 p-8 rounded-lg shadow-lg w-120 flex flex-col items-center justify-center">
          <div class="mb-4 text-2xl font-bold text-blue-300">KEKA</div>
           <div class="flex">
                
                       <button class={`border px-4 py-2 rounded-full text-blue ${ role === 'admin' ? 'bg-white text-blue-800' :' text-white bg-blue-500 border-blue-500' } 
                       cursor-pointer hover:bg-white hover:text-blue-900 mr-2`} 
                       onClick={() => setRole('admin')}>
                         Admin
                       </button>
                     
                     <button class={`border px-4 py-2 rounded-full text-blue ${ role === 'employee' ? 'bg-white  text-blue-800' : ' text-white bg-blue-500 border-blue-500' } 
                       cursor-pointer hover:bg-white hover:text-blue-900 mr-2`} 
                       onClick={() => setRole('employee')}>
                       Employee
                     </button>
                   </div>         
            <div>
            <form onSubmit={handleSubmit} class="w-100">
            <div class="flex flex-row justify-between mb-4 gap-4">
            <div class="flex flex-col w-full">
                <input
                type="text"
                placeholder="First Name"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                class="mt-2 p-2 w-full border border-blue-700 rounded-lg hover:bg-white"
                />
                {errors.fname && <div class="text-red-500 text-sm mt-1">{errors.fname}</div>}
            </div>

            <div class="flex flex-col w-full">
                <input
                type="text"
                placeholder="Last Name"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
                class="mt-2 p-2 w-full border border-blue-700 rounded-lg hover:bg-white"
                />
                {errors.lname && <div class="text-red-500 text-sm mt-1">{errors.lname}</div>}
            </div>
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

              {role === 'admin' && (
                <>
                  <div className="mb-4">
                    <label className="block text-black font-medium">Company Name</label>
                    <input
                      type="text"
                      placeholder="Enter your company name"
                      value={companyname}
                      onChange={(e) => setCompanyname(e.target.value)}
                      className="mt-2 p-2 w-full border border-blue-700 rounded-lg hover:bg-white"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-black font-medium">Industry Type</label>
                    <select
                      value={industrytype}
                      onChange={(e) => setIndustrytype(e.target.value)}
                      className="mt-2 p-2 w-full border border-blue-700 rounded-lg hover:bg-white"
                    >
                      <option value="">Select Industry</option>
                      <option value="IT">IT</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Finance">Finance</option>
                      <option value="Education">Education</option>
                      <option value="Manufacturing">Manufacturing</option>
                      <option value="Retail">Retail</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </>
              )}
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
                  Create Account
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


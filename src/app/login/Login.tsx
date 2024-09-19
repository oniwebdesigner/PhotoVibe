// users/Login.tsx
"use client";  // Mark component as a client component

import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState<string | null>(null);  // State for error messages
  const [success, setSuccess] = useState<string | null>(null);  // State for success messages

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch('https://backend-api-url/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Login failed. Please check your credentials.');
      }

      const data = await response.json();
      setSuccess('Login successful!');
      console.log('Login response:', data);

    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);  // Set error message to be displayed
      } else {
        setError('An unknown error occurred');
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-indigo-600">
      <form onSubmit={handleSubmit} className="w-96 p-6 shadow-lg bg-blue rounded-md">
        <h2 className="fa-solid fa-user ext-3xl block text-center font-semibold">Login</h2>
        
        {error && <p className="text-red-500 mb-4">{error}</p>}  {/* Display error message */}
        {success && <p className="text-green-500 mb-4">{success}</p>}  {/* Display success message */}

        <div className="mb-4">
          <label htmlFor="email" className="block text-base mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-base mb-2">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Your Password"
            className= "border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mt-3 flex justify-between items-center">
            <div>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember"> Remember Me</label>
            </div>
           

            <div>
              <a href="#" className="text-indigo-800 font-semibold">Forgot Password?</a>
            </div>
            </div>

        <button
          type="submit"
          className=" mt-5 border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

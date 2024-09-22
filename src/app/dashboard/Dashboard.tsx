"use client"; 

import { useEffect } from "react";
import { useRouter } from 'next/navigation';

const Dashboard = () => {
  const router = useRouter();

  const handleLogout = () => {
    
    localStorage.removeItem('token');
    router.push('/login'); //back to login
  };

  return (
    <div className="min-h-screen bg-black -100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
      <p className="text-lg mb-4">Welcome to your dashboard!</p>
      <button 
        onClick={handleLogout}
        className="mt-4 py-2 px-4 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;

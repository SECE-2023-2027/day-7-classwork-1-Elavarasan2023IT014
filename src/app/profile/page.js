'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

function Profile() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    try {
      const storedData = localStorage.getItem('userData');
      if (storedData) {
        setUserData(JSON.parse(storedData));
      } else {
        setError('No user data found. Please register or log in.');
        // Redirect to login if no user data
        router.push('/login');
      }
    } catch (err) {
      setError('Error retrieving user data.');
      console.error('Profile error:', err);
    }
  }, [router]);

   const handleLogout = () => {
    localStorage.removeItem('userData');
    router.push('/login');
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">User Profile</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {userData && (
        <div className="space-y-4">
          <div className="text-center">
            <span className="block text-sm font-medium text-gray-700">Welcome</span>
            <p className="text-3xl font-semibold text-blue-600">{userData.username}</p>
          </div>
          <div>
            <span className="block text-sm font-medium text-gray-700">Email:</span>
            <p className="text-lg">{userData.email}</p>
          </div>
          <div className="flex justify-between">
             <button
              onClick={handleLogout}
              className="text-red-600 hover:underline focus:outline-none"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
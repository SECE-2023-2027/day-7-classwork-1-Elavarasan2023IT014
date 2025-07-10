'use client'
import React from 'react';
function Home() {
    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Welcome to MyApp</h1>
        <p className="text-gray-700 mb-4">This is a simple home page.</p>
        <p className="text-gray-500">You can navigate to Login or Register from the Navbar.</p>
        </div>
    );
    }
export default Home;
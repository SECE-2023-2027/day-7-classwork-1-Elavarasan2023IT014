'use client'; // For Next.js App Router

import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link href="/">MyApp</Link>
        </div>
        <div className="flex space-x-4">
          <Link href="/login" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">
            Login
          </Link>
          <Link href="/register" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}
'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      // Retrieve stored user data from localStorage
      const storedData = localStorage.getItem('userData');
      if (!storedData) {
        setError('No registered user found. Please register first.');
        return;
      }

      const userData = JSON.parse(storedData);

      // Validate credentials
      if (userData.username !== formData.username) {
        setError('Invalid username.');
        return;
      }

      if (userData.password !== formData.password) {
        setError('Invalid password.');
        return;
      }

      setSuccess('Login successful!');
      // Reset form
      setFormData({
        username: '',
        password: '',
      });
      router.push('/profile');
    } catch (err) {
      setError('An error occurred during login.');
      console.error('Login error:', err);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-500 mb-4">{success}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Login
        </button>
      </form>
        <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account? <a href="/register" className="text-blue-500 hover:underline">Register</a>
        </p>
    </div>
  );
}

export default Login;
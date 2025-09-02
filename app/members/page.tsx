'use client';

import { useState } from 'react';
import { Lock, Key, Users } from 'lucide-react';

export default function Members() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle authentication
    console.log('Login attempt:', credentials);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="mx-auto h-16 w-16 bg-velvet-purple rounded-full flex items-center justify-center">
            <Lock className="h-8 w-8 text-white" />
          </div>
          <h2 className="mt-6 font-space-grotesk text-3xl font-bold text-gray-900">
            Members Area
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Access member resources and tools
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={credentials.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-velvet-purple focus:border-velvet-purple outline-none"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={credentials.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-velvet-purple focus:border-velvet-purple outline-none"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-velvet-purple text-white py-3 px-4 rounded-lg hover:bg-opacity-90 transition-colors duration-200 font-medium flex items-center justify-center space-x-2"
          >
            <Key size={20} />
            <span>Sign in</span>
          </button>

          <div className="text-center">
            <a href="#" className="text-sm text-velvet-purple hover:underline">
              Forgot your password?
            </a>
          </div>
        </form>

        <div className="text-center pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            Not a member yet?{' '}
            <a href="/join" className="text-velvet-purple hover:underline font-medium">
              Apply to join
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
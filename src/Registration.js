import React from 'react';
const Registration = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-blue-200 p-3 rounded shadow-outline shadow-2xl md:w-96 lg:w-100 w-full">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Name</label>
          <div className="flex flex-col md:flex-row">
            <input
              type="text"
              className="mt-1 p-2 w-full md:w-1/2 mb-2 md:mr-2 border shadow-2xl rounded-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder="First Name"
            />
            <input
              type="text"
              className="mt-1 p-2 w-full md:w-1/2 mb-2 border shadow-2xl rounded-md focus:outline-none focus:ring focus:border-blue-300 "
              placeholder="Last Name"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Phone Number</label>
          <input
            type="tel"
            className="mt-1 p-2 w-full border shadow-2xl rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Your phone number"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Gender</label>
          <select
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Email Address</label>
          <input
            type="email"
            className="mt-1 p-2 w-full border shadow-2xl rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Your email address"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Password</label>
          <input
            type="password"
            className="mt-1 p-2 w-full border shadow-2xl rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Your secure password"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Profile Picture</label>
          <input
            type="file"
            accept="image/*"
            className="mt-1 p-2 w-full border shadow-2xl rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="flex items-center justify-between mt-6">
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full shadow-2xl">
            Register
          </button>
        </div>
     
        <p className="text-center mt-4 text-sm text-gray-600">
          Already have an account?{' '}
          <a href="#" className="text-blue-500">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};
export default Registration;

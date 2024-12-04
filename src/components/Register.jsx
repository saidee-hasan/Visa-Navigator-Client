import React, { useState } from "react";

function Register() {
  // State to hold form values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photoUrl: "",
    password: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log("Form Data:", formData); // Log form data to console
    // You can add further logic here, like sending the data to an API
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
         <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full transform transition-transform duration-700 hover:scale-105">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name" // Add name attribute
              value={formData.name} // Bind value to state
              onChange={handleChange} // Handle input change
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email" // Add name attribute
              value={formData.email} // Bind value to state
              onChange={handleChange} // Handle input change
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="photo-url">
              Photo URL
            </label>
            <input
              type="url"
              id="photo-url"
              name="photoUrl" // Add name attribute
              value={formData.photoUrl} // Bind value to state
              onChange={handleChange} // Handle input change
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="https://example.com/photo.jpg"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password" // Add name attribute
              value={formData.password} // Bind value to state
              onChange={handleChange} // Handle input change
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="********"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Register
          </button>
        </form>


        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a>
          </p>


          </div>





    </div>
  );
}

export default Register;

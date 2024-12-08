import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-900 text-black dark:text-white  py-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-700">
          &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>
        <ul className="flex justify-center space-x-4 mt-2">
          <li><a href="/about" className="text-blue-500 hover:underline">About Us</a></li>
          <li><a href="/contact" className="text-blue-500 hover:underline">Contact</a></li>
          <li><a href="/privacy" className="text-blue-500 hover:underline">Privacy Policy</a></li>
          <li><a href="/terms" className="text-blue-500 hover:underline">Terms of Service</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
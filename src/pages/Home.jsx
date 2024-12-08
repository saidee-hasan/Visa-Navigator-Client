import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import LatestVisas from '../components/LatestVisas';
import Interview from '../components/Interview';
import Faq from '../components/Faq';

function Home() {
  // Initialize state for dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Effect to check and set theme from localStorage on page load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  // Toggle the dark mode state
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Update the theme in localStorage and body class
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
    <div className={`lg:w-11/12 mx-auto ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <Banner />
      <br />
      <LatestVisas />
      <Interview />
      <Faq />

      {/* Dark/Light Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="fixed bottom-4 right-4 p-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition duration-300"
        aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      >
        {isDarkMode ? '🌙' : '🌞'}
      </button>
    </div></div>
  );
}

export default Home;

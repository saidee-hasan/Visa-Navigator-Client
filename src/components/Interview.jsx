// Interview.js
import React from 'react';

function Interview() {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
      <h1 className="text-3xl font-bold text-center mb-6 animate-fade-in">Visa Interview Preparation</h1>
      
      {/* Preparation Tips Section */}
      <section className="section mb-8">
        <h2 className="text-2xl font-semibold mb-4">Preparation Tips</h2>
        <ul className="list-disc list-inside text-gray-700 grid grid-cols-1 md:grid-cols-2">
          <li className="mb-2 animate-fade-in">Review your application and supporting documents thoroughly.</li>
          <li className="mb-2 animate-fade-in">Practice answering common interview questions.</li>
          <li className="mb-2 animate-fade-in">Dress appropriately and arrive on time.</li>
          <li className="mb-2 animate-fade-in">Be honest and confident in your responses.</li>
          <li className="mb-2 animate-fade-in">Prepare questions to ask the interviewer if given the opportunity.</li>
        </ul>
      </section>

      {/* Common Questions Section */}
      <section className="section mb-8">
        <h2 className="text-2xl font-semibold mb-4">Common Interview Questions</h2>
        <ul className="list-disc list-inside text-gray-700 grid grid-cols-1 md:grid-cols-2">
          <li className="mb-2 animate-fade-in">Why do you want to travel to [Country]?</li>
          <li className="mb-2 animate-fade-in">How long do you plan to stay?</li>
          <li className="mb-2 animate-fade-in">What will you do during your stay?</li>
          <li className="mb-2 animate-fade-in">Do you have any family or friends in [Country]?</li>
          <li className="mb-2 animate-fade-in">How will you support yourself during your stay?</li>
        </ul>
      </section>

      {/* What to Expect Section */}
      <section className="section mb-8">
        <h2 className="text-2xl font-semibold mb-4">What to Expect During the Interview</h2>
        <p className="text-gray-700 mb-4 animate-fade-in">
          During the visa interview, you will meet with a consular officer who will ask you questions about your application and travel plans. The interview typically lasts between 5 to 15 minutes. Be prepared to provide clear and concise answers.
        </p>
      </section>

      {/* Additional Resources Section */}
      <section className="section mb-8">
        <h2 className="text-2xl font-semibold mb-4">Additional Resources</h2>
        <p className="text-gray-700 mb-4 animate-fade-in">
          For more information, consider visiting the official embassy or consulate website for specific guidelines related to your visa type.
        </p>
      </section>
    </div>
  );
}

export default Interview;
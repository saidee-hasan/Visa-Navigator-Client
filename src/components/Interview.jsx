import React from 'react';

function Interview() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6 animate-fade-in">Visa Interview Preparation</h1>
      
      {/* Preparation Tips Section */}
      <section className="section mb-8">
        <h2 className="text-2xl font-semibold mb-4">Preparation Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Review your application and supporting documents thoroughly.",
            "Practice answering common interview questions.",
            "Dress appropriately and arrive on time.",
            "Be honest and confident in your responses.",
            "Prepare questions to ask the interviewer if given the opportunity."
          ].map((tip, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4 animate-fade-in">
              <p className="text-gray-700">{tip}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Common Questions Section */}
      <section className="section mb-8">
        <h2 className="text-2xl font-semibold mb-4">Common Interview Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Why do you want to travel to [Country]?",
            "How long do you plan to stay?",
            "What will you do during your stay?",
            "Do you have any family or friends in [Country]?",
            "How will you support yourself during your stay?"
          ].map((question, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4 animate-fade-in">
              <p className="text-gray-700">{question}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="section mb-8">
        <h2 className="text-2xl font-semibold mb-4">What to Expect During the Interview</h2>
        <div className="bg-white shadow-md rounded-lg p-4 animate-fade-in">
          <p className="text-gray-700 mb-4">
            During the visa interview, you will meet with a consular officer who will ask you questions about your application and travel plans. The interview typically lasts between 5 to 15 minutes. Be prepared to provide clear and concise answers.
          </p>
        </div>
      </section>

      {/* Additional Resources Section */}
      <section className="section mb-8">
        <h2 className="text-2xl font-semibold mb-4">Additional Resources</h2>
        <div className="bg-white shadow-md rounded-lg p-4 animate-fade-in">
          <p className="text-gray-700 mb-4">
            For more information, consider visiting the official embassy or consulate website for specific guidelines related to your visa type.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Interview;
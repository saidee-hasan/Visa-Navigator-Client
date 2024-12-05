import React from 'react';

function Faq() {
  const faqs = [
    {
      question: "What is the visa application process?",
      answer: "The visa application process typically involves filling out an application form, gathering required documents, and attending an interview at the embassy or consulate."
    },
    {
      question: "How long does it take to get a visa?",
      answer: "Processing times vary by country and visa type, but it can take anywhere from a few days to several weeks."
    },
    {
      question: "What documents do I need for my visa application?",
      answer: "Common documents include a valid passport, application form, photographs, proof of financial means, and travel itinerary."
    },
    {
      question: "Can I apply for a visa online?",
      answer: "Many countries offer online visa applications, but some may require you to apply in person."
    },
    {
      question: "What should I do if my visa application is denied?",
      answer: "If your application is denied, you can usually appeal the decision or reapply after addressing the reasons for denial."
    }
  ];

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold">{faq.question}</h2>
            <p className="text-gray-700 mt-2">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
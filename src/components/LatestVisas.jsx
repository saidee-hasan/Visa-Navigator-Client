// LatestVisas.js
import React from 'react';

const LatestVisas = () => {
    const visas = [
        { id: 1, name: 'USA Visa', description: 'Explore the opportunities in the USA.' },
        { id: 2, name: 'Schengen Visa', description: 'Travel across Europe with ease.' },
        { id: 3, name: 'UK Visa', description: 'Experience the culture and history of the UK.' },
    ];

    return (
        <section className="py-16 p-4  bg-gradient-to-r from-blue-500 to-purple-600">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-white text-center mb-8">Latest Visas</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {visas.map(visa => (
                        <div key={visa.id} className="bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-gray-800">{visa.name}</h3>
                                <p className="mt-2 text-gray-600">{visa.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestVisas;
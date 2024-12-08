import React from 'react';

const LatestVisas = () => {
    const visas = [
        { id: 1, name: 'USA Visa', description: 'Explore the opportunities in the USA.' },
        { id: 2, name: 'Schengen Visa', description: 'Travel across Europe with ease.' },
        { id: 3, name: 'UK Visa', description: 'Experience the culture and history of the UK.' },
    ];

    return (
        <section className="py-16 p-6 dark:bg-gray-900 text-black dark:text-white   bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 dark:bg-gradient-to-r dark:from-blue-800 dark:via-indigo-900 dark:to-purple-800">
            <div className="container mx-auto">
                <h2 className="text-4xl font-extrabold text-white text-center mb-12">Latest Visas</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {visas.map(visa => (
                        <div key={visa.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-indigo-100 dark:hover:bg-indigo-700">
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">{visa.name}</h3>
                                <p className="mt-2 text-gray-600 dark:text-gray-300">{visa.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestVisas;

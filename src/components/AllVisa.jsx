import React from 'react';
import { useLoaderData } from 'react-router-dom';
import VisaCard from './VisaCard';

function AllVisa() {
    const visaData = useLoaderData();
    console.log(visaData);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6">Available Visas</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {visaData.length > 0 ? (
                    visaData.map((visa, idx) => (
                        <VisaCard visa={visa} key={idx} />
                    ))
                ) : (
                    <p className="text-center text-gray-500">No visa information available.</p>
                )}
            </div>
        </div>
    );
}

export default AllVisa;
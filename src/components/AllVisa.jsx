import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import VisaCard from './VisaCard';
import { CircleLoader, RingLoader } from 'react-spinners';

function AllVisa() {
    const visaData = useLoaderData();
    const [selectedType, setSelectedType] = useState('');
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); 

        return () => clearTimeout(timer); // Cleanup the timer
    }, []);

    const handleFilterChange = (e) => {
        setSelectedType(e.target.value);
    };

    const SelectedVisaData = selectedType ? visaData.filter((visa) => visa.visaType === selectedType) : visaData;

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
<CircleLoader  color="#36d7b7" loading={loading} size={100} />
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6">Available Visas</h1>
            <div className="mb-6">
                <label htmlFor="visa-type" className="mr-2 text-gray-700">Filter by Visa Type:</label>
                <select
                    id="visa-type"
                    value={selectedType}
                    onChange={handleFilterChange}
                    className="p-2 border border-gray-300 rounded-md"
                >
                    <option value="">All</option> 
                    <option value="Tourist visa">Tourist visa</option>
                    <option value="Student visa">Student visa</option>
                    <option value="Official visa">Official visa</option>
                    <option value="Work visa">Work visa</option>
                    <option value="Business visa">Business visa</option>
                </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {SelectedVisaData.length > 0 ? (
                    SelectedVisaData.map((visa, idx) => (
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
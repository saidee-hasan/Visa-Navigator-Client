import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import VisaCard from './VisaCard';

function VisaDetails() {
    const { id } = useParams();
    const data = useLoaderData();

    const [visaData, setVisaData] = useState({});

    useEffect(() => {
        const singleData = data.find((p) => p._id === id); // Use strict equality for comparison
        setVisaData(singleData || {}); // Set product data or an empty object
    }, [data, id]);

    const {
        countryName,
        countryImage,
        visaType,
        processingTime,
        description,
        ageRestriction,
        fee,
        validity,
        applicationMethod,
        _id
    } = visaData;

    // Check if visaData is empty and show a loading message or placeholder
    if (!visaData._id) {
        return <div className="text-center mt-10">Loading...</div>;
    }

    return (
        <div className="mx-auto max-w-4xl p-4 mt-20">
            <div className="md:flex md:space-x-8  border shadow-orange-50">
                <img 
                    src={countryImage} 
                    alt={countryName} 
                    className="w-full md:w-1/2 h-auto rounded-lg shadow-md" 
                />
                
                <div className="mt-4 py-5 md:mt-0 md:w-1/2 text-center md:text-left">
                    <h2 className="text-2xl font-bold text-gray-800">{countryName}</h2>
                    <p className="mt-2 text-gray-600">Visa Type: <span className="font-semibold">{visaType}</span></p>
                    <p className="mt-2 text-gray-600">Processing Time: <span className="font-semibold">{processingTime}</span></p>
                    <p className="mt-2 text-gray-600">Age Restriction: <span className="font-semibold">{ageRestriction}</span></p>
                    <p className="mt-2 text-gray-600">Fee: <span className="font-semibold">{fee}</span></p>
                    <p className="mt-2 text-gray-600">Validity: <span className="font-semibold">{validity}</span></p>
                    <p className="mt-2 text-gray-600">Application Method: <span className="font-semibold">{applicationMethod}</span></p>
                    <p className="mt-4 text-gray-700">{description}</p>
                    {/* Apply Button */}

                    <button 

                

                        className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition duration-200"

                    >

                        Apply Now

                    </button>
                </div>
            </div>
           
        </div>
    );
}

export default VisaDetails;
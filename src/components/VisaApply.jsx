import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function VisaApply() {
    const applications = useLoaderData();

    const [apply, setApply] = useState(applications);



    const handleCancel = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/apply/${id}`, {
                method: 'DELETE',
            });

            const data = await response.json();

            // Check if the deletion was successful
            if (data.deletedCount > 0) {
                console.log('Deleted count:', data.deletedCount);
                
                // Corrected the filtering logic
                const remaining = apply.filter(application => application._id !== id);
                setApply(remaining); // Update the state to remove the cancelled application
            } else {
                console.log('No application found to delete');
            }
        } catch (error) {
            console.error('Error cancelling application:', error);
        }
    };

    return (
        <div className="mx-auto max-w-6xl p-6 mt-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                My Visa Applications
            </h2>
            {apply.length === 0 ? (
                <p className="text-gray-600 text-center text-lg">
                    You have not applied for any visas yet.
                </p>
            ) : (
                <ul className="space-y-6">
                    {apply.map((application) => (
                        <li
                            key={application._id}
                            className="border border-gray-200 rounded-lg shadow-lg bg-white p-6 flex flex-col md:flex-row items-start md:items-center gap-6 hover:shadow-2xl transition-shadow duration-300"
                        >
                            {/* Country Image */}
                            <img
                                src={application.countryImage}
                                alt={application.countryName}
                                className="w-full md:w-60 h-auto object-cover rounded-lg"
                            />

                            {/* Application Details */}
                            <div className="flex-1 space-y-2 text-gray-700">
                                <h3 className="text-xl font-semibold text-gray-800">
                                    {application.countryName}
                                </h3>
                                <p className="text-sm">
                                    <span className="font-bold text-gray-900">Visa Type:</span>{' '}
                                    {application.visaType}
                                </p>
                                <p className="text-sm">
                                    <span className="font-bold text-gray-900">Processing Time:</span>{' '}
                                    {application.processingTime}
                                </p>
                                <p className="text-sm">
                                    <span className="font-bold text-gray-900">Fee:</span> ${application.fee}
                                </p>
                                <p className="text-sm">
                                    <span className="font-bold text-gray-900">Validity:</span>{' '}
                                    {application.validity}
                                </p>
                                <p className="text-sm">
                                    <span className="font-bold text-gray-900">Application Method:</span>{' '}
                                    {application.applicationMethod}
                                </p>
                                <p className="text-sm">
                                    <span className="font-bold text-gray-900">Applied Date:</span>{' '}
                                    {application.appliedDate}
                                </p>
                                <p className="text-sm">
                                    <span className="font-bold text-gray-900">Applicant's Name:</span>{' '}
                                    {`${application.firstName} ${application.lastName}`}
                                </p>
                                <p className="text-sm">
                                    <span className="font-bold text-gray-900">Applicant's Email:</span>{' '}
                                    {application.email}
                                </p>
                            </div>

                            {/* Cancel Button */}
                            <button
                                onClick={() => handleCancel(application._id)}
                                className="self-end md:self-center mt-4 md:mt-0 px-6 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400"
                            >
                                Cancel Application
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default VisaApply;

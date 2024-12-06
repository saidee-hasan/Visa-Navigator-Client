import React from 'react';
import { useLoaderData } from 'react-router-dom';

function VisaApply() {
    const applications = useLoaderData(); // Assuming this returns an array of applications

    return (
        <div className="mx-auto max-w-4xl p-4 mt-20">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">My Visa Applications</h2>
            {applications.length === 0 ? (
                <p className="text-gray-600">You have not applied for any visas yet.</p>
            ) : (
                <ul className="space-y-4">
                    {applications.map((application) => (
                        <li key={application._id} className="border p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold">{application.countryName}</h3>
                            <p><strong>Visa Type:</strong> {application.visaType}</p>
                            <p><strong>Applied Date:</strong> {application.appliedDate}</p>
                            <p><strong>Fee:</strong> {application.fee}</p>
                            <p><strong>Status:</strong> {application.status}</p>
                            {/* Add more fields as necessary */}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default VisaApply;
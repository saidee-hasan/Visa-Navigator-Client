import React from 'react';
import { useLoaderData } from 'react-router-dom';

function VisaApply() {
    const applications = useLoaderData(); // Assuming this returns an array of applications

    const handleCancel = async (id) => {
       
        fetch(`http://localhost:5000/apply/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{console.log(data)})
      console.log(id)
    };

    return (
        <div className="mx-auto max-w-6xl p-6 mt-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">My Visa Applications</h2>
            {applications.length === 0 ? (
                <p className="text-gray-600 text-center text-lg">You have not applied for any visas yet.</p>
            ) : (
                <ul className="space-y-6">
                    {applications.map((application) => (
                        <li
                            key={application._id}
                            className="border rounded-lg shadow-lg bg-white p-6 flex flex-col md:flex-row items-start md:items-center gap-6 hover:shadow-xl transition-shadow duration-300"
                        >
                            <img
                                src={application.countryImage}
                                alt={application.countryName}
                                className=" w-72 object-cover rounded-lg"
                            />
                            <div className="flex-1 space-y-2 text-gray-700">
                                <h3 className="text-xl font-semibold text-gray-800">{application.countryName}</h3>
                                <p>
                                    <span className="font-bold">Visa Type:</span> {application.visaType}
                                </p>
                                <p>
                                    <span className="font-bold">Processing Time:</span> {application.processingTime}
                                </p>
                                <p>
                                    <span className="font-bold">Fee:</span> {application.fee}
                                </p>
                                <p>
                                    <span className="font-bold">Validity:</span> {application.validity}
                                </p>
                                <p>
                                    <span className="font-bold">Application Method:</span> {application.applicationMethod}
                                </p>
                                <p>
                                    <span className="font-bold">Applied Date:</span> {application.appliedDate}
                                </p>
                                <p>
                                    <span className="font-bold">Applicant's Name:</span> {`${application.firstName} ${application.lastName}`}
                                </p>
                                <p>
                                    <span className="font-bold">Applicant's Email:</span> {application.email}
                                </p>
                            </div>
                            <button
                                onClick={() => handleCancel(application._id)}
                                className="self-end md:self-center mt-4 md:mt-0 px-6 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-lg hover:bg-red-700 transition duration-300 transform hover:scale-105"
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

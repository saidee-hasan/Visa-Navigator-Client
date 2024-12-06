import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

function VisaDetails() {
    const { id } = useParams();
    const data = useLoaderData();
    const { user } = useContext(AuthContext);

    const [visaData, setVisaData] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        email: user?.email || '',
        firstName: '',
        lastName: '',
        appliedDate: new Date().toISOString().split('T')[0],
        fee: '',
    });

    useEffect(() => {
        const singleData = data.find((p) => p._id === id); // Use strict equality for comparison
        setVisaData(singleData || {}); // Set product data or an empty object
        setFormData((prev) => ({
            ...prev,
            fee: singleData?.fee || '',
           
        }));
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
        _id,
    } = visaData;

    // Check if visaData is empty and show a loading message or placeholder
    if (!visaData._id) {
        return <div className="text-center mt-10">Loading...</div>;
    }

    const handleModalToggle = () => setIsModalOpen(!isModalOpen);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        // Submit the data to the backend here
        handleModalToggle(); // Close the modal after submission
    };

    return (
        <div className="mx-auto max-w-4xl p-4 mt-20">
            <div className="md:flex md:space-x-8 border shadow-orange-50">
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

                    {/* Apply for Visa Button */}
                    <button
                        onClick={handleModalToggle}
                        className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition duration-200"
                    >
                        Apply for the Visa
                    </button>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                        <h2 className="text-xl font-semibold mb-4">Apply for Visa</h2>
                        <form onSubmit={handleFormSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={user?.email||''}
                                    readOnly
                                    className="w-full mt-2 p-2 border rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    className="w-full mt-2 p-2 border rounded"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    className="w-full mt-2 p-2 border rounded"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Applied Date</label>
                                <input
                                    type="date"
                                    name="appliedDate"
                                    value={formData.appliedDate}
                                    readOnly
                                    className="w-full mt-2 p-2 border rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Fee</label>
                                <input
                                    type="text"
                                    name="fee"
                                    value={formData.fee}
                                    readOnly
                                    className="w-full mt-2 p-2 border rounded"
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={handleModalToggle}
                                    className="mr-4 px-4 py-2 bg-gray-300 rounded"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 text-white rounded"
                                >
                                    Apply
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default VisaDetails;

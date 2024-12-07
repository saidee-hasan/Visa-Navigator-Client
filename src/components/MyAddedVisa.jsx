import React, { useMemo } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

function MyAddedVisa() {
  const { email } = useParams();
  const data = useLoaderData(); // This should be an array of visa data

  // Filter visas by the logged-in user's email
  const userVisas = useMemo(
    () => (Array.isArray(data) ? data.filter((visa) => visa.email === email) : []),
    [data, email]
  );

  const handleUpdate = (visaId) => {
    console.log('Update Visa:', visaId);
    // Implement update logic
  };

  const handleDelete = (id) => {
    console.log('Delete Visa:', id);
    // Implement delete logic
  };

  return (
    <div className=" bg-gray-100 min-h-screen">
    <div className="mt-16 px-4 container mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">My Added Visas</h2>
      {userVisas.length === 0 ? (
        <p className="text-gray-500">No visas found for your account.</p>
      ) : (
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-6">
          {userVisas.map((visa) => (
            <div key={visa._id} className="bg-white py-4 px-6 space-y-4 sm:flex md:space-x-6 rounded-lg shadow-lg">
              {/* Image Section */}
              <img
                src={visa.countryImage}
                alt={`${visa.countryName} image`}
                className="w-full md:w-48 sm:w-40 h-40 object-cover rounded-md"
              />

              {/* Text Content Section */}
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-gray-800">{visa.countryName}</h3>
                <p className="text-sm text-gray-500">Visa Type: {visa.visaType}</p>
                <p className="text-sm text-gray-500">Processing Time: {visa.processingTime}</p>
                <p className="text-sm text-gray-500">Fee: {visa.fee}</p>
                <p className="text-sm text-gray-500">Validity: {visa.validity}</p>
                <p className="text-sm text-gray-500">Application Method: {visa.applicationMethod}</p>
              </div>

              {/* Buttons Section */}
              <div className="mt-4 gap-8 space-y-2 md:space-y-0 md:flex md:flex-col md:justify-between">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                  onClick={() => handleUpdate(visa._id)}
                >
                  Update
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                  onClick={() => handleDelete(visa._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div></div>
  );
}

export default MyAddedVisa;

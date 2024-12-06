import React from "react";

function VisaCard({ visa }) {
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
  } = visa;

  const handleSeeDetails = () => {
    // Adjust the path as necessary
    console.log("See details for:", countryName);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <img src={countryImage} alt={countryName} className="w-full h-32 object-cover rounded-t-lg" />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{countryName}</h2>
        <p className="text-sm text-gray-600">Visa Type: {visaType}</p>
        <p className="text-sm text-gray-600">Processing Time: {processingTime}</p>
        <p className="text-sm text-gray-600">Age Restriction: {ageRestriction}</p>
        <p className="text-sm text-gray-600">Fee: ${fee}</p>
        <p className="text-sm text-gray-600">Validity: {validity}</p>
        <p className="text-sm text-gray-600">Application Method: {applicationMethod}</p>
        <p className="mt-2 text-gray-700">  {description}</p>
        <button
          onClick={handleSeeDetails}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          See Details
        </button>
      </div>
    </div>
  );
}

export default VisaCard;
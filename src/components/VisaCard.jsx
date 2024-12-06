import React from "react";
import { Link } from "react-router-dom";

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
    _id,
  } = visa;

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out border border-gray-200">
      <img
        src={countryImage}
        alt={countryName}
        className="w-full h-40 object-cover rounded-t-xl"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900">{countryName}</h2>
        <p className="text-sm text-gray-500 mt-1">Visa Type: {visaType}</p>
        <p className="text-sm text-gray-500 mt-1">
          Processing Time: {processingTime}
        </p>
        <p className="text-sm text-gray-500 mt-1">Age Restriction: {ageRestriction}</p>
        <p className="text-sm text-gray-500 mt-1">Fee: ${fee}</p>
        <p className="text-sm text-gray-500 mt-1">Validity: {validity}</p>
        <p className="text-sm text-gray-500 mt-1">
          Application Method: {applicationMethod}
        </p>
        <p className="mt-3 text-gray-700 line-clamp-3">{description}</p>
        <Link to={`/visa/${_id}`}>
          <button
            className="mt-4 w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-4 rounded-xl shadow-lg hover:from-blue-600 hover:to-blue-700 hover:shadow-2xl transition-transform duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            See Details
          </button>
        </Link>
      </div>
    </div>
  );
}

export default VisaCard;

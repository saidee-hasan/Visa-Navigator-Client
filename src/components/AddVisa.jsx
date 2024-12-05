import React, { useState } from "react";

export default function AddVisa() {
  const [countryName, setCountryName] = useState("");
  const [visaType, setVisaType] = useState("Tourist visa");
  const [processingTime, setProcessingTime] = useState("");
  const [requiredDocuments, setRequiredDocuments] = useState([]);
  const [description, setDescription] = useState("");
  const [ageRestriction, setAgeRestriction] = useState("");
  const [fee, setFee] = useState("");
  const [validity, setValidity] = useState("");
  const [applicationMethod, setApplicationMethod] = useState("");

  const documentOptions = [
    "Valid passport",
    "Visa application form",
    "Recent passport-sized photograph",
    "Proof of accommodation",
    "Financial statements",
    "Travel itinerary",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      countryName,
      visaType,
      processingTime,
      requiredDocuments,
      description,
      ageRestriction,
      fee,
      validity,
      applicationMethod,
    };

    console.log(data);
    resetForm();
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setRequiredDocuments((prev) =>
      checked ? [...prev, value] : prev.filter((doc) => doc !== value)
    );
  };

  const resetForm = () => {
    setCountryName("");
    setVisaType("Tourist visa");
    setProcessingTime("");
    setRequiredDocuments([]);
    setDescription("");
    setAgeRestriction("");
    setFee("");
    setValidity("");
    setApplicationMethod("");
  };

  return (
    <div className="bg-gradient-to-r from-blue-100 via-white to-blue-50 shadow-lg rounded-lg">
    <div className="max-w-md mx-auto mt-10 p-6 ">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Add Visa Details
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="countryName"
          >
            Country Name
          </label>
          <input
            id="countryName"
            type="text"
            value={countryName}
            onChange={(e) => setCountryName(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="visaType"
          >
            Visa Type
          </label>
          <select
            id="visaType"
            value={visaType}
            onChange={(e) => setVisaType(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            <option value="Tourist visa">Tourist Visa</option>
            <option value="Student visa">Student Visa</option>
            <option value="Official visa">Official Visa</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="processingTime"
          >
            Processing Time
          </label>
          <input
            id="processingTime"
            type="text"
            value={processingTime}
            onChange={(e) => setProcessingTime(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Required Documents
          </label>
          {documentOptions.map((doc) => (
            <div key={doc} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={doc}
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-blue-500 focus:ring-blue-400"
              />
              <label className="text-gray-700">{doc}</label>
            </div>
          ))}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows="3"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="ageRestriction"
          >
            Age Restriction
          </label>
          <input
            id="ageRestriction"
            type="number"
            value={ageRestriction}
            onChange={(e) => setAgeRestriction(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="fee"
          >
            Fee
          </label>
          <input
            id="fee"
            type="number"
            value={fee}
            onChange={(e) => setFee(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="validity"
          >
            Validity
          </label>
          <input
            id="validity"
            type="text"
            value={validity}
            onChange={(e) => setValidity(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="applicationMethod"
          >
            Application Method
          </label>
          <input
            id="applicationMethod"
            type="text"
            value={applicationMethod}
            onChange={(e) => setApplicationMethod(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white font-bold py-2 px-4 rounded shadow-md hover:scale-105 transition-transform focus:ring focus:ring-blue-300"
          >
            Add Visa
          </button>
        </div>
      </form>
    </div></div>
  );
}

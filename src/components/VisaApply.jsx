import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { CircleLoader } from "react-spinners";
import Swal from "sweetalert2";

function VisaApply() {
  const data = useLoaderData();

  const [apply, setApply] = useState(data);
  const [applications, setApplications] = useState(data);
  const [searchQuery, setSearchQuery] = useState(""); 
  const [loading, setLoading] = useState(true);

  const handleCancel = async (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://server-swart-five.vercel.app/apply/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
                console.log("Deleted count:", data.deletedCount);

                // Corrected the filtering logic
                const remaining = apply.filter(
                  (application) => application._id !== id
                );
                setApply(remaining);
                setApplications(remaining); // Also update filtered applications after delete
              }
            });
        }
      });
    } catch (error) {
      console.error("Error cancelling application:", error);
    }
  };

  // Handle search query change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    console.log(e.target.value)
  };


  useEffect(() => {
    if (searchQuery === "") {
      setApplications(apply); 
    } else {
      const filtered = apply.filter((application) =>
        application.countryName.toLowerCase().includes(searchQuery.toLowerCase()) 
      );
      setApplications(filtered);
    }
  }, [searchQuery, apply]); 


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer); 
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <CircleLoader color="#36d7b7" loading={loading} size={100} />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl p-6 mt-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        My Visa Applications
      </h2>

      {/* Search Input */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search by country name"
          className="p-2 border border-gray-300 rounded-lg w-1/2"
        />
      </div>

      {applications.length === 0 ? (
        <p className="text-gray-600 text-center text-lg">
          No visa applications found for this country.
        </p>
      ) : (
        <ul className="space-y-6">
          {applications.map((application) => (
            <li
              key={application._id}
              className="border border-gray-200 rounded-lg shadow-lg bg-white p-6 flex flex-col md:flex-row items-start md:items-center gap-6 hover:shadow-2xl transition-shadow duration-300"
            >
          
              <img
                src={application.countryImage}
                alt={application.countryName}
                className="w-full md:w-60 h-auto object-cover rounded-lg"
              />

  
              <div className="flex-1 space-y-2 text-gray-700">
                <h3 className="text-xl font-semibold text-gray-800">
                  {application.countryName}
                </h3>
                <p className="text-sm">
                  <span className="font-bold text-gray-900">Visa Type:</span>{" "}
                  {application.visaType}
                </p>
                <p className="text-sm">
                  <span className="font-bold text-gray-900">
                    Processing Time:
                  </span>{" "}
                  {application.processingTime}
                </p>
                <p className="text-sm">
                  <span className="font-bold text-gray-900">Fee:</span> $
                  {application.fee}
                </p>
                <p className="text-sm">
                  <span className="font-bold text-gray-900">Validity:</span>{" "}
                  {application.validity}
                </p>
                <p className="text-sm">
                  <span className="font-bold text-gray-900">
                    Application Method:
                  </span>{" "}
                  {application.applicationMethod}
                </p>
                <p className="text-sm">
                  <span className="font-bold text-gray-900">Applied Date:</span>{" "}
                  {application.appliedDate}
                </p>
                <p className="text-sm">
                  <span className="font-bold text-gray-900">
                    Applicant's Name:
                  </span>{" "}
                  {`${application.firstName} ${application.lastName}`}
                </p>
                <p className="text-sm">
                  <span className="font-bold text-gray-900">
                    Applicant's Email:
                  </span>{" "}
                  {application.email}
                </p>
              </div>

            
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

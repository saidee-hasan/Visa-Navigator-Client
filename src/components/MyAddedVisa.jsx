import React, { useEffect, useMemo, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { CircleLoader, RingLoader } from "react-spinners";
import Swal from "sweetalert2";

function MyAddedVisa() {
  const { email } = useParams();
  const data = useLoaderData(); // This should be an array of visa data

  const [visa, setVisa] = useState(data);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentVisa, setCurrentVisa] = useState(null);

  const handleUpdate = (visaId) => {
    const selectedVisa = visa.find((visa) => visa._id === visaId);
    setCurrentVisa(selectedVisa); // Set the current visa data in state
    setModalVisible(true); // Show the modal
  };

  const handleDelete = (id) => {
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
          fetch(`https://server-swart-five.vercel.app/visa/${id}`, {
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

                // Update the local state to reflect the deletion
                const remaining = visa.filter((visa) => visa._id !== id);
                setVisa(remaining);
              }
            });
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleModalSubmit = (event) => {
    console.log(event);
    event.preventDefault();

    const updatedVisa = {
      ...currentVisa,
      countryName: event.target.countryName.value,
      countryImage: event.target.countryImage.value,
      visaType: event.target.visaType.value,
      processingTime: event.target.processingTime.value,
      fee: event.target.fee.value,
      validity: event.target.validity.value,
      applicationMethod: event.target.applicationMethod.value,
    };
    fetch(`https://server-swart-five.vercel.app/visa/${currentVisa._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedVisa),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire(
            "Success",
            "Visa information updated successfully!",
            "success"
          );
          // Update the local state with the updated visa
          setVisa((prevVisa) =>
            prevVisa.map((item) =>
              item._id === updatedVisa._id ? { ...item, ...updatedVisa } : item
            )
          );
          setModalVisible(false); // Close the modal after submitting the form
        } else {
          Swal.fire("Error", "There was an error updating the visa", "error");
        }
      });
  };
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
      
      const timer = setTimeout(() => {
          setLoading(false);
      }, 2000); 

      return () => clearTimeout(timer); // Cleanup the timer
  }, []);
  if (loading) {
    return (
        <div className="flex justify-center items-center h-screen">
 <CircleLoader color="#36d7b7" loading={loading} size={60} />
        </div>
    );
}

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="mt-16 px-4 container mx-auto">
     
        {visa.length === 0 ? (
          <p className="text-gray-500">No visas found for your account.</p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {visa.map((visa) => (
              <div
                key={visa._id}
                className="bg-white py-4 px-6 space-y-4 sm:flex md:space-x-6 rounded-lg shadow-lg"
              >
                {/* Image Section */}
                <img
                  src={visa.countryImage}
                  alt={`${visa.countryName} image`}
                  className="w-full md:w-48 sm:w-40 h-40 object-cover rounded-md"
                />

                {/* Text Content Section */}
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {visa.countryName}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Visa Type: {visa.visaType}
                  </p>
                  <p className="text-sm text-gray-500">
                    Processing Time: {visa.processingTime}
                  </p>
                  <p className="text-sm text-gray-500">Fee: {visa.fee}</p>
                  <p className="text-sm text-gray-500">
                    Validity: {visa.validity}
                  </p>
                  <p className="text-sm text-gray-500">
                    Application Method: {visa.applicationMethod}
                  </p>
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
      </div>

      {/* Modal for Updating Visa */}
      {modalVisible && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 transition-opacity duration-300 ease-in-out">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full opacity-100 transform transition-all duration-500">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Update Visa
            </h3>
            <form onSubmit={handleModalSubmit}>
              <div className="space-y-4">
                <input
                  type="text"
                  name="countryName"
                  defaultValue={currentVisa?.countryName}
                  className="w-full p-2 border rounded"
                  required
                />
                <input
                  type="text"
                  name="countryImage"
                  defaultValue={currentVisa?.countryImage}
                  className="w-full p-2 border rounded"
                  required
                />
                <select
                  name="visaType"
                  defaultValue={currentVisa?.visaType}
                  className="w-full p-2 border rounded"
                  required
                >
                  <option value="Tourist visa">Tourist visa</option>
                  <option value="Student visa">Student visa</option>
                  <option value="Official visa">Official visa</option>
                  <option value="Work visa">Work visa</option>
                  <option value="Business visa">Business visa</option>
                </select>
                <input
                  type="text"
                  name="processingTime"
                  defaultValue={currentVisa?.processingTime}
                  className="w-full p-2 border rounded"
                  required
                />
                <input
                  type="text"
                  name="fee"
                  defaultValue={currentVisa?.fee}
                  className="w-full p-2 border rounded"
                  required
                />
                <input
                  type="text"
                  name="validity"
                  defaultValue={currentVisa?.validity}
                  className="w-full p-2 border rounded"
                  required
                />
                <input
                  type="text"
                  name="applicationMethod"
                  defaultValue={currentVisa?.applicationMethod}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mt-4 flex justify-between">
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                  onClick={() => setModalVisible(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyAddedVisa;

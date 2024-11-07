import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const TransactionForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [packageType, setPackageType] = useState("");
  const [adultCount, setAdultCount] = useState("");
  const [childrenCount, setChildrenCount] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate(); // Initialize navigate for navigation

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !name ||
      !email ||
      !number ||
      !packageType ||
      !adultCount ||
      !childrenCount ||
      !date
    ) {
      alert("Please fill in all fields.");
      return;
    }

    // Prepare transaction data
    const transactionData = {
      name,
      email,
      number,
      packageType,
      adultCount,
      childrenCount,
      date,
    };

    // Call the onSubmit function passed from the parent component
    onSubmit(transactionData);

    // Reset form fields
    setName("");
    setEmail("");
    setNumber("");
    setPackageType("");
    setAdultCount("");
    setChildrenCount("");
    setDate("");

    // Navigate to BookingPage after submission
    navigate("/Booking"); // Adjust this path if needed
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white rounded-md shadow-lg space-y-4"
    >
      <h2 className="text-center text-xl font-semibold mb-4">Package 1</h2>

      <div>
        <label className="block text-sm font-medium mb-1">Name</label>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Contact No.</label>
        <input
          type="text"
          placeholder="Contact No."
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Type of Package
        </label>
        <select
          value={packageType}
          onChange={(e) => setPackageType(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        >
          <option value="" disabled>
            Select a package
          </option>
          <option value="Standard">Standard</option>
          <option value="Premium">Premium</option>
          <option value="Deluxe">Deluxe</option>
        </select>
      </div>

      <div className="flex space-x-4">
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">Adult</label>
          <input
            type="number"
            placeholder="0"
            value={adultCount}
            onChange={(e) => setAdultCount(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">Children</label>
          <input
            type="number"
            placeholder="0"
            value={childrenCount}
            onChange={(e) => setChildrenCount(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="flex justify-center mt-4">
        <button
          type="submit"
          className="bg-gray-800 text-white py-2 px-6 rounded hover:bg-gray-700 focus:outline-none w-full"
        >
          Book Now
        </button>
      </div>
    </form>
  );
};

export default TransactionForm;

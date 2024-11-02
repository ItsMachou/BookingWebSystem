// TransactionForm.js
import React, { useState } from "react";

const TransactionForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !number) {
      alert("Please fill in all fields.");
      return;
    }

    // Prepare transaction data
    const transactionData = { name, email, number };

    // Call the onSubmit function passed from the parent component
    onSubmit(transactionData);

    // Reset form fields
    setName("");
    setEmail("");
    setNumber("");
  };

  return (
    <form className="mt-4" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
      />
      <input
        type="text"
        placeholder="Number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
      />
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full"
        >
          Confirm Booking
        </button>
      </div>
    </form>
  );
};

export default TransactionForm;

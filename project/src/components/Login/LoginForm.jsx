import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Logging in with:", { email, password });
  };

  return (
    <form onSubmit={handleLogin} className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;

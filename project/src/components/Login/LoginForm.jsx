import React, { useState } from "react";
import backgroundImage from "../../assets/new york.jpeg";

const LoginForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAuth = (e) => {
    e.preventDefault();
    if (isSignUp) {
      // Handle signup logic here
      console.log("Signing up with:", { username, email, password });
    } else {
      // Handle login logic here
      console.log("Logging in with:", { email, password });
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative p-4"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30" />

      <div className="relative z-10 w-full max-w-md md:max-w-lg lg:max-w-xl p-6 bg-white bg-opacity-90 rounded shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
          {isSignUp ? "SIGN UP" : "LOGIN"}
        </h2>

        <form onSubmit={handleAuth} className="space-y-4">
          {isSignUp && (
            <div>
              <label className="block mb-1" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 border rounded bg-gray-200 focus:outline-none"
                required
              />
            </div>
          )}

          <div>
            <label className="block mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded bg-gray-200 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded bg-gray-200 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-4 bg-blue-600 text-white rounded"
          >
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>

        <button
          onClick={() => setIsSignUp(!isSignUp)}
          className="mt-4 w-full text-center text-blue-600 underline"
        >
          {isSignUp
            ? "Already have an account? Login"
            : "Don't have an account? Sign Up"}
        </button>
      </div>

      <h1 className="absolute top-20 right-10 text-4xl md:text-6xl lg:text-7xl font-bold text-white">
        NEW YORK
      </h1>
    </div>
  );
};

export default LoginForm;

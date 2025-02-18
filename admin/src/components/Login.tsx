import React, { useState } from "react";
import { BiLock, BiUser } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/UseUser";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const navigate = useNavigate();

  const { login } = useAuth();

  const showAlert = (message: string, type: "success" | "error") => {
    setAlert({ message, type });
    setTimeout(() => setAlert(null), 5000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/token/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("Error:", data);
        showAlert(data.detail, "error");
        return;
      }
      console.log("Success:", data);
      login(data);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error:", error);
      showAlert(
        "An error occurred. Please try again or contact support.",
        "error"
      );
    }
  };

  return (
    <div className="bg-gradient-to-br from-green-400 to-blue-500 min-h-screen">
      <div className="flex min-h-screen">
        <div className="hidden lg:flex lg:w-1/2 flex-col items-center justify-center p-12 bg-image bg-opacity-75 backdrop-blur-md relative">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Welcome to Baraka Livestock Management
            </h2>
            <p className="text-xl text-white">
              Empowering pastoralists with innovative solutions
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white bg-opacity-90">
          <div className="max-w-md w-full fade-in">
            <div className="text-center mb-12">
              <img
                src="https://barakatakaful.com/wp-content/uploads/2023/01/logo.jpg"
                alt="Baraka Logo"
                className="w-32 h-32 object-cover rounded-full mx-auto mb-6 border-4 border-green-500 shadow-lg"
              />
              <h1 className="text-4xl font-bold text-green-800">
                Baraka Livestock
              </h1>
              <p className="text-gray-600 mt-2">
                Sign in to manage your livestock
              </p>
            </div>

            {alert && (
              <div
                className={`p-4 mb-4 text-sm rounded-lg ${
                  alert.type === "success"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {alert.message}
              </div>
            )}

            <form id="login-form" className="space-y-8" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Username
                </label>
                <div className="relative rounded-md">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <BiUser className="text-green-500 text-2xl" />
                  </div>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    required
                    className="focus:ring-green-500 focus:border-green-500 block w-full pl-10 pr-3 py-3 text-base border-b-2 border-gray-300 bg-gray-50 rounded-t-md"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Password
                </label>
                <div className="relative rounded-md">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <BiLock className="text-green-500 text-2xl" />
                  </div>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    className="focus:ring-green-500 focus:border-green-500 block w-full pl-10 pr-3 py-3 text-base border-b-2 border-gray-300 bg-gray-50 rounded-t-md"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-md text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out"
                >
                  <i className="fas fa-sign-in-alt mr-2"></i> Sign In
                </button>
              </div>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                Need help? Contact our support team
              </p>
              <a
                href="mailto:support@barakalivestock.com"
                className="text-green-600 hover:text-green-800 font-medium"
              >
                support@barakalivestock.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

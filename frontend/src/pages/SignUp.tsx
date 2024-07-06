import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [role, setRole] = useState("user");
  const [error, setError] = useState("");

  const handleSignUp = async () => {
    try {
      if (
        !fullName ||
        !email ||
        !password ||
        !confirmPassword ||
        !mobileNumber
      ) {
        setError("Please fill in all fields.");
        return;
      }

      if (password !== confirmPassword) {
        throw new Error("Passwords do not match");
      }

      const response = await axios.post("http://localhost:8081/auth/signup", {
        fullName,
        email,
        password,
        role,
        mobileNumber,
      });

      if (response.status) {
        navigate("/dashboard");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      // Handle signup error
      console.error(
        "Signup failed:",
        error.response ? error.response.data : error.message
      );
      setError(error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="border w-[30vw] shadow-md p-10">
        <div className="flex flex-col items-center justify-center gap-8">
          <h1 className="text-xl font-bold">Sign Up Page</h1>
          <div className="w-full flex flex-col items-center justify-center gap-4">
            <input
              type="text"
              value={fullName}
              placeholder="Full Name"
              className="border p-2 w-full rounded-md"
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              type="email"
              value={email}
              placeholder="Email address"
              className="border p-2 w-full rounded-md"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              value={password}
              placeholder="Password"
              className="border p-2 w-full rounded-md"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              value={confirmPassword}
              placeholder="Confirm Password"
              className="border p-2 w-full rounded-md"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <input
              type="text"
              value={mobileNumber}
              placeholder="Mobile Number"
              className="border p-2 w-full rounded-md"
              onChange={(e) => setMobileNumber(e.target.value)}
            />
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="border p-2 w-full rounded-md"
            >
              <option value="user">User</option>
              <option value="Admin">Admin</option>
            </select>
            {error && <p className="text-red-500">{error}</p>}
            <button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
          </div>
          <p className="text-sm">
            Already register ?{" "}
            <a
              href="/login"
              className="text-blue-500 underline underline-offset-2"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

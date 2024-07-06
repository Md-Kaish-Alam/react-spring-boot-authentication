import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        setError("Please enter email and password");
        return;
      }

      const response = await axios.post("http://localhost:8081/auth/signin", {
        email: email,
        password: password,
      });
      if (response.status === 403) {
        alert("Login failed");
      } else {
        login();
        navigate("/dashboard");
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error(
        "Login failed:",
        error.response ? error.response.data : error.message
      );
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="border w-[30vw] shadow-md p-10">
        <div className="flex flex-col items-center justify-center gap-8">
          <h1 className="text-xl font-bold">Login Page</h1>
          <div className="w-full flex flex-col items-center justify-center gap-4">
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
            {error && <p className="text-red-500">{error}</p>}
            <button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
          <p className="text-sm">
            Not a member ?{" "}
            <a
              href="/signup"
              className="text-blue-500 underline underline-offset-2"
            >
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

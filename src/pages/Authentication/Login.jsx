import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import Lottie from "lottie-react";
import loginAnimation from "../../assets/login.json";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { logIn, googleSignIn, setUser } = useContext(AuthContext);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".animate-tt", {
      opacity: 0,
      scale:1,
      delay:0.15,
      duration: 1,
    });
  }, []);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      toast.success("Signin Successful");
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in both email and password.");
      return;
    }
    logIn(email, password)
      .then((res) => {
        setUser(res.user);
        navigate(location?.state ? location.state : "/");
        toast.success("Logged in successfully!");
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === "auth/user-not-found") {
          toast.error("This email is not registered. Please sign up.");
        } else if (errorCode === "auth/wrong-password") {
          toast.error("Incorrect password. Please try again.");
        } else {
          toast.error("Login failed. Please try again later.");
        }
      });
  };

  return (
    <div className="animate-tt bg-[#EAE4D5] dark:bg-[#121212] min-h-screen flex items-center justify-center px-4 sm:px-6 py-8">
      <Helmet>
        <title>Egypt - Login</title>
      </Helmet>
      <div className="max-w-5xl w-full bg-[#2C2A2A] dark:bg-[#1C1B1B] text-white rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden">
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 p-8 md:p-10 space-y-6">
          <h1 className="text-3xl font-bold text-center text-[#D99578] dark:text-[#E67E22]">
            Login
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div className="space-y-1 text-sm">
              <label
                htmlFor="email"
                className="block text-[#CCCCCC] dark:text-[#B0B0B0]"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 rounded-md bg-[#3A3838] text-[#E0D9D1] focus:ring-2 focus:ring-[#9C6F42]"
              />
            </div>
            {/* Password */}
            <div className="space-y-1 text-sm">
              <label
                htmlFor="password"
                className="block text-[#CCCCCC] dark:text-[#B0B0B0]"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                  className="w-full px-4 py-3 rounded-md bg-[#3A3838] text-[#E0D9D1] focus:ring-2 focus:ring-[#9C6F42]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-[#D1B38A] hover:text-[#E67E22]"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
              <div className="flex justify-end text-xs text-[#AAAAAA]">
                <Link to="#" className="hover:underline">
                  Forgot Password?
                </Link>
              </div>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="block w-full p-3 text-center rounded-md bg-[#9C6F42] hover:bg-[#7B5A36] text-white font-semibold transition duration-300"
            >
              Sign In
            </button>
          </form>

          <div className="divider text-center text-sm text-[#CCCCCC] dark:text-[#AAAAAA]">
            ─ OR ─
          </div>

          {/* Google Sign In */}
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-[#E67E22] hover:bg-[#D35400] text-white font-semibold transition duration-300"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Sign in with Google
          </button>

          {/* Signup Link */}
          <p className="text-sm text-center text-[#B0B0B0]">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="text-[#E67E22] hover:underline">
              Register
            </Link>
          </p>
        </div>

        {/* Right Side - Animation */}
        <div className="hidden md:flex items-center justify-center w-1/2 bg-[#121212]">
          <Lottie
            animationData={loginAnimation}
            loop={true}
            className="w-full h-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;

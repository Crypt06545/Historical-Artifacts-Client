import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import toast from "react-hot-toast";
import { AuthContext } from "../../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import Lottie from "lottie-react";
import registerAnimation from "../../assets/login.json";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Register = () => {
  const navigate = useNavigate();
  const { googleSignIn, createNewUser, updateUserProfile, setUser } =
    useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);

    useGSAP(() => {
      const tl = gsap.timeline();
      tl.from(".animate-tt", {
        opacity: 0,
        scale:1,
        delay:0.15,
        duration: 1,
      });
    }, []);

  const handleSignUp = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const photo = form.photo.value;
    const pass = form.password.value;

    // Password validation regex
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(pass)) {
      toast.error(
        "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
      );
      return;
    }

    try {
      // 1. User Registration
      const result = await createNewUser(email, pass);
      // console.log(result);

      // 2. Update user profile
      try {
        await updateUserProfile(name, photo);
        setUser({ ...result.user, photoURL: photo, displayName: name });
        // toast.success("Registration Successful!");
        navigate("/");
      } catch (err) {
        console.log(err);
        toast.error("Failed to update profile.");
      }
    } catch (err) {
      console.log(err);
      toast.error(err?.message || "Signup failed. Please try again.");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      toast.success("Signin Successful");
      navigate("/");
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };

  return (
    <div className="animate-tt bg-[#1F1D1D] dark:bg-[#121212] min-h-screen flex items-center justify-center px-4 sm:px-6 py-8">
      <Helmet>
        <title>Egypt - Register</title>
      </Helmet>
      <div className="max-w-5xl w-full bg-[#2C2A2A] dark:bg-[#1C1B1B] text-white rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden">
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 p-8 md:p-10 space-y-6">
          <h1 className="text-3xl font-bold text-center text-[#D99578] dark:text-[#E67E22]">Register</h1>
          <form onSubmit={handleSignUp} className="space-y-6">
            {/* Name */}
            <div className="space-y-1 text-sm">
              <label htmlFor="name" className="block text-[#CCCCCC] dark:text-[#B0B0B0]">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                className="w-full px-4 py-3 rounded-md bg-[#3A3838] text-[#E0D9D1] focus:ring-2 focus:ring-[#9C6F42]"
              />
            </div>
            
            {/* Email */}
            <div className="space-y-1 text-sm">
              <label htmlFor="email" className="block text-[#CCCCCC] dark:text-[#B0B0B0]">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 rounded-md bg-[#3A3838] text-[#E0D9D1] focus:ring-2 focus:ring-[#9C6F42]"
              />
            </div>
            
            {/* Password */}
            <div className="space-y-1 text-sm">
              <label htmlFor="password" className="block text-[#CCCCCC] dark:text-[#B0B0B0]">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
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
            </div>
            
            {/* Photo URL */}
            <div className="space-y-1 text-sm">
              <label htmlFor="photo" className="block text-[#CCCCCC] dark:text-[#B0B0B0]">
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter your photo URL"
                className="w-full px-4 py-3 rounded-md bg-[#3A3838] text-[#E0D9D1] focus:ring-2 focus:ring-[#9C6F42]"
              />
            </div>
            
            {/* Submit Button */}
            <button
              type="submit"
              className="block w-full p-3 text-center rounded-md bg-[#9C6F42] hover:bg-[#7B5A36] text-white font-semibold transition duration-300"
            >
              Register
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
            Sign up with Google
          </button>

          {/* Login Link */}
          <p className="text-sm text-center text-[#B0B0B0]">
            Already have an account?{" "}
            <Link to="/login" className="text-[#E67E22] hover:underline">
              Login
            </Link>
          </p>
        </div>

        {/* Right Side - Animation */}
        <div className="hidden md:flex items-center justify-center w-1/2 bg-[#121212]">
          <Lottie animationData={registerAnimation} loop={true} className="w-full h-[400px]" />
        </div>
      </div>
    </div>
  );
};

export default Register;
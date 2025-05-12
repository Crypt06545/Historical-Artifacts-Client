import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import toast from "react-hot-toast";
import { AuthContext } from "../../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
const Register = () => {
  const navigate = useNavigate();
  const { googleSignIn, createNewUser, updateUserProfile, setUser } =
    useContext(AuthContext);

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
      console.log(result);

      // 2. Update user profile
      try {
        await updateUserProfile(name, photo);
        setUser({ ...result.user, photoURL: photo, displayName: name });
        // toast.success("Signup Successful");
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

  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <Helmet>
        <title>Egypt - Register</title>
        <meta
          name="description"
          content="Welcome to the homepage of My Website."
        />
      </Helmet>
      <div className="bg-[#1F1D1D] min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-[#4A4746] text-[#E0D9D1]">
          <h1 className="text-2xl font-bold text-center text-[#E0D9D1]">
            Register
          </h1>
          <form onSubmit={handleSignUp} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name Field */}
              <div className="space-y-1 text-sm">
                <label htmlFor="name" className="block text-[#E0D9D1]">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-md bg-[#5D5453] text-[#E0D9D1] focus:ring-2 focus:ring-[#A9927D]"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-1 text-sm">
                <label htmlFor="email" className="block text-[#E0D9D1]">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-md bg-[#5D5453] text-[#E0D9D1] focus:ring-2 focus:ring-[#A9927D]"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1 text-sm">
              <label htmlFor="password" className="block text-[#E0D9D1]">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 rounded-md bg-[#5D5453] text-[#E0D9D1] focus:ring-2 focus:ring-[#A9927D]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="flex justify-center items-center absolute inset-y-0 right-2 text-[#D1B38A] hover:text-[#A9927D]"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            {/* Photo URL Field */}
            <div className="space-y-1 text-sm">
              <label htmlFor="photoURL" className="block text-[#E0D9D1]">
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Profile Photo URL"
                className="w-full px-4 py-3 rounded-md bg-[#5D5453] text-[#E0D9D1] focus:ring-2 focus:ring-[#A9927D]"
              />
            </div>

            <button className="block w-full p-3 text-center rounded-sm bg-[#A9927D] text-[#1F1D1D] hover:bg-[#D1B38A]">
              Register
            </button>
          </form>

          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 bg-[#D1B38A]"></div>
            <p className="px-3 text-sm text-[#E0D9D1]">
              Register with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 bg-[#D1B38A]"></div>
          </div>

          <div className="flex justify-center space-x-4">
            <button
              onClick={handleGoogleSignIn}
              aria-label="Log in with Google"
              className="p-3 rounded-sm bg-[#D1B38A] hover:bg-[#A9927D]"
            >
              {/* Google Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
            </button>
          </div>

          <p className="mt-4 text-center text-sm text-[#E0D9D1]">
            Already have an account?{" "}
            <Link to="/login" className="text-[#A9927D] hover:text-[#D1B38A]">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

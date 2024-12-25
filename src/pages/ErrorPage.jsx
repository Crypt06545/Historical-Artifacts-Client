import Lottie from "lottie-react";
import errorAnimation from "../assets/error.json";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ErrorPage = () => {
  const navigate = useNavigate();

  // Function to navigate back to the home page
  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center bg-[#4A4746] min-h-screen">
        <div className="w-1/3 h-auto">
          <Lottie animationData={errorAnimation} />
        </div>
        <button
          onClick={handleBackToHome}
          className="mt-6 px-6 py-3 bg-[#D1B38A] text-[#4A4746] rounded-full hover:bg-[#E0D9D1] transition-colors"
        >
          Back to Home
        </button>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;

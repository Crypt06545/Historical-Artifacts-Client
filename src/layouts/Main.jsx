import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
// import LoadingSpinner from '../components/Loader'

const Main = () => {
  return (
    <div>
      <Helmet>
        <title>EGYPT - Home</title>
      </Helmet>
      {/* Navbar */}
      <Navbar />
      {/* Outlet */}
      <div className="min-h-[calc(100vh-306px)]">
        <Outlet />
      </div>
      {/* Footer */}
      {/* <LoadingSpinner/> */}
      <Footer />
    </div>
  );
};

export default Main;

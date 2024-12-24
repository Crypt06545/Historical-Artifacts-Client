import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import LoadingSpinner from '../components/Loader'

const Main = () => {
  return (
    <div>
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

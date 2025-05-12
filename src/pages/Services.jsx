import { Helmet } from "react-helmet-async";
import Feedback from "../components/Feedback";
import PageThumb from "../components/pageThumb";

const Services = () => {
  return (
    <div>
      <Helmet>
        <title>EGYPT - Services</title>
      </Helmet>
      <PageThumb heading={"Services"} />
      <Feedback />
    </div>
  );
};

export default Services;

import Carousel from "../components/Carousel";
import Contact from "../components/Contact";
import EducationalPrograms from "../components/Education";
import FeaturedArtifacts from "./FeaturedArtifacts";

const Home = () => {
  return (
    <div>
      <Carousel />
      <FeaturedArtifacts />
      <EducationalPrograms />
      <Contact />
    </div>
  );
};

export default Home;

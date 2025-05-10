import Carousel from "../components/Carousel";
import Contact from "../components/Contact";
import EducationalPrograms from "../components/Education";
import FeatureSection from "../components/FeatureSection";
import FeaturedArtifacts from "./FeaturedArtifacts";

const Home = () => {
  return (
    <div>
      <Carousel />
      <FeatureSection/>
      <FeaturedArtifacts />
      <EducationalPrograms />
      <Contact />
    </div>
  );
};

export default Home;

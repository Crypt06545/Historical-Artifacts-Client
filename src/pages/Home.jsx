import ArtifactFaq from "../components/ArtifactFaq";
import BookTicket from "../components/BookTicket";
import Carousel from "../components/Carousel";

import Contact from "../components/Contact";
import EducationalPrograms from "../components/Education";
import FeatureSection from "../components/FeatureSection";
import Collection from "./Collection";
import FeaturedArtifacts from "./FeaturedArtifacts";

const Home = () => {
  return (
    <div>
      <Carousel />
      <FeatureSection />
      <Collection />
      <FeaturedArtifacts />
      <BookTicket/>
      <EducationalPrograms />
      <ArtifactFaq/>
      {/* <Contact /> */}
    </div>
  );
};

export default Home;

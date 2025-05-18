import PageThumb from "../components/pageThumb";
import { Button } from "@heroui/react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate()
  const hadleClick = ()=>{
    navigate('/all-artifacts')
  }
  return (
    <div className="bg-[#EAE4D5] dark:bg-[#1A1A1A] text-black dark:text-[#e6d9c4]">
      <Helmet>
        <title>EGYPT - Museum History</title>
      </Helmet>
      {/* Hero Section */}
      <PageThumb heading="Museum History" />

      {/* Creative Introduction Section */}
      <section className="py-16 px-4 md:px-12">
        <div className="w-[89%] mx-auto text-center">
          <h2 className="text-3xl  md:text-4xl font-semibold mb-6">
            Our Museum Journey
          </h2>
          <p className="text-sm md:text-lg leading-7 mb-8">
            Our museum is dedicated to preserving the rich history and culture of ancient Egypt. We aim to educate visitors about the incredible heritage, artifacts, and the stories they tell. From the early dynastic period to the Greco-Roman era, our collection spans millennia of human history.
          </p>
          <Button onClick={hadleClick} className="bg-[#9C6F42] dark:bg-[#E67E22] hover:bg-[#7B5A36] dark:hover:bg-[#D35400] text-white font-semibold py-2 px-6 rounded-full shadow transition duration-300">
            Explore Our Collection
          </Button>
        </div>
      </section>

      {/* Artifact Collection Section */}
      <section className="w-[89%] mx-auto py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white/10 dark:bg-[#1a1a1a] p-8 rounded-lg shadow-lg shadow-black/30">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            Ancient Artifacts
          </h3>
          <p className="text-sm md:text-base leading-7">
            Our collection features a range of ancient artifacts, including pottery, jewelry, sculptures, and papyri. These objects offer a glimpse into the daily lives of people in ancient Egypt, showcasing their craftsmanship, beliefs, and rituals.
          </p>
        </div>

        <div className="bg-white/10 dark:bg-[#1a1a1a] p-8 rounded-lg shadow-lg shadow-black/30">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            Famous Exhibits
          </h3>
          <p className="text-sm md:text-base leading-7">
            Our most famous exhibits include the sarcophagus of a royal tomb, the magnificent statue of Pharaoh Ramses II, and the beautiful treasures of Tutankhamun’s tomb. These pieces represent the pinnacle of ancient Egyptian art and culture.
          </p>
        </div>
      </section>

      {/* Museum Team and Contributions Section */}
      <section className="py-16 px-4 md:px-12 bg-white/10 dark:bg-[#1a1a1a]">
        <div className="w-[89%] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            Meet the Curators
          </h2>
          <p className="text-sm md:text-lg mb-8">
            Our team of historians, archaeologists, and museum curators is passionate about bringing history to life. Together, we curate exhibits, preserve artifacts, and share the stories of ancient Egypt with the world.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Curator 1 */}
            <div className="bg-white/5 dark:bg-[#2a2a2a] p-8 rounded-lg shadow-xl shadow-black/30 text-center">
              <div
                className="w-40 h-40 mx-auto rounded-full bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://i.pravatar.cc/150?img=1')",
                }}
              ></div>
              <h3 className="text-xl font-semibold mt-4">Dr. Sarah Ahmed</h3>
              <p className="text-sm">Lead Curator</p>
              <p className="text-sm mt-3">
                Dr. Sarah is a leading Egyptologist with years of experience in artifact preservation and exhibit design. Her expertise brings a deep understanding of ancient Egyptian culture to the museum.
              </p>
            </div>

            {/* Curator 2 */}
            <div className="bg-white/5 dark:bg-[#2a2a2a] p-8 rounded-lg shadow-xl shadow-black/30 text-center">
              <div
                className="w-40 h-40 mx-auto rounded-full bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://i.pravatar.cc/150?img=2')",
                }}
              ></div>
              <h3 className="text-xl font-semibold mt-4">Dr. Michael Evans</h3>
              <p className="text-sm">Archaeologist & Excavation Specialist</p>
              <p className="text-sm mt-3">
                Dr. Michael has led numerous archaeological digs in Egypt, uncovering artifacts that shed light on the ancient civilization's life and rituals. He is dedicated to preserving Egypt’s rich history.
              </p>
            </div>

            {/* Curator 3 */}
            <div className="bg-white/5 dark:bg-[#2a2a2a] p-8 rounded-lg shadow-xl shadow-black/30 text-center">
              <div
                className="w-40 h-40 mx-auto rounded-full bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://i.pravatar.cc/150?img=3')",
                }}
              ></div>
              <h3 className="text-xl font-semibold mt-4">Dr. Emily Carter</h3>
              <p className="text-sm">Artifact Preservation Specialist</p>
              <p className="text-sm mt-3">
                Dr. Emily works tirelessly to ensure that our museum’s ancient artifacts are preserved for future generations, utilizing the latest techniques in conservation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

import PageThumb from "../components/pageThumb";
import { Button } from "@heroui/react";

const About = () => {
  return (
    <div className="bg-[#302E2F] dark:bg-[#1A1A1A] text-white dark:text-[#e6d9c4]">
      {/* Hero Section */}
      <PageThumb heading="About Us" />

      {/* Creative Introduction Section */}
      <section className="py-16 px-4 md:px-12">
        <div className="w-[89%] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Who We Are</h2>
          <p className="text-sm md:text-lg leading-7 mb-8">
            We are a passionate team dedicated to creating innovative solutions. Our aim is to blend creativity with functionality to deliver exceptional products and services. We believe in building strong, lasting relationships with our clients and working together to achieve great results.
          </p>
          <Button className="bg-[#9C6F42] dark:bg-[#E67E22] hover:bg-[#7B5A36] dark:hover:bg-[#D35400] text-white font-semibold py-2 px-6 rounded-full shadow transition duration-300">
            Learn More
          </Button>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="w-[89%] mx-auto py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white/10 dark:bg-[#1a1a1a] p-8 rounded-lg shadow-lg shadow-black/30">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">Our Mission</h3>
          <p className="text-sm md:text-base leading-7">
            Our mission is simple: To deliver top-quality solutions that exceed expectations. We focus on innovation, design, and craftsmanship to ensure every project is a success.
          </p>
        </div>

        <div className="bg-white/10 dark:bg-[#1a1a1a] p-8 rounded-lg shadow-lg shadow-black/30">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">Our Vision</h3>
          <p className="text-sm md:text-base leading-7">
            Our vision is to be the go-to provider of creative and professional solutions. We envision a world where design and technology combine seamlessly to create impactful experiences.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 md:px-12 bg-white/10 dark:bg-[#1a1a1a]">
        <div className="w-[89%] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">Meet Our Team</h2>
          <p className="text-sm md:text-lg mb-8">
            We're a group of passionate individuals with diverse skills, all united by the goal of delivering outstanding results for our clients.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Team Member 1 */}
            <div className="bg-white/5 dark:bg-[#2a2a2a] p-8 rounded-lg shadow-xl shadow-black/30 text-center">
              <div
                className="w-40 h-40 mx-auto rounded-full bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://i.pravatar.cc/150?img=1')",
                }}
              ></div>
              <h3 className="text-xl font-semibold mt-4">John Doe</h3>
              <p className="text-sm">CEO & Founder</p>
              <p className="text-sm mt-3">
                John is a visionary leader, passionate about creating innovative solutions that drive success.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white/5 dark:bg-[#2a2a2a] p-8 rounded-lg shadow-xl shadow-black/30 text-center">
              <div
                className="w-40 h-40 mx-auto rounded-full bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://i.pravatar.cc/150?img=2')",
                }}
              ></div>
              <h3 className="text-xl font-semibold mt-4">Jane Smith</h3>
              <p className="text-sm">Lead Developer</p>
              <p className="text-sm mt-3">
                Jane is a highly skilled developer who specializes in front-end technologies and user experience design.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white/5 dark:bg-[#2a2a2a] p-8 rounded-lg shadow-xl shadow-black/30 text-center">
              <div
                className="w-40 h-40 mx-auto rounded-full bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://i.pravatar.cc/150?img=3')",
                }}
              ></div>
              <h3 className="text-xl font-semibold mt-4">Sam Wilson</h3>
              <p className="text-sm">Marketing Manager</p>
              <p className="text-sm mt-3">
                Sam brings a wealth of experience in digital marketing and brand strategy to our team.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
const EducationalPrograms = () => {
    return (
      <section className="bg-[#2E2B2B] py-16 px-4 sm:px-8 lg:px-16 text-[#E0D9D1]">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-[#A9927D] mb-12">Educational Programs & Workshops</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#4A4746] p-8 rounded-xl shadow-2xl hover:scale-105 transition duration-300 ease-in-out">
              <img
                src="https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image/179ec11e6724.jpg"
                alt="Art History Workshop"
                className="w-full h-48 object-cover mb-6 rounded-lg"
              />
              <h3 className="text-xl font-semibold text-[#A9927D] mb-4">Art History Workshop</h3>
              <p className="text-lg mb-4 italic text-[#D1B38A]">Join us for a deep dive into the history of art and its influence on society.</p>
              <p className="text-sm text-[#A9927D]">Dates: April 2024</p>
              <button className="mt-6 px-6 py-3 bg-[#A9927D] text-[#1F1D1D] rounded-full hover:bg-[#D1B38A] transition">
                Learn More
              </button>
            </div>
  
            <div className="bg-[#4A4746] p-8 rounded-xl shadow-2xl hover:scale-105 transition duration-300 ease-in-out">
              <img
                src="https://kidsareatrip.com/wp-content/uploads/2015/07/IMG_0983.jpg"
                alt="Kids Museum Tour"
                className="w-full h-48 object-cover mb-6 rounded-lg"
              />
              <h3 className="text-xl font-semibold text-[#A9927D] mb-4">Kids Museum Tour</h3>
              <p className="text-lg mb-4 italic text-[#D1B38A]">A fun and interactive tour for children to learn about history through hands-on activities.</p>
              <p className="text-sm text-[#A9927D]">Dates: June 2024</p>
              <button className="mt-6 px-6 py-3 bg-[#A9927D] text-[#1F1D1D] rounded-full hover:bg-[#D1B38A] transition">
                Learn More
              </button>
            </div>
  
            {/* Updated Card for Museum Activity */}
            <div className="bg-[#4A4746] p-8 rounded-xl shadow-2xl hover:scale-105 transition duration-300 ease-in-out">
              <img
                src="https://www.museum-brandhorst.de/imgs/VO_21_VIPTour_MuseumBrandhorst007-Kopie-1280x707.jpg?x40119" // Example Image of Museum Tour
                alt="Guided Museum Tour"
                className="w-full h-48 object-cover mb-6 rounded-lg"
              />
              <h3 className="text-xl font-semibold text-[#A9927D] mb-4">Guided Museum Tour</h3>
              <p className="text-lg mb-4 italic text-[#D1B38A]">Join our expert guides as they walk you through the museum's most notable exhibits and their historical significance.</p>
              <p className="text-sm text-[#A9927D]">Dates: July 2024</p>
              <button className="mt-6 px-6 py-3 bg-[#A9927D] text-[#1F1D1D] rounded-full hover:bg-[#D1B38A] transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default EducationalPrograms;
  
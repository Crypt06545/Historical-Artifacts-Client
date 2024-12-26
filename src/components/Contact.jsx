const Contact = () => {
  return (
    <section className="bg-[#2E2B2B] py-16  text-[#E0D9D1] relative">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage:
            "url(https://t3.ftcdn.net/jpg/00/52/52/46/360_F_52524622_uX4cxMp2JQCm5UHrQgxcPaR6ENnQgEvR.jpg)",
        }}
      ></div>
      <div className="relative z-10 max-w-screen-xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-[#A9927D] mb-12 animate__animated animate__fadeIn animate__delay-1s">
          Get in Touch
        </h2>
        <p className="text-lg text-[#D1B38A] mb-8 max-w-xl mx-auto animate__animated animate__fadeIn animate__delay-2s">
          We'd love to hear from you! Whether you have a question or need more
          information, feel free to reach out to us.
        </p>
        <form className="space-y-6 max-w-3xl mx-auto animate__animated animate__fadeIn animate__delay-3s">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-6 py-4 rounded-lg bg-[#4A4746] text-[#E0D9D1] text-lg shadow-md focus:ring-4 focus:ring-[#A9927D] placeholder:text-[#A9927D]"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-6 py-4 rounded-lg bg-[#4A4746] text-[#E0D9D1] text-lg shadow-md focus:ring-4 focus:ring-[#A9927D] placeholder:text-[#A9927D]"
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              className="w-full px-6 py-4 rounded-lg bg-[#4A4746] text-[#E0D9D1] text-lg shadow-md focus:ring-4 focus:ring-[#A9927D] placeholder:text-[#A9927D]"
            ></textarea>
          </div>
          <div className="w-full py-4 text-lg text-center rounded-md bg-[#A9927D] text-[#1F1D1D] hover:bg-[#D1B38A] transition duration-300 ease-in-out transform hover:scale-105">
            Send Message
          </div>
        </form>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#1F1D1D] to-transparent opacity-40"></div>
    </section>
  );
};

export default Contact;

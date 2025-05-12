import React, { useEffect, useState } from 'react';

const BookTicket = () => {
  // Set your target date here
  const targetDate = new Date("2025-12-31T23:59:59").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00"
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00"
        });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({
          days: String(days).padStart(2, "0"),
          hours: String(hours).padStart(2, "0"),
          minutes: String(minutes).padStart(2, "0"),
          seconds: String(seconds).padStart(2, "0")
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="py-16 px-4 md:px-12 bg-[#302E2F] dark:bg-[#1A1A1A] text-white dark:text-[#e6d9c4]">
      <div className="w-[89%] mx-auto bg-white/10 dark:bg-[#2a2a2a] rounded-[30px] relative shadow-lg shadow-black/30 flex flex-col md:flex-row justify-between items-center px-8 py-12 gap-8">

        {/* Notch style - Left */}
        <div className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 bg-[#302E2F] dark:bg-[#1A1A1A] rounded-full z-10"></div>

        {/* Notch style - Right */}
        <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 bg-[#302E2F] dark:bg-[#1A1A1A] rounded-full z-10"></div>

        {/* Left Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#9C6F42] dark:text-[#E67E22]">
            Book Your Ticket!
          </h2>
          <p className="text-sm md:text-base leading-6">
            Don't miss out—secure your spot for the most anticipated event of the year!
          </p>
        </div>

        {/* Right Countdown Section */}
        <div className="md:w-1/2 flex justify-center gap-6 text-center">
          <div>
            <p className="text-4xl font-bold">{timeLeft.days}</p>
            <p className="text-xs uppercase tracking-widest">Days</p>
          </div>
          <div>
            <p className="text-4xl font-bold">{timeLeft.hours}</p>
            <p className="text-xs uppercase tracking-widest">Hours</p>
          </div>
          <div>
            <p className="text-4xl font-bold">{timeLeft.minutes}</p>
            <p className="text-xs uppercase tracking-widest">Minutes</p>
          </div>
          <div>
            <p className="text-4xl font-bold">{timeLeft.seconds}</p>
            <p className="text-xs uppercase tracking-widest">Seconds</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BookTicket;
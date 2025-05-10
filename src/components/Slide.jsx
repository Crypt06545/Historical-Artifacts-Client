// Slide.jsx
import { Button } from "@heroui/react";

export default function Slide({ image, text }) {
  return (
    <div
      className="relative h-[60vh] min-h-[400px] w-full bg-cover bg-center flex items-center justify-start px-4 md:px-20"
      style={{ 
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-35"></div>

      {/* Content */}
      <div className="relative z-10 text-white max-w-xl mx-auto md:mx-0 px-4">
        {/* Icon and top line */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <img 
              src="https://kitpro.site/lastoria/wp-content/uploads/sites/251/2024/06/3-768x768.png" 
              alt="icon" 
              className="w-6 h-6 object-contain" 
            />
          </div>
          <div className="font-semibold text-sm leading-tight">
            <p>Explore The Infinite Wonders Of</p>
            <p>Our Museum</p>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
          {text}
        </h1>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <Button 
            className="bg-white text-black hover:bg-gray-300 px-6 py-3" 
            radius="full"
          >
            Get Started
          </Button>
          <Button 
            className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition"
            isIconOnly
          >
            →
          </Button>
        </div>
      </div>
    </div>
  );
}
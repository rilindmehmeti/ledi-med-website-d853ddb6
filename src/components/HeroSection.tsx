
import React from "react";
import { Image } from "lucide-react";
const LOGO_PATH = "/lovable-uploads/28b69a0a-cf1e-4b53-8f67-6bbef8346284.png";
const HeroSection = () => <section className="relative py-24 bg-gradient-to-br from-soft-blue via-white to-soft-gray flex items-center justify-center min-h-[60vh]">
    <div className="max-w-5xl mx-auto px-4 flex flex-col items-center">
      <div className="bg-white shadow-lg rounded-full p-6 mb-6 flex items-center justify-center">
        <img src={LOGO_PATH} alt="Ledi Med Logo" className="w-24 h-24 object-contain" />
      </div>
      <h1 className="font-playfair text-4xl font-bold text-vivid-purple mb-4 text-center">Let's shape the future of imaging together</h1>
      <p className="text-lg text-gray-500 mb-2 text-center max-w-xl">
        Supplying essential medical equipment and care solutions for every need.
      </p>
    </div>
  </section>;
export default HeroSection;

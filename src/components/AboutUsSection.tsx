
import { Users } from "lucide-react";
import React from "react";

const AboutUsSection = () => (
  <section id="about" className="w-full bg-white py-16 px-4 fade-in">
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:gap-12 gap-6">
      <div className="shrink-0 bg-soft-purple/40 rounded-full p-6 flex items-center justify-center animate-fade-in">
        <Users size={48} color="#5CA65C" />
      </div>
      <div>
        <h2 className="font-playfair text-3xl font-bold mb-2">About Us</h2>
        <p className="text-md text-gray-600 leading-relaxed mb-2">
          At Oasis Medical Supply, we believe everyone deserves access to quality care. With over 15 years of industry experience, our passionate team is dedicated to delivering top-notch medical equipment and outstanding customer service. We build trust, reliability, and wellbeing into every interaction—because health is our priority.
        </p>
      </div>
    </div>
  </section>
);

export default AboutUsSection;


import { Button } from "@/components/ui/button";
import { Activity } from "lucide-react";
import React from "react";
const HeroSection = () => <section className="relative py-20 bg-gradient-to-br from-soft-blue via-white to-soft-gray flex items-center justify-center min-h-[60vh]">
    <div className="max-w-2xl mx-auto text-center z-10 fade-in">
      <div className="flex items-center justify-center gap-3 mb-6">
        <span className="bg-primary/10 p-3 rounded-full shadow hover-scale">
          <Activity color="#5CA65C" size={32} />
        </span>
      </div>
      <h1 className="text-5xl font-playfair font-extrabold text-gray-900 mb-6 leading-tight">Let's shape the future of imaging together</h1>
      <p className="text-xl text-gray-600 mb-8 font-light">Let's shape the future of imaging together</p>
      <Button className="px-8 py-3 text-lg rounded-full bg-primary text-white shadow-lg hover:bg-vivid-purple transition animate-scale-in">
        Browse Products
      </Button>
    </div>
    {/* Decorative background */}
    <div className="absolute inset-0 opacity-30 pointer-events-none bg-gradient-to-tl from-vivid-purple to-soft-blue blur-2xl" />
  </section>;
export default HeroSection;

import React from "react";
import HeroSection from "@/components/HeroSection";
import AboutUsSection from "@/components/AboutUsSection";
import ProductsSection from "@/components/ProductsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen w-full justify-center font-sans bg-white">
      <HeroSection />
      <AboutUsSection />
      <ProductsSection />
      <ContactSection />
      <footer className="bg-background text-gray-500 text-center py-8 text-sm border-t mt-8">
        &copy; {new Date().getFullYear()} Oasis Medical Supply. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;

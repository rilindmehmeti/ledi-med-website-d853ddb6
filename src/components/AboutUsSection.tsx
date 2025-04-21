
import { Users } from "lucide-react";
import React from "react";

const AboutUsSection = () => (
  <section id="about" className="w-full bg-white py-16 px-4 fade-in">
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:gap-12 gap-6">
      <div className="shrink-0 bg-soft-green/40 rounded-full p-6 flex items-center justify-center animate-fade-in">
        <Users size={48} color="#5CA65C" />
      </div>
      <div>
        <h2 className="font-playfair text-3xl font-bold mb-4">About Us</h2>

        <h3 className="text-xl font-semibold mb-2 text-primary">
          Our Goal is Your Success.
        </h3>
        <p className="text-md text-gray-600 mb-4">
          At Ledi-MED, we want healthcare providers to succeed in an ever-changing industry—by helping them deliver better outcomes at lower costs. This drives our focus: to lead the transformation of healthcare together with those delivering it. In healthcare, change is rapid and ongoing, and we understand the challenges and pressures that come along with it.
        </p>

        <h4 className="font-semibold text-primary mb-1">Cost Efficiency</h4>
        <p className="mb-3 text-gray-600">
          Every aspect of our company is designed for maximum quality control, which results in unsurpassed efficiency that we pass on to you.
        </p>

        <h4 className="font-semibold text-primary mb-1">Optimizing Service</h4>
        <p className="mb-3 text-gray-600">
          Our clients are supported by our years of experience, knowledge, and a state-of-the-art facility with an extensive inventory, readily available to our Field Service Engineers. This minimizes interruptions to schedules and patient flow, ensuring your systems stay up and running.
        </p>

        <h4 className="font-semibold text-primary mb-1">Advancing the Quality of Care</h4>
        <p className="mb-3 text-gray-600">
          By acquiring the most advanced technology and developing patient-centered systems, we ensure that a high standard of patient care remains the core purpose of healthcare.
        </p>

        <h4 className="font-semibold text-primary mb-1">Increasing Profits</h4>
        <p className="mb-3 text-gray-600">
          A cost-efficient program with the most advanced quality of care and service leads to higher profits and sets you ahead of peers. Explore our site to learn more about Ledi-MED products and services, and contact us to discuss your specific medical imaging needs.
        </p>

        <p className="mb-3 text-gray-600">
          As a leading regional healthcare company, we are continuously evolving our portfolio—from medical imaging and diagnostics to managed services, consulting, healthcare IT, and therapeutic technologies.
        </p>
        <p className="mb-3 text-gray-600">
          We apply skills, creativity, and persistence to solve fundamental challenges wherever they occur. Our extensive portfolio of cutting-edge, high-quality medical technologies is already transforming performance—in hospitals, clinics, and laboratories—clinically, operationally, and financially.
        </p>
        <p className="mb-3 text-gray-600">
          Check out our perspectives to learn more about consolidation, industrialization, and managing health. Let our Account Managers guide you—whether you’re looking to purchase or lease refurbished equipment, develop a contract management program, or access our imaging services.
        </p>
      </div>
    </div>
  </section>
);

export default AboutUsSection;


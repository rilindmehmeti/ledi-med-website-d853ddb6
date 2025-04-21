
import { Users } from "lucide-react";
import React from "react";

const AboutUsSection = () => (
  <section id="about" className="w-full bg-white py-16 px-4 fade-in">
    <div className="max-w-5xl mx-auto flex flex-row items-center gap-8 flex-wrap sm:flex-nowrap">
      {/* Image/Icon */}
      <div className="shrink-0 bg-soft-green/40 rounded-full p-6 flex items-center justify-center animate-fade-in">
        <Users size={64} color="#5CA65C" />
      </div>
      {/* About Us Content */}
      <div className="min-w-[220px] flex-1">
        <h2 className="font-playfair text-3xl font-bold mb-4">About Us</h2>

        <h3 className="text-xl font-semibold mb-3 text-primary">
          Our Goal is Your Success.
        </h3>
        <p className="text-md text-gray-600 mb-4">
          At Ledi-MED, we want to make healthcare providers succeed in an ever-changing healthcare industry—by helping them deliver better outcomes at lower costs. This purpose drives our focus: to lead the transformation of healthcare together with the ones delivering it. In healthcare, change is rapid and ongoing, and we understand the challenges and pressures that come along with it.
        </p>

        <h4 className="font-semibold text-primary mb-1">Cost Efficiency</h4>
        <p className="mb-3 text-gray-600">
          Every aspect of our company is designed for maximum quality control, which results in unsurpassed efficiency that we pass on to you.
        </p>

        <h4 className="font-semibold text-primary mb-1">Optimizing Service</h4>
        <p className="mb-3 text-gray-600">
          Our clients are supported by our years of experience, knowledge and a state-of-the-art facility with an extensive inventory line that is readily available to our Field Service Engineers. This effectively minimizes interruption to schedules and patient flow should there ever be a problem with systems under service contract.
        </p>

        <h4 className="font-semibold text-primary mb-1">Advancing the Quality of Care</h4>
        <p className="mb-3 text-gray-600">
          Through the acquisition of the most advanced technology and the development of patient-centered systems, Ledi-MED mandates that a high standard of patient care remains the most important purpose of healthcare.
        </p>

        <h4 className="font-semibold text-primary mb-1">Increasing Profits</h4>
        <p className="mb-3 text-gray-600">
          A cost-efficient program with the most advanced quality of care and service will naturally result in higher profits and move you ahead of your peers in the marketplace. We invite you to review our site to learn more about Ledi-MED and the products and services we can provide for you. Then contact us to discuss your specific medical imaging needs. Our Account Managers will be happy to guide you through the process of purchasing or leasing refurbished equipment, developing a contract management program, or obtaining any of our other imaging services.
        </p>

        <p className="mb-3 text-gray-600">
          Check out our perspectives and learn more about consolidation, industrialization, and managing health.
        </p>

        <p className="mb-3 text-gray-600">
          Being a leading regional healthcare company, we at Ledi-MED are continuously developing our portfolio, from medical imaging and laboratory diagnostics, to adding managed services, consulting, and healthcare IT services—as well as further technologies for therapeutic diagnostics.
        </p>

        <p className="mb-3 text-gray-600">
          We apply our skills, our creativity and persistence to solve fundamental challenges whenever and wherever they occur. Our extensive portfolio of cutting-edge, high-quality medical technologies is already helping transform daily performance in many hospital departments—clinically, operationally and financially.
        </p>
      </div>
    </div>
  </section>
);

export default AboutUsSection;


import { Users } from "lucide-react";
import React from "react";

const AboutUsSection = () => (
  <section id="about" className="w-full bg-white py-16 px-4 fade-in">
    <div className="max-w-5xl mx-auto flex flex-col gap-8">
      {/* Row with Icon and Header */}
      <div className="flex items-center gap-3">
        <Users size={28} color="#5CA65C" />
        <h2 className="font-playfair text-3xl font-bold">About Us</h2>
      </div>
      {/* Content below */}
      <div className="text-gray-600 space-y-6 max-w-4xl">
        <h3 className="text-xl font-semibold mb-3 text-primary">
          Our Goal is Your Success.
        </h3>

        <p>
          Cost Efficiency – Every aspect of our company is designed for maximum quality control, which results in unsurpassed efficiency that we pass on to you.
        </p>

        <p>
          Optimizing Service – Our clients are supported by our years of experience, knowledge and a state-of-the-art facility with an extensive inventory line that is readily available to our Field Service Engineers. This effectively minimizes interruption to schedules and patient flow should there ever be a problem with systems under service contract.
        </p>

        <p>
          Advancing the Quality of Care – Through the acquisition of the most advanced technology and the development of patient-centered systems, MIS mandates that a high standard of patient care remains the most important purpose of healthcare.
        </p>

        <p>
          Increasing Profits – A cost-efficient program with the most advanced quality of care and service will naturally result in higher profits and move you ahead of your peers in the marketplace. We invite you to review our site to learn more about LEDI-MED and the products and services we can provide for you. Then contact us to discuss your specific medical imaging needs. Our Account Managers will be happy to guide you through the process of purchasing or leasing refurbished equipment, developing a contract management program or obtaining any of our other imaging services.
        </p>

        <p>
          At Ledi-MED, we want to make healthcare providers succeed in an ever-changing healthcare industry – by helping them deliver better outcomes at lower costs. This purpose drives our focus: to lead the transformation of healthcare together with the ones delivering it.
          In healthcare, change is rapid and ongoing, and we understand the challenges and pressures that come along with it.
        </p>

        <p>
          Check out our perspectives and learn more about consolidation, industrialization, and managing health.
        </p>

        <p>
          Being a leading regional healthcare company, we at Ledi-MED are continuously developing our portfolio, from medical imaging and laboratory diagnostics, to adding managed services, consulting, and healthcare IT services – as well as further technologies for therapeutic diagnostics.
        </p>

        <p>
          We apply our skills, our creativity and persistence to solve fundamental challenges whenever and wherever they occur. Our extensive portfolio of cutting-edge, high-quality medical technologies is already helping transform daily performance in many hospital departments – clinically, operationally and financially.
        </p>
      </div>
    </div>
  </section>
);

export default AboutUsSection;

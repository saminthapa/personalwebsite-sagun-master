'use client'

import React, { useEffect } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("sarah.johnson@example.com");
    alert("Email copied to clipboard!");
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("(555) 123-4567");
    alert("Phone number copied to clipboard!");
  };

  return (
    <section id="contact" className="bg-gradient-to-b from-white to-feminine-gray/30 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl text-gray-600 md:text-4xl font-serif font-bold text-center mb-8 animate-on-scroll">
          Contact Me
        </h2>

        <div className="flex flex-col md:flex-row gap-10 justify-center items-stretch">
          {/* Contact Info Box */}
          <div
            className="animate-on-scroll w-full md:w-1/2 flex flex-col"
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="flex-1 mb-6 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-serif font-semibold text-xl mb-5 text-gray-800">
                Let's Connect
              </h3>

              <div className="space-y-4">
                <div
                  className="flex items-center space-x-3 p-3 hover:bg-feminine-pink/10 rounded-md transition-colors duration-200 cursor-pointer"
                  onClick={handleCopyEmail}
                >
                  <div className="h-10 w-10 rounded-full bg-pink-50 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-pink-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-700">Email</p>
                    <p className="font-medium text-gray-500">sagungautam546@gmail.com</p>
                  </div>
                </div>

                <div
                  className="flex items-center space-x-3 p-3 hover:bg-feminine-lavender/10 rounded-md transition-colors duration-200 cursor-pointer"
                  onClick={handleCopyPhone}
                >
                  <div className="h-10 w-10 rounded-full bg-teal-50 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-teal-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-700">Phone</p>
                    <p className="font-medium text-gray-500">+977 9819189047 , 9846765197</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 hover:bg-feminine-peach/10 rounded-md transition-colors duration-200">
                  <div className="h-10 w-10 rounded-full bg-orange-50 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-700">Location</p>
                    <p className="font-medium text-gray-500">Malepatan-32, 33700 Pokhara</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Box */}
          <div
            className="animate-on-scroll w-full md:w-1/2"
            style={{ transitionDelay: "0.4s" }}
          >
            <div className="w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Location Map"
                className="w-full h-full border-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1870.0119775402804!2d84.10919847049823!3d28.114217572633414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995a30073d2b64d%3A0x82a99bb081547153!2sSagun%20home!5e0!3m2!1sen!2snp!4v1739279175152!5m2!1sen!2snp"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

